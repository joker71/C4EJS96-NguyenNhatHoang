let Quiz = [
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
        choi: [1, 9, 18, 1],
        ans: 4,
    },
    {
        que: "How many day on the month",
        choi: [31, 28, 29, 17],
        ans: 31,
    },
    {
        que: "How many legs do an optopus has",
        choi: [1, 8, 9, 7],
        ans: 8,
    },
    {
        que: "How many  sesson in VietNam",
        choi: [1, 8, 4, 7],
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
let quizLength = Quiz.length;
let mixQuiz = shuffle(Quiz);
let totalRight = 0;
for (let i = 0; i < quizLength; i++) {
    let mixQues = mixQuiz[i].choi;
    mixQues= shuffle( mixQues);
    let choice = Number(prompt(`${mixQuiz[i].que} \n ${mixQues }`));
    if (choice == mixQuiz[i].ans) {
        totalRight++;
    }
}
alert("We are out of question")
alert(`Score: ${totalRight}`);