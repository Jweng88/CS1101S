import {heart, square, blank, stack_frac, beside_frac, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, stack_beside, rcross, beside, show} from "rune";

function hook(frac) {
    return frac === 1
    ? square
    : stack_frac(1/2, square, beside_frac(1-frac, blank, square));
}

// Test
show(hook(1/5));