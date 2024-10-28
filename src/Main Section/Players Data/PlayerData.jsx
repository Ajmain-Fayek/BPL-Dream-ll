import React from "react";
import Card from "./PlayerCard";
import Data from "../../data.json";
import "react-toastify/dist/ReactToastify.css";

function FetchPlayerData() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-10">
            {Data.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <Card players={data} />
            ))}
        </div>
    );
}
export default FetchPlayerData;
