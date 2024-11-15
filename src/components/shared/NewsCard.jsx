import moment from "moment";
import { SlCalender } from "react-icons/sl";

const NewsCard = ({ newsImg, title, category }) => {
    return (
        <div className="card">
            <figure>
                <img
                    src={newsImg}
                    alt={`${title} image`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center gap-8 mt-5">
                    <h3 className="font-medium">{category}</h3>
                    <div className="flex items-center gap-2 text-[#9F9F9F] font-medium">
                        <SlCalender className="text-lg" />
                        <span>{moment().format("MMM D, YYYY")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
