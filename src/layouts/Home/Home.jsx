import Header from "../../components/Header/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import NavBar from "../../components/NavBar/NavBar"
import LeftNav from "../../components/LeftNav/LeftNav"
import RightNav from "../../components/RightNav/RightNav";

const Home = () => {
    return (
        <div className=" max-w-screen-xl mx-auto px-5">
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-12">
                <div className="border"><LeftNav></LeftNav></div>
                <div className=" col-span-2 border">News Coming soon .</div>
                <div className="border"><RightNav></RightNav></div>
            </div>
        </div>
    );
};

export default Home;