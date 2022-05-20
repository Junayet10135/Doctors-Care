import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/LogIn/Login';
import RequireAdmin from './Pages/LogIn/RequireAdmin';
import RequireAuth from './Pages/LogIn/RequireAuth';
import SignUp from './Pages/LogIn/SignUp';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element=
        {
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element=
          {
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
           <Route index element={<MyAppointments></MyAppointments>}></Route> 
           <Route path='review' element={<MyReview></MyReview>}></Route>
           <Route path='history' element={<MyHistory></MyHistory>}></Route>
           <Route path='payment/:id' element={<Payment></Payment>}></Route>
           <Route path='users' element={
             <RequireAdmin>
              <Users></Users>
             </RequireAdmin>
           }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor></AddDoctor>
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequireAdmin>
              <ManageDoctors></ManageDoctors>
            </RequireAdmin>
          }></Route>
          </Route>
        <Route path='/contact' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
      
    </div>
  
  );
}

export default App;
