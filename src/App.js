// import './App.css';
import WebPage from './Component/InoteBook/WebPage';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorBoundary from './User/ErrorBoundary';
import Registration from './Component/Pages/Registration';
import Login from './Component/Pages/Login';
import User from './User/UserRouting';
import ForgotPassword from './Component/Pages/ForgotPassword';
import ResetPassword from './Component/Pages/ResetPassword';

function App() {
  return (
    <>
     <ErrorBoundary>      
     <Router>
        <Routes>
          {/* router */}
          <Route path="/user/*" element={<User/>} />
          <Route path="*" element={<WebPage/>}></Route>
          <Route path="register" element={<Registration/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="forgot" element={<ForgotPassword/>}/>
          <Route path="resetpassword/:resetToken" element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </ErrorBoundary>
    </>
  );
}

export default App;
