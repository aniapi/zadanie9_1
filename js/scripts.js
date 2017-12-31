
var a,
    h;
    triangle1Area = getTriangleArea(10,15);
    triangle2Area = getTriangleArea(10,20);
    triangle3Area = getTriangleArea(10,40);

function getTriangleArea(a, h) {
  
if (a > 0) {
} else if (a <= 0) {
    console.log('Nieprawidłowe dane');
}

if (h > 0) {
} else if (a <= 0) {
    console.log('Nieprawidłowe dane');
}
    return a*h/2;
}

console.log(getTriangleArea(10, 6))