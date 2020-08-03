function get_slope(line) {
    return delta(line.p1.y, line.p2.y) / delta(line.p1.x, line.p2.x);
}
function delta(val1, val2) {
    return val2 - val1;
}
function get_value_x(m1, m2, p1line1, p1line2) {
    let mx1 = m1;//m1 * x
    let mx2 = m2; //m2 * x


    let mp1 = m1 * (- p1line1.x);
    let mp2 = m2 * (- p1line2.x);

    let valM = mx1 - mx2;

    let MPPY1 = mp1 + p1line1.y;
    let MPPY2 = mp2 + p1line2.y;


    let valPY = MPPY2 - MPPY1;

    let result = valPY / valM;

    return result;


}
function get_value_y(x, mline1, line1) {
    return (mline1 * x) - (mline1 * line1.p1.x) + line1.p1.y
}

function calculate(line1, line2) {
    let mLine1 = get_slope(line1);
    let mLine2 = get_slope(line2);

    let x = get_value_x(mLine1, mLine2, line1.p1, line2.p1);
    let y = get_value_y(x, mLine1, line1);

    return {
        x: x,
        y: y,
    }

}
module.exports = calculate