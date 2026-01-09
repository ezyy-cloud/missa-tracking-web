import { Snackbar, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useSelector } from 'react-redux';
import { useRegisterSW } from 'virtual:pwa-register/react';
import { useTranslation } from './common/components/LocalizationProvider';

// Based on https://vite-pwa-org.netlify.app/frameworks/react.html
const UpdateController = () => {
  const t = useTranslation();

  const swUpdateInterval = useSelector((state) => state.session.server.attributes.serviceWorkerUpdateInterval || 3600000);

  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, swRegistration) {
      if (swUpdateInterval > 0 && swRegistration) {
        setInterval(async () => {
          if (!(!swRegistration.installing && navigator)) {
            return;
          }

          // Improved network detection - don't block on mobile data
          // navigator.onLine can be unreliable on mobile devices
          if (('connection' in navigator) && navigator.connection) {
            const connection = navigator.connection;
            // Only skip if explicitly offline or on a very slow connection
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
              // Still allow on 2g, but with longer timeout
            }
          }

          // Add timeout to prevent hanging on slow connections
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

          try {
            const newSW = await fetch(swUrl, {
              cache: 'no-store',
              signal: controller.signal,
              headers: {
                cache: 'no-store',
                'cache-control': 'no-cache',
              },
            });

            clearTimeout(timeoutId);

            if (newSW?.status === 200) {
              await swRegistration.update();
            }
          } catch (error) {
            clearTimeout(timeoutId);
            // Silently fail on network errors - don't block app functionality
            if (error.name !== 'AbortError') {
              // Only log non-timeout errors if needed
            }
          }
        }, swUpdateInterval);
      }
    },
  });

  return (
    <Snackbar
      open={needRefresh}
      message={t('settingsUpdateAvailable')}
      action={(
        <IconButton color="inherit" onClick={() => updateServiceWorker(true)}>
          <RefreshIcon />
        </IconButton>
      )}
    />
  );
};

export default UpdateController;
