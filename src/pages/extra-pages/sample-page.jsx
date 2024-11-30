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
    <MainCard title="Provide us your Naukri UserName and Password.">
  <br></br>

        <MainCard title="NOTE: Dont worry , we keep your credentials confidential & safe">
<Formik
        initialValues={{
          Username: '',
          lastname: '',
          email: '',
          company: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          Username: Yup.string().max(255).required('First Name is required'),
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
                    type="Username"
                    value={values.Username}
                    name="Username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your First Name"
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
                    placeholder="Enter your Last Name"
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
                  <InputLabel htmlFor="company-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.company && errors.company)}
                    id="company-signup"
                    value={values.company}
                    name="company"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Naukri Password"
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
                    placeholder="Enter your Registered Naukri EmailID"
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
                    placeholder="Enter 10 digit Phone Number registered with Naukri"
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
                <Stack spacing={1}>
                  <InputLabel htmlFor="Upload file">Upload your Resume*</InputLabel>
                  <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file">
                  </input>
                </Stack>
                
                
              </Grid>
          
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  SUBMIT DETAILS
                  </Button>
                </AnimateButton>
                <Typography variant="body2">
                 Thankyou for Trusting us. We keep your profile updated daily at 8am and 7pm. Also we send you Email Notifications.
                 
                </Typography>

              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
</MainCard>
<div>
  <br></br>
  <Grid item xs={6} sm={2} md={45} lg={1}>
        <AnalyticEcommerce title="Total Registered Users" count="453" percentage={59.3} extra="35,000" />
      </Grid>
      </div>
    </MainCard>
  );
}
