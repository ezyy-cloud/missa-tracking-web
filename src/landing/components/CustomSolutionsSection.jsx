import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Paper from '@mui/material/Paper';

const CustomSolutionsSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(-15deg, #F5FF01 40%, #FFF 0%)',
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
        Helping our clients innovate
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {[
          {
            title: 'Remote Worker Management',
            description: 'We provide our clients with real-time visibility into their remote workers\' locations, job progress, and performance data. Our clients use real-time location tracking, job status updates, and customisable reporting to make data-driven decisions and manage their staff more efficiently. Our platform allows you to track remote workers\' real-time location for efficient collaboration and task assignment, as well as receive real-time job status updates to ensure jobs are completed on time. To avoid disrupting workflows, our clients integrate our software with their existing systems. Our customers have moved away from manual tracking and guesswork and toward real-time visibility and data-driven decision-making. Let us discuss how our telematics-enabled remote worker management software can assist you.'
          },
          {
            title: 'Logistics As A Service',
            description: 'We provide logistics operators with a comprehensive platform for managing all areas of their logistics operations, from planning and scheduling to tracking and reporting. Clients may improve operations for optimal efficiency and profitability by employing capabilities such as real-time visibility, automated workflows, and customizable reporting. Order processing, scheduling, and billing are examples of manual logistics procedures that have been automated. It enables the development of bespoke reports that provide insights into operations and help clients make data-driven decisions. We understand that each logistics firm has distinct demands and requirements, so our software is extremely adaptable to match the needs of each business. Our platform is used by clients to streamline operations, reduce costs, and improve customer satisfaction.'
          },
          {
            title: 'Uberize Your Service',
            description: 'Our Uberization software is the best way to turn any service into an on-demand platform. Our software, similar to the Uber concept, provides a platform for businesses to give on-demand services to their customers. Companies can deliver highly personalized and efficient service to their customers by leveraging features like real-time service requests, automated dispatching, and customer feedback. Our platform enables clients to request services in real time, directly from their mobile devices. It automates the dispatching process, ensuring that the customer\'s request is routed to the most convenient service provider. Consumers can utilize the program to provide feedback on the service they received, allowing businesses to improve their offerings while maintaining high levels of customer happiness.'
          }
        ].map((solution, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                height: '100%',
                p: { xs: 3, md: 4 },
                borderRadius: { xs: '16px', sm: '20px' },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: '400',
                  textAlign: 'center',
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  mb: 3,
                }}
              >
                {solution.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: '300',
                  textAlign: 'center',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                {solution.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
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

export default CustomSolutionsSection;
