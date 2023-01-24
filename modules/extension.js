TooltipPlus.determineMobile = function determineMobile(){
    var a;
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
        a = true ;
        console.log("MOBILE");
    } else {
        a = false ;
        console.log("NOT MOBILE");
    }
    return a;
}

export {determineMobile};