import Logo from "../../assets/logo.png";
import Coin from "./Coin";

function NavBar() {
    // Manu Button Functionality & Animation
    const showMenu = () => {
        const menu = document.getElementById("menu-link");
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
        menuCross();
        showHideManu();
    };

    // Menu Cross Animation
    const menuCross = () => {
        const menu_button = document.getElementById("menu-btn");
        const menuTopBar = menu_button.querySelectorAll(".nav-top")[0];
        const menuMiddleBar = menu_button.querySelectorAll(".nav-middle")[0];
        const menuBottomBar = menu_button.querySelectorAll(".nav-bottom")[0];

        menuTopBar.classList.toggle("rotate-45");
        menuTopBar.classList.toggle("translate-y-2.5");
        menuMiddleBar.classList.toggle("invisible");
        menuBottomBar.classList.toggle("-rotate-45");
        menuBottomBar.classList.toggle("-translate-y-2.5");
    };

    // Show/Hide Menu
    function showHideManu() {
        const menu = document.getElementById("menu-link");
        const a = Array.from(menu.getElementsByTagName("a"));
        a.forEach((link) => link.addEventListener("click", showMenu));
    }

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 bg-navbar-bg backdrop-blur-xl">
            <div className="hidden sm:flex max-w-screen-2xl  mx-auto gap-4 justify-between items-center py-4 px-2">
                <div>
                    <a href="">
                        <img
                            src={Logo}
                            className="w-16"
                            alt="BPL Dream 11 logo"
                        />
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
            </div>
            {/* Mobile NavBar */}
            <div className="sm:hidden">
                <div className="NavToggle flex justify-between items-center py-4 px-2">
                    {/* Menu Button */}
                    <div>
                        <a href="">
                            <img
                                src={Logo}
                                className="w-16"
                                alt="BPL Dream 11 logo"
                            />
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Coin Button design */}
                        <p className="flex gap-1.5 items-center font-semibold border p-2 rounded-xl">
                            $0 Coin {<Coin></Coin>}
                        </p>

                        <button
                            onClick={showMenu}
                            id="menu-btn"
                            className="flex flex-col gap-1.5 hover:cursor-pointer"
                        >
                            <span className="rounded-lg h-1 w-7 bg-black nav-top"></span>
                            <span className="rounded-lg h-1 w-7 bg-black nav-middle"></span>
                            <span className="rounded-lg h-1 w-7 bg-black nav-bottom"></span>
                        </button>
                    </div>

                    <div
                        id="menu-link"
                        className="hidden flex-col top-24 left-4 right-4 rounded-lg py-4 bg-gray-200 gap-4 items-center border border-blue-200 absolute"
                    >
                        <a
                            href=""
                            className="text-text-secondary-black hover:link-hover"
                        >
                            Home
                        </a>
                        <a
                            href=""
                            className="text-text-secondary-black hover:link-hover"
                        >
                            Fixture
                        </a>
                        <a
                            href=""
                            className="text-text-secondary-black hover:link-hover"
                        >
                            Teams
                        </a>
                        <a
                            href=""
                            className="text-text-secondary-black hover:link-hover"
                        >
                            Schedules
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
