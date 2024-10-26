function SelectedPlayer() {
    const selectedPlayerData = [];

    for (let i = 1; i <= 20; i++) {
        if (
            JSON.parse(
                localStorage.getItem(JSON.stringify({ playerId: i }))
            ) !== null
        ) {
            selectedPlayerData.push(
                JSON.parse(
                    localStorage.getItem(JSON.stringify({ playerId: i }))
                )
            );
        }
    }

    return (
        <div>
            {selectedPlayerData.map((player) => (
                <h1>{player.name}</h1>
            ))}
        </div>
    );
}

export default SelectedPlayer;
