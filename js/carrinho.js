var productInfo1 = {
    src: '/img/camiseta.png',
    name: 'Puma Golf Raglan Tech Polo Tee',
    color: 'Purple',
    price: 72,
};

document.getElementById("p1").innerHTML = productInfo1.name;
document.getElementById("c1").innerHTML ='Color: '+productInfo1.color;
document.getElementById("v1").innerHTML = '$'+productInfo1.price;


var productInfo2 = {
    name:'Nike Mens Running Shoes',
    color: 'White',
    price: 119
};

document.getElementById("p2").innerHTML = productInfo2.name;
document.getElementById("c2").innerHTML ='Color: '+productInfo2.color;
document.getElementById("v2").innerHTML = '$'+productInfo2.price;

var productInfo3 = {
    name:'DC Mens Axis Snowboard Jacket',
    color: 'Blue',
    price: 89
};

document.getElementById("p3").innerHTML = productInfo3.name;
document.getElementById("c3").innerHTML ='Color: '+productInfo3.color;
document.getElementById("v3").innerHTML = '$'+productInfo3.price;