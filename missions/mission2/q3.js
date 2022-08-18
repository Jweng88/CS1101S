import {heart, square, blank, stack_frac, beside_frac, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, stack_beside, rcross, beside, show} from "rune";

function spiral(thickness, depth) {
    return depth === 0 
    ? blank
    : stack_frac(thickness, hook(thickness/2), quarter_turn_right(spiral(thickness, depth-1)));
    
    
    // recurse hook
}

// copy your hook function from Question 2 here if required
function hook(frac) {
    return frac === 1
    ? square
    : stack_frac(1/2, square, beside_frac(1-frac, blank, square));
}
// Test
show(spiral(1 / 5, 20));