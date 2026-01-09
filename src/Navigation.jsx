import { lazy, Suspense } from 'react';
import {
  Route, Routes,
  useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffectAsync } from './reactHelper';
import { devicesActions } from './store';
import Loader from './common/components/Loader';
import { generateLoginToken } from './common/components/NativeInterface';
import { useLocalization } from './common/components/LocalizationProvider';
import fetchOrThrow from './common/util/fetchOrThrow';
import App from './App';

// Lazy load all route components for code splitting
const MainPage = lazy(() => import('./main/MainPage'));
const HomePage = lazy(() => import('./landing/HomePage'));
const LoginPage = lazy(() => import('./login/LoginPage'));
const RegisterPage = lazy(() => import('./login/RegisterPage'));
const ResetPasswordPage = lazy(() => import('./login/ResetPasswordPage'));
const ChangeServerPage = lazy(() => import('./login/ChangeServerPage'));
const PrivacyPolicyPage = lazy(() => import('./other/PrivacyPolicyPage'));
const TermsAndConditionsPage = lazy(() => import('./other/TermsAndConditionsPage'));

// Other pages
const PositionPage = lazy(() => import('./other/PositionPage'));
const NetworkPage = lazy(() => import('./other/NetworkPage'));
const EventPage = lazy(() => import('./other/EventPage'));
const ReplayPage = lazy(() => import('./other/ReplayPage'));
const GeofencesPage = lazy(() => import('./other/GeofencesPage'));
const EmulatorPage = lazy(() => import('./other/EmulatorPage'));

// Settings pages - lazy loaded
const ServerPage = lazy(() => import('./settings/ServerPage'));
const UsersPage = lazy(() => import('./settings/UsersPage'));
const UserPage = lazy(() => import('./settings/UserPage'));
const DevicesPage = lazy(() => import('./settings/DevicesPage'));
const DevicePage = lazy(() => import('./settings/DevicePage'));
const GroupsPage = lazy(() => import('./settings/GroupsPage'));
const GroupPage = lazy(() => import('./settings/GroupPage'));
const DriversPage = lazy(() => import('./settings/DriversPage'));
const DriverPage = lazy(() => import('./settings/DriverPage'));
const CalendarsPage = lazy(() => import('./settings/CalendarsPage'));
const CalendarPage = lazy(() => import('./settings/CalendarPage'));
const ComputedAttributesPage = lazy(() => import('./settings/ComputedAttributesPage'));
const ComputedAttributePage = lazy(() => import('./settings/ComputedAttributePage'));
const MaintenancesPage = lazy(() => import('./settings/MaintenancesPage'));
const MaintenancePage = lazy(() => import('./settings/MaintenancePage'));
const CommandsPage = lazy(() => import('./settings/CommandsPage'));
const CommandPage = lazy(() => import('./settings/CommandPage'));
const NotificationsPage = lazy(() => import('./settings/NotificationsPage'));
const NotificationPage = lazy(() => import('./settings/NotificationPage'));
const GeofencePage = lazy(() => import('./settings/GeofencePage'));
const PreferencesPage = lazy(() => import('./settings/PreferencesPage'));
const AccumulatorsPage = lazy(() => import('./settings/AccumulatorsPage'));
const CommandDevicePage = lazy(() => import('./settings/CommandDevicePage'));
const CommandGroupPage = lazy(() => import('./settings/CommandGroupPage'));
const DeviceConnectionsPage = lazy(() => import('./settings/DeviceConnectionsPage'));
const GroupConnectionsPage = lazy(() => import('./settings/GroupConnectionsPage'));
const UserConnectionsPage = lazy(() => import('./settings/UserConnectionsPage'));
const SharePage = lazy(() => import('./settings/SharePage'));
const AnnouncementPage = lazy(() => import('./settings/AnnouncementPage'));

// Reports pages - lazy loaded (these are heavy with charts)
const CombinedReportPage = lazy(() => import('./reports/CombinedReportPage'));
const PositionsReportPage = lazy(() => import('./reports/PositionsReportPage'));
const EventReportPage = lazy(() => import('./reports/EventReportPage'));
const TripReportPage = lazy(() => import('./reports/TripReportPage'));
const StopReportPage = lazy(() => import('./reports/StopReportPage'));
const SummaryReportPage = lazy(() => import('./reports/SummaryReportPage'));
const ChartReportPage = lazy(() => import('./reports/ChartReportPage'));
const StatisticsPage = lazy(() => import('./reports/StatisticsPage'));
const ScheduledPage = lazy(() => import('./reports/ScheduledPage'));
const LogsPage = lazy(() => import('./reports/LogsPage'));
const AuditPage = lazy(() => import('./reports/AuditPage'));

const Navigation = () => {
  const dispatch = useDispatch();
  const { setLocalLanguage } = useLocalization();

  const [searchParams, setSearchParams] = useSearchParams();

  const hasQueryParams = ['locale', 'token', 'uniqueId', 'openid'].some(key => searchParams.has(key));

  useEffectAsync(async () => {
    if (!hasQueryParams) {
      return;
    }

    const newParams = new URLSearchParams(searchParams);

    if (searchParams.has('locale')) {
      setLocalLanguage(searchParams.get('locale'));
      newParams.delete('locale');
    }

    if (searchParams.has('token')) {
      const token = searchParams.get('token');
      await fetch(`/api/session?token=${encodeURIComponent(token)}`);
      newParams.delete('token');
    }

    if (searchParams.has('uniqueId')) {
      const response = await fetchOrThrow(`/api/devices?uniqueId=${searchParams.get('uniqueId')}`);
      const items = await response.json();
      if (items.length > 0) {
        dispatch(devicesActions.selectId(items[0].id));
      }
      newParams.delete('uniqueId');
    }

    if (searchParams.has('openid')) {
      if (searchParams.get('openid') === 'success') {
        generateLoginToken();
      }
      newParams.delete('openid');
    }

    setSearchParams(newParams, { replace: true });
  }, [hasQueryParams, searchParams, setSearchParams]);

  if (hasQueryParams) {
    return (<Loader />);
  }
  
  // Suspense wrapper for lazy loaded components
  const SuspenseWrapper = ({ children }) => (
    <Suspense fallback={<Loader />}>
      {children}
    </Suspense>
  );

  return (
    <Routes>
      <Route path="/home" element={<SuspenseWrapper><HomePage /></SuspenseWrapper>} />
      <Route path="/privacy-policy" element={<SuspenseWrapper><PrivacyPolicyPage /></SuspenseWrapper>} />
      <Route path="/terms-conditions" element={<SuspenseWrapper><TermsAndConditionsPage /></SuspenseWrapper>} />
      <Route path="/login" element={<SuspenseWrapper><LoginPage /></SuspenseWrapper>} />
      <Route path="/register" element={<SuspenseWrapper><RegisterPage /></SuspenseWrapper>} />
      <Route path="/reset-password" element={<SuspenseWrapper><ResetPasswordPage /></SuspenseWrapper>} />
      <Route path="/change-server" element={<SuspenseWrapper><ChangeServerPage /></SuspenseWrapper>} />
      <Route path="/" element={<App />}>
        <Route index element={<SuspenseWrapper><MainPage /></SuspenseWrapper>} />

        <Route path="position/:id" element={<SuspenseWrapper><PositionPage /></SuspenseWrapper>} />
        <Route path="network/:positionId" element={<SuspenseWrapper><NetworkPage /></SuspenseWrapper>} />
        <Route path="event/:id" element={<SuspenseWrapper><EventPage /></SuspenseWrapper>} />
        <Route path="replay" element={<SuspenseWrapper><ReplayPage /></SuspenseWrapper>} />
        <Route path="geofences" element={<SuspenseWrapper><GeofencesPage /></SuspenseWrapper>} />
        <Route path="emulator" element={<SuspenseWrapper><EmulatorPage /></SuspenseWrapper>} />

        <Route path="settings">
          <Route path="accumulators/:deviceId" element={<SuspenseWrapper><AccumulatorsPage /></SuspenseWrapper>} />
          <Route path="announcement" element={<SuspenseWrapper><AnnouncementPage /></SuspenseWrapper>} />
          <Route path="calendars" element={<SuspenseWrapper><CalendarsPage /></SuspenseWrapper>} />
          <Route path="calendar/:id" element={<SuspenseWrapper><CalendarPage /></SuspenseWrapper>} />
          <Route path="calendar" element={<SuspenseWrapper><CalendarPage /></SuspenseWrapper>} />
          <Route path="commands" element={<SuspenseWrapper><CommandsPage /></SuspenseWrapper>} />
          <Route path="command/:id" element={<SuspenseWrapper><CommandPage /></SuspenseWrapper>} />
          <Route path="command" element={<SuspenseWrapper><CommandPage /></SuspenseWrapper>} />
          <Route path="attributes" element={<SuspenseWrapper><ComputedAttributesPage /></SuspenseWrapper>} />
          <Route path="attribute/:id" element={<SuspenseWrapper><ComputedAttributePage /></SuspenseWrapper>} />
          <Route path="attribute" element={<SuspenseWrapper><ComputedAttributePage /></SuspenseWrapper>} />
          <Route path="devices" element={<SuspenseWrapper><DevicesPage /></SuspenseWrapper>} />
          <Route path="device/:id/connections" element={<SuspenseWrapper><DeviceConnectionsPage /></SuspenseWrapper>} />
          <Route path="device/:id/command" element={<SuspenseWrapper><CommandDevicePage /></SuspenseWrapper>} />
          <Route path="device/:id/share" element={<SuspenseWrapper><SharePage /></SuspenseWrapper>} />
          <Route path="device/:id" element={<SuspenseWrapper><DevicePage /></SuspenseWrapper>} />
          <Route path="device" element={<SuspenseWrapper><DevicePage /></SuspenseWrapper>} />
          <Route path="drivers" element={<SuspenseWrapper><DriversPage /></SuspenseWrapper>} />
          <Route path="driver/:id" element={<SuspenseWrapper><DriverPage /></SuspenseWrapper>} />
          <Route path="driver" element={<SuspenseWrapper><DriverPage /></SuspenseWrapper>} />
          <Route path="geofence/:id" element={<SuspenseWrapper><GeofencePage /></SuspenseWrapper>} />
          <Route path="geofence" element={<SuspenseWrapper><GeofencePage /></SuspenseWrapper>} />
          <Route path="groups" element={<SuspenseWrapper><GroupsPage /></SuspenseWrapper>} />
          <Route path="group/:id/connections" element={<SuspenseWrapper><GroupConnectionsPage /></SuspenseWrapper>} />
          <Route path="group/:id/command" element={<SuspenseWrapper><CommandGroupPage /></SuspenseWrapper>} />
          <Route path="group/:id" element={<SuspenseWrapper><GroupPage /></SuspenseWrapper>} />
          <Route path="group" element={<SuspenseWrapper><GroupPage /></SuspenseWrapper>} />
          <Route path="maintenances" element={<SuspenseWrapper><MaintenancesPage /></SuspenseWrapper>} />
          <Route path="maintenance/:id" element={<SuspenseWrapper><MaintenancePage /></SuspenseWrapper>} />
          <Route path="maintenance" element={<SuspenseWrapper><MaintenancePage /></SuspenseWrapper>} />
          <Route path="notifications" element={<SuspenseWrapper><NotificationsPage /></SuspenseWrapper>} />
          <Route path="notification/:id" element={<SuspenseWrapper><NotificationPage /></SuspenseWrapper>} />
          <Route path="notification" element={<SuspenseWrapper><NotificationPage /></SuspenseWrapper>} />
          <Route path="preferences" element={<SuspenseWrapper><PreferencesPage /></SuspenseWrapper>} />
          <Route path="server" element={<SuspenseWrapper><ServerPage /></SuspenseWrapper>} />
          <Route path="users" element={<SuspenseWrapper><UsersPage /></SuspenseWrapper>} />
          <Route path="user/:id/connections" element={<SuspenseWrapper><UserConnectionsPage /></SuspenseWrapper>} />
          <Route path="user/:id" element={<SuspenseWrapper><UserPage /></SuspenseWrapper>} />
          <Route path="user" element={<SuspenseWrapper><UserPage /></SuspenseWrapper>} />
        </Route>

        <Route path="reports">
          <Route path="combined" element={<SuspenseWrapper><CombinedReportPage /></SuspenseWrapper>} />
          <Route path="chart" element={<SuspenseWrapper><ChartReportPage /></SuspenseWrapper>} />
          <Route path="events" element={<SuspenseWrapper><EventReportPage /></SuspenseWrapper>} />
          <Route path="route" element={<SuspenseWrapper><PositionsReportPage /></SuspenseWrapper>} />
          <Route path="stops" element={<SuspenseWrapper><StopReportPage /></SuspenseWrapper>} />
          <Route path="summary" element={<SuspenseWrapper><SummaryReportPage /></SuspenseWrapper>} />
          <Route path="trips" element={<SuspenseWrapper><TripReportPage /></SuspenseWrapper>} />
          <Route path="scheduled" element={<SuspenseWrapper><ScheduledPage /></SuspenseWrapper>} />
          <Route path="statistics" element={<SuspenseWrapper><StatisticsPage /></SuspenseWrapper>} />
          <Route path="audit" element={<SuspenseWrapper><AuditPage /></SuspenseWrapper>} />
          <Route path="logs" element={<SuspenseWrapper><LogsPage /></SuspenseWrapper>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Navigation;
