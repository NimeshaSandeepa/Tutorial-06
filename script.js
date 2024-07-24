function startQuiz() {
    const operators = ['+', '-', '*'];
    const questions = [];
    const userAnswers = [];
    const correctAnswers = [];
    let correctAnswersCount = 0;

    // Generate 10 random questions
    for (let i = 0; i < 10; i++) {
        const x = Math.floor(Math.random() * 101);
        const y = Math.floor(Math.random() * 101);
        const operator = operators[Math.floor(Math.random() * operators.length)];

        let correctAnswer;
        switch(operator) {
            case '+':
                correctAnswer = x + y;
                break;
            case '-':
                correctAnswer = x - y;
                break;
            case '*':
                correctAnswer = x * y;
                break;
        }

        questions.push(`${x} ${operator} ${y}`);
        correctAnswers.push(correctAnswer);
    }

    // Create the HTML for the questions
    const gameDiv = document.getElementById('game');
    gameDiv.innerHTML = '';
    questions.forEach((question, index) => {
        gameDiv.innerHTML += `
            <p>
                <strong>Question ${index + 1}</strong>  
                <span class="question">${question}</span><br>
                <strong>Your Answer: </strong><span class="answer"></span><br>
                <strong>Feedback:</strong> <span class="feedback"></span>
            </p>
        `;
    });

    // Prompt user for answers
    questions.forEach((question, index) => {
        const userAnswer = parseInt(prompt(`What is ${question}?`), 10);
        userAnswers.push(userAnswer);

        const questionSpan = document.getElementsByClassName('question')[index];
        const answerSpan = document.getElementsByClassName('answer')[index];
        const feedbackSpan = document.getElementsByClassName('feedback')[index];

        questionSpan.innerHTML = question;
        answerSpan.innerHTML = userAnswer;

        if (userAnswer === correctAnswers[index]) {
            feedbackSpan.innerHTML = `Correct! &checkmark;`;
            feedbackSpan.classList.add("correct");
            correctAnswersCount++;
        } else {
            feedbackSpan.innerHTML = `Incorrect! &cross; The correct answer is ${correctAnswers[index]}`;
            feedbackSpan.classList.add("incorrect");
        }
    });

    // Calculate and display the score
    const scoreSpan = document.getElementById("score");
    scoreSpan.innerHTML = `${correctAnswersCount * 10}`;

    // Change background color based on score
    if (correctAnswersCount * 10 < 20) {
        document.body.style.backgroundColor = "hotpink";
    } else {
        document.body.style.backgroundColor = "lightgreen";
    }
}
