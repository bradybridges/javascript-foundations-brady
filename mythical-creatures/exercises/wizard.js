class Wizard {
  constructor(nameObj) {
    this.name = nameObj.name;
    this.rested = true;
    this.spellCount = 0;
    
    if(nameObj.bearded !== undefined) {
      this.bearded = nameObj.bearded;
    } else {
      this.bearded = true;
    }
  }

  incantation(string) {
    return string.toUpperCase();
  }

  castSpell(spell) {
    this.spellCount++

    if(this.spellCount < 3){
      return spell.toUpperCase();
    } else if(this.spellCount === 3) {
      this.rested = false;
      return spell.toUpperCase();
    } else {
      return 'I SHALL NOT CAST!';
    }

  }
         
}

module.exports = Wizard;