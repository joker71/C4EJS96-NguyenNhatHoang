let Quiz=[
    {
        que: "How many day on the week",
        choi: [1, 8, 9, 7],
        ans: 7,
    },
    {
        que: "How many legs do an optopus has",
        choi: [1, 8, 9, 7],
        ans: 8,
    },
    {
        que: "How many  sesson in USA",
        choi: [1,9,18, 4],
        ans: 4,
    },
    {
        que: "How many day on the Month",
        choi: [31, 18, 39, 32],
        ans: 31,
    },
    {
        que: "How many legs do an dog has",
        choi: [1, 4, 9, 7],
        ans: 4,
    },
    
];
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
let quizLength= Quiz.length;
let mixQuiz= shuffle(Quiz);
let totalRight= 0;
for(let i=0; i< quizLength; i++)
{
    let mixQues= shuffle(mixQuiz[i].choi);
    let choice= prompt(`${mixQuiz[i].que} \n ${mixQues("\n")}`);
    if(choice==mixQuiz[i].choi)
    {
        totalRight++;
    }
}
alert("We are out of question")
alert(`Score: ${totalRight}`);