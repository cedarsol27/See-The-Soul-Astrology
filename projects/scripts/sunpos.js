

var date = new Date();

var planet = ["Sun","Moon"];

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

var logoSign = new Array (12);
    logoSign[0] = "<span class='logo'> ^ </span> ";
    logoSign[1] = "<span class='logo'> _ </span> ";
    logoSign[2] = "<span class='logo'> ` </span> ";
    logoSign[3] = "<span class='logo'> a </span> ";
    logoSign[4] = "<span class='logo'> b </span> ";
    logoSign[5] = "<span class='logo'> c </span>";
    logoSign[6] = "<span class='logo'> d </span>";
    logoSign[7] = "<span class='logo'> e </span>";
    logoSign[8] = "<span class='logo'> f </span>";
    logoSign[9] = "<span class='logo'> g </span>";
    logoSign[10] = "<span class='logo'> h </span>";
    logoSign[11] = "<span class='logo'> i </span>";



function writeSun(n) {
    document.getElementById("sun").innerHTML = planet[0]+logoPlanet[0] + " &nbspin " + zodiac[n]+logoSign[n];

}

function writeMoon(n) {
    document.getElementById("moon").innerHTML = planet[1]+logoPlanet[1] + " &nbspin " + zodiac[n]+logoSign[n];

}

// var degrees = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

// function degree() {
//     var signDate = date.getDate();
//     var startDate = new Date(2020, 2, 19, 20, 49, 0, 0); // restart at month 2
//     var current = (((startDate - signDate) / 86400000) / 360)/2;
//     document.getElementById("currentDisp").innerHTML = "Math formula in test: " + current.toFixed(0) + " degrees of " + writeSun(0);   
// };

// function findDegree() {
//     var holdDate = date.getDate();
//     var holdDegree = degrees[29];
//     var returnDegree = (holdDegree - holdDate);
//     var currentDegree = holdDate + returnDegree;

//     for(i = 1; i < holdDate; i++) {
//         holdDegree += 1;
//         document.getElementById("newVal").innerHTML = "Degrees: " + "<br>Date: " + holdDate
//         + "<br>Return remaining Degree: " + returnDegree + "<br>Current Position: " + currentDegree;
//     }
// }

if((date.getMonth() == 02 && date.getDate() > 20) || 
(date.getMonth() == 03 && date.getDate() < 20)) {
    writeSun(0); //Aries
  //  findDegree();
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
  //  degree();
  //  findDegree();
}

////////////////////////////////////////////////////////////
//// This is a Moon date tool for Determining the speed ////
//// of the revolution around the Earth                 ////
////////////////////////////////////////////////////////////

var moonStartDate = new Date(2019, 8, 14, 15, 32, 26, 0); // Sept. 14, 2019 3:32:26 pm Start Date
var nextMoonDate = new Date(2019, 9, 11, 21, 45, 42, 0) // Oct. 11, 2019, 9:45:42 pm ... One full month for the moon to travel 12 exact signs
var moonHold = nextMoonDate - moonStartDate; // One cycle
var moonCycles = moonHold / 1000 / 3600 / 24; // Convert into days
var moonMS = (date - moonStartDate) / 1000 / 3600 / 24; // moon calculation for ms
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
}


///////////////////////////////////////////////////////////
// This is another formula to determine the best outcome //
///////////////////////////////////////////////////////////

//var otherMoonHold = ((( 27 * 24 + 7 ) * 3600 + 43 ) * 1000); // Via the internet
//var otherMoonCycle = otherMoonHold / 1000 / 3600 / 24
//var otherCurrentMoon = (date - moonStartDate)/otherMoonHold;

//var x = otherCurrentMoon%parseInt(otherCurrentMoon);
//var z = x / y;



////////////////////////////////////////////////////////////////
//// || In theory, this should be the only place to edit || ////
//// VV                                                  VV ////
////////////////////////////////////////////////////////////////




document.getElementById("date").innerHTML = moonMS.toFixed(6) + " days since Moon start date of Sept. 14, 2019 @ 3:33pm.<br>" 
+ moonCycles.toFixed(6) + " days per cycle.<br>" + currentMoon.toFixed(6) + " full revolutions of the moon.<br>" 
//+ otherMoonCycle + " new variable.";



//document.getElementById("math").innerHTML = b + " variable for internet data<br>" + z +" variable for app data";






/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//// This is Venus Synodic cycle... /////////////////////////////////////
////                                /////////////////////////////////////
////////////////////////////////////////

var venusStartDate = new Date(2017, 2, 25, 10, 17, 0, 0)
var nextVenusDate = new Date(2018, 9, 26, 14, 16, 0, 0);
var venusHold = nextVenusDate - venusStartDate;
var venusCycles = venusHold / 1000 / 3600 / 24;
var currentVenus = (date - venusStartDate)/venusHold;

