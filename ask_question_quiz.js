const askQuestions = [
    { question: "What is 2+3?", answer: 5 },
    { question: "What is 5-5?", answer: 0 },
    { question: "What is 2*3?", answer: 6 }
];

function questionAsk(ask) {
    let user = Number(prompt(ask.question));
    return user === ask.answer;
}

let score = 0;

for (let i = 0; i < askQuestions.length; i++) {
    let result = questionAsk(askQuestions[i]);
    if (result) {
        score++;
    }
}

console.log(`Your score is: ${score}`);