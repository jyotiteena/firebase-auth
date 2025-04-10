import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import auth from '../../firebase'
import { useNavigate } from 'react-router-dom'

const SignUpWithGoogle = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (profile) => {
            setUser(profile)
        })
    }, [])

    const redirect = useNavigate()
    function logout() {
        signOut(auth)
            .then(() => {
                alert("logout")
                redirect('/login')
            })
            .catch((err) => console.log(err))
    }

    async function signup() {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
                redirect('/')
            })
    }
    return (
        <div>
            {
                user === null ?
                    <button onClick={signup}>Signin With Google</button>
                    :
                    (
                        <div className="col-lg-6 mx-auto my-5 p-5 shadow text-center">
                            <img src={user?.photoURL} alt="" />
                            <h2>{user?.displayName}</h2>
                            <p>{user?.email}</p>
                            <button onClick={logout} className='btn btn-danger'>logout</button>
                        </div>
                    )
            }
        </div>
    )
}

export default SignUpWithGoogle
