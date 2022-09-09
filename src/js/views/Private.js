import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Private() {
  const [name, setName] = useState('')

  useEffect(() => {
    fetch('https://login-jwt-api-hayder10.herokuapp.com/private', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }
    })
      .then((response) => {
        if (response.status === 401 || response.status === 422) {
          console.log('UNAUTHORIZED')
          handleLogout_no_anim();
        } else {
          return response.json()
        }
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error))

    setName(sessionStorage.getItem('user'))
  }, [])

  let history = useHistory()
  const handleLogout = () => {
    setTimeout(() => {history.push('/login')},2500)
    sessionStorage.clear()
    toast.warning('Logging out...', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

  }
  const handleLogout_no_anim = () => {
    history.push('/login')
    sessionStorage.clear()
  }

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="dropdown ms-auto">
              <button className="btn btn-primary dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end text-center">
                <button className='btn btn-danger' onClick={() => handleLogout()}>Log Out</button>
              </ul>
            </div>
          </div>
        </div >
      </nav >
      <div className='container d-flex mt-5 flex-column align-items-center'>
        <h1>Private Data</h1>
        <h3>You should be able to see this data only if you're correctly logged in.</h3>
        <h4>User : {name}</h4>
      </div>
    </div>
  )
}

export default Private