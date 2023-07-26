///Must have atleast a 3 block high pillar of damaged anvils ontop of 1 obsidan block.
///Have the item you want to dupe in 1st hotbar slot, damaged anvils in 6th hotbar slot and xp bottles in 9th hotbar slot.
var wait = 4; ///If it doesen't work, keep adding 1 number until it works.
const loop_count = 2; ///set how many times you want it to repeat

for (let i = 0; i < loop_count; ++i) {
    Player.getPlayer().lookAt(0, 90);
    var Data;
    try {
        Data = Player.rayTraceBlock(5, false).getId();
    } catch {
        Chat.log("stand on top of an anvil");
        JavaWrapper.stop()
    }
    if (Data == "minecraft:anvil" || Data == "minecraft:chipped_anvil" || Data == "minecraft:damaged_anvil") {
        Player.openInventory().setSelectedHotbarSlotIndex(0);
        Client.waitTick(+wait)
        Player.getPlayer().interact();
        Client.waitTick(+wait);
        Player.openInventory().swap(30, 0);
        Client.waitTick(+wait);
        Player.openInventory().seName("By X2 Beacon");
        Client.waitTick(+wait);
        Player.openInventory().swap(2, 30);
        Client.waitTick(+wait);
        Player.openInventory().close();
        Client.waitTick(+wait);
        Player.getPlayer().interact();
        Client.waitTick(+wait);
        Player.openInventory().swap(30, 0);
        Client.waitTick(+wait);
        Player.openInventory().seName("X2 Beacon");
        Client.waitTick(+wait);
        Player.openInventory().swap(2, 30);
        Client.waitTick(+wait);
        Player.openInventory().close();
        ///drop duped item
        Client.waitTick(+wait);
        Player.getPlayer().lookAt(0, 50);
        Client.waitTick(+wait);
        Player.openInventory().swap(37, 36);
        Client.waitTick(+wait);
        Player.openInventory().dropSlot(36);
        Client.waitTick(+wait);
        Player.getPlayer().lookAt(0, 90);
        Client.waitTick(+wait);
        Player.openInventory().swap(36, 37);
        ///
        Player.openInventory().setSelectedHotbarSlotIndex(8);
        Player.getPlayer().lookAt(0, -90);
        Client.waitTick(+wait);
        for (let i = 0; i < 6; i++) {
            Player.getPlayer().interactItem(false);
            Client.waitTick(5);
        }
        Client.waitTick(+wait);
        Player.getPlayer().lookAt(0, 90);
        Client.waitTick(+wait);

        // exp refill
        if (Player.openInventory().getSlot(44).getItemId() != "minecraft:experience_bottle") {
            for (let i = 9; i < 35; i++) {
                if (Player.openInventory().getSlot(i).getItemId() == "minecraft:experience_bottle") {
                    Player.openInventory().swap(i, 44);
                }
            }
        }
        // notify when XP runs out
        if (Player.openInventory().findItem("minecraft:experience_bottle").length == 0) {
            World.playSound("block.note_block.cow_bell");
            Chat.log("out of xp");
        }
    } else if (i != 0) {
        pillar();
    } else {
        Chat.log("stand on top of an anvil to use this script!")
        JavaWrapper.stop()
    }
}

function pillar() {
    ///pillar up
    const loop_count = 16;
    for (let i = 0; i < loop_count; ++i) {
        const inv = Player.openInventory(); // Class to allow selection of slot
        inv.setSelectedHotbarSlotIndex(5); // Select hotbar slot with block to place
        Client.waitTick(1); // Delay 1ms
        const inp = Player.createPlayerInput(0, 0, 0, 90, true, true, false); // Sneak & Jump & look down
        const inp1 = Player.createPlayerInput(0, 0, 0, 90, false, true, false); // Sneak & look down
        Player.addInput(inp); // Execute movement from line above
        Client.waitTick(1)
        //Player.getPlayer().lookAt(0,90) // Look down
        Client.waitTick(1);
        Player.addInput(inp1); //|| Player.addInput(inp1)
        Client.waitTick(1);
        Player.getPlayer().interact(); // Place block down
    }
}
