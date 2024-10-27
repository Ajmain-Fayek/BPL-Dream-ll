import DeleteSvg from "./delete-svg";

function SelectedPlayer({ player }) {
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

    const deletePlayer = (playerId) => {
        localStorage.removeItem(JSON.stringify({ playerId: playerId }));
        document.getElementById(`playerId${playerId}`).classList = "hidden";
        document.getElementById(`playerId${playerId}`).innerHTML = "";
        document.getElementById("selected").innerHTML = `Selected (${selectedCount()})`;
    };

    return (
        <div
            id={`playerId${player.playerId}`}
            className="border rounded-xl py-2 px-4 flex items-center justify-between gap-4 my-4"
        >
            <div className="flex items-center gap-4">
                <img
                    className="w-24 rounded-lg"
                    src={player.imageUrl}
                    alt={player.name}
                />
                <div className="space-y-2">
                    <p className="font-semibold text-xl text-text-primary-black">
                        {player.name}
                    </p>
                    <p className="text-text-secondary-black">{player.role}</p>
                </div>
            </div>
            <button
                onClick={() => deletePlayer(player.playerId)}
                className="p-2"
            >
                <DeleteSvg></DeleteSvg>
            </button>
        </div>
    );
}

export default SelectedPlayer;
