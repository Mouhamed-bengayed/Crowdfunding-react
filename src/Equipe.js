import React from "react";
import './Equipe.css';
class App extends React.Component {
  render() {
    return <Pageequipe {...pageequipeData} />;
  }
}

export default App;


class Pageequipe extends React.Component {
  render() {
    const {
      sinscrire,
      sinscrire2,
      connexion,
      text52,
      group114,
      text53,
      overlapGroup2,
      text54,
      text51,
      lquipe,
      photo,
      photo2,
      assili,
      bengayed,
      text49,
      text50,
    } = this.props;

    return (
      <form className="pageequipe" name="form3" action="form3" method="post">
        <div className="overlap-group1">
          <div className="sinscrire valign-text-middle magra-bold-peach-cream-30px">{sinscrire}</div>
          <div className="rectangle-30"></div>
          <div className="sinscrire-1 valign-text-middle magra-bold-peach-cream-27-4px">{sinscrire2}</div>
          <a href="javascript:SubmitForm('form3')">
            <div className="connexion valign-text-middle magra-bold-peach-cream-27-4px">{connexion}</div>
          </a>
          <div className="rectangle-31 border-3-7px-peach-cream"></div>
          <a href="javascript:SubmitForm('form3')">
            <div className="rectangle-32 border-3-7px-peach-cream"></div>
          </a>
          <div className="text-4 valign-text-middle magra-bold-peach-cream-27-4px-2">{text52}</div>
          <a href="javascript:SubmitForm('form3')">
            <div className="rectangle-33 border-3-7px-peach-cream"></div>
          </a>
          <div className="rectangle-34 border-3-7px-peach-cream"></div>
          <img className="group-114" src={group114} />
          <div className="text-5 valign-text-bottom magra-bold-peach-cream-27px">{text53}</div>
        </div>
        <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
          <div className="text-6 valign-text-bottom magra-bold-peach-cream-48px">{text54}</div>
        </div>
        <div className="text-3 valign-text-middle magra-normal-black-38-2px">{text51}</div>
        <div className="overlap-group">
          <h1 className="lquipe valign-text-bottom magra-bold-peach-cream-64px">{lquipe}</h1>
        </div>
        <div className="flex-row">
          <img className="photo" src={photo} />
          <img className="photo-1" src={photo2} />
        </div>
        <div className="flex-row-1">
          <div className="assili valign-text-middle roboto-normal-black-38-2px">{assili}</div>
          <div className="bengayed valign-text-middle roboto-normal-black-38-2px">{bengayed}</div>
        </div>
        <div className="flex-row-2">
          <div className="text-1 valign-text-middle roboto-normal-black-22-3px">{text49}</div>
          <div className="text-2 valign-text-middle roboto-normal-black-22-3px">{text50}</div>
        </div>
      </form>
    );
  }
}
const pageequipeData = {
    sinscrire: "S’inscrire",
    sinscrire2: "S’inscrire",
    connexion: "CONNEXION",
    text52: "Découvrir les projets",
    group114: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60567fc4ec0e005ee5172a3f/img/group-114@2x.svg",
    text53: "Lancer votre project",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/60567fc4ec0e005ee5172a3f/img/rectangle-1319@1x.svg",
    text54: "« Nous », c’est qui exactement ?",
    text51: "Une équipe de passionnés et d’engagés dont le Leitmotiv est de donner vie à des projets qui changent l’Afrique. CoFundy est né d’une rencontre autour d’un projet porté par des valeurs qui permet de découvrir et de donner vie à des projets solidaires, culturels et innovants avec un fort impact positif sur l’Afrique. Que vous soyez une association, créateur, entrepreneur, artiste, nous vous aidons à trouver les ressources et le soutien nécessaire pour lancer votre projet en vous mettant en relation avec une communauté qui partage vos valeurs !",
    lquipe: "L’équipe",
    photo: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/photo@2x.svg",
    photo2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/photo@2x.svg",
    assili: "assili",
    bengayed: "Bengayed",
    text49: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    text50: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
};

