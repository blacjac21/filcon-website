import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Filcon - Home";
  },[]);



  return (
    <div className="App">
      <Button>Test1</Button>
    </div>
  );
}

export default App;
