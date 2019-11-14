export class Party{
  constructor(){
    this.playerArray = [];
    this.funds = 0;
  }
  addChar(character) {
    this.playerArray.push(character);
  }
}
