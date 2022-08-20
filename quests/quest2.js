import {rcross, scale, show, stack_frac, beside_frac, random_color, stackn, quarter_turn_right, quarter_turn_left, circle, heart, blank, stack} from "rune";

/* As Source uses applicative order reduction, in order to create
   randomly-colored hearts, we have to:
   - first create a recursive function randomrow as a helper function
     to create a row of randomly-colored hearts
   - then create the recursive function randomly_colored_carpet, 
     placing the randomrow function into the randomly_colored_carpet
     function as one of its arguments so that it will be evaluated
     first, then keep stacking randomly-colored rows to form the 
     pattern. */

function besiden(n, rune) {
    return n === 1
    ? rune
    : beside_frac(1 / n, rune,
                  besiden(n - 1, rune));
}

function randstackn(n, rune) {
    return n === 1
           ? rune
           : stack_frac(1 / n, random_color(rune),
                        randstackn(n - 1, random_color(rune)));
}

function randomrow(n, rune) {
    return n === 1
    ? random_color(rune)
    : beside_frac(1/n, random_color(rune), randomrow(n-1, rune));
}

function randomly_colored_carpet(n, m, rune) {
    return n === 1
    ? randomrow(m, rune)
    : stack_frac(1/n, randomrow(m, rune), 
    randomly_colored_carpet(n-1, m, rune));
}

// Test
show(randomly_colored_carpet(10, 10, heart));
//show(randomcol(5, heart));







