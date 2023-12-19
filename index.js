var smallScreen = window.matchMedia("(max-width: 967px)");
if (smallScreen.matches) {
    $("#share").click(()=> {
        $("#main-foot").addClass("hidden");
        $("#socials").removeClass("hidden");
    })
    $("#revert").click(()=> {
        $("#main-foot").removeClass("hidden");
        $("#socials").addClass("hidden");
    })
}

var largeScreen = window.matchMedia("(min-width: 968px)");
if (largeScreen.matches){
    $("#share").click(()=> {
        $("#socials").addClass("show");
    })
}

// var x = window.matchMedia("(min-width: 768px)");
// x.addEventListener("change", function() { })
// if(x) {

//     $("#share").click(()=> {
//         $("#socials").addClass("show");
//     })
// }
