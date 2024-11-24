import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/shared/Header";

const Career = () => {
    return (
        <div>
            <Header />
            <div className="mt-6">
                <Navbar />
            </div>

            <div className='md:w-1/2 mx-auto flex flex-col justify-center items-center space-y-4 mt-16'>
                <h1 className='text-3xl font-bold text-center'>This content isn&apos;t available at the moment</h1>
                <p className='text-xl font-medium text-center'>When this happens, it&apos;s usually because the owner only
                    shared it with a small group of people or changed who can
                    see it, or it&apos;s been deleted.</p>

                <Link to={"/"}>
                    <button className='btn bg-[#D72050] border-none text-xl text-white font-semibold mt-8'>Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Career;