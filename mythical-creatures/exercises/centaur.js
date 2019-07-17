class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.crankyCount = 0;
    this.layingDown = false;
  }

  shoot() {
    this.crankyCount++;

    if(this.crankyCount === 3) {
      this.cranky = true;
    }

    if(this.crankyCount >= 4 || this.layingDown) {
      return 'NO!';
    } else {
    return 'Twang!!!';
    }
  }

  run() {
    this.crankyCount++;

    if(this.crankyCount === 3) { 
      this.cranky = true;
    }

    if(this.layingDown){
      return 'NO!';
    }

    return 'Clop clop clop clop!!!';
  }

  sleep(){
    if(this.standing === true){
      return 'NO!';
    } else {
      this.cranky = false;
      this.crankyCount = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    if(this.standing) {
      if(this.crankyCount === 0){
        this.cranky = true;
      } else {
        this.cranky = false;
        this.crankyCount = 0;
      }
    } else {
      return 'Not while I\'m laying down!';
    }
  }

}

module.exports = Centaur;