import SelectedPlayer from "./SelectedPlayerCard";
import FetchPlayerData from "../Players Data/PlayerData";

function SelectedPlayerData() {
    // console.log(fetchModule)

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

    const renderPlayerData = () => {
        return (document.getElementById("playerCardContainer").innerHTML = `${(
            <FetchPlayerData></FetchPlayerData>
        )}`);
    };

    if (playerData.length !== 0) {
        return (
            <>
                <div>
                    {playerData.map((player) => (
                        <>
                            <SelectedPlayer player={player}></SelectedPlayer>
                        </>
                    ))}
                </div>
                <div className="mb-4 mt-8">
                    <button
                        id="addMore"
                        onClick={renderPlayerData}
                        className="btn bg-btn-primary"
                    >
                        Add More
                    </button>
                </div>
                <div id="playerCardContainer"></div>
            </>
        );
    } else {
        return (
            <>
                <div className="border rounded-lg p-4 bg-red-50 text-red-900 my-2">
                    You Haven&apos;t Selected any Player yet.
                </div>
                <div className="mb-4 mt-8">
                    <button
                        id="addMore"
                        onClick={renderPlayerData}
                        className="btn bg-btn-primary"
                    >
                        Add More
                    </button>
                </div>
                <div id="playerCardContainer"></div>
            </>
        );
    }
}

export default SelectedPlayerData;
