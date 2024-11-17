import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../components/shared/Header";
import RightSidebar from "../components/shared/sidebar/RightSidebar";
import NewsCard from "../components/shared/NewsCard";


import newsImg1 from "../assets/1.png";
import newsImg2 from "../assets/2.png";
import newsImg3 from "../assets/3.png";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const NewsDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 100);
    }, []);

    const allNews = useLoaderData();
    const { id } = useParams();

    const newsItem = allNews.find(news => news._id === id);

    return (
        <div className="w-11/12 mx-auto">
            {/* Header section */}
            <Header />

            <div className="mt-6">
                <Navbar />
            </div>

            <div className="grid md:grid-cols-4 mt-8 gap-7">
                <div className="col-span-3">
                    <h3 className="text-2xl font-semibold">Dragon News</h3>
                    <div className="card bg-base-100 border border-[#E7E7E7] mt-5">
                        <figure className="w-11/12 mx-auto mt-5">
                            <img
                                src={newsItem.image_url}
                                alt={`${newsItem.image_url} image`}
                                className="rounded-xl w-full" />
                        </figure>
                        <div className="card-body items-center">
                            <h2 className="text-xl font-bold w-full">{newsItem.title}</h2>
                            <p className="text-[#706F6F]">{newsItem.details}</p>
                        </div>
                        <Link className="w-11/12 mx-auto pb-10" to={"/"}>
                            <button className="btn btn-wide bg-[#D72050] text-white font-bold ">All news in this category</button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSidebar />
                </div>
            </div>

            <h3 className="md:w-3/4 text-2xl font-bold mt-8 pl-2">Editors Insight</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-3/4 mt-8 pb-20">
                <NewsCard
                    newsImg={newsImg1}
                    title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
                    category={"Sports"}
                />
                <NewsCard
                    newsImg={newsImg2}
                    title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
                    category={"Sports"}
                />
                <NewsCard
                    newsImg={newsImg3}
                    title={"Bayern Slams Authorities Over Flight Delay to Club World Cup"}
                    category={"Sports"}
                />
            </div>
        </div>
    );
};

export default NewsDetails;