/* eslint-disable prettier/prettier */
// material-ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// project import
import MainCard from 'components/MainCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';<Grid item xs={12} sm={6} md={4} lg={3}>
<AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
</Grid>
// project import
import AnimateButton from 'components/@extended/AnimateButton';
// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {


  return (
    <MainCard title="
    A man who dares to waste one hour of time has not discovered the value of life.
- Charles Darwin .">

 <div>
  </div>
  <Grid item xs={6} sm={2} md={45} lg={1}>
        <AnalyticEcommerce title="Total Resgistered USers" count="4" percentage={59.3} extra="35,000" />
      </Grid>
      
  <i><b>
  Just Register with us to grab your Dream job.
    </b> </i>
  

        <MainCard title="CONTACT US">
<Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          company: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                  <OutlinedInput
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                </Stack>
                {touched.firstname && errors.firstname && (
                  <FormHelperText error id="helper-text-firstname-signup">
                    {errors.firstname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                </Stack>
                {touched.lastname && errors.lastname && (
                  <FormHelperText error id="helper-text-lastname-signup">
                    {errors.lastname}
                  </FormHelperText>
                )}
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="company-signup">Company</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="company"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Demo Inc."
                    inputProps={{}}
                  />
                </Stack>
                {touched.company && errors.company && (
                  <FormHelperText error id="helper-text-company-signup">
                    {errors.company}
                  </FormHelperText>
                )}
              </Grid>
             
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@company.com"
                    inputProps={{}}
                  />
                </Stack>
                {touched.email && errors.email && (
                  <FormHelperText error id="helper-text-email-signup">
                    {errors.email}
                  </FormHelperText>
                )}
              </Grid>
            
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="Phone Number-signup">Phone Number*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.PhoneNumber && errors.PhoneNumber)}
                    id="Phone Number"
                    type="Phone Number"
                    value={values.PhoneNumber}
                    name="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter 10 digit Phone Number"
                    inputProps={{}}
                  />
                </Stack>
                {touched.PhoneNumber && errors.PhoneNumber && (
                  <FormHelperText error id="helper-text-Phone Number-signup">
                    {errors.PhoneNumber}
                  </FormHelperText>
                )}
              </Grid>
          
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  SEND YOUR QUERY
                  </Button>
                </AnimateButton>
                <Typography variant="body2">
                 Thankyou for contacting us. Our contact center representative will get back to you shortly
                 
                </Typography>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
</MainCard>
    </MainCard>
  );
}
