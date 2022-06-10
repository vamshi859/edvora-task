import React from 'react'
import logo from "../../assets/logo.svg"
import { useStore } from '../../context/Store'
import "./styles.css"
const Navbar = () => {
  const {user} = useStore();
  return (
    <nav className = "navbar" >
            <div className = "container">
                <div className = "row">
                    <div className = "logo" >
                        <img src = { logo } alt = "logo" />
                    </div>                    
                        <div className = "row">
                            <p className = "name" >{ user.name }</p>
                            <div className = "avatar" >
                                <img src = { user.url } alt = "avatar" />
                            </div>
                        </div>
                </div>
            </div>
        </nav>
  )
}

export default Navbar;