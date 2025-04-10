import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import auth from "../../firebase"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (profile) => {
            setUser(profile)
        })
    }, [])
    return user===null ? <Navigate to='/signin' /> : <Outlet/>
}

export default PrivateRoute
