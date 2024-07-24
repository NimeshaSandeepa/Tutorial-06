const questions = [
    { question: "12 x 6", answer: 72 },
    { question: "26 - 7", answer: 19 },
    { question: "15 + 10", answer: 25 },
    { question: "9 / 3", answer: 3 },
    { question: "8 + 7", answer: 15 },
    { question: "14 - 4", answer: 10 },
    { question: "5 x 5", answer: 25 },
    { question: "36 / 6", answer: 6 },
    { question: "7 + 8", answer: 15 },
    { question: "10 - 3", answer: 7 }
];

let correctAnswersCount = 0;

questions.forEach((q, index) => {
    let userAnswer = prompt(`${q.question} = ?`);
    userAnswer = parseInt(userAnswer, 10);

    const questionSpan = document.getElementById(`question${index + 1}`);
    const answerSpan = document.getElementById(`answer${index + 1}`);
    const feedbackSpan = document.getElementById(`feedback${index + 1}`);

    questionSpan.innerHTML = q.question;
    answerSpan.innerHTML = userAnswer;

    if (userAnswer === q.answer) {
        feedbackSpan.innerHTML = `Correct! &checkmark;`;
        feedbackSpan.classList.add("correct");
        correctAnswersCount++;
    } else {
        feedbackSpan.innerHTML = `Incorrect! &cross; The correct answer is ${q.answer}`;
        feedbackSpan.classList.add("incorrect");
    }
});

const scoreSpan = document.getElementById("score");
scoreSpan.innerHTML = `${correctAnswersCount * 10}`;
