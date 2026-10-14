// kubejsstudio item tags; re-apply merges by tag id
ServerEvents.tags('item', event => {
    event.remove('c:seeds/tomato', 'farm_and_charm:tomato_seeds')
    event.remove('c:crops/tomato', 'farm_and_charm:tomato')
    event.remove('farm_and_charm:tomato', 'farm_and_charm:tomato')
    event.remove('c:storage_blocks/tomato', 'farm_and_charm:tomato_bag')
    event.remove('c:crops/onion', 'farm_and_charm:onion')
    event.remove('c:storage_blocks/onion', 'farm_and_charm:onion_bag')
    event.remove('farm_and_charm:onion', 'farm_and_charm:onion')
})
