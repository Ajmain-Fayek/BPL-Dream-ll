import React from "react";
import ProfileSvg from "./Profile_svg";
import FlagSvg from "./Flag_svg";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ players }) {
    // toast
    const toastMsg = (msg_text) => {
        const Msg = ({ closeToast, toastProps }) => (
            <div className="text-red-800">{msg_text}</div>
        );
        toast(Msg);
    };

    // Toast Call function
    const displayMsg = (alertMsg) => {
        toastMsg(alertMsg);
        // toast(Msg) would also work
    };

    // Player Distructured
    const {
        name = "N/A",
        country = "N/A",
        imageUrl = "N/A",
        role = "N/A",
        battingType = "N/A",
        bowlingType = "N/A",
        biddingPrice = "N/A",
        rating = "N/A",
        playerId,
    } = players;

    // Count selected palyer number
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

    //  Is player Already selected or not validation
    const isPlayerSelected = (playerId, biddingPrice) => {
        selectedCount() === 6
            ? displayMsg("Reached Maximum Player Selection")
            : localStorage.getItem(`{"playerId":${playerId}}`)
            ? displayMsg("Player already selected")
            : reduceCoin(biddingPrice);
    };

    // if count is not set yet, that time validation
    const initialCoinValidation = () => {
        displayMsg("First Claim Some Credits");
        return 0;
    };

    // Get the remaining amout of coins from localStorage
    const getCoins = () => {
        return isNaN(parseFloat(localStorage.getItem("coin1234")))
            ? initialCoinValidation()
            : parseFloat(localStorage.getItem("coin1234"));
    };

    // Show alert if balance is insufficieant then return the remaining coin amount
    const showAlert = () => {
        if (getCoins() < biddingPrice) {
            displayMsg("Insufficient Coins");
        }
        return getCoins() === 0 ? 0 : getCoins();
    };

    // Reduce coin if a player is selected
    const reduceCoin = (biddingPrice) => {
        localStorage.setItem(
            "coin1234",
            getCoins() < biddingPrice
                ? showAlert()
                : getCoins() -
                      (isNaN(biddingPrice)
                          ? displayMsg("Bidding Price not Available")
                          : setPlayer())
        );
    };

    // Save players in Local Storage
    const setPlayer = () => {
        localStorage.setItem(
            [JSON.stringify({ playerId: playerId })],
            [
                JSON.stringify({
                    name,
                    imageUrl,
                    role,
                    biddingPrice,
                    playerId,
                }),
            ]
        );

        return biddingPrice;
    };

    // Chose player button event
    const selectPlayer = () => {
        isPlayerSelected(playerId, biddingPrice);

        document.getElementById(
            "selected"
        ).innerHTML = `Selected (${selectedCount()})`;

        document.getElementById("coin1").innerHTML = `$${
            localStorage.getItem("coin1234") || "0 Coin"
        }`;

        document.getElementById("coin2").innerHTML = `$${
            localStorage.getItem("coin1234") || "0 Coin"
        }`;
    };

    return (
        <div
            id={`playerId${playerId}`}
            className="p-2 rounded-lg border w-full"
        >
            <ToastContainer />
            <div className="card card-compact bg-base-100">
                <figure className="rounded-lg">
                    <img className="w-full" alt={name} src={imageUrl} />
                </figure>
                <div className="card-body w-full">
                    <div className="flex items-center gap-1.5">
                        <ProfileSvg />
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <FlagSvg />
                            <p>{country}</p>
                        </div>
                        <div className="px-4 py-2 bg-gray-200 rounded-lg">
                            {role}
                        </div>
                    </div>
                    <hr />
                    <p className="font-semibold">Rating: {rating}</p>
                    <div className="flex flex-col xl:flex-row justify-between xl:gap-4 gap-1.5 w-full">
                        <div>
                            <b>Batting:</b> {battingType}
                        </div>
                        <div>
                            <b>Bowling:</b> {bowlingType}
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                        <p className="font-semibold">Price: ${biddingPrice}</p>
                        <button
                            id={`btn-playerId${playerId}`}
                            onClick={selectPlayer}
                            className="btn bg-white"
                        >
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    country: PropTypes.string,
    imageUrl: PropTypes.string,
    role: PropTypes.string,
    battingType: PropTypes.string,
    bowlingType: PropTypes.string,
    biddingPrice: PropTypes.number,
    rating: PropTypes.number,
    playerId: PropTypes.number,
};

export default Card;
