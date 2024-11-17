import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
    const [error, setError] = useState('');

    const { logIn } = useContext(AuthContext);

    const handleLoginForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        console.log(email, password);

        logIn(email, password)
            .then(userCredential => {
                console.log(userCredential.user);
                form.reset(); // Reset the form fields
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    return (
        <div className="bg-[#f3f3f3]">
            <div className="pt-5">
                <Navbar />
            </div>

            {/* login form */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content md:w-1/2">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-14">
                        {error && <p className="text-red-500 text-center">Invalid username or password</p>}
                        <form onSubmit={handleLoginForm} className="card-body">
                            <h2 className="text-3xl font-bold text-center">Login your account</h2>
                            <div className="divider"></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email address</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white font-bold">Login</button>
                            </div>
                            <p className="text-center mt-8">Don&apos;t Have An Account ? <Link to={"/register"} className="text-[#F75B5F]">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
