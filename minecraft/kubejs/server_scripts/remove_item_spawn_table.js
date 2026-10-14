LootJS.lootTables(event => {
  const lootItems = global.ITEMS_TO_REMOVE || []

  for (const item of lootItems) {
    event.modifyLootTables(/.*/).removeItem(item)
  }
})
