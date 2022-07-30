import React from "react";
import { CircleFill} from "react-bootstrap-icons";

const SideBarChannelElement = ({ channel }) => {
    return (
        <div className="SideBarChannelElement">
            <div className="SideBarLeft">
                <img alt="profile" src={channel.icon} className="SideBarChannelIcon" />
                <div className="SideBarChannelText">
                    <p className="SideBarChannelTextName">{channel.name}</p>
                    <p className="SideBarChannelTextPlaying">{channel.playing}</p>
                </div>
            </div>
            <div className="SideBarRight">
                <div className="SideBarViewCount">
                    <CircleFill className="SideBarViewIcon"/>
                    <p>{channel.viewers}</p>
                </div>
            </div>
        </div>
    );
}

export default SideBarChannelElement;