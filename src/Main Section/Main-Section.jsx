import FetchPlayerData from "./Players Data/PlayerData";
import SelectedPlayerData from "./Selected Players/SelectedPlayerData";
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
                <p className="font-semibold">
                    {toggle ? "Available Players" : "Selected Players"}
                </p>
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
            <div
                id={toggle ? "allPlayers" : "selectedPlayersSection"}
                className="w-full"
            >
                {toggle ? (
                    <FetchPlayerData></FetchPlayerData>
                ) : (
                    <SelectedPlayerData></SelectedPlayerData>
                )}
            </div>
        </main>
    );
}

export default MainSection;
