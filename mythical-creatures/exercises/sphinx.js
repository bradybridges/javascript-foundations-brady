class Sphinx {
  constructor() {
    this.name = null;
    this.heroesEaten = 0;
    this.riddles = [];
    this.correctCounter = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);

    if(this.riddles.length > 3){
      this.riddles.shift();
    }
  }

  attemptAnswer(answerAttempt) {
    for(var i = 0; i < this.riddles.length; i++){
      var answer = this.riddles[i].answer;
      if(this.riddles[i].answer === answerAttempt){
        this.riddles.splice(i,1);
        this.correctCounter++;
        if(this.riddles.length === 0) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`;
        } else{
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
        }
      } 
    }

    if(this.correctCounter === 0){
      this.heroesEaten++;
    } else {
      this.correctCounter = 0;
    }
  }


}

module.exports = Sphinx;