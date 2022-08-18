import {heart, sail, red, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, stack_beside, rcross, beside, show} from "rune";

//The function mirror shows a rune next to its mirror image.

function mirror(rune) {
    return beside(rune, flip_horiz(rune));
}


/*The function more_love takes a rune as
argument and returns a rune that shows
it next to a red heart.*/


function more_love(rune) {
    return beside(rune, red(heart));
}

show(more_love(mirror(sail)));
