import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "routes/home/Home.component";
import NavigationBar from "routes/navigation/Navigation.component";
import Authentication from "routes/authentication/Authentication.component";

import "./category.styles.scss";

const Shop = () => <h2> Shop page </h2>;

const App = () => (
  <Routes>
    <Route path="/" element={<NavigationBar />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
    </Route>
  </Routes>
);

export default App;
