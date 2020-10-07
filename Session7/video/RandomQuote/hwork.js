let allQuote = [{
    quoteText: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    quoteAuthor: "Thomas Edison"
    }, {
    quoteText: "You can observe a lot just by watching.",
    quoteAuthor: "Yogi Berra"
    }, {
    quoteText: "A house divided against itself cannot stand.",
    quoteAuthor: "Abraham Lincoln"
    }, {
    quoteText: "Difficulties increase the nearer we get to the goal.",
    quoteAuthor: "Johann Wolfgang von Goethe"
    }, {
    quoteText: "Fate is in your hands and no one elses",
    quoteAuthor: "Byron Pulsifer"
    }, {
    quoteText: "Be the chief but never the lord.",
    quoteAuthor: "Lao Tzu"
    }, {
    quoteText: "Nothing happens unless first we dream.",
    quoteAuthor: "Carl Sandburg"
    }, {
    quoteText: "Well begun is half done.",
    quoteAuthor: "Aristotle"
    }, {
    quoteText: "Life is a learning experience, only if you learn.",
    quoteAuthor: "Yogi Berra"
    }, {
    quoteText: "Self-complacency is fatal to progress.",
    quoteAuthor: "Margaret Sangster"
    },
]
document.addEventListener("DOMContentLoaded",function(){
    let press = document.getElementById('press_btn')
    let output = document.getElementById('output')
    let output2= document.getElementById('output_Tg')
    press.addEventListener(`click`, () =>{
        let randomQuote = allQuote[Math.floor(Math.random() * allQuote.length)]
        output.innerHTML= randomQuote.quoteText ;
        output2.innerHTML=randomQuote.quoteAuthor
    })
})