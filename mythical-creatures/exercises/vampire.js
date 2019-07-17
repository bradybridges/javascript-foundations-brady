class Vampire{
  constructor(name, pet){
    this.name = name;
    this.pet = pet || 'bat';
    this.thirsty = true;
  }

  drink(){
    if(this.thirsty === true){
      this.thirsty = false;
    } else {
      this.thirsty = true;
    }
  }
  
}

module.exports = Vampire;