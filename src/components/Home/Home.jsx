import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h3>we go to home at the moment</h3>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;