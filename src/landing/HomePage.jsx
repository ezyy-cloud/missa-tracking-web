import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from 'tss-react/mui';
import Box from '@mui/material/Box';
import AppBar from './components/AppBar';
import CallOutSection from './components/CallOutSection';
import ProductLineSection from './components/ProductLineSection';
import ServicesSection from './components/ServicesSection';
import CustomSolutionsSection from './components/CustomSolutionsSection';
import ClientReferralSection from './components/ClientReferralSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

const useStyles = makeStyles()(() => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  section: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
}));

const LandingPage = () => {
  const { classes } = useStyles();
  
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar />
      <main className={classes.main}>
        <Box className={classes.section}>
          <CallOutSection />
        </Box>
        <Box className={classes.section}>
          <ProductLineSection />
        </Box>
        <Box className={classes.section}>
          <ServicesSection />
        </Box>
        <Box className={classes.section}>
          <CustomSolutionsSection />
        </Box>
        <Box className={classes.section}>
          <ClientReferralSection />
        </Box>
        <Box className={classes.section}>
          <FaqSection />
        </Box>
        <Box className={classes.section}>
          <Footer />
        </Box>
      </main>
    </Box>
  );
};

export default LandingPage;
