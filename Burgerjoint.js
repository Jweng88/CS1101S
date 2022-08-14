function biggie_size(normal_combo) {
    return normal_combo + 4;
}

function unbiggie_size(upsized_combo) {
    return upsized_combo - 4;
}

function is_biggie_size(combo) {
    return combo > 4;
}

function combo_price(combo) {
    return is_biggie_size(combo) ? 1.17 * unbiggie_size(combo) + 0.50 : 1.17 * combo;
}

function empty_order() {
    return 0;
}

function add_to_order(combo1, combo2) {
    return combo1 * 10 + combo2;
}

function last_combo(order) {
    return order % 10;
}

function other_combos(order) {
    const final_order = order - last_combo(order);
    return final_order / 10;
}

