export default class Shop {
  constructor() {
    this.inv = {}
    this.gold = 20
    this.currentId = 1
  }

  addItem (item) {
    item.id = this.currentId
    this.inv[item.id] = item
    this.currentId ++
  }

  findItem (id) {
    if (this.inv[id] !== undefined) {
      return this.inv[id]
    }
    return false
  }
}