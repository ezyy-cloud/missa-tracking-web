import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MapScreen from '../../resources/images/screen.jpeg';
import MapScreenLarge from '../../resources/images/screenLarge.png';

const CallOutSection = () => (
  <Box
    sx={{
      background: 'linear-gradient(-15deg, #fff 43%, #F5FF01 0%)',
      color: '#000000',
      minHeight: { xs: 'auto', md: '100vh' },
      display: 'flex',
      alignItems: 'center',
      pt: { xs: 8, sm: 12, md: 0 },
      pb: { xs: 8, sm: 12, md: 0 },
    }}
  >
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ maxWidth: { xs: '100%', md: '600px' } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '5rem' },
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: '400',
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Never lose
              {' '}
              <br />
              {' '}
              sight of what&apos;s
              {' '}
              <br />
              {' '}
              important
            </Typography>
            <Divider
              sx={{
                borderTop: '3px solid #000',
                width: { xs: '200px', sm: '300px', md: '400px' },
                borderBottomWidth: '0',
                height: '0',
                mb: 4,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Product Sans, sans-serif',
                fontWeight: '300',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                lineHeight: 1.6,
                mb: 4,
                maxWidth: '500px',
              }}
            >
              We recognize the importance of your
              assets and we are dedicated to protecting
              them. Our blended asset risk management
              solution provides tailored security for
              complete peace of mind. You can rely
              on us to protect your assets.
            </Typography>
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
              Free Quote
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { md: '600px', lg: '700px' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Desktop Screen */}
            <Box
              sx={{
                position: 'relative',
                width: { md: '400px', lg: '800px' },
                height: { md: '300px', lg: '450px' },
                backgroundImage: `url(${MapScreenLarge})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '0px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                zIndex: 1,
              }}
            />
            {/* Mobile Screen */}
            <Box
              sx={{
                position: 'absolute',
                top: { md: '50px', lg: '200px' },
                left: { md: '50px', lg: '60px' },
                width: { md: '120px', lg: '200px' },
                height: { md: '200px', lg: '440px' },
                backgroundImage: `url(${MapScreen})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '0px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                zIndex: 2,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default CallOutSection;
