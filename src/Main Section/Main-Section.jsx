import FetchPlayerData from "./Players Data/PlayerData";
import SelectedPlayer from "./Selected Players/SelectedPlayerCard";
import { useState } from "react";

function MainSection() {
    const [toggle, setToggle] = useState(true);

    const selectedBTN = () => {
        document.getElementById("selected").className =
            "btn join-item bg-btn-primary";
        document.getElementById("availavble").className =
            "btn join-item bg-white";
        setToggle(() => false);
    };

    const availableBTN = () => {
        document.getElementById("availavble").className =
            "btn join-item bg-btn-primary";
        document.getElementById("selected").className =
            "btn join-item bg-white";
        setToggle(() => true);
    };

    return (
        <main className="max-w-screen-2xl mx-auto p-2">
            <div className="flex items-center justify-between py-6">
                <p className="font-semibold">Available Players</p>
                <div className="flex flex-col gap-2 sm:gap-0 sm:join sm:flex-row">
                    <button
                        id="availavble"
                        onClick={availableBTN}
                        className="btn join-item bg-btn-primary"
                    >
                        Available
                    </button>
                    <button
                        id="selected"
                        onClick={selectedBTN}
                        className="btn join-item bg-white"
                    >
                        Selected (0)
                    </button>
                </div>
            </div>
            <div className="w-full">
                {toggle ? (
                    <FetchPlayerData></FetchPlayerData>
                ) : (
                    <SelectedPlayer></SelectedPlayer>
                )}
            </div>
        </main>
    );
}

export default MainSection;
