const cookie = document.getElementById("cookie");
const quote = document.getElementById("quote");
const quote_bank = [
    "there's always room for chocolate cake! 🍰",
    "when all else fails, take a nap.",
    "'what if i fall?' 'oh, but my darling, what if you fly?' 🎈",
    "if not you, then who? if not now, then when?",
    "the best time to plant a tree was 20 years ago. the next best time is now. 🌲",
    "yesterday is history, tomorrow is a mystery, but today is a gift. that's why it's called the present.",
    "carpe diem!",
    "'memento mori': remember you must die, so remember you must live.",
    "we are what we repeatedly do. excellence, then, is not an act, but a habit -- aristotle",
    "'longissimus dies cito conditur': even the longest day soon ends.",
    "'nullius boni sine socio iucunda possessio est': no good thing is joyful to possess without a friend",
    "i wish there was a way to know you're in the good old days before you've actually left them",
    "THATS WHAT SHE SAID THATS WHAT SHE SAID!!!!!",
    "you miss 100% of the shots you dont take.",
    "go drink some water",
    "create a life you can't wait to wake up to!",
    "never stay up late for something you wouldn't wake up early for",
    "ask urself if what ur doing today is getting u closer to where you want to be tomorrow.",
    "climb high, climb far, your goal the sky, your aim the star ⭐☁️",
]

/* addEventListener allows ur webpage to listen/respond to user interactions(clicks, keypresses, etc)*/
cookie.addEventListener("click", function() { /*when u click the cookie run the function */
    const random = Math.floor(Math.random() /*random from 0 to 1*/* quote_bank.length /*how many items in the list*/ ); /* so it rounds down, picking a random quote!*/
    quote.textContent = quote_bank[random]; /*indexing bc random is a #*/
});