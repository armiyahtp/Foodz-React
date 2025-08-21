import React from 'react'
import { useSign } from '../../context/SignContext'
import { Navigate, Outlet } from 'react-router-dom'
import Home from '../../pages/Home'
import toast from 'react-hot-toast'

const AuthUser = () => {
   const token = localStorage.getItem('BearToken')

    if (!token) {
        toast.error("You need to log in first")
        return <Navigate to="/" replace />
    } else {
        return <Outlet />
    }
}

export default AuthUser
