import React from "react";
import { ThreeDotsVertical } from "react-bootstrap-icons";

const LiveChannelsCard = ({ channelData }) => {
    return (
        <div className="LiveChannelsCard">
            <div className="LiveChannelsCardThumbnail">
                <p>...</p>
            </div>
            <div className="LiveChannelsCardInfo">
                <div className="IconSection">
                    <img className="IconPhoto" src={channelData.icon}></img>
                </div>
                <div className="InfoSection">
                    <p className="Title">{channelData.title.length > 35 ? channelData.title.substr(0,35) + ".." : channelData.title}</p>
                    <p className="UserName">{channelData.userName}</p>
                    <p className="Game">{channelData.game}</p>
                    {/* <div className="TagSection">
                        {channelData.tags.map((tag, index) => {
                            return (
                                <p className="Tag" key={index}>{tag}</p>
                            );
                        })}
                    </div> */}
                </div>
                <ThreeDotsVertical />
            </div>
        </div>
    );
}

export default LiveChannelsCard;