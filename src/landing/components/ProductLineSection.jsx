import Image from 'mui-image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CommuteIcon from '@mui/icons-material/Commute';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import PetsIcon from '@mui/icons-material/Pets';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MapFade from '../../resources/images/mapFade.png';
import LocationMarker from '../../resources/images/location.svg';

const ProductLineSection = () => (
  <Box
    sx={{
      bgcolor: 'white',
      color: '#000000',
      py: { xs: 8, sm: 12, md: 16 },
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
        {/* Image Section - Left Side */}
        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '400px',
              height: { md: '500px', lg: '600px' },
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {/* MapFade - Bottom Layer */}
            <Image
              src={MapFade}
              sx={{
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                width: { md: '280px', lg: '320px' },
                height: 'auto',
                zIndex: 1,
                maxWidth: '100%',
              }}
            />
            {/* LocationMarker - Middle Layer */}
            <Image
              src={LocationMarker}
              sx={{
                position: 'absolute',
                top: '30%',
                left: '15%',
                width: { md: '50px', lg: '60px' },
                height: 'auto',
                zIndex: 2,
                maxWidth: '100%',
              }}
            />
            {/* Vehicle Icon - Top Layer */}
            <Image
              src="https://i.pinimg.com/originals/93/2e/00/932e0070ec709fe960a1bb4dd8791b1b.png"
              sx={{
                position: 'absolute',
                top: '60%',
                left: '50%',
                width: { md: '60px', lg: '70px' },
                height: 'auto',
                zIndex: 3,
                transform: 'scaleX(-1)',
                maxWidth: '100%',
              }}
            />
          </Box>
        </Grid>

        {/* Content Section - Right Side */}
        <Grid item xs={12} md={8}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: '400',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
              lineHeight: 1.1,
              mb: 6,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Get this and so much more
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {[
              {
                icon: <CommuteIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />,
                title: 'Vehicle Telematics',
                description: 'Manage your vehicle where ever you are with Missa. Monitor Green Driving, Over Speeding, Jamming, Fuel, Excessive Idling, Towing, Crashing and add a geofence for your vehicles. Fleet packages available'
              },
              {
                icon: <CalendarViewWeekIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />,
                title: 'Movable Asset Tracking',
                description: 'Secure your movable assets with Missa. Asset Tracking systems help to manage equipment (generally high-value assets such as generators, tools, containers or OHVs) using GPS asset tracking devices.'
              },
              {
                icon: <PetsIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />,
                title: 'Livestock & Pet Tracking',
                description: 'Keep an on your livestock herds from your phone. Know where your herds are located 24/7 and find them easily if they stray. Keep valuable pets monitored round the clock to ensure you never lose them.'
              },
              {
                icon: <DevicesOtherIcon sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} />,
                title: 'Gadgets Tracking',
                description: 'Always the know location of your phone or laptop. Never lose your gadgets to thieves again. Free tracking of devices ensures you only pay for your devices when we find them for you.'
              }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#F5FE03', 
                      width: { xs: '60px', sm: '70px', md: '80px' }, 
                      height: { xs: '60px', sm: '70px', md: '80px' },
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: 'Product Sans, sans-serif',
                        fontWeight: '400',
                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                        mb: 1,
                      }}
                    >
                      {item.title}
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
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: { xs: 'center', md: 'left' } }}>
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
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default ProductLineSection;
