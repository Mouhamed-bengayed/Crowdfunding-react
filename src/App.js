import React from "react";
import { Route ,Link,BrowserRouter as Router,Switch } from "react-router-dom";
import Pageconnexion from "./Pageconnexion";
import './PageHome.css';


 

class App extends React.Component {
  render() {
    return <PageHome {...pageHomeData} />;
  }
}

export default App;


class PageHome extends React.Component {
  render() {
    const {
      vector,
      vector2,
      vector3,
      vector4,
      text18,
      group107,
      text25,
      lancerVotreProjet,
      connexion,
      sinscrire,
      group114,
      rectangle6,
      text1,
      rectangle20,
      text2,
      mathematics,
      text3,
      image3,
      text4,
      surname,
      biology,
      technology4905258_6401,
      text23,
      text24,
      sant,
      laboratory2815641_6401,
      surname2,
      text22,
      sports,
      image6,
      text5,
      surname3,
      learnMore,
      economics,
      image7,
      text6,
      surname4,
      learnMore2,
      education,
      image8,
      text7,
      surname5,
      learnMore3,
      text8,
      text9,
      text10,
      text13,
      text14,
      text15,
      text16,
      commentAMarche,
      lancezVotreProjet,
      ellipse3,
      ellipse6,
      ellipse5,
      ellipse4,
      vector5,
      line1,
      vector6,
      vector7,
      group5,
      bullhorn1,
      lancerVotreProjet2,
      commentAMarche2,
      text11,
      suivezNous,
      bengerdaine,
      emplacements,
      liensSociaux,
      vector8,
      vector9,
      vector10,
      vector11,
      vector12,
      lEquipe,
      text21,
      faq,
      aPropos,
      overlapGroup12,
      text17,
      place,
      overlapGroup13,
      bounds,
      ellipse,
      ellipse2,
      ellipse7,
      ellipse8,
      ellipse9,
      next,
      shape,
      bounds2,
      text12,
      spanText,
      spanText2,
      text19,
      overlapGroup14,
      number,
      overlapGroup132,
      price,
      overlapGroup15,
      percent,
      fundedProjects,
      text20,
      successRate,
    } = this.props;

    return (
        <div>
      <form className="pagehome smart-layers-pointers " name="form5" action="form5" method="post">
        <div className="overlap-group">
          <div className="group-112">
            <div className="overlap-group13">
              <img className="vector" src={vector} />
              <img className="vector-1" src={vector2} />
            </div>
            <div className="flex-row">
              <img className="vector-2" src={vector3} />
              <img className="vector-3" src={vector4} />
            </div>
          </div>
          <div className="rectangle-3"></div>
          <a href="javascript:SubmitForm('form5')">
            <div className="text-18">{text18}</div>
          </a>
          <img className="group-107" src={group107} />
          <div className="group-118">
            <div className="overlap-group14">
              <div className="text-25 valign-text-middle magra-bold-peach-cream-26-4px">{text25}</div>
              <div className="rectangle-17 border-3-5px-peach-cream"></div>
            </div>
            <div className="overlap-group17">
              <div className="lancer-votre-projet valign-text-middle magra-bold-peach-cream-26-4px">
                {lancerVotreProjet}
              </div>
              <a href="javascript:SubmitForm('form5')">
                <div className="rectangle-16 border-3-5px-peach-cream"></div>
              </a>
            </div>
            <div className="overlap-group16">

            <Link button to="/Pageconnexion">

              <div className="rectangle-17-1 border-3-5px-peach-cream" />
              

              <a className="connexion valign-text-middle magra-bold-peach-cream-26-4px" button to="Pageconnexion">connexion</a> 
              </Link>
             
   
             
            </div>
            <div className="overlap-group15">
              <a href="javascript:SubmitForm('form5')">
                <div className="rectangle-18 border-3-5px-peach-cream"></div>
              </a>
              <a href="javascript:SubmitForm('form5')">
              
                <div className="sinscrire valign-text-middle magra-bold-peach-cream-26-4px"  to="/Pageconnexion">{sinscrire}</div>
               
              </a>
            </div>
          </div>
          <Link button to="/Pageconnexion">
            <div>
            <img className="group-114" src={group114} />
            </div>
           
          </Link>
        </div>
        <div className="overlap-group3">
          <a href="javascript:SubmitForm('form5')">
            <img className="rectangle- animate-enter" src={rectangle6} />
          </a>
          <div className="text-1 valign-text-bottom magra-regular-normal-peach-cream-48px">{text1}</div>
        </div>
        <div className="overlap-group5">
          <img className="rectangle- animate-enter1" src={rectangle20} />
          <div className="text-2 valign-text-bottom magra-regular-normal-peach-cream-48px">{text2}</div>
        </div>
        <div className="mathematics valign-text-middle roboto-medium-black-18px">{mathematics}</div>
        <div className="text-3 valign-text-middle roboto-regular-normal-dodger-blue-14px">{text3}</div>
        <img className="image-3" src={image3} />
        <p className="text-4 valign-text-middle roboto-regular-normal-black-14px">{text4}</p>
        <div className="surname valign-text-middle roboto-regular-normal-black-24px">{surname}</div>
        <div className="overlap-group6">
          <div className="bg"></div>
          <div className="group-109">
            <div className="biology valign-text-middle roboto-medium-black-18px">{biology}</div>
            <img className="technology-4905258640-1" src={technology4905258_6401} />
            <p className="text-23 valign-text-middle roboto-regular-normal-black-14px">{text23}</p>
            <div className="text-24 valign-text-middle roboto-regular-normal-dodger-blue-14px">{text24}</div>
          </div>
        </div>
        <div className="overlap-group7">
          <div className="bg-1"></div>
          <div className="group-108">
            <div className="sant valign-text-middle roboto-medium-black-18px">{sant}</div>
            <img className="laboratory-2815641640-1" src={laboratory2815641_6401} />
            <p className="surname-1 valign-text-middle roboto-regular-normal-black-14px">{surname2}</p>
            <div className="text-22 valign-text-middle roboto-regular-normal-dodger-blue-14px">{text22}</div>
          </div>
        </div>
        <div className="sports valign-text-middle roboto-medium-black-18px">{sports}</div>
        <div className="overlap-group4">
          <div className="bg-2"></div>
          <img className="image-" src={image6} />
          <p className="text-5 valign-text-middle roboto-regular-normal-black-14px">{text5}</p>
          <div className="surname-2 valign-text-middle roboto-regular-normal-black-24px">{surname3}</div>
          <div className="learn-more valign-text-middle roboto-regular-normal-dodger-blue-14px">{learnMore}</div>
        </div>
        <div className="economics valign-text-middle roboto-medium-black-18px">{economics}</div>
        <div className="overlap-group8">
          <div className="bg-3"></div>
          <img className="image-" src={image7} />
          <p className="text-6 valign-text-middle roboto-regular-normal-black-14px">{text6}</p>
          <div className="surname-3 valign-text-middle roboto-regular-normal-black-24px">{surname4}</div>
          <div className="learn-more-1 valign-text-middle roboto-regular-normal-dodger-blue-14px">{learnMore2}</div>
        </div>
        <div className="education valign-text-middle roboto-medium-black-18px">{education}</div>
        <div className="overlap-group9">
          <div className="bg-4"></div>
          <img className="image-" src={image8} />
          <p className="text-7 valign-text-middle roboto-regular-normal-black-14px">{text7}</p>
          <div className="surname-4 valign-text-middle roboto-regular-normal-black-24px">{surname5}</div>
          <div className="learn-more-2 valign-text-middle roboto-regular-normal-dodger-blue-14px">{learnMore3}</div>
        </div>
        <div className="overlap-group1">
          <div className="rectangle-9 smart-layers-pointers "></div>
          <div className="text-8 valign-text-middle roboto-medium-black-66-5px">{text8}</div>
          <div className="text-9 valign-text-middle roboto-medium-black-66-5px">{text9}</div>
          <div className="text-10 valign-text-middle roboto-medium-black-66-5px">{text10}</div>
          <div className="text-13 valign-text-middle roboto-medium-peach-cream-30px">{text13}</div>
          <div className="text-14 valign-text-middle magra-bold-peach-cream-30px">{text14}</div>
          <div className="text-15 valign-text-middle magra-bold-peach-cream-30px">{text15}</div>
          <div className="text-16 valign-text-middle roboto-medium-peach-cream-30px">{text16}</div>
          <img className="comment-a-marche" src={commentAMarche} />
          <div className="lancez-votre-projet valign-text-middle animate-enter2">{lancezVotreProjet}</div>
          <img className="ellipse-3" src={ellipse3} />
          <img className="ellipse-6" src={ellipse6} />
          <img className="ellipse-5" src={ellipse5} />
          <img className="ellipse-4" src={ellipse4} />
          <img className="vector-4" src={vector5} />
          <img className="line-1" src={line1} />
          <img className="vector-5" src={vector6} />
          <img className="vector-6" src={vector7} />
          <img className="group-5" src={group5} />
          <img className="bullhorn-1" src={bullhorn1} />
        </div>
        <div className="overlap-group2">
          <div className="rectangle-10"></div>
          <div className="lancer-votre-projet-1">{lancerVotreProjet2}</div>
          <div className="comment-a-marche-1">{commentAMarche2}</div>
          <div className="text-11 valign-text-middle">{text11}</div>
          <div className="suivez-nous valign-text-bottom">{suivezNous}</div>
          <div className="bengerdaine valign-text-middle">{bengerdaine}</div>
          <div className="emplacements valign-text-middle">{emplacements}</div>
          <div className="liens-sociaux valign-text-middle">{liensSociaux}</div>
          <img className="vector-7" src={vector8} />
          <div className="instagram-1">
            <div className="overlap-group13-1">
              <img className="vector-8" src={vector9} />
              <img className="vector-9" src={vector10} />
              <img className="vector-10" src={vector11} />
            </div>
          </div>
          <img className="vector-11" src={vector12} />
          <div className="lequipe">{lEquipe}</div>
          <div className="text-21 valign-text-bottom">{text21}</div>
          <div className="faq">{faq}</div>
          <div className="a-propos">{aPropos}</div>
        </div>
        <div className="overlap-group12" style={{ backgroundImage: `url(${overlapGroup12})` }}>
          <div className="text-17 valign-text-middle">{text17}</div>
        </div>
        <div className="stepper-dots">
          <div className="back">
            <div className="place valign-text-bottom">{place}</div>
            <div className="chevron-left">
              <div className="overlap-group13-2" style={{ backgroundImage: `url(${overlapGroup13})` }}>
                <img className="bounds" src={bounds} />
              </div>
            </div>
          </div>
          <div className="dots">
            <div className="inactive-dot">
              <img className="ellipse" src={ellipse} />
            </div>
            <div className="active-dot">
              <img className="ellipse" src={ellipse2} />
            </div>
            <div className="active-dot">
              <img className="ellipse" src={ellipse7} />
            </div>
            <div className="active-dot">
              <img className="ellipse" src={ellipse8} />
            </div>
            <div className="active-dot">
              <img className="ellipse" src={ellipse9} />
            </div>
          </div>
          <div className="next">
            <div className="overlap-group14-1">
              <div className="next-1 valign-text-bottom">{next}</div>
              <div className="chevron-vertical">
                <div className="overlap-group13-3">
                  <img className="shape" src={shape} />
                  <img className="bounds-1" src={bounds2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group11">
          <h1 className="text-12 valign-text-bottom">{text12}</h1>
        </div>
        <div className="surname-5">
          <div className="span0">{spanText}</div>
          <div className="span1">{spanText2}</div>
        </div>
        <div className="overlap-group10">
          <div className="text-19 valign-text-middle">{text19}</div>
          <div className="flex-row-1">
            <div className="group-115">
              <div className="overlap-group14-2" style={{ backgroundImage: `url(${overlapGroup14})` }}>
                <div className="number valign-text-middle">{number}</div>
              </div>
            </div>
            <div className="group-111">
              <div className="overlap-group13-4" style={{ backgroundImage: `url(${overlapGroup132})` }}>
                <div className="price valign-text-middle">{price}</div>
              </div>
            </div>
            <div className="group-110">
              <div className="overlap-group15-1" style={{ backgroundImage: `url(${overlapGroup15})` }}>
                <div className="percent valign-text-middle">{percent}</div>
              </div>
            </div>
          </div>
          <div className="flex-row-2">
            <div className="funded-projects valign-text-middle magra-bold-peach-cream-36px">{fundedProjects}</div>
            <div className="text-20 valign-text-middle magra-bold-peach-cream-36px">{text20}</div>
            <div className="success-rate valign-text-middle magra-bold-peach-cream-36px">{successRate}</div>
          </div>
        </div>
      </form>
      <Link button to='/Pageconnexion'>
        <h1>aaaaaaaaaaaaaaa</h1>
      </Link>
      </div>
 );
}
}
const pageHomeData = {
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-5@1x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-6@1x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-4@2x.svg",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-3@2x.svg",
    text18: <>LANCER VOTRE<br />    PROJECT</>,
    group107: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/group-107@1x.svg",
    text25: "Découvrir les projets",
    lancerVotreProjet: "Lancer votre projet",
    connexion: "CONNEXION",
    sinscrire: "S’inscrire",
    group114: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/group-114@2x.svg",
    rectangle6: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/rectangle-6@1x.svg",
    text1: "Lancer votre project",
    rectangle20: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/rectangle-6@1x.svg",
    text2: "Lancer votre project",
    mathematics: "Mathematics",
    text3: "Découvrir les projets",
    image3: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/image-3@2x.svg",
    text4: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    surname: "Wolf",
    biology: "Biology",
    technology4905258_6401: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/technology-4905258-640-1@2x.svg",
    text23: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    text24: "Découvrir les projets",
    sant: "Santé",
    laboratory2815641_6401: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/laboratory-2815641-640-1@2x.svg",
    surname2: <>Le projet Santé est un projet Wikipédia mis en place pour coordonner les efforts de contributions portant sur le sujet de la santé publique.
<br />Il est destiné à faciliter et à coordonner les travaux dans ce domaine pour l’ensemble des contributeurs, même occasionnels.</>,
    text22: "Découvrir les projets",
    sports: "Sports",
    image6: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/image-3@2x.svg",
    text5: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    surname3: "Wolf",
    learnMore: "LEARN MORE",
    economics: "Economics",
    image7: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/image-3@2x.svg",
    text6: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    surname4: "Wolf",
    learnMore2: "LEARN MORE",
    education: "Education",
    image8: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/image-3@2x.svg",
    text7: <>The global gray wolf population is estimated <br />to be 300,000. The gray wolf is one of the world&#x27;s best-known and most-researched animals.</>,
    surname5: "Wolf",
    learnMore3: "LEARN MORE",
    text8: ">",
    text9: ">",
    text10: ">",
    text13: <>VOUS AVEZ UNE IDÉE <br />DE  PROJET</>,
    text14: <>VOUS RÉALISEZ VOTRE<br /> PROJET</>,
    text15: <>VOUS MOBILISEZ<br /> UNE LARGE<br /> COMMUNAUTÉ <br />QUI VOUS SOUTIENT</>,
    text16: <>VOUS SOUMETTEZ <br />VOTRE PROJET <br />SUR COrwdfUNDing</>,
    commentAMarche: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/comment--a-marche@2x.svg",
    lancezVotreProjet: "LANCEZ VOTRE PROJET",
    ellipse3: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-3@1x.png",
    ellipse6: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-3@1x.png",
    ellipse5: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-3@1x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-3@1x.png",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-1@2x.svg",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/line-1@1x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-11@2x.svg",
    vector7: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-2@2x.svg",
    group5: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/group-5@2x.svg",
    bullhorn1: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/bullhorn-1@2x.svg",
    lancerVotreProjet2: "LANCER VOTRE PROJET",
    commentAMarche2: "Comment ça marche ?",
    text11: "Envoyez-nous un Email",
    suivezNous: "SUIVEZ-NOUS",
    bengerdaine: "Bengerdaine/",
    emplacements: "EMPLACEMENTS :",
    liensSociaux: "LIENS SOCIAUX",
    vector8: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-7@2x.svg",
    vector9: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-8@2x.svg",
    vector10: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-9@2x.svg",
    vector11: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector-10@2x.svg",
    vector12: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/vector@2x.svg",
    lEquipe: "L'equipe",
    text21: "Lancer votre project",
    faq: "FAQ",
    aPropos: "A PROPOS",
    overlapGroup12: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/image@1x.svg",
    text17: "1:Définissez votre projet et votre objectif  de financement.",
    place: "BACK",
    overlapGroup13: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/shape@2x.svg",
    bounds: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/bounds@2x.png",
    ellipse: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse@2x.svg",
    ellipse2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-6@2x.svg",
    ellipse7: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-3@2x.svg",
    ellipse8: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-4@2x.svg",
    ellipse9: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/ellipse-5@2x.svg",
    next: "NEXT",
    shape: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/shape-1@2x.svg",
    bounds2: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/releases/605150bbbc014983ee774d70/img/bounds@2x.png",
    text12: "liste des categories",
    spanText: <>Le protocole d&#x27;expérimentation<br /></>,
    spanText2: " Voici comment ça fonctionne.",
    text19: <>Crowdfunding research projects brings scientists and the <br />                              public closer together.</>,
    overlapGroup14: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/ellipse-59@2x.svg",
    number: "700",
    overlapGroup132: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/ellipse-59@2x.svg",
    price: "$4,387",
    overlapGroup15: "https://anima-uploads.s3.amazonaws.com/projects/6050e67f94c66468a035d6a9/img/ellipse-59@2x.svg",
    percent: "50%",
    fundedProjects: "funded projects",
    text20: "average project size",
    successRate: "success rate",
};

