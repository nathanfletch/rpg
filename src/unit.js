
export default class Unit {

  constructor(hp, ap, dp) {
    this.hp = hp;
    this.ap = ap;
    this.dp = dp;
  };

  reduceHp(dmgReceived) {
    this.hp -= dmgReceived
  }

  attack() {
    return this.ap;
  }

  defend() {
    return this.dp;
  }
}