import Item from './../src/item.js';


describe("Item", () => {

  test("should create item object with arguments assigned to properties", () => {
    let newItem = new Item("sword", 0, 1, 1);
    expect(newItem.name).toEqual("sword");
    expect(newItem.hp).toEqual(0);
    expect(newItem.ap).toEqual(1);
    expect(newItem.dp).toEqual(1);
  });
  
  test("should add a desc property that describes the item function", () => {
    let newItem = new Item("sword", 0, 1, 1);
    expect(newItem.desc).toEqual("This item adds 1 to attack 1 to defense");
  });
});