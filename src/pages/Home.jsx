import Navbar from "../components/Navbar";
import Header from "../components/shared/Header"
import Marquee from "react-fast-marquee";
import LeftSidebar from "../components/shared/sidebar/LeftSidebar";
import RightSidebar from "../components/shared/sidebar/RightSidebar";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* Header section */}
            <Header />

            {/* React Fast Marquee section */}
            <div className="flex items-center gap-4 bg-[#F3F3F3] p-4 mt-8">
                <button className="btn bg-[#D72050] text-white font-medium">Latest</button>
                <Marquee pauseOnHover speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>

            {/* Navbar section */}
            <Navbar />

            {/* sidebar section */}

            <div className="grid md:grid-cols-4 gap-6">
                <div className="col-span-1">
                    <LeftSidebar />
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-1 space-y-5">
                    <RightSidebar />
                    <div className="bg-[#05001DCC] py-16 px-9">
                        <h3 className="text-3xl text-white font-bold">Create an Amazing Newspaper</h3>
                        <p className="text-white mt-5">
                        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                        </p>
                        <button className="btn bg-[#D72050] border-none text-xl text-white font-semibold mt-8">
                        Learn More
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;