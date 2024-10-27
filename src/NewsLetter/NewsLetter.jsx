import Banner_bg from "../assets/bg-shadow.png";
import Logo from "../assets/logo-footer.png";

function NewsLetter() {
    return (
        <div className="relative">
            <div className="py-40 sm:py-40"></div>
            <div className="absolute left-2 right-2 top-24 mx-auto space-y-6">
                <div className="border-4 bg-newsLetter-bg rounded-2xl border-white max-w-screen-2xl mx-auto p-4">
                    <div className="bg-newsLetter-bg2 border rounded-lg">
                        <div
                            style={{ backgroundImage: `url(${Banner_bg})` }}
                            className="px-2 py-32 bg-cover bg-right-top sm:bg-center rounded-lg text-center space-y-4"
                        >
                            <p className="text-text-primary-black font-bold sm:text-2xl text-lg">
                                Subscribe to our Newsletter
                            </p>
                            <p className="text-text-secondary-black sm:text-base text-sm">
                                Get the latest updates and news right in your
                                inbox!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-2 max-w-screen-sm mx-auto">
                                <label className="input min-w-8 w-full input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70"
                                    >
                                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                        <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                    </svg>
                                    <input
                                        type="text"
                                        className="grow"
                                        placeholder="Enter Your Email"
                                    />
                                </label>
                                <button className="btn border-none bg-gradient-to-r from-purple-400 to-orange-500 shadow-[inset_0_0_15px_rgba(0,0,0,0.4)]">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="mx-auto" src={Logo} alt="BPL Dream 11 Logo" />
            </div>

            <div className="py-72 sm:py-52 bg-footer-bg"></div>
        </div>
    );
}

export default NewsLetter;
