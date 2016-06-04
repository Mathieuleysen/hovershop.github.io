function main() {
    var homenav = document.getElementById("homenavhtml");
    var boardsnav = document.getElementById("boardsnavhtml");
    var contactnav = document.getElementById("contactnavhtml");
    var appnav = document.getElementById("appnavhtml");

    homenav.onclick= function(){
        test('S0');
        return false;
    }
    boardsnav.onclick= function(){
        test('S1');
        return false;
    }
    contactnav.onclick= function(){
        test('S3');
        return false;
    }
    appnav.onclick = function () {
        test('S4')
        return false;
    }

    function scrollTo(to, duration) {
    if (document.body.scrollTop == to) return;
    var diff = to - document.body.scrollTop;
    var scrollStep = Math.PI / (duration / 10);
    var count = 0, currPos;
    start = document.body.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else { clearInterval(scrollInterval); }
    },10);
}

    function test(elID){
        if (elID !== "S0"){
            var dest = document.getElementById(elID);
            scrollTo(dest.offsetTop - 80, 500);
          } else {
            var dest = document.getElementById(elID);
            scrollTo(dest.offsetTop, 500);
          }
}


}

window.onload = function() {
       main();
}
