
export default class Unit {

  constructor(name, hp, ap, dp) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
    //this.art = art (add displayArt function?)
  }

  reduceHp(dmgReceived) {
    this.hp -= dmgReceived;
  }

  attack() {
    return this.ap;
  }

  defend() {
    return this.dp;
  }
}