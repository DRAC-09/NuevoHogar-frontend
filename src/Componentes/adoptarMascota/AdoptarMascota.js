import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Mascotas from '../pages/Mascotas';
import './adoptarMascota.css';
/*import Img_historial from './Img_historial';
import Magnus from "../Fotos/Magnus.jpeg"
import Max from "../Fotos/Max.png"
import BugsLola from "../Fotos/BugsLola.jpg"
import PanaRabbit from "../Fotos/PanaRabbit.jpeg"*/


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
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

function Copyright(props) {
  return (
    <Typography variant="body2" color="black" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://nuevo-hogar-frontend.vercel.app/">
      NuevoHogar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const AdoptarMascota = ({handleEvent}) => {

  const [mascotas, setMascotas] = useState([]);
     const [mascota, setMascota] = useState(' ');

  useEffect(() => {
    // console.log(mascotas)
    // Obtenermos las mascotas de la base de datos
    fetch("https://nuevo-hogar-backend.vercel.app/mascota", {
         method: 'GET',
         headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
              }
         })
         .then(res => res.json())
         .then(data => {
              setMascotas(data)
              // console.log(data)
         })
         .catch(res => console.log(res));
},[]);

const pet = (mascotaDetalles) => {
  // setMascota(mascotaDetalles)
  handleEvent(false)
  localStorage.setItem('mascota', JSON.stringify(mascotaDetalles));
  // event.handleEvent(true)
  // document.getElementById('modificar-mascota').style.display = 'block'
  // document.getElementById('mascotas').style.display = 'none'

  
  // console.log(mascota)
}

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className="containe-fluid div-adoptar" bgcolor="transparent">
        <Box
          marginTop={25}
            sx={{ mt: 1 }}>
              
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor:"transparent",
            pt: 1,
            pb: 1,
          }}
        >
          <Container maxWidth="md"  >
            <Typography
            marginTop={4}
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Adoptar Mascota
            </Typography>
          </Container>
          
        </Box>
        <ThemeProvider theme={theme}>
        <Container sx={{ py: 0  }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {mascotas.map((mascota) => (
              <Grid item key={mascota.id} xs={12} sm={6} md={3} onClick={ (e) => pet(mascota,e)}>
                <Card
                  sx={{ maxWidth:345}}
                >
                  <CardMedia
                    component="imagen"
                    sx={{
                      height:140
                    }}
                    image=        {mascota.imagen}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor:'black'}} >
                    <Typography gutterBottom variant="h6" color="white">
                      {mascota.nombre}
                    </Typography>
                    <Typography color="white">
                      {mascota.descripcion}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{bgcolor:'black'}}>
                    <Button size="small" color="secondary">Adoptar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </ThemeProvider>
      
      {/* Footer */}
      <Copyright sx={{ mt: 8, mb: 4 }} />
      {/* End footer */}
      </main>
            </Box>
            </div>
  )
}

export default AdoptarMascota;