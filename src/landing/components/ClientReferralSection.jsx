import * as React from 'react';
import Image from 'mui-image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Confident from '../../resources/images/confident.png';
import Pamushana from '../../resources/images/pamushana.jpeg';

const ClientReferralSection = () => (
  <Box
    sx={{
      background: '#fff',
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
        We are tracking
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 4, sm: 6, md: 8 },
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              opacity: 0.8,
            },
          }}
        >
          <Image
            src={Confident}
            width={150}
            style={{
              filter: 'grayscale(1)',
              opacity: 0.5,
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              opacity: 0.8,
            },
          }}
        >
          <Image
            src={Pamushana}
            width={350}
            style={{
              filter: 'grayscale(1)',
              opacity: 0.5,
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default ClientReferralSection;
