///////////////////////
//// Stored Arrays ////
////               ////
///////////////////////

var date = new Date();

var planet = ["Sun","Moon","Mercury","Venus"];

var zodiac = ["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio",
        "Sagittarius","Capricorn","Aquarius","Pisces"];



var logoPlanet = new Array (10);
    logoPlanet[0] = "<span class='sign'>b</span>";//Sun
    logoPlanet[1] = "<span class='sign'>a</span>";//Moon
    logoPlanet[2] = "<span class='sign'>d</span>";//Mercury
    logoPlanet[3] = "<span class='sign'>c</span>";//Venus
    logoPlanet[4] = "<span class='sign'>e</span>";//Mars
    logoPlanet[5] = "<span class='sign'>f</span>";//Jupiter
    logoPlanet[6] = "<span class='sign'>g</span>";//Saturn
    logoPlanet[7] = "<span class='sign'>i</span>";//Uranus
    logoPlanet[8] = "<span class='sign'>j</span>";//Neptune
    logoPlanet[9] = "<span class='sign'>t</span>";//Pluto

var logoSign = new Array (13);
    logoSign[0] = "<span class='logo'> ^ </span> ";
    logoSign[1] = "<span class='logo'> _ </span> ";
    logoSign[2] = "<span class='logo'> ` </span> ";
    logoSign[3] = "<span class='logo'> a </span> ";
    logoSign[4] = "<span class='logo'> b </span> ";
    logoSign[5] = "<span class='logo'> c </span> ";
    logoSign[6] = "<span class='logo'> d </span> ";
    logoSign[7] = "<span class='logo'> e </span> ";
    logoSign[8] = "<span class='logo'> f </span> ";
    logoSign[9] = "<span class='logo'> g </span> ";
    logoSign[10] = "<span class='logo'> h </span> ";
    logoSign[11] = "<span class='logo'> i </span> ";
    logoSign[12] = "<br>There is an error...";
    
var venusPhase = new Array(13)
    venusPhase[0] = "Inception";
    venusPhase[1] = "Gestation";
    venusPhase[2] = "Birth";
    venusPhase[3] = "Emergence";
    venusPhase[4] = "Fullness";
    venusPhase[5] = "Surrendering & Discovery";
    venusPhase[6] = "Immersion";
    venusPhase[7] = "Transmutation";
    venusPhase[8] = "Rebirth";
    venusPhase[9] = "Remembering & Embodiment";
    venusPhase[10] = "Wholeness";
    venusPhase[11] = "Completion";
    venusPhase[12] = "Transition";

var pages = new Array (13);
    pages[0] = "53-60";
    pages[1] = "61-68";
    pages[2] = "69-76";
    pages[3] = "77-84";
    pages[4] = "85-94";
    pages[5] = "95-104";
    pages[6] = "105-116";
    pages[7] = "117-130";
    pages[8] = "131-138";
    pages[9] = "139-148";
    pages[10] = "149-158";
    pages[11] = "159-168";
    pages[12] = "169-178";

var error = "There is an error...";
///////////////////////////
//// Sun Sign Function ////
////                   ////
///////////////////////////

function writeSun(n) {
    document.getElementById("sun").innerHTML = planet[0]+logoPlanet[0] + " &nbspin " + zodiac[n]+logoSign[n];
}
    if((date.getMonth() == 02 && date.getDate() > 20) || 
    (date.getMonth() == 03 && date.getDate() < 20)) {
       writeSun(0); //Aries
    }
    else if((date.getMonth() == 03 && date.getDate() > 19) || 
    (date.getMonth() == 04 && date.getDate() < 21)) {
        writeSun(1); //Taurus
    }
    else if((date.getMonth() == 04 && date.getDate() < 20) || 
    (date.getMonth() == 05 && date.getDate() < 21)) {
        writeSun(2); //Gemini
    }
    else if((date.getMonth() == 05 && date.getDate() > 20) || 
    (date.getMonth() == 06 && date.getDate() < 23)) {
        writeSun(3); //Cancer
    }
    else if((date.getMonth() == 06 && date.getDate() > 22) || 
    (date.getMonth() == 07 && date.getDate() < 23)) {
        writeSun(4); //Leo
    }
    else if((date.getMonth() == 07 && date.getDate() < 22) || 
    (date.getMonth() == 08 && date.getDate() < 23)) {
        writeSun(5); //Virgo
    }
    else if((date.getMonth() == 08 && date.getDate() > 22) || 
    (date.getMonth() == 09 && date.getDate() < 23)) {
        writeSun(6); //Libra
    }
    else if((date.getMonth() == 09 && date.getDate() > 22) || 
    (date.getMonth() == 10 && date.getDate() < 22)) {
        writeSun(7); //Scorpio
    }
    else if((date.getMonth() == 10 && date.getDate() < 21) || 
    (date.getMonth() == 11 && date.getDate() < 22)) {
        writeSun(8); //Sagittarius
    }
    else if((date.getMonth() == 11 && date.getDate() > 21) || 
    (date.getMonth() == 00 && date.getDate() < 20)) {
        writeSun(9); //Capricorn
    }
    else if((date.getMonth() == 00 && date.getDate() > 20) || 
    (date.getMonth() == 01 && date.getDate() < 18)) {
        writeSun(10); //Aquarius
    }
    else if((date.getMonth() == 02 && date.getDate() < 19) || 
    (date.getMonth() == 02 && date.getDate() < 21)) {
        var holdDegree = 0;
        writeSun(11); //Pisces
    }
    else {
        writeSun(12); // Only if there's an error
    }


////////////////////////////////////////////////////////////
//// This is a Moon date tool for Determining the speed ////
//// of the revolution around the Earth                 ////
////////////////////////////////////////////////////////////

function writeMoon(n) {
    document.getElementById("moon").innerHTML = planet[1]+logoPlanet[1] + " &nbspin " + zodiac[n]+logoSign[n];
}

var moonStartDate = new Date(1900, 0, 6, 15, 34, 40, 0); // Jan. 6, 1900 @ 3
var nextMoonDate = moonStartDate * 1 + (27.32201 * 86400000);
var moonHold = nextMoonDate - moonStartDate; // One cycle
var currentMoon = (date - moonStartDate)/moonHold; // Current date minus Moon Start and divides into 27 days
var a = currentMoon%parseInt(currentMoon);
var b = 1 / 12;
var c = parseInt(a / b);

switch (c)
{
    case 0:
        writeMoon(0);
        break;
    case 1:
        writeMoon(1);
        break;
    case 2:
        writeMoon(2);
        break;
    case 3:
        writeMoon(3);
        break;
    case 4:
        writeMoon(4);
        break;
    case 5:
        writeMoon(5);
        break;
    case 6:
        writeMoon(6);
        break;
    case 7:
        writeMoon(7);
        break;
    case 8:
        writeMoon(8);
        break;
    case 9:
        writeMoon(9);
        break;
    case 10:
        writeMoon(10);
        break;
    case 11:
        writeMoon(11);
        break;
    default:
        error;
}

////////////////////////////////////////
////////////////////////////////////////
//// This is Venus Synodic cycle... ////
////                                ////
////////////////////////////////////////

function writeVenus(n) {
    document.getElementById("venus").innerHTML = planet[3]+logoPlanet[3] + " &nbspin " + zodiac[n]+logoSign[n];
}
var venusCycle001 = new Date(2020, 05, 03, 17, 44, 0, 0);
var venusCycle002 = new Date(2022, 00, 09, 00, 48, 0, 0);
var venusLength = venusCycle002 - venusCycle001;


var Inception = 172800000; // 2 days
var Gestation = 388800000; // 4.5 days
var Birth = 172800000; // 2 days
var Emergence = 1123200000; // 13 days
var Fullness = 4406400000; // 51 days
var Surrendering = 14688000000; // 170 days
var Immersion = 4320000000; // 50 days
var Transmutation = 4060800000; // 47 days
var Rebirth = 691200000; // 8 days
var Remembering = 14083200000; // 163 days
var Wholeness = 4320000000; // 50 days
var Completion = 1296000000; // 15 days
var Transition = 518400000; // 6 days
var sum = Inception + Gestation + Birth + Emergence + Fullness + Surrendering + Immersion + Transmutation + Rebirth +Remembering + Wholeness + Completion + Transition;
document.getElementById("disp2").innerHTML =((venusLength - sum)/100/60/60/24) + " days remaining.";

function venusPhaseFunction(n) {
    document.getElementById("disp").innerHTML = "The current Venus" + logoPlanet[3] + " phase is " + venusPhase[n] + ".<br>"
    + "For more information, refer to pages " + pages[n] + " in the book <i>The Light of Venus</i> by Adam Gainsburg.";
}

    var a = venusCycle001 + Inception;
    var b = a + Gestation;
    var c = b + Birth;
    var d = c + Emergence;
    var e = d + Fullness;
    var f = e + Surrendering;
    var g = f + Immersion;
    var h = g + Transmutation;
    var i = h + Rebirth;
    var j = i + Remembering;
    var k = j + Wholeness;
    var l = k + Completion

    if( date <= (venusCycle001 + Inception) ){
        venusPhaseFunction(0);
    }
    
    else if( date > a && date <= b ){
        venusPhaseFunction(1);
    }

    else if( date > b && date <= c ){
        venusPhaseFunction(2);
    }

    else if( date > c && date <= d ){
        venusPhaseFunction(3);
    }

    else if( date > d && date <= (d + Fullness) ){
        venusPhaseFunction(4);
    }

    else if( date > e && date <= (e + Surrendering) ){
        venusPhaseFunction(5);
    }

    else if( date > f && date <= (f + Immersion) ){
        venusPhaseFunction(6);
    }

    else if( date > g && date <= (g + Transmutation) ){
        venusPhaseFunction(7);
    }

    else if( date > h && date <= (h + Rebirth) ){
        venusPhaseFunction(8);
    }

    else if( date > i && date <= (i + Remembering) ){
        venusPhaseFunction(9);
    }

    else if( date > j && date <= (j + Wholeness) ){
        venusPhaseFunction(10);
    }

    else if( date > k && date <= (k + Completion) ){
        venusPhaseFunction(11);
    }

    else if( date > l && date < venusCycle002){
        venusPhaseFunction(12);
    }
    else {
        document.getElementById("disp").innerHTML = error;
    }

////////////////////
//// Mars Phase ////
////            ////
////////////////////

