import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Nav/NavBar'

export default function AdminLayout() {
    return (
        <div style={{ display: 'flex', position: 'relative' }}>
            <NavBar />

            <Outlet />
        </div>
    )
}
