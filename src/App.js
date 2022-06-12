
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/system';
import mytheme from './styles/theme';
import Appbar from './components/appbar';

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
<Container maxWidth="xl">
<Appbar/>
     
      </Container>
      
    </ThemeProvider>
  
  );
}

export default App;
