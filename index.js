const smallScreen = window.matchMedia("(max-width: 767px)");
const largeScreen = window.matchMedia("(min-width: 768px)");

const dNone = "d-none";
const shareBtn = $("#share");
const revertBtn = $("#revert");
const profile = $("#main-foot");
const social = $("#socials");

if (smallScreen.matches) {
   shareBtn.click(()=> {
        if (profile.hasClass(dNone) == false) {
            profile.addClass(dNone);
            social.removeClass(dNone);
        }
        else {      
            social.addClass(dNone);
            profile.removeClass(dNone);
        }
    })
    revertBtn.click(()=> {
        if (profile.hasClass(dNone) == false) {            
            profile.addClass(dNone);
            social.removeClass(dNone);
        }
        else {            
            social.addClass(dNone);
            profile.removeClass(dNone);
        }
    })
} else if (largeScreen.matches){
    shareBtn.click(()=> {
        social.removeClass(dNone);
    })
}
