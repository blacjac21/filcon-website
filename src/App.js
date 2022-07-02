
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import mytheme from './styles/theme';
import NavbarM from './components/Navbar-M';
import CarouselM from './components/Carousel-M';
import MaintextM from './components/MainTextM';
import OurClientsM from './components/OurClientsM';
import ProductsM from './components/ProductsM';


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
    <MaintextM />
    <OurClientsM />
    <ProductsM />
     
      
      
    </ThemeProvider>
  
  );
}

export default App;
