import {rcross, scale, circle, heart, blank, overlay, show, overlay_frac, nova, anaglyph, hollusion, triangle} from "rune";

function steps(r1, r2, r3, r4){
    return overlay(
        overlay(
            mosaic(blank, blank, blank, r4),
            mosaic(blank, blank, r3, blank)
        ), 
        overlay(
            mosaic(blank, r2, blank, blank),
            mosaic(r1, blank, blank, blank)
        )
    );
}

function mosaic(r1, r2, r3, r4) {
    return stack(
           beside(r4, r1),
           beside(r3, r2)
        );
}


// Tests
show(steps(rcross, triangle, corner, nova));
hollusion(steps(rcross, triangle, corner, nova));