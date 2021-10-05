const getScore = (score) => {
  if (score > 25 && score <= 30) {
    console.log("A");
    return;
  }
  if (score > 20 && score <= 25) {
    console.log("B");
    return;
  }
  if (score > 15 && score <= 20) {
    console.log("C");
    return;
  }
  if (score > 10 && score <= 15) {
    console.log("D");
    return;
  }
  if (score > 5 && score <= 10) {
    console.log("E");
    return;
  }
  if (score >= 0 && score <= 5) {
    console.log("F");
    return;
  }
  console.log("Invalid score entered");
};

const getInputAndDisplay = () => {
  console.log("Please enter the score");
  process.stdin.on("data", (data) => {
    const score = data;

    getScore(score);
    process.exit();
  });
};
getInputAndDisplay();
