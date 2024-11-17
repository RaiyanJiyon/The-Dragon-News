import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
    const loader = useLoaderData();
    console.log(loader);
    return (
        <div>
            <h1>News Details Page</h1>
        </div>
    );
};

export default NewsDetails;