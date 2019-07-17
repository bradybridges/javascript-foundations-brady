class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(victim) {
    if(this.statues.length < 3) {
      this.statues.push(victim);
      this.stonedVictim(victim);
    } else {
      victim.stoned = true;
      this.statues[0].stoned = false;
      this.statues.shift();
      this.statues.push(victim);
    }
  }

  stonedVictim(victim) {
    if(victim !== undefined) {
      victim.stoned = true;
    }
  }

}

module.exports = Medusa;