function playGame() {
  var startingBet = document.getElementById("startingBet").value;

  var starValue = startingBet * 1;
  if (starValue <= 0) {
    alert("The Starting bet should be more than 1");
  }

  var totalValue = starValue;
  var numOfRolls = 0;
  var maxValue = starValue;
  var maxValueRoll = 0;

  while (totalValue > 0) {
    var diceSum = rollDice();
    numOfRolls++;

    if (diceSum === 7) {
      totalValue += 4;
      if (maxValue < totalValue) {
        maxValue = totalValue;
        maxValueRoll = numOfRolls;
      }
    } else {
      totalValue--;
    }
  }

  if (starValue > 0) {
    document.getElementById("starting-bet-value").innerText =
      "$" + starValue.toFixed(2);
    document.getElementById("totalRolls").innerText = numOfRolls;
    document.getElementById("maxAmount").innerText = "$" + maxValue.toFixed(2);
    document.getElementById("maxAmountRoll").innerText = maxValueRoll;
  }

  //   console.log(typeof starValue);
}

function rollDice() {
  return Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + 2;
}
