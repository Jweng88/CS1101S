import {rcross, scale, circle, heart, blank, overlay, show, overlay_frac, nova, anaglyph, hollusion, triangle} from "rune";

/* Use a helper function with counter in order to track the number
   of runes added and increasing the scale ratio, also used as 
   the condition of the recursive function */



function cone(n, rune){
    return overlaying(n, rune, 1);
}    

function overlaying(n,rune, c) {
    return c > n
    ? rune
    : overlay_frac(1/3, scale(c/n, rune), overlaying(n, rune, c+1));
}

// Tests
//show(overlaying(4, circle));
show(cone(4, circle));
hollusion(cone(15, circle));