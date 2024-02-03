function sendEmail() {
    document.getElementById("sent-text").hidden = false;
}

function pageChange(page) {
    var homePage = document.getElementById('home-page');
    var artworkPage = document.getElementById('artwork-page');
    var contactPage = document.getElementById('contact-page');

    homePage.hidden = true;
    artworkPage.hidden = true;
    contactPage.hidden = true;

    if(page == 'home') {
        homePage.hidden = false;
    } else if(page == 'artwork') {
        artworkPage.hidden = false;
    } else if(page == 'contact') {
        contactPage.hidden = false;
    }
}

tippy('.youtube-icon', {
    content: 'Youtube',
    placement: 'bottom',
  });

  tippy('.github-icon', {
    content: 'Github',
    placement: 'bottom',
  });

  tippy('.linkedin-icon', {
    content: 'Linkedin',
    placement: 'bottom',
  });