import React from 'react';
import Navigation from "../Components/Navigation";
import SocialNetwork from "../Components/SocialNetwork";
import DynamicText from "../Components/DynamicText";
import ButtonBottoms from "../Components/ButtonBottoms";

const Home = () => {
    return (
        <div>
            <div className="home">
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Miguigno Agency</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ButtonBottoms right={"/projet-1"} />
            </div>
        </div>
    );
};

export default Home;