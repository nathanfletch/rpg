import Unit from './unit.js';

export default class Hero extends Unit {
  constructor(name, hp, ap, dp) {
    super(name, hp, ap, dp);
    this.level = 1;
    this.gold = 10;
    this.inv = [];
  }

  levelUp() {
    this.hp++;
    this.ap++;
    this.dp++;
    this.level++;
  }

  addItem(item) {
    this.inv.push(item.name);
  }
  
}