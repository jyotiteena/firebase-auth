import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import auth from '../../firebase'

const Navbar = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (profile) => {
      setUser(profile)
    })
  }, [])

  const redirect =  useNavigate()
  function logout(){
    signOut(auth)
    .then(()=>{
      redirect('/signin')
    })
    .catch((err)=>console.log(err))
  }
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <NavLink class="navbar-brand" to="">Navbar</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {
                user === null
                  ?
                  (
                    <>
                      <li class="nav-item">
                        <NavLink class="nav-link mx-2" to="/popup">Google Login</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link mx-2" to="/signup">Signup</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link mx-2" to="/signin">signin</NavLink>
                      </li>
                    </>
                  )
                  :
                  (
                    <>
                      <li class="nav-item">
                        <NavLink class="nav-link active mx-2" aria-current="page" to="/">Home</NavLink>
                      </li>
                      <li class="nav-item">
                        <NavLink class="nav-link mx-2" to="/view">View</NavLink>
                      </li>
                      <li>
                        <button onClick={logout} className='btn btn-danger'>logout</button>
                      </li>
                    </>
                  )
              }


            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
