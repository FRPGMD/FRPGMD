const MagicData = Java.loadClass(
    'io.redspace.ironsspellbooks.api.magic.MagicData'
)

PlayerEvents.loggedIn(event => {
    const player = event.player

    player.setAttributeBaseValue('irons_spellbooks:max_mana', 10)

    const magicData = MagicData.getPlayerMagicData(player)
    magicData.setMana(10)
})
