"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct number!";
// console.log(
//   (document.querySelector(".message").textContent = "Correct number!")
// );

// document.querySelector("#scrtnumber").value = "13";
// document.querySelector(".hscore").value = "30";

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
// document.querySelector("#scrtnumber").value = secretnumber;

console.log(secretnumber);

document.querySelector(".check").addEventListener("click", function () {
  //   console.log(document.querySelector("#entunum").value);
  const guess = Number(document.querySelector("#entunum").value);
  //   document.querySelector(".message").textContent = "Correct number!";
  // console.log(guess, typeof guess);

  // When There Is No input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    //When Player Wins
  } else if (guess < 1) {
    document.querySelector(".message").textContent =
      "⛔ Please Enter b/w 1 and 20!";
  } else if (guess === secretnumber) {
    document.querySelector(".message").textContent = "✌ Correct number!";
    document.querySelector("body").style.backgroundColor = "green";
    // document.querySelector(".right").style.color = "green";
    // document.querySelector(".message").style.fontSize = "1.5rem";
    document.querySelector("#scrtnumber").value = secretnumber;

    if (score > highscore) {
      highscore = score;
      // Number(document.querySelector(".hscore").textContent) = highscore;
      document.querySelector(".hscore").textContent = highscore;
      // console.log(typeof score, typeof highscore);
    }
    //When guess Is Too high
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 You Lost the GAME!";
      document.querySelector(".score").textContent = 0;
    }

    // When guess Is Too Low
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 You Lost the GAME!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

//Click On Again Button For Repeting the loop
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretnumber);
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector("body").style.backgroundColor = "white";
  // document.querySelector(".message").style.fontSize = "0";
  document.querySelector(".score").textContent = 20;
  document.querySelector("#scrtnumber").value = "?";
});
