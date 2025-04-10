import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import auth from '../../firebase'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const {register,handleSubmit} = useForm()
    const redirect = useNavigate()

    function regist(data){
        console.log(data)
        signInWithEmailAndPassword(auth,data.email,data.password)
        .then(()=>{
            alert("login successfully!")
            redirect('/')
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <form method='post' onSubmit={handleSubmit(regist)}  className="col-lg-6 mx-auto my-5 p-5 shadow">
            <h2 className='text-center'>Login</h2>
            <div className="mt-4">
                <input type="text" {...register('email')} className='form-control' placeholder='enter email id' />
            </div>
            <div className="mt-4">
                <input type="password" {...register('password')} className='form-control' placeholder='enter password id' />
            </div>
            <div className="mt-4">
                <button className='btn btn-success'>login</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn
