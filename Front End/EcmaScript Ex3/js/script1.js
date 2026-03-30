
var m1 = [10,30,53,64,23]
var product = {title:"mouse", cost:999}
var dim = {rad:9.5}


function circle(dim)
{
    //return 3.14* dim['rad']* dim["rad"]
    return 3.14*dim.rad*dim.rad;
}

function triangle(dim)
{
    return 0.5*dim.base*dim.height;
}

function area(target, dimension)        /* 'target' is a callback function */
{
    return target(dimension)
}


// circle({rad:9.5})
// triangle({base:9.3, height:8.4})


var circle_area = area(circle, {rad:9.5})
var triangle_area = area(triangle, {base:9.3, height:8.4})


console.log(circle_area)
console.log(triangle_area)


