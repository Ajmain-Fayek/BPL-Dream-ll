import Banner_Logo from "../../assets/banner-main.png";
import Banner_bg from "../../assets/bg-shadow.png";

function Banner() {


    return (
        <div className="max-w-screen-2xl mx-auto bg-black rounded-xl">
            <div
                className="text-center flex flex-col gap-4 bg-no-repeat bg-cover bg-center rounded-xl p-14"
                style={{backgroundImage: `url(${Banner_bg})`}}
            >
                <div className="mx-auto mb-4"> 
                    <img src={Banner_Logo} alt="" />
                </div>
                <h1 className="text-text-primary-white text-4xl">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-text-secondary-white text-2xl">
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="w-fit mx-auto border border-btn-primary rounded-xl">
                    <div className="p-1.5 rounded-xl">
                        <p className="bg-btn-primary text-text-primary-black py-2 px-4 rounded-lg font-semibold ">
                            Claim Free Credit
                        </p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Banner;
