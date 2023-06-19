import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contex/AuthProvider';


const Sining = () => {
   

    const {createUserWithEmailAndPass, setLoading} = useContext(AuthContext);

  const [errors, setErrors] = useState(null);

  const handleCreateUser = event => {
    event.preventDefault();
    const form= event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
     
    createUserWithEmailAndPass(email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
    })
    .catch(error=>{
        setErrors(error.message)
    })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form  onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className='label'>
                         <Link to="/login" href="#" className="label-text-alt link link-hover text-primary">login here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button  className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sining;