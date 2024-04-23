import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store';
import { useFormWithValidations } from '../../hooks/useFormWithValidations';


const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( (state) => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useFormWithValidations(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status] );

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() )
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'
>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder='correo@google.com'
                fullWidth
                name='email'                                  //Recordar que sin esto onChange no funciona
                value={ email }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder='Contraseña'
                fullWidth
                name='password'
                inputProps={{'data-testid': 'password'}}
                value={ password }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } display={ !!errorMessage ? '' : 'none' }>
                <Alert severity="error">
                    {errorMessage}
                </Alert>
              </Grid>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  type='submit'
                  variant='contained'
                  fullWidth
                  aria-label='submit-form'>
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                  disabled={ isAuthenticating }
                  onClick={ onGoogleSignIn }
                  variant='contained'
                  fullWidth
                  aria-label='google-btn'>
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}