import Card from "./PlayerCard"
import Data from "../../public/data.json"


function PlayerData() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-10">
        {Data.map((players) => <Card players={players} id={players.playerId}></Card>)}
        </div>
    );
}
export default PlayerData