import * as React from "react";

import FacebookIcon from "../../assets/svg/social/facebook-white.svg";
import TwitterIcon from "../../assets/svg/social/twitter-white.svg";
import InstagramIcon from "../../assets/svg/social/instagram-white.svg";

import AppleStore from "../../assets/svg/store/app-store.svg";
import GoogleStore from "../../assets/svg/store/play-store.svg";
import MicrosoftStore from "../../assets/svg/store/windows-store.svg";

import "./footer.css";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}): React.ReactElement => {
    return (
        <footer className="fixed bottom-0 h-64 w-full bg-black">
            <div className="flex flex-col">
                <div>
                    <ol className="flex text-white px-16 py-7">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Terms and Conditions</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                        <li>
                            <a>Collection Statement</a>
                        </li>
                        <li>
                            <a>Help</a>
                        </li>
                        <li>
                            <a>Manage Account</a>
                        </li>
                    </ol>
                </div>
                <div className="text-white px-16">
                    <span>Copyright @ 2016 DEMO Streaming. All Rights Reserved.</span>
                </div>
                <div className="flex space-between items-center px-16 py-14">
                    <div className="flex w-full">
                        <span>
                            <img className="h-8 pr-4" src={FacebookIcon} />
                        </span>
                        <span>
                            <img className="h-8 pr-4" src={TwitterIcon} />
                        </span>
                        <span>
                            <img className="h-8" src={InstagramIcon} />
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span>
                            <img className="h-16 pr-4" src={AppleStore} />
                        </span>
                        <span>
                            <img className="h-16 pr-4" src={GoogleStore} />
                        </span>
                        <span>
                            <img className="h-16" src={MicrosoftStore} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
