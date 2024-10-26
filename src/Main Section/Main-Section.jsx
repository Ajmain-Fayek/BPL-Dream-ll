import PlayerData from "./PlayerData";

function MainSection() {
    const selectedBTN = () => {
        document.getElementById("selected").className =
            "btn join-item bg-btn-primary";
        document.getElementById("availavble").className =
            "btn join-item bg-white";
    };

    const availableBTN = () => {
        document.getElementById("availavble").className =
            "btn join-item bg-btn-primary";
        document.getElementById("selected").className =
            "btn join-item bg-white";
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
                <PlayerData></PlayerData>
            </div>
        </main>
    );
}

export default MainSection;
