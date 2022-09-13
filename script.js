'use strict';


// Coding Challenge 1_P10

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript",
        "1: Python",
        "2: Rust",
        "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),


    displayResult: function () {
        const [a0, a1, a2, a3] = this.answers;
        console.log(`A0 : ${a0}\nA1 : ${a1}\nA2 : ${a2}\nA3 : ${a3}`);
    },

    registerNewAnswer: function () {

        // const promtAnswer = prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`);
        const promtAnswer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}`).trim()
        );

        if (typeof promtAnswer === 'number' && promtAnswer < this.options.length) {
            this.answers[promtAnswer] = this.answers[promtAnswer] + 1;
            this.displayResult();
        }
        else {
            alert('!Wrong input!');
        }



    },



};



document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResult();


