///Must have atleast 1 damaged anvil under the player
///Have the item you want to dupe in 1st hotbar slot, damaged anvils in 6th hotbar slot and xp bottles in 9th hotbar slot.
///The second hotbar slot must be empty
var wait = 4; ///If it doesen't work, keep adding 1 number until it works.
const loop_count = 20; ///set how many times you want it to repeat
var anvil = true //true to automaticaly place anvils once they run out false to not

main()

function main() {
    center();
    Client.waitTick(+wait);
    for (let i = 0; i < loop_count; ++i) {
        Player.getPlayer().lookAt(0, 90);
        try {
            var Data = Player.rayTraceBlock(5, false).getId();
        } catch {}
        if (Data == "minecraft:anvil" || Data == "minecraft:chipped_anvil" || Data == "minecraft:damaged_anvil") {
            Player.openInventory().setSelectedHotbarSlotIndex(0);
            Client.waitTick(+wait)
            Player.getPlayer().interact();
            Client.waitTick(+wait);
            Player.openInventory().swap(30, 0);
            Client.waitTick(+wait);
            if (Player.openInventory().getName() == "X2 Beacon") {
                Player.openInventory().seName("By X2 Beacon");
            } else if (Player.openInventory().getName() != "X2 Beacon") {
                Player.openInventory().seName("X2 Beacon");
            }
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
            if (Player.getPlayer().getXPLevel() < 1) {
                Player.openInventory().setSelectedHotbarSlotIndex(8);
                Client.waitTick(+wait);
                Player.getPlayer().lookAt(0, 90);
                if (exp() == 1) {
                    return 0;
                }
            }
            Client.waitTick(+wait);
            Player.getPlayer().lookAt(0, 90);
            Client.waitTick(+wait);
        } else if (i != 0) {
            pillar();
        } else {
            Chat.log("stand on top of an anvil to use this script!")
            return 0;
        }
    }
}

function exp() {
    var missing = 0;
    var exp = 0;
    for (let i = 0; i < 3; i++) {
        Client.waitTick(5);
        exp_lvl = Player.getPlayer().getXPLevel();
        exp_raw = Player.getPlayer().getXPProgress();
        exp = Math.floor(exp_raw * 7);
        if (exp_lvl < 1) {
            if (7 - exp <= 0) {
                return 0;
            } else {
                Player.getPlayer().interactItem(false);
            }
            if (check_and_refill() == 1) {
                return 1;
            }
        }
    }
    return 0;
}

function pillar() {
    ///pillar up
    if (Player.openInventory().getSlot(41).getItemId() == "minecraft:anvil" ||
        Player.openInventory().getSlot(41).getItemId() == "minecraft:chipped_anvil" ||
        Player.openInventory().getSlot(41).getItemId() == "minecraft:damaged_anvil") {
        if (anvil == true) {
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
                Client.waitTick(5);
            }
        }
    }
}

function quit() {
    JsMacros.getServiceManager().stopService("anvil_dupe.js");
}

function check_and_refill() {
    // exp refill
    if (Player.openInventory().getSlot(44).getItemId() != "minecraft:experience_bottle") {
        for (let i = 9; i < 35; i++) {
            if (Player.openInventory().getSlot(i).getItemId() == "minecraft:experience_bottle") {
                Player.openInventory().swap(i, 44);
                return 0;
            }
        }
    }
    // notify when XP runs out
    if (Player.openInventory().findItem("minecraft:experience_bottle").length == 0) {
        World.playSound("block.note_block.cow_bell");
        Chat.log("out of xp");
        return 1;
    }
    return 0;
}

function center() {
    var rawvalue = JavaUtils.getHelperFromRaw(Player.getPlayer().getRaw().field_44784.orElse(null));
    var x = Math.floor(rawvalue.getX());
    var y = Math.floor(rawvalue.getY());
    var z = Math.floor(rawvalue.getZ());
    Player.getPlayer().setPos(x + 0.5, y + 1, z + 0.5);
}
