import Unit from './unit.js';

export default class Hero extends Unit {
  constructor(hp, ap, dp) {
    super(hp, ap, dp);
    this.level = 1;
    this.gold = 10;
    this.inv = {};
  }

  levelUp() {
    this.hp++;
    this.ap++;
    this.dp++;
    this.level++;
  }

  
}