// jquery selector of id=quiz-area is defined via variable panel
var panel = $("#quiz-area");

// Questions are defined in object "questions"
var questions = [{
  question: "What is the diamter of the earth?",
  answers: ["3 Feet", "44,000 miles", "1.3 x 10e4 decameters", "8,000 miles"],
  correctAnswer: "8,000 miles"
}, {
  question: "What is the color of the jersey worn by winners of each stage of the Tour De France?",
  answers: ["Red", "Yellow", "Blue", "Seafoam Green"],
  correctAnswer: "Yellow"
}, {
  question: "Who wrote the crtically acclaimed Harry Potter series of books?",
  answers: ["Lebron James", "Your Mother", "My Mother", "J.K Rowling"],
  correctAnswer: "J.K Rowling"
}, {
  question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
  answers: ["Nirvana", "J.K Rowling", "New York Knicks", "High School Musical"],
  correctAnswer: "Nirvana"
}, {
  question: "Which popular Disney movie featured the song, \"Let it Go\"?",
  answers: ["Space Jam", "Alladin", "The Last Jedi", "Frozen"],
  correctAnswer: "Frozen"
}, {
  question: "In the Gospel of Luke, which angel appears to the Virgin Mary to fortell the birth of Jesus?",
  answers: ["Mariah Carey", "Angel of Music", "Gabriel", "Castiel"],
  correctAnswer: "Gabriel"
}, {
  question: "What is Taylor Swift's birthday?",
  answers: ["December 13th, 1989", "January 10th, 2018", "The Big Bang", "June 5th 1678"],
  correctAnswer: "December 13th, 1989"
}, {
  question: "What is the total height of the statue of liberty?",
  answers: ["One half Light Year", "6 Inches", "305 Feet", "IDK"],
  correctAnswer: "305 Feet"
}];

// Variable that will hold the setInterval method
var timer;
  // var game is object that contains variables and values
var game = {
  // these variables hold values of correct answers, incorrect answers and time remaining
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    // -- is decrement operator, will descrease by 1
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("You ran out of time!");
      // will call done function which is defined later in this code
      game.done();
    }
  },

  start: function() {
    // setInterval method repeats a given function at a given time interval, in this case 1000 miliseconds = 1 second
    // the function that is called is the countdown function which will decrease counter value by 1 every second
    timer = setInterval(game.countdown, 1000);
    // .prepend method inserts content at beginning of selected elements, as opposed to .append which intserts at end
    // the below code inserts countdown timer text to id=sub-wrapper element, "counter-number" is defined in countdown function
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");
    // .remove method will remove all content within a selected element
    $("#start").remove();
    // panel is defined at top of code, iteration through questions arrays and are displayed by appending to page
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        // input tag specifies input field where user can input data, this is the "answer" portion, every possible answer is iterated and appended to page
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    // this adds "done" button after all of the questions and answers have been appended to page
    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
    // $.each() function can be used to iterate over any collection, whether it is an object or an array
    // if value .val() of input equals correctAnswer, count as "correct answer" game.correct
    // ++ is increment operator that adds value of 1 to "correct" variable or "incorrect" variable
    // if / else statements to check if user input answers are correct or not
    $.each($("input[name='question-0']:checked"), function() {
      // if the value of "this" which equals the value of the input equals correctAnswer
      if ($(this).val() === questions[0].correctAnswer) {
        // "correct" is variable within "game" object, to get to the "correct" variable must call "game" first then "correct" --> game.correct
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // result is function defined outside this "done" function
    // because result function is defined "outside" scope of this function, it can be called within this "done" function
    this.result();

  },

  result: function() {
    //clearInterval will stop setInterval method used in variable timer
    clearInterval(timer);
    // .remove will remove content from element id=sub-wrapper
    $("#sub-wrapper h2").remove();
    // panel refers to id=quiz-area as defined at top of code
    // .html(***) will set content and overwrite all matching elements
    panel.html("<h2>All Done!</h2>");
    // .append method to add text that displays correct, incorrect and unanswered questions
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS "event listers" that will run function when "start" and "done" elements are clicked

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
