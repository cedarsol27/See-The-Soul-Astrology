var venusCycle001 = new Date(1900, 06, 08, 11, 06, 0, 0);
var venusCycle002 = new Date(1902, 01, 14, 22, 58, 0, 0); 
var venusCycle003 = new Date(1903, 08, 17, 21, 13, 0, 0);
var venusCycle004 = new Date(1905, 03, 27, 09, 52, 0, 0);
var venusCycle005 = new Date(1906, 10, 30, 05, 20, 0, 0);
var venusCycle006 = new Date(1908, 06, 06, 03, 32, 0, 0);
var venusCycle007 = new Date(1910, 01, 12, 12, 24, 0, 0);
var venusCycle008 = new Date(1911, 08, 15, 11, 58, 0, 0);
var venusCycle009 = new Date(1913, 03, 25, 01, 50, 0, 0);
var venusCycle010 = new Date(1914, 10, 27, 17, 37, 0, 0);
var venusCycle011 = new Date(1916, 06, 03, 19, 59, 0, 0);
var venusCycle012 = new Date(1918, 01, 10, 01, 47, 0, 0);
var venusCycle013 = new Date(1919, 08, 13, 02, 52, 0, 0);
var venusCycle014 = new Date(1921, 03, 22, 17, 39, 0, 0);
var venusCycle015 = new Date(1922, 10, 25, 06, 00, 0, 0);
var venusCycle016 = new Date(1924, 06, 01, 12, 22, 0, 0);
var venusCycle017 = new Date(1926, 01, 07, 15, 11, 0, 0);
var venusCycle018 = new Date(1927, 08, 10, 17, 53, 0, 0);
var venusCycle019 = new Date(1929, 03, 20, 09, 28, 0, 0);

function venusPhaseFunction() {
    document.getElementById("date1").innerHTML = venusCycle002 - venusCycle001;
    document.getElementById("date2").innerHTML = venusCycle003 - venusCycle002;
    document.getElementById("date3").innerHTML = venusCycle004 - venusCycle003;
    document.getElementById("date4").innerHTML = venusCycle005 - venusCycle004;
    document.getElementById("date5").innerHTML = venusCycle006 - venusCycle005;
    document.getElementById("date6").innerHTML = venusCycle007 - venusCycle006;
    document.getElementById("date7").innerHTML = venusCycle008 - venusCycle007;
    document.getElementById("date8").innerHTML = venusCycle009 - venusCycle008;
    document.getElementById("date9").innerHTML = venusCycle010 - venusCycle009;
    document.getElementById("date10").innerHTML = venusCycle011 - venusCycle010;
    document.getElementById("date11").innerHTML = venusCycle012 - venusCycle011;
    document.getElementById("date12").innerHTML = venusCycle013 - venusCycle012;
    document.getElementById("date13").innerHTML = venusCycle014 - venusCycle013;
    document.getElementById("date14").innerHTML = venusCycle015 - venusCycle014;
    document.getElementById("date15").innerHTML = venusCycle016 - venusCycle015;
    document.getElementById("date16").innerHTML = venusCycle017 - venusCycle016;
    document.getElementById("date17").innerHTML = venusCycle018 - venusCycle017;
    document.getElementById("date18").innerHTML = venusCycle019 - venusCycle018;
    document.getElementById("date19").innerHTML = venusCycle020 - venusCycle019;
}


var venusLength = venusCycle002 - venusCycle001;
var d = currentVenus%parseInt(currentVenus);
var e = 1 / 12;
var f = parseInt(d/e);
function venusPhaseFunction(n) {
    document.getElementById("disp").innerHTML = "The current Venus" + logoPlanet[3] + " phase is " + venusPhase[n] + ".<br>"
    + "For more information, refer to pages " + pages[n] + " in the book <i>The Light of Venus</i>.";
}

if( date <= 0.00347524 ){
    venusPhaseFunction(0);
}
else if( d > 0.00781929 && d <= 0.01563858 ){
    venusPhaseFunction(1);
}
else if( d > 0.01563858 && d <= 0.01476977 ){
    venusPhaseFunction(2);
}
else if( d > 0.01476977 && d <= 0.03735882 ){
    venusPhaseFunction(3);
}
else if( d > 0.03735882 && d <= 0.12597741 ){
    venusPhaseFunction(4);
}
else if( d > 0.12597741 && d <= 0.42137272 ){
    venusPhaseFunction(5);
}
else if( d > 0.42137272 && d <= 0.50825369 ){
    venusPhaseFunction(6);
}
else if( d > 0.50825369 && d <= 0.58992181 ){
    venusPhaseFunction(7);
}
else if( d > 0.58992181 && d <= 0.60382276 ){
    venusPhaseFunction(8);
}
else if( d > 0.60382276 && d <= 0.88705474 ){
    venusPhaseFunction(9);
}
else if( d > 0.88705474 && d <= 0.97393571 ){
    venusPhaseFunction(10);
}
else if( d > 0.97393571 && d <= 0.98957428 ){
    venusPhaseFunction(11);
}
else if( d > 0.98957428 && d < 1){
    venusPhaseFunction(12);
}
else {
    document.getElementById("disp").innerHTML = "Error"
}