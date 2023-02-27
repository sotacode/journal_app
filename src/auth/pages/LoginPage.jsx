import { Google, Password } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const isAuthenticated = useMemo( ()=> status === 'checking', [status])

    const { email, password, onInputChange} = useForm({
        email: 'holarina1@gmail.com',
        password: '123456'
    })

    const onSubmit = (event)=> {
        event.preventDefault();
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = (event)=>{
        event.preventDefault();
        dispatch(startGoogleSignIn());
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="gmail@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button 
                                variant="contained" 
                                fullWidth 
                                type="submit"
                                disabled={ isAuthenticated }
                                >
                                Login
                            </Button>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sm={6}
                        >
                            <Button 
                                variant="contained" 
                                fullWidth 
                                onClick={onGoogleSignIn}
                                disabled={ isAuthenticated }
                                >
                                <Google />
                                <Typography variant="p" sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={RouterLink} color="inherit" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

    );
};