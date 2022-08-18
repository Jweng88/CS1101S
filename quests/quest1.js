import {heart, quarter_turn_left, from_url, stackn, square, blank, stack_frac, beside_frac, sail, corner, nova, red, stack, flip_horiz, quarter_turn_right, turn_upside_down, make_cross, rcross, beside, show} from "rune";

function middle(rune) {
    const middle_column1 = stack(quarter_turn_right(rune), rune);
    const middle_column2 = stack(turn_upside_down(rune), quarter_turn_left(rune));
    return beside(middle_column1, middle_column2);
}

function persian(rune, count) {
    const column = stackn(count, rune);
    const row = quarter_turn_left(stackn(count-2, quarter_turn_right(rune)));
    const mid = middle(rune);
    const pat1 = stack_frac(1/(count-1), row, mid);
    const pat2 = stack_frac((count-1)/count, pat1, row);
    const pat3 = beside_frac(1/(count-1), column, pat2);
    const pat4 = beside_frac((count-1)/count, pat3, column);
    return pat4;
}

// Tests

show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));