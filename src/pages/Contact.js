import React from 'react';
import Navigation from "../Components/Navigation";
import Logo from "../Components/Logo";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import SocialNetwork from "../Components/SocialNetwork";
import ButtonBottoms from "../Components/ButtonBottoms";
import ContactForm from "../Components/ContactFrom";

const Contact = () => {
    return (
       <main>
               <div className="contact">
                   <Navigation />
                   <Logo />
                   <ContactForm />
                   <div className="contact-infos">
                       <div className="adress">
                           <div className="content">
                               <h4>Adresse</h4>
                               <p>34 rue turgot</p>
                               <p>80080 Amiens</p>
                           </div>
                        </div>

                       <div className="phone">
                           <div className="content">
                               <h4>Téléphone</h4>
                               <CopyToClipboard text="0658225489" className="hover">
                                   <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                       alert('Téléphone copié !')
                                   }}>06 58 22 54 89
                                   </p>
                               </CopyToClipboard>
                           </div>
                       </div>
                       <div className="email">
                           <div className="content">
                               <h4>Email</h4>
                               <CopyToClipboard text="fsociety@gmail.com" className="hover">
                                   <p style={{cursor: "pointer"}}
                                      className="clipboard"
                                      onClick={() =>{
                                          alert("Email copié !")
                                      }}>fsociety@gmail.com</p>
                               </CopyToClipboard>
                           </div>
                       </div>
                       <SocialNetwork />
                       <div className="credits">
                           <p>FromScratch 2021</p>
                       </div>
                   </div>
                   <ButtonBottoms left={'/projet-4'} />
               </div>
       </main>
    );
};

export default Contact;