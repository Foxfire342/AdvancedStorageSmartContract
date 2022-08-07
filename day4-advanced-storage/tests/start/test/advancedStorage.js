const AdvancedStorage = artifacts.require("AdvancedStorage");

contract("AdvancedStorage", () => {
  it("Should add an element to ids array", async () => {
    const advancedStorage = await AdvancedStorage.deployed();
    await advancedStorage.add(10);
    const result = await advancedStorage.ids(0);
    assert(result.toNumber() === 10);
  });
});
