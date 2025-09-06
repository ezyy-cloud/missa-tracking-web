import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepIcon from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const stepIconComponent = () => (
  <div>
    <StepIcon icon={<CrisisAlertIcon />} />
  </div>
);

const steps = [
  {
    label: 'What is Missa?',
    description: `Missa is a telematics platform 
                  that helps you geolocate everything 
                  that is important to you. Track the 
                  location of all your assets from any
                  connected device. Get in touch with
                    us right now to get started.`,
  },
  {
    label: 'How do you track phones and laptops?',
    description: `You can download our tracking app for phones.
                  To evade discovery, the tracking application is disguised
                  as a calculator. While entering a high-risk
                    location, enable the monitoring app, and
                    if your phone is stolen, contact us immediately
                      on our hotline before it is wiped. A tiny tracker
                      is inserted within the laptop for laptops. This 
                      will provide you the position of your laptop in real time.`,
  },
  {
    label: 'What happens when a tracked asset is stolen?',
    description: `When an asset tracked by Missa is taken,
                  we urge the victim to file a police report as soon as
                    possible. This will enable our security team to begin
                    tracing the item and catch the individual who was caught
                      with it during a recovery. Missa may call in a ZRP CID
                      member to help with the arrest if necessary. While Missa
                        promises to using reasonable resources to recover your
                        asset as part of our customer care program, we do not
                          guarantee that the asset will be recovered, nor do we
                          have a legal duty to cover the cost of lost assets.`,
  },
];

const useage = [
  {
    label: 'How do I sign up for Missa services?',
    description: `Complete the sign-up form after clicking 
                  the request quotation button. Once this is completed, 
                  our agents will contact you to schedule the installation 
                  of the tracker on your asset. Once the installation is
                  complete, you will be given your login information
                    and can begin tracking your asset.`,
  },
  {
    label: 'How do you track livestock?',
    description: `Our entry-level car trackers start at $60.00.
                  They give basic asset tracking features. Depending on the
                  application, numerous add-on sensors can be included,
                    resulting in a price difference. Livestock trackers
                    start at $80.00. They include the collars and other 
                    essential accoutrements. Get in contact with us
                      immediately for a quote!`,
  },
  {
    label: 'How much does it cost to use Missa?',
    description: `Our entry level vehicle trackers start at $60.00. 
                  These provide basic asset tracking functionality.
                  Depending on application, various add-on sensors can be 
                  included providing a variation in pricing. 
                  Livestock trackers start at $80.00 each. These
                  include the colars and necessary accessories.
                  Get in touch to get a quote today!`,
  },
];
const FaqSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(-15deg, #efefef 100%, #FFF 0%)',
      color: '#000000',
      py: { xs: 8, sm: 12, md: 16 },
    }}
  >
    <Container maxWidth="xl">
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Product Sans, sans-serif',
          fontWeight: '400',
          textAlign: 'center',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
          mb: { xs: 6, sm: 8 },
          lineHeight: 1.1,
        }}
      >
        Frequently Asked Questions
      </Typography>
      
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={6}>
          <Stepper orientation="vertical" sx={{ '& .MuiStepConnector-root': { ml: 2 } }}>
            {steps.map((step, index) => (
              <Step key={step.label} active>
                <StepLabel
                  StepIconComponent={stepIconComponent}
                  sx={{
                    '& .MuiStepLabel-labelContainer': {
                      ml: 2,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: '400',
                      color: '#000000',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent sx={{ ml: 2 }}>
                  <Typography 
                    sx={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: '300',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                      mt: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stepper orientation="vertical" sx={{ '& .MuiStepConnector-root': { ml: 2 } }}>
            {useage.map((step, index) => (
              <Step key={step.label} active>
                <StepLabel
                  StepIconComponent={stepIconComponent}
                  sx={{
                    '& .MuiStepLabel-labelContainer': {
                      ml: 2,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: '400',
                      color: '#000000',
                      fontSize: { xs: '1rem', md: '1.1rem' },
                    }}
                  >
                    {step.label}
                  </Typography>
                </StepLabel>
                <StepContent sx={{ ml: 2 }}>
                  <Typography 
                    sx={{
                      fontFamily: 'Product Sans, sans-serif',
                      fontWeight: '300',
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                      mt: 1,
                    }}
                  >
                    {step.description}
                  </Typography>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
      
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: '23px',
            fontFamily: 'Product Sans, sans-serif',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            px: 4,
            py: 1.5,
            textTransform: 'none',
            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0 6px 20px 0 rgba(0,0,0,0.15)',
            },
          }}
          endIcon={<ChevronRightIcon />}
          onClick={() => {
            window.open('https://forms.gle/9H5VgxWzHVAcnwsC6', '_blank');
          }}
        >
          Get a free quote
        </Button>
      </Box>
    </Container>
  </Box>
);

export default FaqSection;
