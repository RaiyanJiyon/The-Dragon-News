import Header from "../components/shared/Header"
import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header />

            {/* React Fast Marquee section */}
            <div className="flex items-center gap-4 bg-[#F3F3F3] p-4 mt-8">
                <button className="btn bg-[#D72050] text-white font-medium">Latest</button>
                <Marquee pauseOnHover speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
        </div>
    );
};

export default Home;