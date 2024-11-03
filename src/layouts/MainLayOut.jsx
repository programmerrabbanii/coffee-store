import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>
            {/* <div className='min-h-[calc(100vh-467px)]'></div> */}
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayOut;