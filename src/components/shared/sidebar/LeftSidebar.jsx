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
                <div className="mt-14 space-y-6">
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
