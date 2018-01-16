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
        qtd:3,
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
        qtd:1,
        
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
        qtd: 2,
       
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
    var subtotalTemp = '';
    var total = 0;
    var totalF = 0;
    for (var i=0; i<productInfo.length;i++){
        let subtotal = productInfo[i].price * productInfo[i].qtd;
        total += subtotal; 
        template += '<div class="product">';
        template += '<img src="'+productInfo[i].imagem.src+'"class="product__img">';
        template += '<span id="p1" class="product__name">'+productInfo[i].name+'</span>';
        template += '<span id="c1" class="product__color">Color: '+productInfo[i].color+'</span> ';
        template += '<span id="s1" class="product__size">Size: '+productInfo[i].size+'</span>';
        // subtotal = subtotal + this.productInfo[i].price;
        template += '<span id="v1" class="product__value">$ '+productInfo[i].price+'</span> * <input type="number" onchange="update(this.id, this.value)" value='+productInfo[i].qtd+' name="" id="'+productInfo[i].codigo+'"> = <span id="total-'+productInfo[i].codigo+'">$ '+subtotal+'</span>';
        template += '</div>';
    }
    subtotalTemp += '<div class="product__subtotal"><br>';
    subtotalTemp += '<span id="total"> Subtotal: R$'+total+'</span><br>';
    subtotalTemp += '<span>Continue Shopping</span><br>';
    subtotalTemp += '<button type="submit">Shipping Info</button>'
    subtotalTemp += '</div>';
    document.getElementById("products").innerHTML = template;
    document.getElementById("subtotal").innerHTML = subtotalTemp;
}

function update(_codigo, _qtd){
    var total = 0;
   for (let i=0; i<productInfo.length;i++){
    //att  qtd  
    if(productInfo[i].codigo == _codigo)
       productInfo[i].qtd = _qtd;

       //altera valor unit
       var totalProd = productInfo[i].qtd * productInfo[i].price;
       var codProd = 'total-'+productInfo[i].codigo;
       document.getElementById(codProd).innerHTML="<strong>$ </strong>"+totalProd; 
       
        //altera valor total
        total += totalProd;
        document.getElementById("total").innerHTML="Subtotal: R$" +total;
   }
}