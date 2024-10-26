import ProfileSvg from "./Profile_svg";
import FlagSvg from "./Flag_svg";
import PropTypes from "prop-types";

function Card({ players }) {
    const {
        name = "N/A",
        country = "N/A",
        imageUrl = "N/A",
        role = "N/A",
        battingType = "N/A",
        bowlingType = "N/A",
        biddingPrice = "N/A",
        rating = "N/A",
    } = players;

    return (
        <div className="p-2 rounded-lg border w-full">
            <div className="card card-compact bg-base-100">
                <figure>
                    <img className="w-80" alt={name} src={imageUrl} />
                </figure>
                <div className="card-body w-full">
                    <div className="flex items-center gap-1.5">
                        <ProfileSvg></ProfileSvg>
                        <h2 className="card-title">{name}</h2>
                    </div>
                    <div className="flex  items-center justify-between">
                        <div className="flex items-center gap-1.5">
                            <FlagSvg></FlagSvg>
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
                        <button className="btn bg-white">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Card.prototype = {
    name: PropTypes.string,
    country: PropTypes.string,
    imageUrl: PropTypes.string,
    role: PropTypes.string,
    battingType: PropTypes.string,
    bowlingType: PropTypes.string,
    biddingPrice: PropTypes.number,
    rating: PropTypes.number,
};

// Card.defaultProps = {
//     name: "N/A",
//     country: "N/A",
//     imageUrl: "N/A",
//     role: "N/A",
//     battingType: "N/A",
//     bowlingType: "N/A",
//     biddingPrice: "N/A",
//     rating: "N/A",
// };

export default Card;
