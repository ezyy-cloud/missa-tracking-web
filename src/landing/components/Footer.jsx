import * as React from 'react';
import Image from 'mui-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: '#2d2d2d',
        py: { xs: 6, sm: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="https://missabucket.s3.amazonaws.com/missa.svg"
                width={200}
                fit="scale-down"
                style={{
                  filter: 'grayscale(1)',
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: '400',
                  color: '#fff',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                Location
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  5 Bryanston Court
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  51 Fife Avenue
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  Harare, Zimbabwe
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: '400',
                  color: '#fff',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                Get in touch
              </Typography>
              <Stack spacing={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  wecare@ezyy.cloud
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                  }}
                >
                  +263772367855
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Stack spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Product Sans, sans-serif',
                  fontWeight: '400',
                  color: '#fff',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                Integrity
              </Typography>
              <Stack spacing={1}>
                <Link
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onClick={() => navigate('/privacy-policy')}
                >
                  Privacy Policy
                </Link>
                <Link
                  sx={{
                    fontFamily: 'Product Sans, sans-serif',
                    fontWeight: '300',
                    color: '#fff',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                  onClick={() => navigate('/terms-conditions')}
                >
                  Terms and Conditions
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            pt: { xs: 4, md: 6 },
            borderTop: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Product Sans, sans-serif',
              fontWeight: '300',
              color: '#fff',
              fontSize: { xs: '0.8rem', md: '0.9rem' },
            }}
          >
            Another{' '}
            <a 
              href="https://ezyy.cloud"
              style={{ 
                color: '#fff', 
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              Ezyy Cloud
            </a>
            {' '}- {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
