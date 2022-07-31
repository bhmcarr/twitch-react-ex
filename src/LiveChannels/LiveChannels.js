import React from "react";
import "./LiveChannels.css";
import finn from "../assets/finn.png";
import mjam from "../assets/mjam.png";
import chelly from "../assets/chelly.png";
import marc from "../assets/marc.png";
import anya from "../assets/anya.png";
import epic from "../assets/epic.png";
import LiveChannelsCard from "./LiveChannelsCard";

const LiveChannels = () => {
    const channelData = [
        {icon: chelly, title: "Catching the biggest boy of them all.", userName: "QueenChelly", game: "Sega Bass Pro Fishing", tags: ["English", "No Backseating"]},
        {icon: mjam, title: "Doing seven things at once and excelling at all of them.", userName: "mJam", game: "Dissidia NT", tags: ["English"]},
        {icon: finn, title: "Getting hit by cars!", userName: "PleasantFinn_", game: "Yakuza: Like a Dragon", tags: ["English"]},
        {icon: marc, title: "Multi-track drifting!", userName: "MarcFransen", game: "Initial D: Extrene Stage", tags: ["English"]},
        {icon: anya, title: "Escaping Tokyo.. again!", userName: "AnyaTheNerd", game: "Devil Survivor 2", tags: ["English"]},
    ];

    return (
        <div className="LiveChannels">
            <p className="LiveChannelsTitle">Live channels we think you'll like</p>
            <div className="LiveChannelsCardContainer">
                {channelData.map((channel, index) => {
                    return (
                        <LiveChannelsCard key={index} channelData={channel} />
                    );
                })}
            </div>
        </div>
    );
}

export default LiveChannels;