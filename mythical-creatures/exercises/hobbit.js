class Hobbit{
  constructor(name)  {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing;
    if(this.name === 'Frodo' || this.name === 'frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }

  celebrateBirthday() {
    this.age++;

    if(this.age > 32) {
      this.adult = true;
    }

    if(this.age > 100) {
      this.old = true;
    }
  }
}

module.exports = Hobbit;