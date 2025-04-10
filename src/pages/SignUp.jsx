import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import auth from '../../firebase'

const SignUp = () => {
    const {register,handleSubmit} = useForm()

    function regist(data){
        console.log(data)
        createUserWithEmailAndPassword(auth,data.email,data.password)
        .then(()=>{
            alert("registration successfully!")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <form method='post' onSubmit={handleSubmit(regist)}  className="col-lg-6 mx-auto my-5 p-5 shadow">
            <h2 className='text-center'>Registration</h2>
            <div className="mt-4">
                <input type="text" {...register('email')} className='form-control' placeholder='enter email id' />
            </div>
            <div className="mt-4">
                <input type="password" {...register('password')} className='form-control' placeholder='enter password id' />
            </div>
            <div className="mt-4">
                <button className='btn btn-success'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp
