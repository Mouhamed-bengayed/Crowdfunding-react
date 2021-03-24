import React from "react";
import './pageconnexion.css';

 function connexion() {
  return (
    <Pageconnexion
      title="Se connecter"
      connexion="Connexion"
      text1="Mot de passe oublié ?"
      emailAddress="Email Address"
      password="Password"
    />
  );
}



export default function Pageconnexion(props) {
  const { title, connexion, text1, emailAddress, password } = props;

  return (
    <div className="page1">
      <div className="overlap-group">
        <div className="frame-1"></div>
        <div className="rectangle-7"></div>
        <div className="rectangle-8"></div>
        <div className="group-2">
          <div className="overlap-group1">
            <h1 className="title karla-bold-shark-55-2px">{title}</h1>
            <div className="rectangle-2 border-1-5px-black"></div>
            <div className="rectangle-3 border-1-5px-black"></div>
            <div className="overlap-group2">
              <div className="connexion karla-bold-white-33-7px">{connexion}</div>
            </div>
            <div className="text-1 karla-regular-normal-onyx-21-5px">{text1}</div>
          </div>
        </div>
        <div className="email-address karla-regular-normal-black-23px">{emailAddress}</div>
        <div className="password karla-regular-normal-black-23px">{password}</div>
      </div>
    </div>
  );
}
