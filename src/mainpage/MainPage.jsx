import './MainPage.css'
import { Outlet } from "react-router-dom"
import Header from '../Header/Header'
export default function MainPage() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

