class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.stealCount = 0;
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(dressesArray) {
    for(var i = 0; i < dressesArray.length; i++){
      this.clothes.dresses.push(dressesArray[i]);
    }
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(infantObj){
    if(this.disposition === 'Vengeful'){
      infantObj.disposition = 'Malicious';
      this.humanWards.push(infantObj);
      this.stealCount++;
    } else{
      return infantObj;
    }
    
    if(this.stealCount === 3){
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;