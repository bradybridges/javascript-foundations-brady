class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  ogreEncounter() {
    this.encounterCounter++;
  }

  noticesOgre() {
    if( (this.encounterCounter % 3 === 0) && (this.encounterCounter > 2)) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;