import React from "react";
import SideBarChannelElement from "./SideBarChannelElement";
import finn from "./assets/finn.png";
import mjam from "./assets/mjam.png";
import chelly from "./assets/chelly.png";

const SideBar = () => {
    const channelData = [
        {icon: chelly, name: "QueenChelly", playing: "Sega Bass Pro Fishing", viewers: "100K"},
        {icon: mjam, name: "mJam", playing: "Dissidia NT", viewers: "20K"},
        {icon: finn, name: "PleasantFinn_", playing: "Yakuza: Like a Dragon", viewers: "20K"},
        {icon: chelly, name: "QueenChelly", playing: "Sega Bass Pro Fishing", viewers: "100K"},
        {icon: mjam, name: "mJam", playing: "Dissidia NT", viewers: "20K"},
        {icon: finn, name: "PleasantFinn_", playing: "Yakuza: Like a Dragon", viewers: "20K"},
        {icon: chelly, name: "QueenChelly", playing: "Sega Bass Pro Fishing", viewers: "100K"},
        {icon: mjam, name: "mJam", playing: "Dissidia NT", viewers: "20K"},
        {icon: finn, name: "PleasantFinn_", playing: "Yakuza: Like a Dragon", viewers: "20K"},
    ];
    const recChannelData = [
        {icon: chelly, name: "QueenChelly", playing: "Sega Bass Pro Fishing", viewers: "100K"},
        {icon: mjam, name: "mJam", playing: "Dissidia NT", viewers: "20K"},
        {icon: finn, name: "PleasantFinn_", playing: "Yakuza: Like a Dragon", viewers: "20K"},
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
            </div>
            <div className="SideBarSection">
                <p className="SideBarSectionLabel">RECOMMENDED CHANNELS</p>
                {recChannelData.map((channel, index) => {
                    return (
                        <SideBarChannelElement key={index} channel={channel} />
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;