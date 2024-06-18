import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/routes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
