class Ogre{
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    human.ogreEncounter();
    this.toSwing(human);
    this.isKnocked(human);
  }

  swingAt(human) {
    this.swings++
  }

  toSwing(human) {
    if(human.noticesOgre()) {
      this.swingAt(human);
    }
  }

  isKnocked(human) {
    if(this.swings >= 2) {
      human.knockedOut = true;
    }
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;