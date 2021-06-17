var images=[
    "https://static.wikia.nocookie.net/olympians/images/1/10/Percy_Jackson.jpg/revision/latest?cb=20180319172727",
    "https://static.wikia.nocookie.net/olympians/images/c/ca/Annabeth_Chase-Viria.jpg/revision/latest?cb=20170220200242",
    "https://static.wikia.nocookie.net/olympians/images/e/ee/Jason_Grace-Redraw.jpg/revision/latest?cb=20170220201202",
    "https://static.wikia.nocookie.net/olympians/images/2/22/Piper_McLean.jpg/revision/latest?cb=20170220201323",
    "https://static.wikia.nocookie.net/olympians/images/5/53/Leo_Valdez-Viria.jpg/revision/latest?cb=20170223023557",
    "https://static.wikia.nocookie.net/olympians/images/a/ac/Hazel_Levesque.jpg/revision/latest?cb=20170220201044"
    "https://static.wikia.nocookie.net/olympians/images/1/11/Frank_Zhang.jpg/revision/latest?cb=20170220201022",
    "https://static.wikia.nocookie.net/olympians/images/e/e7/Nico_di_Angelo.jpg/revision/latest?cb=20170220200630",
    "https://static.wikia.nocookie.net/olympians/images/9/9e/Thalia_Grace.jpg/revision/latest?cb=20170220195049",
    "https://static.wikia.nocookie.net/olympians/images/8/8a/Reyna_Viria.jpg/revision/latest?cb=20170220201432",
    "https://static.wikia.nocookie.net/olympians/images/8/82/Will_Solace.jpg/revision/latest?cb=20170216133752"
];
var text=[
    "Percy Jackson",
    "Annabeth Chase",
    "Jason Grace",
    "Piper McLean",
    "Leo Valdez",
    "Hazel Levesque",
    "Frank Zhang",
    "Nico di Angelo",
    "Thalia Grace",
    "Reyna Avila Ramírez-Arellano",
    "Will Solace"
];
var i=0;
function change(){
 if (i == 11)
   {
     i = 0;
   }
document.getElementById("ch").src=images[i];
i++;
document.getElementById("ch1").innerHTML=text[i];
i++;
}