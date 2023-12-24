
import { Typography, Container, Button } from '@mui/material';

function HomePage() {
  return (
    <div>
      
      <Container
        sx={{
          marginTop: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to our website!
        </Typography>
        <Typography variant="body1" paragraph>
          This is a sample home page built using Material-UI.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 2 }}
          onClick={() => alert('Button Clicked!')}
        >
          Click Me
        </Button>
      </Container>
    </div>
  );
}

export default HomePage;
