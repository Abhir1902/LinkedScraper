(function () {
  window.addEventListener("load", () => {
    var profile_name = document.getElementsByClassName(
      "text-heading-xlarge inline t-24 v-align-middle break-words"
    )[0].innerText;
    // var imgURL = document.getElementsByClassName(`pv-top-card-profile-picture pv-top-card-profile-picture__container pv-top-card_photo presence-entity_image EntityPhoto-circle-9`);
    var linkedInURL = document.getElementsByClassName(
      "text-heading-xlarge inline t-24 v-align-middle break-words"
    )[0].baseURI;
     if(document.getElementsByClassName('ember-view profile-photo-edit__preview').length>0){
      var imgURL = document.getElementsByClassName('ember-view profile-photo-edit__preview')[0].currentSrc;
    }
    else if(document.getElementsByClassName(`pv-top-card-profile-picture pv-top-card-profile-picture__container
    pv-top-card__photo presence-entity__image EntityPhoto-circle-9
    `).length>0
    ) {
      if(document.getElementsByClassName(`pv-top-card-profile-picture pv-top-card-profile-picture__container
      pv-top-card__photo presence-entity__image EntityPhoto-circle-9
      `)[0].getElementsByTagName("img").length>0){
        var imgURL = document.getElementsByClassName(`pv-top-card-profile-picture pv-top-card-profile-picture__container
        pv-top-card__photo presence-entity__image EntityPhoto-circle-9
        `)[0].getElementsByTagName("img")[0].src;
      }
      else{
        var imgURL = "";
      }
    }
    else{
        var imgURL = "";
    }
    var obj = {};
    obj.profile_name = profile_name;
    obj.linkedInURL = linkedInURL;
    obj.imgURL = imgURL;
    if (document.getElementsByClassName("text-body-medium break-words")) {
      var designation = document.getElementsByClassName(
        "text-body-medium break-words"
      )[0].innerText;
      obj.designation = designation;
    } else {
      obj.designation = "";
    }
    if (
      document.getElementsByClassName(
        "text-body-small inline t-black--light break-words"
      )
    ) {
      var location = document.getElementsByClassName(
        "text-body-small inline t-black--light break-words"
      )[0].innerText;
      obj.location = location;
    } else {
      obj.location = "";
    }
    if (document.getElementById("education")) {
      var education = document.getElementById("education").parentNode;
      var t = education.getElementsByClassName(
        "artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
      );
      var educationalQualifications = [];
      for (let i = 0; i < t.length; i++) {
        educationalQualifications.push(t[i].innerText);
      }
      obj.educationalQualifications = educationalQualifications;
    } else {
      obj.educationalQualifications = [];
    }
    if (document.getElementById("experience")) {
      var experience = document.getElementById("experience").parentNode;
      var m = experience.getElementsByClassName(
        "artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
      );
      var experiences = [];
      for (let i = 0; i < m.length; i++) {
        experiences.push(m[i].innerText);
      }
      obj.experiences = experiences;
      obj.company = experiences[0];
    } else {
      obj.experiences = [];
      obj.company = "";
    }
    if (document.getElementById("about")) {
      var about = document
        .getElementById("about")
        .parentNode.getElementsByClassName(
          "pv-shared-text-with-see-more t-14 t-normal t-black  display-flex align-items-center"
        )[0].innerText;
      obj.about = about;
    } else {
      obj.about = "";
    }
    if (document.getElementById("languages")) {
      var language = document.getElementById("languages").parentNode;
      var n = language.getElementsByClassName(
        "artdeco-list__item pvs-list__item--line-separated pvs-list__item--one-column"
      );
      var languages = [];
      for (let i = 0; i < n.length; i++) {
        languages.push(n[i].innerText);
      }
      obj.languages = languages;
    } else {
      obj.languages = [];
    }
    console.log(obj);
    chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
      // If the received message has the expected format...
      console.log(msg,sender);
      if (msg.text === 'report_back') {
          // Call the specified callback, passing
          // the web-page's DOM content as argument
          // sendResponse(document.all[0].outerHTML);
          sendResponse({text: 'download',data:JSON.stringify(obj)});
      }
  });
  });
})();
