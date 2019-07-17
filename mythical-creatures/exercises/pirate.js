class Pirate {
  constructor(name, job){
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.cursedCounter = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.cursedCounter++;

    if(this.cursedCounter >= 3) {
      this.cursed = true;
    } else {
      this.cursed = false;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}

module.exports = Pirate;