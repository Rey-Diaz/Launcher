
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 5 }}>
      <Typography variant="body1" align="center">
        © 2023 Apple Inspired Design
      </Typography>
    </Box>
  );
};

export default Footer;
