import React,{ useState, useEffect }from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import './loginpage.css';

import { Alert } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#171717',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

//Pie de pagina para el copyright
function Copyright(props) {
  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
      NuevoHogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  // const [value, setValue] = useState();

  const handleChange = () => {
    document.addEventListener("click",function(e){document.getElementById('alert').style.display = 'none'})
  }

  const login = (e) => {
    const data = new FormData(e.currentTarget);
    const usuario = {
      correo: data.get('correo'),
      contrasenia: data.get('contrasenia'),
    }
    fetch("https://nuevo-hogar-backend.vercel.app/cliente/login", {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('user', JSON.stringify(data.id));
        window.location.href = "./usuario";
        // const rol = data.rol
        // if (rol == "cliente") {window.location.href = "./usuario2";}
        // if (rol == "administrador" ) {window.location.href = "./administrador";}
      })
      .catch(res => {
        // console.log(res)
        // alert("Error!, Usuario y/o Contraseñas con incorrectos");
        // contrasenia: data.get('contrasenia'),
        document.getElementById('alert').style.display = 'block';
      });
    e.preventDefault();
  }

    return (
    <div className="containe-fluid div-loginpage" >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
        {/* Inicio de caja */}
          <Box
            sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          ><br></br>
            <Typography component="h1" variant="h3" color="black">
              Iniciar sesión
            </Typography>
            <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
              <TextField 
                margin="normal"
                required
                fullWidth
                id="correo"
                bgcolor="white"
                label="Correo electronico"
                name="correo"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="contrasenia"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                
              />
              <div id="alert">
                <br></br>
                <Alert variant="filled" severity="error">
                  Error!, Usuario y/o Contraseñas con incorrectos
                </Alert>
                <br></br>  
              </div>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="send"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesion
              </Button>
              <Grid container>
                { /*<Grid item xs>
                  <Link href= "./cambiarContrasena" variant="body5" >
                    Cambiar contraseña?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="./sign-up" variant="body5">
                    {"No tiene cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      </div>
    )
}


