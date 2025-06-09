import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes'

function App() {
  return <RouterProvider router={ routes } />
}

export default App
