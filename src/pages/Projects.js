import React from 'react';
import Navigation from "../Components/Navigation";
import ButtonBottoms from "../Components/ButtonBottoms";
import Logo from "../Components/Logo";
import Project from "../Components/Project";

export const Project1 = () => {
    return (
        <main>
           <div className={"project"}>
               <Navigation />
               <Logo />
               <Project projectNumber={0} />
               <ButtonBottoms  left={'/'} right={'/projet-2'}/>
           </div>
        </main>
    );
};
export const Project2 = () => {
    return (
        <main>
            <div className={"project"}>
                <Navigation />
                <Logo />

                <Project projectNumber={1} />
                <ButtonBottoms  left={'/projet-1'} right={'/projet-3'}/>
            </div>
        </main>
    );
};
export const Project3 = () => {
    return (
        <main>
            <div className={"project"}>
                <Navigation />
                <Logo />

                <Project projectNumber={2} />
                <ButtonBottoms  left={'/projet-2'} right={'/projet-4'}/>
            </div>
        </main>
    );
};
export const Project4 = () => {
    return (
        <main>
            <div className={"project"}>
                <Navigation />
                <Logo />

                <Project projectNumber={3} />
                <ButtonBottoms  left={'/projet-3'} right={'/contact'}/>
            </div>
        </main>
    );
};



