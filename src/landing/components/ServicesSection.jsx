import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ServicesSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(-15deg, #fff 30%, #F5FF01 0%, #F5FF01 70%, #fff 20%',
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
        Enjoy Value Added Services
      </Typography>

      <Grid container spacing={{ xs: 3, md: 4 }}>
        {[
          {
            title: 'Telematics Insurance',
            description: 'Usage-Based Insurance (UBI) is a type of auto insurance that tracks mileage and driving behaviors. The basic idea of UBI is that a driver\'s behavior is monitored directly while the person drives, allowing insurers to more closely align driving behaviors with premium rates.',
            image: 'https://media.istockphoto.com/id/1298340803/vector/car-insurance.jpg?s=612x612&w=0&k=20&c=ISKcqtFv0Wvp7VLR7Ep10l4as_rkxA675Lvrjyo2Mn8=',
            imagePosition: 'right'
          },
          {
            title: 'Roadside Assistance',
            description: 'Roadside assistance, also known as breakdown coverage, is a service that assists motorists whose vehicles have suffered a mechanical failure that either cannot be resolved by the motorist, or has prevented them from transporting the vehicle to an automobile repair shop.',
            image: 'https://img.freepik.com/free-vector/roadside-service-abstract-concept-illustration_335657-3961.jpg?w=2000',
            imagePosition: 'left'
          },
          {
            title: 'Vehicle Maintenance',
            description: 'Vehicle maintenance and servicing is carried out when the vehicle completes certain kilometres on its normal running or when the vehicle does not give proper performance. It is suggested that the vehicle owners carry out regular and periodical checks on their vehicle.',
            image: 'https://img.freepik.com/premium-vector/car-service-repair-illustration-concept_108061-1057.jpg?w=360',
            imagePosition: 'right'
          },
          {
            title: 'Gadget Insurance',
            description: 'Gadget insurance covers the cost of repairing or replacing your gadgets if they are lost, damaged or stolen, the things you use without a second thought every single day, including your mobile phone, laptop and fitness tracker. Let Missa protect you from losing your gadgets at all cost.',
            image: 'https://img.freepik.com/free-vector/electronic-insurance-hardware-digital-insurers-website-responsive-web-design-malware-protection-software-gadgets-security-assurance-vector-isolated-concept-metaphor-illustration_335657-2829.jpg',
            imagePosition: 'left'
          }
        ].map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              elevation={4} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: service.imagePosition === 'left' ? 'row' : 'row-reverse' },
                borderRadius: { xs: '16px', sm: '20px' },
                overflow: 'hidden',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{ 
                  width: { xs: '100%', md: '300px' },
                  height: { xs: '200px', md: 'auto' },
                  filter: 'grayscale(100%)',
                  objectFit: 'cover',
                }}
                image={service.image}
                alt={service.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto', p: { xs: 3, md: 4 } }}>
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      fontFamily: 'Product Sans, sans-serif', 
                      fontSize: { xs: '1.25rem', md: '1.5rem' },
                      fontWeight: '400',
                      mb: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontFamily: 'Product Sans, sans-serif', 
                      fontWeight: '300', 
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
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

export default ServicesSection;
