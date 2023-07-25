///Must have atleast a 3 block high pillar of damaged anvils ontop of 1 obsidan block.
///Have the item you want to dupe in 1st hotbar slot, damaged anvils in 6th hotbar slot and xp bottles in 9th hotbar slot.
const loop_count = 20;
for (let i = 0; i < loop_count; ++i) {
    Player.openInventory().setSelectedHotbarSlotIndex(0)
    Client.waitTick(2)
    Player.getPlayer().interact();
    Client.waitTick(2);
    Player.openInventory().swap(30, 0);
    Client.waitTick(2);
    Player.openInventory().seName("By X2 Beacon");
    Client.waitTick(2);
    Player.openInventory().swap(2, 30);
    Client.waitTick(2);
    Player.openInventory().close();
    Client.waitTick(2);
    Player.getPlayer().interact();
    Client.waitTick(2);
    Player.openInventory().swap(30, 0);
    Client.waitTick(2);
    Player.openInventory().seName("X2 Beacon");
    Client.waitTick(2);
    Player.openInventory().swap(2, 30);
    Client.waitTick(2);
    Player.openInventory().close();
    ///drop duped item
    Client.waitTick(2);
    Player.getPlayer().lookAt(0, 50)
    Client.waitTick(2);
    Player.openInventory().swap(37, 36);
    Client.waitTick(2);
    Player.openInventory().dropSlot(36)
    Client.waitTick(5);
    Player.getPlayer().lookAt(0, 90)
    Client.waitTick(2);
    Player.openInventory().swap(36, 37)
    ///
    Player.openInventory().setSelectedHotbarSlotIndex(8)
    Player.getPlayer().lookAt(0, -90)
    Client.waitTick(2);
    for (let i = 0; i < 6; i++) {
        Chat.say(".input use 1")
        Client.waitTick(5)
    }
    Client.waitTick(2)
    Player.getPlayer().lookAt(0, 90)
    Client.waitTick(2)

    ///pillar up
    var Data = Player.rayTraceBlock(5, false).getId(); ///Chat.log("ID: "+Data)
    if (Data == "minecraft:obsidian") {
        const loop_count = 128;
        for (let i = 0; i < loop_count; ++i) {
            const inv = Player.openInventory(); // Class to allow selection of slot
            inv.setSelectedHotbarSlotIndex(5); // Select hotbar slot with block to place
            Client.waitTick(1) // Delay 1ms
            const inp = Player.createPlayerInput(0, 0, 0, 90, true, true, false); // Sneak & Jump & look down
            const inp1 = Player.createPlayerInput(0, 0, 0, 90, false, true, false); // Sneak & look down
            Player.addInput(inp) // Execute movement from line above
            Client.waitTick(1)
            //Player.getPlayer().lookAt(0,90) // Look down
            Client.waitTick(1);
            Player.addInput(inp1) //|| Player.addInput(inp1)
            Client.waitTick(1)
            Player.getPlayer().interact(); // Place block down
        }
    }
}
