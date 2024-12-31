import { Link } from 'react-router-dom';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';
// project import
import AuthWrapper from './AuthWrapper';
import AuthLogin from './auth-forms/AuthLogin';

// ================================|| LOGIN ||================================ //
const currentHour = new Date().getHours(); // Get the current hour (0-23)
let greeting = '';

if (currentHour < 10) {
  greeting = 'Good Morning';
} else if (currentHour < 16) {
  greeting = 'Good Afternoon';
} else if (currentHour < 18) {
  greeting = 'Good Evening';
}
else {
  greeting = 'Good Night';
}
console.log('Current Hour:', currentHour); // Debugging log
console.log('Greeting:', greeting); // Debugging log


export default function Login() {
  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3"> {greeting} </Typography>
            <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Don&apos;t have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
