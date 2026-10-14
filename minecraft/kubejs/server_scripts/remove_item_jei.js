ServerEvents.recipes(event => {
  const recipeItems = global.ITEMS_TO_REMOVE || []

  for (const item of recipeItems) {
    event.remove({ output: item })
    event.remove({ input: item })
  }
})

RecipeViewerEvents.removeEntriesCompletely('item', event => {
  const jeiItems = global.ITEMS_TO_REMOVE || []

  for (const item of jeiItems) {
    event.remove(item)
  }
})
