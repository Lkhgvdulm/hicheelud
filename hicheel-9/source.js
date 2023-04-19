if(document.readyState == 'Loading'){
    document.addEventListener('DOMcontentloaded', ready)
}else {
    ready();
};

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    console.log();
    for(var i=0; i<removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i];
        button.addEventListener('change', quantityChanged);
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(var i=0; i<addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked(){
    alert(' tand bayrlalaa!!! ');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    // hzee duuusah n medegdehgui davtaltig helne
    while(cartItems.hasChildNodes){
        cartItems.removeChild(cartItems.firstChild);
    }
    uptadeCartTotal();
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    console.log(title, price, imageSrc);
        addItemToCart(title, price, imageSrc);
        uptadeCartTotal();

}
// addItemToCart uildel 
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(var i=0; i<cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert(' Uuchlaara tuhain baraa sagsand bno ');
            return; 
        } 
    }
    var cartRowContents = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
        <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`;
    cartRow.innerHTML = cartRowContents; 
    // append n last child n araas element zalgaj ugnu
    cartItems. append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}

// quantity changed function
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value<=0){
        input.value = 1;
    }

    uptadeCartTotal();

}



function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    uptadeCartTotal();
}
function uptadeCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    // for dawtaltaar sagsan dotorh buh baraag shalgaj nemegduulj bnaa.
    for(var i =0; i<cartRows.length; i++){
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$',''));
        var quantity = quantityElement.value;
        total = total + (price*quantity);
    }
    // total buyu sagsnii niit une.
    total = Math.round(total*100)/100;

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;

}








