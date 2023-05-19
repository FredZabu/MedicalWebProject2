import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Pages/Home/Home";
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Footer from './Components/Footer/Footer';
import Dashboard from './Pages/Dashboards/Main/MainDashBoard';
import PublicDashBoard from './Pages/Dashboards/Public/PublicDashBorad';
import Auth from './Pages/Dashboards/Auth/Auth';
import Owner from './Pages/Dashboards/Owner/Owner';
import Patient from './Pages/Dashboards/Patient/Patient';
import Admin from './Pages/Dashboards/Admin/Admin';
import Hospital from './Pages/Dashboards/Hospital/Hospital';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/public" element={ <PublicDashBoard />} />
        <Route path="/dashboard/authorized" element={  <Auth />} />
        <Route path="/dashboard/hospital"  element={<Hospital />} />
        <Route  path="/dashboard/patient" element={<Patient />} />
        <Route  path="/dashboard/admin" element={  <Admin />} />
        <Route exact path="/dashboard/owner" element={ <Owner />} />
    
      </Routes>
      <Footer />

    </>
  )
}

export default App;