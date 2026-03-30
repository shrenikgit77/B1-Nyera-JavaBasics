
let area = (target, dimension) => target(dimension)

var circle_area = area(dim => 3.14*dim.rad*dim.rad, {rad:9.5})
var triangle_area = area(dim => 0.5*dim.base*dim.height, {base:9.3, height:8.4})


console.log(circle_area)
console.log(triangle_area)


