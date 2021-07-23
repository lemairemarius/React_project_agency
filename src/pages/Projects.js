import React from 'react';
import Navigation from "../Components/Navigation";
import ButtonBottoms from "../Components/ButtonBottoms";

export const Project1 = () => {
    return (
        <main>
           <div className={"project"}>
               <Navigation />

               project 1
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

                project 2
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

                project 3
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

                project 4
                <ButtonBottoms  left={'/projet-3'} right={'/contact'}/>
            </div>
        </main>
    );
};



