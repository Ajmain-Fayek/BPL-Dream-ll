import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
    // toast
    const toastMsg = (msg_text) => {
        const Msg = ({ closeToast, toastProps }) => (
            <div className="text-red-800">{msg_text}</div>
        );
        toast(Msg);
    };

    // Toast Call function
    const displayMsg = (alertMsg) => {
        toastMsg(alertMsg);
        // toast(Msg) would also work
    };

    // Subscription email localstorage handler
    const subscribeHandler = () => {
        const email = document.getElementById("nsInput").value;

        email === ""
            ? displayMsg("Enter your email to Subscribe")
            : localStorage.getItem("user") === email
            ? displayMsg("User Already Exist")
            : localStorage.setItem("user", email);

        document.getElementById("nsInput").value = "";
    };
    return (
        <footer className="bg-footer-bg">
            {/* Max Screen Footer Container */}
            <div className="max-w-screen-2xl mx-auto p-2">
                {/* Footer */}
                <div className="footer justify-between px-4 py-10">
                    <nav>
                        <h6 className="footer-title text-text-primary-white opacity-100">
                            About Us
                        </h6>
                        <p className="text-text-secondary-white">
                            We are a passionate team <br /> dedicated to
                            providing the best <br /> services to our customers.
                        </p>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-text-primary-white opacity-100">
                            Quick Links
                        </h6>
                        <a className="link link-hover text-text-secondary-white">
                            Home
                        </a>
                        <a className="link link-hover text-text-secondary-white">
                            Services
                        </a>
                        <a className="link link-hover text-text-secondary-white">
                            About
                        </a>
                        <a className="link link-hover text-text-secondary-white">
                            Contact
                        </a>
                    </nav>
                    <form id="f">
                        <h6 className="footer-title text-text-primary-white opacity-100">
                            Subscribe
                        </h6>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="label-text text-text-secondary-white">
                                    Subscribe to our newsletter for the latest
                                    updates.
                                </span>
                            </label>
                            <div className=" sm:join space-y-2 sm:space-y-0">
                                <input
                                    id="nsInput"
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input min-w-8 input-bordered join-item shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border-none focus:outline-none focus:shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]"
                                />
                                <button
                                    onClick={subscribeHandler}
                                    className="btn border-none bg-gradient-to-r from-purple-400 to-orange-500 join-item shadow-[inset_0_0_10px_rgba(0,0,0,0.4)]"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>

            {/* Horizontal line */}
            <div className="w-full border-t border-gray-800"></div>

            {/* Copy rights */}
            <div className="bg-footer-bg">
                <div className="max-w-screen-2xl mx-auto text-center px-4 py-6">
                    <small className="text-text-secondary-white">
                        @2024 Your Company All Rights Reserved.
                    </small>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
