ServerEvents.commandRegistry(event => {
    const { commands } = event

    event.register(
        commands.literal('inv')
            .requires(source => source.player != null)
            .executes(ctx => {
                const player = ctx.source.player

                player.inventory.items.forEach((item, slot) => {
                    if (!item.empty) {
                        console.log(`Слот ${slot}: ${item.id} x${item.count}`)
                    }
                })

                return 1
            })
    )
})
