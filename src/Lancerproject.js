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
      text8,
      text9,
      group114,
      path,
      path2,
      path3,
      overlapGroup1,
      lancezVous,
      text7,
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
      inputName6,
      inputType6,
      inputPlaceholder6,
      inputRequired6,
      inputName7,
      inputType7,
      inputPlaceholder7,
      inputRequired7,
      place,
      line,
      text10,
      text11,
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
              </div>
              <div className="text-2 valign-text-middle magra-bold-peach-cream-25-5px">{text8}</div>
              <div className="text-3 valign-text-middle magra-bold-peach-cream-22-4px">{text9}</div>
              <a href="javascript:SubmitForm('form2')">
                <div className="rectangle-1317 border-3-4px-peach-cream"></div>
              </a>
              <div className="rectangle-1318 border-3-4px-peach-cream"></div>
              <img className="group-114" src={group114} />
              <img className="path" src={path} />
              <img className="path-1" src={path2} />
              <img className="path-2" src={path3} />
            </div>
            <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
              <h1 className="title valign-text-middle magra-bold-peach-cream-48px">{lancezVous}</h1>
              <div className="text-1 valign-text-middle magra-normal-peach-cream-36px">{text7}</div>
            </div>
          </div>
          <div className="rectangle-1"></div>
          <div className="group-4">
            <div className="overlap-group6 border-1-5px-black-2">
              <input
                className="nom karla-normal-black-23px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
              />
            </div>
            <div className="overlap-group9 border-1-5px-black-2">
              <input
                className="email-address karla-normal-black-23px"
                name={inputName2}
                placeholder={inputPlaceholder2}
                type={inputType2}
                required={inputRequired2}
              />
            </div>
            <div className="overlap-group8 border-1-5px-black-2">
              <input
                className="nom-de-projet karla-normal-black-23px"
                name={inputName3}
                placeholder={inputPlaceholder3}
                type={inputType3}
                required={inputRequired3}
              />
            </div>
            <div className="overlap-group7 border-1-5px-black-2">
              <input
                className="nom-de-categorie karla-normal-black-23px"
                name={inputName4}
                placeholder={inputPlaceholder4}
                type={inputType4}
                required={inputRequired4}
              />
            </div>
            <div className="overlap-group5 border-1-5px-black-2">
              <textarea
                className="description-de-projet karla-normal-black-23px"
                name={inputName5}
                placeholder={inputPlaceholder5}
                type={inputType5}
                required={inputRequired5}
              ></textarea>
            </div>
            <div className="overlap-group4 border-1-5px-black-2">
              <input
                className="montant karla-normal-black-23px"
                name={inputName6}
                placeholder={inputPlaceholder6}
                type={inputType6}
                required={inputRequired6}
              />
            </div>
            <input
              className="date karla-normal-black-23px"
              name={inputName7}
              placeholder={inputPlaceholder7}
              type={inputType7}
              required={inputRequired7}
            />
          </div>
          <div className="group-120">
            <div className="place valign-text-middle roboto-medium-black-27-5px">{place}</div>
            <img className="line" src={line} />
          </div>
          <div className="text-4 roboto-normal-shark-48px">{text10}</div>
          <div className="rectangle-4"></div>
          <a href="javascript:SubmitForm('form2')">
            <div className="text-5 magra-bold-peach-cream-48px">{text11}</div>
          </a>
        </div>
      </form>
    
    );
  }
}
const page3Data = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/vector@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/vector-1@2x.svg",
    text8: "Découvrir les projets",
    text9: "Lancer votre projet",
    group114: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/group-114@2x.svg",
    path: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/path@2x.svg",
    path2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/path-1@2x.svg",
    path3: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/path-2@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60563df9960285b6f37b883e/img/rectangle-15@1x.svg",
    lancezVous: "Lancez-vous !",
    text7: "Vous avez un projet ? Prenez quelques minutes pour le décrire afin qu'on puisse vous accompagner au mieux.",
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
    inputName6: "montant",
    inputType6: "number",
    inputPlaceholder6: "Montant",
    inputRequired6: "true",
    inputName7: "date",
    inputType7: "number",
    inputPlaceholder7: "Montant",
    inputRequired7: "true",
    place: "Date",
    line: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60593d5f334660f0a4896e7a/img/line@2x.svg",
    text10: "Lancer votre project",
    text11: "Lancer votre project",
};

