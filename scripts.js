$(document).ready(function() {
var quotes = [ "All right, let's see... It was the best of times, it was the BLURST of times? You stupid monkey.", "Social security number? Naught, naught, naught, naught, naught, naught, naught, naught, 2. Damn Roosevelt.", "Schindler and I are like peas in a pod! We're both factory owners. We both made shells for the Nazis, but mine worked, damn it!", "Ironic, isn't it, Smithers. This anonymous clan of slack-jawed troglodytes has cost me the election, and yet if I were to have them killed, I would be the one to go to jail. That's democracy for you.", "Friends, Family, Religion. These are the three demons you must slay in order to succeed in business.", "Are you saying boo or boo-urns?", "You're Actually pleased with your Appearance? My Boy You're the fattest thing I've ever seen, and I've been on safari!", "I'm sure the manual will indicate which lever is the velocitator and which the deceleratrix", "Ketchup. Catsup. Ketchup. Catsup...", "If it's a crime to love one's country, then I'm guilty! And if it's a crime to steal a trillion dollars, then I'm guilty of that too! And if it's a crime to bribe a jury, then I'll soon be guilty of that too!", "Who's that goat-legged fellow? I like the cut of his jib", "I'd like to send this letter to the Prussian consulate in Siam by aeromail. Am I too late for the 4:30 autogyro? ", "It was I, you fools! The man you trusted wasn't Wavy Gravy at all!  And all this time, I've been smoking harmless tobacco!", "The telephone is so impersonal. I much prefer the hands-on touch you can only get with hired goons."];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
  var a = getRandomNumber(0, 14);
  
  var counter = 0;

    $("#newQuoteButton").click(function() {
    $("#quoteText").text(quotes[a]);
    a = getRandomNumber(0, 14);
  });
});