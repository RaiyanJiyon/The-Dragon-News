import { useEffect, useState } from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";


const CenterSidebar = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('data/news.json')
            .then(response => response.json())
            .then(jsonData => setNews(jsonData))
            .catch(error => console.error(error));
    }, []);

    const handleReadMore = () => {

    }

    return (
        <div>
            <h3 className="text-2xl font-semibold text-center">Dragon News Home</h3>

            <div className="mt-5 space-y-8">
                {
                    news.map(aNews => (
                        <div key={aNews.id} className="card bg-base-100 border border-[#E7E7E7]">
                            <div className="flex justify-between items-center px-5 py-3 bg-[#F3F3F3]">
                                <div className="flex items-center gap-2">
                                    <img className="w-10 h-10 rounded-full" src={aNews.author.img} alt="author image" />
                                    <div>
                                        <p className="font-bold">{aNews.author.name}</p>
                                        <p>{aNews.author.published_date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <CiBookmark />
                                    <CiShare2 />
                                </div>
                            </div>

                            <h2 className="w-11/12 mx-auto text-xl font-bold mt-2">{aNews.title}</h2>

                            <figure className="w-11/12 mx-auto mt-5">
                                <img
                                    src={aNews.image_url}
                                    alt={`${aNews.image_url} image`}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center">
                                {
                                    aNews.details.length > 200 ?
                                        <p className="text-[#706F6F]">
                                            {aNews.details.slice(0, 200)}...
                                            <Link to={"/news-details"} onClick={handleReadMore} className="text-[#fb7651] font-bold">Read More</Link>
                                        </p>
                                        :
                                        <p className="text-[#706F6F]">{aNews.details}</p>

                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CenterSidebar;