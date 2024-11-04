import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import SideBar from './components/SideBar';
import React, { createContext, useState } from 'react';
import Header from './components/Header';
import Flights from './pages/Flights';
import Footer from './components/Footer';
import Hotels from './pages/Hotels';
import Cabs from './pages/Cabs';
import Blogs from './pages/Blogs';
import Tours from './pages/Tours';
import TourDetails from './pages/TourDetails';
import BlogFull from './pages/BlogFull';
import Login from './pages/Login';
import Register from './pages/Register';
import Payment from './pages/Payment';
import DashBoard from './pages/DashBoard';
import ForgotPassword from './pages/ForgotPassword';
import AdminLayout from './pages/AdminLayout';

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Loader from './components/Loader';
import Test from './components/Test';



const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
});

export const SideBarContext = createContext()
export const LoadingContext = createContext()


const App = () => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false)

  return <>
    <ToastContainer />
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <SideBarContext.Provider value={{ open, setOpen }}>
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <Loader />
          <BrowserRouter>
            <SideBar />
            <Routes>
              <Route path='/' element={<><Header /> <Outlet /> <Footer /></>}>
                <Route index element={<Home />} />
                <Route path='/hotels' element={<Hotels />} />
                <Route path='/flights' element={<Flights />} />
                <Route path='/cabs' element={<Cabs />} />
                <Route path='/tours' element={<Tours />} />
                <Route path='/tour-details/:id' element={<TourDetails />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/blog/:id' element={<BlogFull />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/dashBoard' element={<DashBoard />} />
                <Route path='/signup' element={<Register />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/test' element={<Test />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='*' element={<h1>Page Not Found</h1>} />
              </Route>


              <Route path='/admin' element={<><Outlet /></>}>
                <Route index element={<AdminLayout />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LoadingContext.Provider>
      </SideBarContext.Provider >
    </ThemeProvider >
  </>
}

export default App