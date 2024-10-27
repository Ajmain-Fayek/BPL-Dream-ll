import SelectedPlayer from "./SelectedPlayerCard";

function SelectedPlayerData() {
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

    console.log(playerData)

    if (playerData.length !== 0) {
        return playerData.map((player) => (
            <SelectedPlayer player={player}></SelectedPlayer>
        ));
    } else {
        return (
            <div className="border rounded-lg p-4 bg-red-50 text-red-900 my-2">
                You Haven&apos;t Selected any Player yet.
            </div>
        );
    }
}

export default SelectedPlayerData;
