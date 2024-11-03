import { Link, Outlet, useLoaderData } from "react-router-dom";
import Bannar from "../components/Bannar";
import Headeing from "../components/Headeing";
import Categories from "../components/Categories";

const Home = () => {
    const categories=useLoaderData()
    return (
        <div>
            <Bannar></Bannar>
            <Headeing></Headeing>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;