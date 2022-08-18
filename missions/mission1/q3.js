import {heart, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, stack_beside, rcross, beside, show} from "rune";

function mosaic(r1, r2, r3, r4) {
    return stack(
           beside(r4, r1),
           beside(r3, r2)
        );
}

function upside_down_mosaic(r1, r2, r3, r4) {
    return quarter_turn_right(
            quarter_turn_right(mosaic(r1, r2, r3, r4)));
}

// Test
show(upside_down_mosaic(rcross, sail, corner, nova));