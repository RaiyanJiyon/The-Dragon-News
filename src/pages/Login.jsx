import Navbar from "../components/Navbar";


const Login = () => {
    return (
        <div className="bg-[#f3f3f3]">
            <div className="pt-5">
                <Navbar />
            </div>

            {/* login form */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content md:w-1/2">
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl py-20">
                        <form className="card-body">
                            <h2 className="text-3xl font-bold text-center">Login your account</h2>
                            <div className="divider"></div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email address</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#403F3F] text-white font-bold">Login</button>
                            </div>
                            <p className="text-center mt-8">Don&apos;t Have An Account ? <span className="text-[#F75B5F]">Register</span></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;