import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'primary.main',
        color: 'white',
        p: 3,
      }}
    >
      <Typography variant="body1" align="center">
        © 2023 Apple Inspired Design
      </Typography>
    </Box>
  );
};

export default Footer;
