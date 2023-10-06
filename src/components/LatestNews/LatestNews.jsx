import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-[#F3F3F3] p-4 flex gap-5 mt-6">
            <div>
                <button className="btn rounded-none bg-[#D72050] text-xl text-white font-poppins font-medium border-2  hover:border-rose-500 hover:bg-transparent hover:text-[#D72050]">Latest</button>
            </div>
            <Marquee>
                <p className="mr-12 font-poppins text-center font-semibold text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className="mr-12 font-poppins text-center font-semibold text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className="mr-12 font-poppins text-center font-semibold text-lg">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;