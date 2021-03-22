import React from "react";
import './pagecréecompte.css';

class App extends React.Component {
  render() {
    return <Page2 {...page2Data} />;
  }
}

export default App;


class Page2 extends React.Component {
  render() {
    const {
      crerUnCompte,
      text1,
      crerUnCompte2,
      text2,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      inputName2,
      inputType2,
      inputPlaceholder2,
      inputRequired2,
      inputName3,
      inputType3,
      inputPlaceholder3,
      inputRequired3,
      inputName4,
      inputType4,
      inputPlaceholder4,
      inputRequired4,
      inputName5,
      inputType5,
      inputPlaceholder5,
      inputRequired5,
    } = this.props;

    return (
      <form className="page2" name="form1" action="form1" method="post">
        <div className="overlap-group">
          <div className="rectangle-9"></div>
          <div className="rectangle-10"></div>
          <div className="group-3">
            <div className="overlap-group1">
              <div className="overlap-group2">
                <h1 className="crer-un-compte karla-bold-shark-55-2px">{crerUnCompte}</h1>
                <div className="text-1 karla-regular-normal-onyx-23px">{text1}</div>
              </div>
              <div className="rectangle-2 border-1-5px-black"></div>
              <div className="rectangle-3 border-1-5px-black"></div>
              <div className="overlap-group3">
                <a href="javascript:SubmitForm('form1')">
                  <div className="crer-un-compte-1 magra-bold-peach-cream-36px">{crerUnCompte2}</div>
                </a>
              </div>
              <div className="text-2 karla-regular-normal-onyx-21-5px">{text2}</div>
            </div>
          </div>
          <input
            className="prenom karla-regular-normal-black-23px"
            name={inputName}
            placeholder={inputPlaceholder}
            type={inputType}
            required={inputRequired}
          />
          <div className="rectangle-13 border-1-5px-black"></div>
          <input
            className="email-address karla-regular-normal-black-23px"
            name={inputName2}
            placeholder={inputPlaceholder2}
            type={inputType2}
            required={inputRequired2}
          />
          <div className="rectangle-11 border-1-5px-black"></div>
          <input
            className="nom karla-regular-normal-black-23px"
            name={inputName3}
            placeholder={inputPlaceholder3}
            type={inputType3}
            required={inputRequired3}
          />
          <input
            className="password karla-regular-normal-black-23px"
            name={inputName4}
            placeholder={inputPlaceholder4}
            type={inputType4}
            required={inputRequired4}
          />
          <div className="rectangle-12 border-1-5px-black"></div>
          <input
            className="confirm-password karla-regular-normal-black-23px"
            name={inputName5}
            placeholder={inputPlaceholder5}
            type={inputType5}
            required={inputRequired5}
          />
        </div>
      </form>
    );
  }
}
const page2Data = {
    crerUnCompte: "Créer un compte",
    text1: "Créez un compte pour profiter gratuitement de tous les services sans aucune publicité!",
    crerUnCompte2: "Créer un compte",
    text2: "Vous avez déjà un compte? Se connecter",
    inputName: "prenom",
    inputType: "text",
    inputPlaceholder: "Prenom",
    inputRequired: "true",
    inputName2: "email-address",
    inputType2: "email",
    inputPlaceholder2: "Email Address",
    inputRequired2: "true",
    inputName3: "nom",
    inputType3: "text",
    inputPlaceholder3: "Nom",
    inputRequired3: "true",
    inputName4: "password",
    inputType4: "password",
    inputPlaceholder4: "Password",
    inputRequired4: "true",
    inputName5: "confirm-password",
    inputType5: "password",
    inputPlaceholder5: "confirm password",
    inputRequired5: "true",
};

