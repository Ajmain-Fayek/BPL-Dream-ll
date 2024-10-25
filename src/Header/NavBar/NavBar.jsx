import Logo from "../../assets/logo.png";
import Coin from "./Coin";

function NavBar() {
    return (
        <nav className="max-w-screen-2xl sticky top-0 z-50 mx-auto flex gap-4 justify-between items-center py-4 backdrop-blur-xl">
            <div>
                <a href="">
                    <img src={Logo} className="w-16" alt="BPL Dream 11 logo" />
                </a>
            </div>
            <div className="flex gap-4 items-center">
                <a href="" className="text-text-secondary-black">
                    Home
                </a>
                <a href="" className="text-text-secondary-black">
                    Fixture
                </a>
                <a href="" className="text-text-secondary-black">
                    Teams
                </a>
                <a href="" className="text-text-secondary-black">
                    Schedules
                </a>

                {/* Coin Button design */}
                <p className="flex gap-1.5 items-center font-semibold border p-2 rounded-xl">
                    <span>0</span> Coin {<Coin></Coin>}
                </p>
            </div>
        </nav>
    );
}

export default NavBar;
