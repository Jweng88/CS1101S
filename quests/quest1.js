import {heart, quarter_turn_left, from_url, stackn, square, blank, stack_frac, beside_frac, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, rcross, beside, show} from "rune";

/*function edge(rune, count) {
    return beside_frac(1/count, stackn(count, rune), 
    stack_frac(1/count, stacking(rune, count-1), stackn(count-1,
    beside_frac((count-2)/(count-1), stack_frac(1/count,  
    stacking(rune, count-2), blank), rune))));
}

function stacking(rune, count) {
    return quarter_turn_left(stackn(count, quarter_turn_right(rune)));
}*/

function edge_column(rune, count) {
    return stackn(count, rune);
}

function edge_row(rune, count) {
    return quarter_turn_left(stackn(count, quarter_turn_right(rune)));
}

function middle(rune, count) {
    
}

function persian(rune, count) {
    column ;
}

// Tests
show(edge_column(heart, 7));
show(edge_row(heart, 7));
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));