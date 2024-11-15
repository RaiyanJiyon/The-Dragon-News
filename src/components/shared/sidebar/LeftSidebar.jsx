import newsImg1 from "../../../assets/1.png";
import newsImg2 from "../../../assets/2.png";
import newsImg3 from "../../../assets/3.png";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NewsCard from "../NewsCard";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("/data/categories.json")
            .then(response => response.json())
            .then(jsonData => setCategories(jsonData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div>
                <h3 className="text-2xl font-semibold pb-5">All Category</h3>
                <div className="grid grid-cols-1 gap-8 rounded-md">
                    {
                        categories.map(category => (
                            <NavLink
                                key={category.id}
                                to={category.path}
                                className={({ isActive }) =>
                                    isActive ? "bg-[#E7E7E7] text-xl font-semibold py-4 text-center" : "text-red-500 py-4 text-center"
                                }
                            >
                                {category.name}
                            </NavLink>
                        ))
                    }
                </div>
                <div className="mt-8 space-y-6">
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
        </div>
    );
};

export default LeftSidebar;
