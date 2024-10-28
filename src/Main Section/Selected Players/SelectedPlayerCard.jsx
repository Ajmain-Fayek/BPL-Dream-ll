import DeleteSvg from "./delete-svg";

function SelectedPlayer({ player }) {
    const { name, imageUrl, role, biddingPrice, playerId } = player;

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

    const getCoins = () => {
        return parseFloat(localStorage.getItem("coin1234"));
    };

    const increaseCoins = (biddingPrice) => {
        localStorage.setItem("coin1234", getCoins() + biddingPrice);

        document.getElementById("coin1").innerHTML = `$${
            localStorage.getItem("coin1234") || "0 Coin"
        }`;

        document.getElementById("coin2").innerHTML = `$${
            localStorage.getItem("coin1234") || "0 Coin"
        }`;
    };

    const deletePlayer = (playerId) => {
        localStorage.removeItem(JSON.stringify({ playerId: playerId }));
        document.getElementById(`playerId${playerId}`).classList = "hidden";
        document.getElementById(`playerId${playerId}`).innerHTML = "";
        document.getElementById(
            "selected"
        ).innerHTML = `Selected (${selectedCount()})`;

        increaseCoins(biddingPrice);
    };

    return (
        <div
            id={`playerId${playerId}`}
            className="border rounded-xl py-2 px-4 flex items-center justify-between gap-4 my-4"
        >
            <div className="flex items-center gap-4">
                <img className="w-24 rounded-lg" src={imageUrl} alt={name} />
                <div className="space-y-2">
                    <p className="font-semibold sm:text-xl text-base text-text-primary-black">
                        {name}
                    </p>
                    <p className="text-text-secondary-black sm:text-base text-sm">
                        {role}
                    </p>
                </div>
            </div>
            <button onClick={() => deletePlayer(playerId)} className="p-2">
                <DeleteSvg />
            </button>
        </div>
    );
}

export default SelectedPlayer;
