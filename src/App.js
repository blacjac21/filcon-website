
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import mytheme from './styles/theme';
import NavbarM from './components/Navbar-M';
import CarouselM from './components/Carousel-M';


function App() {

  useEffect(() => {
    document.title = "Filcon - Home";
  },[]);
  
 
  {
    /*
    
    Carousel
    Promotions
    title
    Products 
    Footer
    Search
    App drawer
    */
  }


  return (
    <ThemeProvider theme={mytheme}>
    
    <NavbarM />
    <CarouselM />

     
      
      
    </ThemeProvider>
  
  );
}

export default App;
