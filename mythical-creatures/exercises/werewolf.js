class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change(){
    if(this.human === true) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }

  eat(victim) {
    if(this.hungry === false) {
      return "Not hungry"
    } else {
      this.consumeVictim(victim);
      this.change();
      return "Yummy!";
    }
  }

   consumeVictim(victim) {
    if(victim !== undefined) {
        victim.alive = false;
      }
  }
}

module.exports = Werewolf;