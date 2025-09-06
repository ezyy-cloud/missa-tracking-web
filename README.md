# Missa Telematics Web App

A comprehensive GPS tracking and fleet management web application built with React and Vite. Missa provides real-time asset tracking, geofencing, reporting, and fleet management capabilities for businesses and individuals who need to monitor and protect their valuable assets.

## 🚀 Features

### Real-Time Tracking
- **Live GPS Tracking**: Monitor vehicles, devices, and assets in real-time
- **Interactive Maps**: Powered by MapLibre GL with customizable map styles
- **Multi-Device Support**: Track phones, laptops, vehicles, and other connected devices
- **Live Routes**: View real-time movement patterns and routes
- **Status Monitoring**: Track device status, battery levels, and connectivity

### Fleet Management
- **Device Management**: Add, configure, and manage multiple tracking devices
- **Group Organization**: Organize devices into logical groups for better management
- **Driver Management**: Associate drivers with vehicles and track driver behavior
- **Geofencing**: Create virtual boundaries and receive alerts when devices enter/exit
- **Command Center**: Send remote commands to devices

### Advanced Reporting
- **Trip Reports**: Detailed journey analysis with start/stop times and routes
- **Stop Reports**: Identify and analyze vehicle stops and idle time
- **Event Reports**: Track alarms, alerts, and system events
- **Summary Reports**: Comprehensive overview of fleet performance
- **Chart Reports**: Visual analytics and trend analysis
- **Position Reports**: Detailed location history and tracking data
- **Scheduled Reports**: Automated report generation and delivery
- **Audit Logs**: Complete system activity tracking

### User Management & Security
- **Multi-User Support**: Role-based access control (Admin, Manager, User)
- **Permission System**: Granular permissions for different user types
- **User Preferences**: Customizable interface and notification settings
- **Session Management**: Secure authentication and session handling
- **Data Privacy**: GDPR-compliant data handling and user consent

### Mobile & PWA Support
- **Progressive Web App**: Install as a native app on mobile devices
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Offline Capability**: Basic functionality available without internet
- **Push Notifications**: Real-time alerts and updates

## 🛠️ Technology Stack

- **Frontend**: React 19.1.1 with React Router DOM
- **Build Tool**: Vite 7.1.3
- **UI Framework**: Material-UI (MUI) 7.3.2
- **State Management**: Redux Toolkit
- **Maps**: MapLibre GL with Mapbox integration
- **Charts**: Recharts for data visualization
- **PWA**: Vite PWA plugin for offline support
- **Styling**: Emotion with TSS-React
- **Internationalization**: Multi-language support (50+ languages)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Setup
1. Clone the repository:
```bash
git clone https://github.com/ezyycloud/missa-web-app.git
cd missa-tracking
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the configuration
# Update API endpoints and other settings as needed
```

4. Start the development server:
```bash
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

### Production Build
```bash
npm run build
```

The built files will be in the `build` directory, ready for deployment.

## 🚀 Deployment

### Netlify (Recommended)
The project includes a `netlify.toml` configuration file for easy deployment to Netlify:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod
```

### Other Platforms
The application can be deployed to any static hosting service:
- Vercel
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting

## 🔧 Configuration

### API Configuration
Update the proxy settings in `vite.config.js` to point to your backend API:

```javascript
server: {
  proxy: {
    '/api/socket': 'ws://your-api-server:port',
    '/api': 'http://your-api-server:port',
  },
}
```

### PWA Configuration
Modify the PWA settings in `vite.config.js` to customize:
- App name and description
- Theme colors
- Icons and manifest
- Caching strategies

## 📱 Mobile App Integration

Missa supports tracking through:
- **Mobile Apps**: Download tracking apps for phones and tablets
- **Stealth Mode**: Disguised calculator app for discreet tracking
- **Laptop Tracking**: Hardware trackers for laptop protection
- **QR Code Integration**: Easy device pairing and management

## 🌍 Internationalization

The application supports 50+ languages including:
- English, Spanish, French, German, Italian
- Chinese (Simplified & Traditional)
- Japanese, Korean, Arabic, Hindi
- And many more...

Language files are located in `src/resources/l10n/`

## 🔒 Security Features

- **Role-Based Access Control**: Admin, Manager, and User roles
- **Device Permissions**: Granular control over device access
- **Data Encryption**: Secure data transmission and storage
- **Session Security**: Secure authentication and session management
- **Privacy Controls**: GDPR-compliant data handling

## 📊 Key Metrics Tracked

- **Location Data**: GPS coordinates, altitude, speed, heading
- **Engine Data**: Engine hours, fuel consumption, temperature
- **Device Status**: Battery level, signal strength, connectivity
- **Driver Behavior**: Speeding, harsh braking, acceleration
- **Maintenance**: Service schedules, odometer readings
- **Alarms**: Panic buttons, geofence violations, device tampering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🆘 Support

- **Documentation**: [https://missa.ezyy.cloud/docs](https://missa.ezyy.cloud/docs)
- **Support Portal**: [https://missa.ezyy.cloud/support](https://missa.ezyy.cloud/support)
- **Live Chat**: Available on the website
- **Email**: support@missa.ezyy.cloud

## 🔗 Links

- **Website**: [https://missa.ezyy.cloud](https://missa.ezyy.cloud)
- **Free Quote**: [https://forms.gle/9H5VgxWzHVAcnwsC6](https://forms.gle/9H5VgxWzHVAcnwsC6)
- **API Documentation**: [https://missa.ezyy.cloud/api-docs](https://missa.ezyy.cloud/api-docs)

---

**Never lose sight of what's important** - Missa Telematics provides comprehensive asset tracking and fleet management solutions for complete peace of mind.
