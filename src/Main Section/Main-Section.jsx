import FetchPlayerData from "./Players Data/PlayerData";
import SelectedPlayerData from "./Selected Players/SelectedPlayerData";
import { useState } from "react";

function MainSection() {
    const [toggle, setToggle] = useState(true);

    const selectedCount = () => {
        const playerData = [];

        for (let i = 1; i <= 20; i++) {
            if (
                JSON.parse(
                    localStorage.getItem(JSON.stringify({ playerId: i }))
                ) !== null
            ) {
                playerData.push(
                    JSON.parse(
                        localStorage.getItem(JSON.stringify({ playerId: i }))
                    )
                );
            }
        }
        return playerData.length;
    };

    const selectedBTN = () => {
        document.getElementById("selected").className =
            "btn join-item bg-btn-primary";
        document.getElementById("availavble").className =
            "btn join-item bg-white";
        setToggle(() => false);
        document.getElementById("cfc1").classList =
            "w-fit mx-auto p-px active:my-1.5 hover:bg-btn-primary bg-gradient-to-r from-purple-400 to-orange-500 rounded-xl";
        document.getElementById("cfc2").classList =
            "hover:bg-btn-primary text-text-primary-black py-2 px-4 rounded-lg font-semibold bg-gradient-to-r from-purple-400 to-orange-500";
    };

    const availableBTN = () => {
        document.getElementById("availavble").className =
            "btn join-item bg-btn-primary";
        document.getElementById("selected").className =
            "btn join-item bg-white";
        setToggle(() => true);

        document.getElementById("cfc1").classList =
            "w-fit mx-auto p-px active:my-1.5 bg-btn-primary hover:bg-gradient-to-r from-purple-400 to-orange-500 rounded-xl";
        document.getElementById("cfc2").classList =
            "bg-btn-primary text-text-primary-black py-2 px-4 rounded-lg font-semibold hover:bg-gradient-to-r from-purple-400 to-orange-500";
    };

    return (
        <main className="max-w-screen-2xl mx-auto p-2">
            <div className="flex items-center justify-between py-6">
                <p
                    id={toggle ? "available-players" : "selected-players"}
                    className="font-semibold"
                >
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
                        Selected ({selectedCount()})
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
