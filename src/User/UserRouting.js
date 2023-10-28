import React, { Component, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './scss/style.scss'
// import Profile from './Account/Profile'



const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(()=>import('./DefaultLayout'))
// const Profile = React.lazy(()=>import('./profile'))

// Pages
// const Register = React.lazy(() => import('./views/pages/Register'))

class User extends Component {
  render() {
    return (
        <Suspense fallback={loading}>       
          <Routes>
            {/* <Route exact path="/register" name="Register Page" element={<Register/>} /> */}
            <Route path="*" name="Home" element={<DefaultLayout/>} />
           
            {/* <Route path="profile" name="ProfileView" element={<Profile/>} /> */}
          </Routes>
        </Suspense>
    )
  }
}

export default User
