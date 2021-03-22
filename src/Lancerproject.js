import React from "react";

class App extends React.Component {
  render() {
    return <Page3 {...page3Data} />;
  }
}

export default App;


class Page3 extends React.Component {
  render() {
    const {
      vector,
      vector2,
      dconnexion,
      text58,
      text59,
      group114,
      overlapGroup1,
      lancezVous,
      text57,
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
      place,
      phone,
      birthday,
      text60,
      text61,
    } = this.props;

    return (
      <form className="page3" name="form2" action="form2" method="post">
        <div className="overlap-group">
          <div className="frame-2">
            <div className="overlap-group2">
              <div className="rectangle-1316"></div>
              <div className="group">
                <div className="overlap-group3">
                  <img className="vector" src={vector} />
                  <img className="vector-1" src={vector2} />
                </div>
                <div className="dconnexion valign-text-middle magra-bold-peach-cream-22-4px">{dconnexion}</div>
              </div>
              <div className="text-2 valign-text-middle magra-bold-peach-cream-25-5px">{text58}</div>
              <div className="text-3 valign-text-middle magra-bold-peach-cream-22-4px">{text59}</div>
              <a href="javascript:SubmitForm('form2')">
                <div className="rectangle-1317 border-3-4px-peach-cream"></div>
              </a>
              <div className="rectangle-1318 border-3-4px-peach-cream"></div>
              <img className="group-114" src={group114} />
            </div>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <h1 className="title valign-text-middle magra-bold-peach-cream-48px">{lancezVous}</h1>
              <div className="text-1 valign-text-middle magra-normal-peach-cream-36px">{text57}</div>
            </div>
          </div>
          <div className="rectangle-1"></div>
          <div className="group-4">
            <div className="overlap-group5 border-1-5px-black">
              <input
                className="nom karla-normal-black-23px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
              />
            </div>
            <div className="overlap-group8 border-1-5px-black">
              <input
                className="email-address karla-normal-black-23px"
                name={inputName2}
                placeholder={inputPlaceholder2}
                type={inputType2}
                required={inputRequired2}
              />
            </div>
            <div className="overlap-group7 border-1-5px-black">
              <input
                className="nom-de-projet karla-normal-black-23px"
                name={inputName3}
                placeholder={inputPlaceholder3}
                type={inputType3}
                required={inputRequired3}
              />
            </div>
            <div className="overlap-group6 border-1-5px-black">
              <input
                className="nom-de-categorie karla-normal-black-23px"
                name={inputName4}
                placeholder={inputPlaceholder4}
                type={inputType4}
                required={inputRequired4}
              />
            </div>
            <div className="overlap-group4 border-1-5px-black">
              <textarea
                className="description-de-projet karla-normal-black-23px"
                name={inputName5}
                placeholder={inputPlaceholder5}
                type={inputType5}
                required={inputRequired5}
              ></textarea>
            </div>
          </div>
          <div className="place valign-text-middle roboto-medium-black-27-5px">{place}</div>
          <div className="phone valign-text-bottom roboto-normal-black-24-5px">{phone}</div>
          <div className="line"></div>
          <div className="birthday valign-text-bottom roboto-normal-black-21-4px">{birthday}</div>
          <div className="text-4 roboto-normal-shark-48px">{text60}</div>
          <div className="rectangle-4"></div>
          <a href="javascript:SubmitForm('form2')">
            <div className="text-5 magra-bold-peach-cream-48px">{text61}</div>
          </a>
        </div>
      </form>
    );
  }
}
const page3Data = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605641e15b37bfef296c87a0/img/vector@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60567fc4ec0e005ee5172a3f/img/vector-1@2x.svg",
    dconnexion: "Déconnexion ?",
    text58: "Découvrir les projets",
    text59: "Lancer votre projet",
    group114: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60567fc4ec0e005ee5172a3f/img/group-114-1@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60563df9960285b6f37b883e/img/rectangle-15@1x.svg",
    lancezVous: "Lancez-vous !",
    text57: "Vous avez un projet ? Prenez quelques minutes pour le décrire afin qu'on puisse vous accompagner au mieux.",
    inputName: "nom",
    inputType: "text",
    inputPlaceholder: "Nom",
    inputRequired: "true",
    inputName2: "email-address",
    inputType2: "email",
    inputPlaceholder2: "Email Address",
    inputRequired2: "true",
    inputName3: "nom-de-projet",
    inputType3: "text",
    inputPlaceholder3: "Nom de projet",
    inputRequired3: "true",
    inputName4: "nom-de-categorie",
    inputType4: "text",
    inputPlaceholder4: "Nom de categorie",
    inputRequired4: "true",
    inputName5: "description-de-projet",
    inputType5: "text",
    inputPlaceholder5: "description de projet",
    inputRequired5: "true",
    place: "Date",
    phone: "24.05.1990",
    birthday: "Birthday",
    text60: "Lancer votre project",
    text61: "Lancer votre project",
};

