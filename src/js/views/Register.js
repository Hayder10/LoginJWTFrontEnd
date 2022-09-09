import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registered, setRegistered] = useState(false)

    const sendDatabase = (userdata) => {
        fetch('https://login-jwt-api-hayder10.herokuapp.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        },
        )
        .then((response) => {return response.json()})
        .then((data) => {console.log(data); setRegistered(true)})
        .catch((error) => {console.log(error)})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userdata = {
            "email" : email,
            "password" : password
        }
        sendDatabase(userdata);
    }

    if(registered){
        let history = useHistory();
        history.push('/login')
    }

  return (
    <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <form className="m-5" style={{ width: '450px' }} onSubmit={(e) => handleSubmit(e)}>
                    <div className='col-md-12 text-center mb-4'><h3>Register</h3></div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                                Email:
                            </label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                                Password:
                            </label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary gap-2">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Register