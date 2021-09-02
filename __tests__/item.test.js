import Item from './../src/item.js'


describe("Item", () => {


    test("should crete item object", () => {
      let newItem = new Item("sword");
      expect(newItem.name).toEqual("sword");
    })
});