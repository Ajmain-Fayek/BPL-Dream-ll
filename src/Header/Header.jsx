import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";
import "react-toastify/dist/ReactToastify.css";

function Header() {
    return (
        <header className="p-2">
            <NavBar />
            <Banner />
        </header>
    );
}

export default Header;
