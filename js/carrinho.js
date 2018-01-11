var productInfo = [{
        codigo: 1,
        imagem:{
            src: 'img/camiseta.png',
            alt: 'Camiseta PUBG',
            title: 'Titulo'
        },
        name: 'PUBG T-Shirt',
        color: 'Red',
        size: 'M',
        price: 72,
        qtd:3
    },
    {
        codigo: 2,
        imagem:{
            src: 'img/future.png',
            alt: 'Tênis Marty McFLy',
            title: 'Titulo'
        },
        name:'Nike Marty McFLy Shoes',
        color: 'White',
        size: '39',
        price: 119,
        qtd:1
    },
    {   codigo: 3,
        imagem:{
            src: 'img/skull.png',
            alt: 'Jaqueta caveira',
            title: 'Titulo'
        },
        name:'Skull Jacket',
        color: 'Black',
        size: 'XL',
        price: 89,
        qtd: 2
    }
];

/* <div class="product">
><i class="fa fa-times-circle"</i>
<img src="" alt="" class="product__img">
<span id="p1" class="product__name"></span>
<span id="c1" class="product__color"></span>
<span id="s1" class="product__size"></span>
<span id="v1" class="product__value"></span>*<input type="number" name="" id=""> = <span>$216</span>
</div>*/

function listar(){
    var template = '';
    for (var i=0; i<productInfo.length;i++){
        template += '<div class="product">';
        template += '<img src="'+productInfo[i].imagem.src+'" class="product__img">';
        template += '<span id="p1" class="product__name">'+productInfo[i].name+'</span>';
        template += '<span id="c1" class="product__color">Color: '+productInfo[i].color+'</span> ';
        template += '<span id="s1" class="product__size">Size: '+productInfo[i].size+'</span>';
        template += '<span id="v1" class="product__value">$ '+productInfo[i].price+'</span> * <input type="number" name="" id=""> = <span>$216</span>';
        template += '</div>';
    }
    document.getElementById("products").innerHTML = template;
}
