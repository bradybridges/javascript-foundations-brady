class Dragon{
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.mealCount = 0;
  }

  eat(){
    if(this.mealCount === 2){
      this.hungry = false;
    } else {
      this.mealCount++;
    }
  }
}

module.exports = Dragon;