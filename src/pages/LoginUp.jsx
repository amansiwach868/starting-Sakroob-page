import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import ForgetPassword from '../components/ForgetPassword'

const Login = () => {
    return (
        <div>
            <Routes>
                <Route index path='/loginpage' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/forgetpassword' element={<ForgetPassword />} />
            </Routes>
        </div>
    )
}

export default Login