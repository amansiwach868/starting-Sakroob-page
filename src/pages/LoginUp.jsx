import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import SignUpPage from '../components/SignUpPage'
import ForgetPassword from '../components/ForgetPassword'

const LoginUp = () => {
    return (
        <div>
            <Routes>
                <Route index element={<Navigate to="/login" />} />
                <Route  path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/forgetpassword' element={<ForgetPassword />} />
            </Routes>
        </div>
    )
}

export default LoginUp