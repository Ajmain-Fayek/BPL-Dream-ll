import NavBar from "./NavBar/NavBar";
import Banner from "./Banner/Banner";

function Header() {
    return (
        <header className="p-2">
            <NavBar />
            <Banner />
        </header>
    );
}

export default Header;
