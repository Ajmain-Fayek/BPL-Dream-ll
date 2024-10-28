import Banner_Logo from "../../assets/banner-main.png";
import Banner_bg from "../../assets/bg-shadow.png";
import "react-toastify/dist/ReactToastify.css";

function Banner() {
    const amout = (a) => {
        return isNaN(parseFloat(localStorage.getItem("coin1234")))
            ? a
            : (parseFloat(localStorage.getItem("coin1234")) + a) % 1 !== 0
            ? (parseFloat(localStorage.getItem("coin1234")) + a).toFixed(2)
            : parseFloat(localStorage.getItem("coin1234")) + a;
    };

    const claimCoins = () => {
        localStorage.setItem("coin1234", amout(1000000));

        document.getElementById("coin1").innerHTML = `$${localStorage.getItem(
            "coin1234"
        )}`;
        document.getElementById("coin2").innerHTML = `$${localStorage.getItem(
            "coin1234"
        )}`;
    };

    return (
        <div
            className={
                localStorage.getItem("user")
                    ? "max-w-screen-2xl mx-auto bg-black rounded-xl mt-36 relative"
                    : "max-w-screen-2xl mx-auto bg-black rounded-xl mt-32 relative"
            }
        >
            <div
                className={
                    localStorage.getItem("user") ? "p-2 absolute -top-10" : ""
                }
            >
                {localStorage.getItem("user")
                    ? `Welcome Back ${localStorage.getItem("user")}`
                    : ""}
            </div>
            <div
                className="text-center flex flex-col gap-4 bg-no-repeat bg-cover bg-center rounded-xl py-14 px-2"
                style={{ backgroundImage: `url(${Banner_bg})` }}
            >
                <div className="mx-auto mb-4">
                    <img src={Banner_Logo} alt="" />
                </div>
                <h1 className="text-text-primary-white font-bold sm:text-4xl text-xl">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-text-secondary-white sm:text-2xl text-base">
                    Beyond Boundaries Beyond Limits
                </p>
                <button
                    onClick={claimCoins}
                    id="cfc1"
                    className="w-fit mx-auto p-px active:my-1.5 bg-btn-primary hover:bg-gradient-to-r from-purple-400 to-orange-500 rounded-xl"
                >
                    <div className="bg-black p-1.5 active:p-0 rounded-xl">
                        <p
                            id="cfc2"
                            className="bg-btn-primary text-text-primary-black py-2 px-4 rounded-lg font-semibold hover:bg-gradient-to-r from-purple-400 to-orange-500"
                        >
                            Claim Free Credit
                        </p>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Banner;
