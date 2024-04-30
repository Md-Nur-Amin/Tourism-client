import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import app from "../Firebase/Firebase.config";

const Register = () => {

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext);

    const [user, setUser] = useState(null);
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);



    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registered successfully'
                });
                navigate(location?.state ? location.stale : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const gitProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registered successfully'
                });
                navigate(location?.state ? location.stale : '/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password);

        // Register error check and Register succes check 
        setRegError('')
        setSuccess('')

        if (password.length < 6) {
            Swal.fire({
                icon: 'info',
                title: 'Password should be at least 6 characters or longer'
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'info',
                title: 'Password should have at least one uppercase character'
            });
            return;
        }
        else if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: 'info',
                title: 'Password should have at least one lowercase character'
            });
            return;
        }

        createUser(email, password, name, photo)
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registered successfully'
                        });
                        navigate(location?.state ? location.stale : '/')
                    })
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message)
            })


    }



    return (
        <div>

            <div className="hero min-h-screen bg-base-200 py-5">

                <div className="card shrink-0 w-full max-w-sm shadow-3xl bg-base-100 py-10">
                    <h2 className="text-2xl font-quicksand font-bold text-center ">Welcome to register page</h2>
                    {/* Form start */}
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" name="photo" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            {/* <input type="password" placeholder="password" className="input input-bordered" name="password" required /> */}
                            <div className='flex'>
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="password"
                                    className="input input-bordered lg:px-16"
                                    required name='password' />
                                <span className='mt-5 ml-2' onClick={() => setShowPass(!showPass)} >
                                    {
                                        showPass ? <FaEyeSlash /> : <FaEye />
                                    }
                                </span>
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>

                        </div>

                        <p>Already have and account? please <Link className="underline text-blue-700" to='/login' > login </Link> </p>
                        <hr />
                    </form>


                    <div className='text-center'>

                        <h2 className="text-xl mb-4">Login With</h2>

                        <div className=' flex justify-center mb-3'>
                            <button onClick={handleGoogleSignIn} className="mr-5"> <FcGoogle className='h-[30px] w-[30px]' /> </button>

                            <button onClick={handleGithubSignIn} className=""> <FaGithub className='h-[30px] w-[30px]' /> </button>

                        </div>

                        {
                            regError && <p className='text-red-600 ' > {regError} </p>
                        }

                        {
                            success && <p className='text-green-600 ' > {success} </p>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
