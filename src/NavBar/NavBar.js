import React from "react";
import NavElement from "./NavElement";
import SearchBar from "./SearchBar/SearchBar";
import "./NavBar.css";
import { ChatLeft, Inbox, PersonCircle, ThreeDotsVertical, PiggyBank, Gem, Twitch} from "react-bootstrap-icons";

const NavBar = () => {
    
    const navElements = [
        {label: "Following"},
        {label: "Browse"},
    ];

    return (
        <div className="NavBar">
            <div className="NavLeft">
                <Twitch className="TwitchLogo"/>
                {navElements.map((element, index) => {
                    return (<NavElement key={index} label={element.label} />);
                })}
                <ThreeDotsVertical className="ThreeDotsButton"/>
            </div>

            <div className="NavCenter">
                <SearchBar />
            </div>

            <div className="NavRight">
                <PiggyBank className="NavRightIcon"/>
                <Inbox className="NavRightIcon InboxIcon" />
                <ChatLeft className="NavRightIcon ChatIcon" />
                <div className="GetBits">
                    <Gem className="GetBitsIcon" />
                    <p className="GetBitsLabel">Get Bits</p>
                </div>
                <PersonCircle className="NavRightIcon UserIcon" />
            </div>
        </div>
    );
}

export default NavBar;