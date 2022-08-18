import {heart, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, stack_beside, rcross, beside, show} from "rune";

function fractal(pic, n) {
    return n === 1
           ? pic
           : beside (pic, fractal(stack(pic, pic), n-1));
}

// Test
show(fractal(make_cross(rcross), 5));