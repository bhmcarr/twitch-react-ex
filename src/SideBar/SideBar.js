import React from "react";
import SideBarChannelElement from "./SideBarChannelElement";
import finn from "../assets/finn.png";
import mjam from "../assets/mjam.png";
import chelly from "../assets/chelly.png";
import marc from "../assets/marc.png";
import anya from "../assets/anya.png";
import epic from "../assets/epic.png";
import "./SideBar.css";

const SideBar = () => {
    const channelData = [
        {icon: chelly, name: "QueenChelly", playing: "Sega Bass Pro Fishing", viewers: "999K"},
        {icon: mjam, name: "mJam", playing: "Dissidia NT", viewers: "200K"},
        {icon: finn, name: "PleasantFinn_", playing: "Yakuza: Like a Dragon", viewers: "300K"},
        {icon: marc, name: "MarcFransen", playing: "Initial D: Extreme Stage", viewers: "400K"},
        {icon: anya, name: "AnyaTheNerd", playing: "Devil Survivor 2", viewers: "500K"},
        {icon: epic, name: "EpicTastic", playing: "Final Fantasy IX", viewers: "600K"},
    ];

    return (
        <div className="SideBar">
            <div className="SideBarSection">
                <p className="SideBarSectionLabel">FOLLOWED CHANNELS</p>
                {channelData.map((channel, index) => {
                    return (
                        <SideBarChannelElement key={index} channel={channel} />
                    );
                })}
                <p className="SeeMore">See more..</p>
            </div>
            <div className="SideBarSection">
                <p className="SideBarSectionLabel">RECOMMENDED CHANNELS</p>
                {channelData.map((channel, index) => {
                    if (index <= 2) {
                        return (
                            <SideBarChannelElement key={index} channel={channel} />
                        );
                    } else return null;

                })}
                <p className="SeeMore">See more..</p>
            </div>
        </div>
    );
}

export default SideBar;