import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '@containers/Layout.jsx';
import Home from '@pages/Home.jsx';
import ProductPageDetails from '@pages/ProductPageDetails.jsx';

import AppContext from "@context/AppContext";
import '@styles/global.css';

const App = () => {
  return (
    <AppContext.Provider >
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productdetails" element={<ProductPageDetails />} />

        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;