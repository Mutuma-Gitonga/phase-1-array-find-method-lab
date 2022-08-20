// code your solution here

const superbowlWin = (item) => { 

  const yearWinOrLoss = item.find(x => x.result === "W");

  if(typeof yearWinOrLoss === 'object') {
    return yearWinOrLoss.year;
  } else {
    return yearWinOrLoss;
  }

}



