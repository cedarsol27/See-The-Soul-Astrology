// Write code for getting user input and return zodiac Sun sign
function zodiac() {
    var m = document.getElementById("month").value;
    var d = parseInt(document.getElementById("day").value);
    var r;

        if( m == "mar" && d > 19 || m == "apr" && d < 21){
            r = "Your Sun Sign is in Aries";
        }

        if( m == "apr" && d > 20 || m == "may" && d < 20){
            r = "Your Sun Sign is in Taurus";
        }

        if( m == "may" && d > 20 || m == "jun" && d < 21){
            r = "Your Sun Sign is in Gemini";
        }

        if( m == "jun" && d < 31 || m =="jul" && d < 21){
            r = "Your Sun Sign is in Cancer";
        }

        if( m == "jul" && d > 19 || m == "aug" && d < 21){
            r = "Your Sun Sign is in Leo";
        }

        if( m == "aug" && d > 19 || m == "sep" && d < 21){
            r = "Your Sun Sign is in Virgo";
        }

        if( m == "sep" && d > 19 || m == "oct" && d < 21){
            r = "Your Sun Sign is in Libra";
        }

        if( m == "oct" && d > 19 || m == "nov" && d < 21 ){
            r = "Your Sun Sign is in Scorpio";
        }

        if( m == "nov" && d > 19 || m == "dec" && d < 21){
            r = "Your Sun Sign is in Sagittarius";
        }

        if( m == "dec" && d > 19 || m == "jan" && d < 21 ){
            r = "Your Sun Sign is in Capricorn";
        }

        if( m == "jan" && d > 20 || m == "feb" && d < 21){
            r = "Your Sun Sign is in Aquarius";
        }

        if( m == "feb" && d > 19 || m == "mar" && d < 21 ){
            r = "Your Sun Sign is in Pisces";
        }

    document.getElementById("display").innerHTML = r;

}
