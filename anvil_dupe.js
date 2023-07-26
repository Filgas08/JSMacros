///Must have atleast a 3 block high pillar of damaged anvils ontop of 1 obsidan block.
///Have the item you want to dupe in 1st hotbar slot, damaged anvils in 6th hotbar slot and xp bottles in 9th hotbar slot.
var wait = 4 ///If it doesen't work, keep adding 1 number until it works.
const loop_count = 20;///set how many times you want it to repeat

for (let i = 0; i < loop_count; ++i) {
    Player.openInventory().setSelectedHotbarSlotIndex(0)
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
    Player.getPlayer().lookAt(0, 50)
    Client.waitTick(+wait);
    Player.openInventory().swap(37, 36);
    Client.waitTick(+wait);
    Player.openInventory().dropSlot(36)
    Client.waitTick(+wait);
    Player.getPlayer().lookAt(0, 90)
    Client.waitTick(+wait);
    Player.openInventory().swap(36, 37)
    ///
    Player.openInventory().setSelectedHotbarSlotIndex(8)
    Player.getPlayer().lookAt(0, -90)
    Client.waitTick(+wait);
    for (let i = 0; i < 6; i++) {
        Chat.say(".input use 1")
        Client.waitTick(5)
    }
    Client.waitTick(+wait)
    Player.getPlayer().lookAt(0, 90)
    Client.waitTick(+wait)

    ///pillar up
    var Data = Player.rayTraceBlock(5, false).getId(); ///Chat.log("ID: "+Data)
    if (Data == "minecraft:anvil" || Data == "minecraft:chipped_anvil" || Data == "minecraft:damaged_anvil")
    {}
     else{
        const loop_count = 16;
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
    // exp refill
if (Player.openInventory().getSlot(44).getItemId() != "minecraft:experience_bottle") { 
    World.playSound("entity.dragon_fireball.explode")
    Chat.log("out of xp")
    Player.openInventory().swap(9, 44)
    Player.openInventory().swap(10, 44)
    Player.openInventory().swap(11, 44)
    Player.openInventory().swap(12, 44)
    Player.openInventory().swap(13, 44)
    Player.openInventory().swap(14, 44)
    Player.openInventory().swap(15, 44)
    Player.openInventory().swap(16, 44)
    Player.openInventory().swap(17, 44)
    Player.openInventory().swap(18, 44)
    Player.openInventory().swap(19, 44)
    Player.openInventory().swap(20, 44)
    Player.openInventory().swap(21, 44)
    Player.openInventory().swap(22, 44)
    Player.openInventory().swap(23, 44)
    Player.openInventory().swap(24, 44)
    Player.openInventory().swap(25, 44)
    Player.openInventory().swap(26, 44)
    Player.openInventory().swap(27, 44)
    Player.openInventory().swap(28, 44)
    Player.openInventory().swap(29, 44)
    Player.openInventory().swap(30, 44)
    Player.openInventory().swap(31, 44)
    Player.openInventory().swap(32, 44)
    Player.openInventory().swap(33, 44)
    Player.openInventory().swap(34, 44)
    Player.openInventory().swap(35, 44)
    
}
}

