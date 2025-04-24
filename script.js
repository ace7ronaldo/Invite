const questions = [
  {
    text: `🎬 *Entourage* Challenge:\n\nVinny Chase and the crew are trying to figure out how much money they need to invest in a new project. Eric says they need to combine the efforts of the entire crew to make it work.\n\nTurtle, ever the optimist, says, "I’ve got the LCM of our team’s biggest numbers right here. We need to find the LCM of 2 and 3 to get this project off the ground."\n\nDrama interrupts, "Don’t forget about the first perfect number, it's part of the equation too!"\n\nCan you help them solve for the total investment they need to make the project happen?`,
    answer: "6"
  },
  {
    text: `💻 *Silicon Valley* Standoff:\n\nIn the world of tech startups, Pied Piper’s algorithm is supposed to be revolutionary. However, Dinesh and Gilfoyle are debating an equation that could change everything.\n\nDinesh says, "The solution to our problem is Fibonacci numbers, but we need the 4th Fibonacci number divisible by 4."\n\nGilfoyle sarcastically retorts, "This is exactly why you’re not getting a seat on the board."\n\nCan you solve this problem to prove you belong on the board?`,
    answer: "4"
  },
  {
    text: `🧁 *The Office* Party Problem:\n\nIn the classic battle for supremacy over the Party Planning Committee, Dwight plans a party for 6 guests, each of whom will eat 4 cupcakes. How many cupcakes must Dwight order to make sure each guest gets the right amount?`,
    answer: "24"
  },
  {
    text: `🍼 *Friends* - Joey & Chandler Misadventure:\n\nJoey and Chandler are on a mission to find baby Ben. They're trying to track down where he is after they got distracted by a pizza.\n\nChandler says, "Ben is hiding at coordinates:\n   - Latitude: 28.5421\n   - Longitude: -81.3790"\n\nBut Joey, ever the expert, says, "We don’t need coordinates! We need the number of steps it takes to find him!"\n\nHow many steps will it take Joey and Chandler to find Baby Ben? (Hint: It’s the same number as the name of the final location)`,
    answer: "hillstone"
  }
];

let current = 0;

function loadLevel(index) {
  const container = document.getElementById("question-container");
  const feedback = document.getElementById("feedback");
  const input = document.getElementById("answer");

if (index >= questions.length) {
  container.innerHTML = `
    🎉 You’ve solved the mystery! 🎉<br><br>
    🗓️ **Date:** April 24th<br>
    ⏰ **Time:** 6:00 PM<br>
    📍 **Location:** Hillstone, Orlando<br><br>
    Can’t wait to see you there! 🥳
  `;
   input.style.display = "none";
    document.querySelector("button").style.display = "none";
    return;
  container.textContent = questions[index].text;
  feedback.textContent = "";
  input.value = "";
}

function submitAnswer() {
  const input = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const expected = questions[current].answer.toLowerCase();

  if (input === expected) {
    current++;
    loadLevel(current);
  } else {
    feedback.textContent = "❌ Not quite! Double-check your logic.";
  }
}

window.onload = () => {
  loadLevel(current);
};
