
var userLanguage = window.navigator.userLanguage || window.navigator.language;

// console.log(userLanguage);

// Start
window.onload = () => populatePage(userLanguage);


function accessLink(url) {
    window.open(url, '_blank').focus();
}

function populatePage(userLanguage){

    // console.log(userLanguage)

    if (userLanguage != 'pt-BR') {
        printData(languageEn)
        return languageEn
    }else {
        printData(languagePtbr)  
        return languagePtbr
    }
    
}

function printData(language){


  document.getElementById("header-name").innerHTML=language.headerName;
  document.getElementById("header-role").innerHTML=language.headerRole;
  document.getElementById("header-xp").innerHTML=language.headerXp;
  document.getElementById("header-location").innerHTML=language.headerLocation;
  document.getElementById("header-portfolio").innerHTML=language.headerPortfolio;
  document.getElementById("header-contact-btn").innerHTML=language.headerContactBtn;

  document.getElementById("about-title").innerHTML=language.aboutTitle;
  document.getElementById("about-text1").innerHTML=language.aboutText1;
  document.getElementById("about-text2").innerHTML=language.aboutText2;
  document.getElementById("about-text3").innerHTML=language.aboutText3;
  document.getElementById("about-tools-title").innerHTML=language.aboutToolsTitle;
  document.getElementById("about-additional-knowledge-title").innerHTML=language.aboutAdditionalKnowledgeTitle;
  document.getElementById("about-english-title").innerHTML=language.aboutEnglishTitle;
  document.getElementById("about-english-subtitle").innerHTML=language.aboutEnglishSubtitle;
  document.getElementById("about-web-title").innerHTML=language.aboutWebTitle;
  document.getElementById("about-web-subtitle").innerHTML=language.aboutWebSubtitle;
  document.getElementById("about-illustration-title").innerHTML=language.aboutIllustrationTitle;
  document.getElementById("about-illustration-subtitle").innerHTML=language.aboutIllustrationSubtitle;
  document.getElementById("about-video-title").innerHTML=language.aboutVideoTitle;
  document.getElementById("about-video-subtitle").innerHTML=language.aboutVideoSubtitle;

  document.getElementById("xp-title").innerHTML=language.xpTitle;
  document.getElementById("xp-role1-title").innerHTML=language.xpRole1Title;
  document.getElementById("xp-role1-date").innerHTML=language.xpRole1Date;
  document.getElementById("xp-role2-title").innerHTML=language.xpRole2Title;
  document.getElementById("xp-role2-date").innerHTML=language.xpRole2Date;
  document.getElementById("xp-role3-title").innerHTML=language.xpRole3Title;
  document.getElementById("xp-role3-date").innerHTML=language.xpRole3Date;
  document.getElementById("xp-role4-title").innerHTML=language.xpRole4Title;
  document.getElementById("xp-role4-date").innerHTML=language.xpRole4Date;

  document.getElementById("xp-title-mobile").innerHTML=language.xpTitle;
  document.getElementById("xp-role1-title-mobile").innerHTML=language.xpRole1Title;
  document.getElementById("xp-role1-date-mobile").innerHTML=language.xpRole1Date;
  document.getElementById("xp-role2-title-mobile").innerHTML=language.xpRole2Title;
  document.getElementById("xp-role2-date-mobile").innerHTML=language.xpRole2Date;
  document.getElementById("xp-role3-title-mobile").innerHTML=language.xpRole3Title;
  document.getElementById("xp-role3-date-mobile").innerHTML=language.xpRole3Date;
  document.getElementById("xp-role4-title-mobile").innerHTML=language.xpRole4Title;
  document.getElementById("xp-role4-date-mobile").innerHTML=language.xpRole4Date;

  document.getElementById("formation-title").innerHTML=language.formationTitle;
  document.getElementById("formation-college-title").innerHTML=language.formationCollegeTitle;
  document.getElementById("formation-college-date").innerHTML=language.formationCollegeDate;
  document.getElementById("formation-courses-title").innerHTML=language.formationCoursesTitle;

  for (i=1; i <= language.formationCourses.length; i++) {
    var titleId = "formation-courses-title" + i;
    var subtitleId = "formation-courses-subtitle" + i;


    document.getElementById(titleId).innerHTML=language.formationCourses[i-1].title;
    document.getElementById(subtitleId).innerHTML=language.formationCourses[i-1].subtitle;
  }

  document.getElementById("footer-portfolio").innerHTML=language.headerPortfolio;
  document.getElementById("footer-contact-btn").innerHTML=language.headerContactBtn;


}