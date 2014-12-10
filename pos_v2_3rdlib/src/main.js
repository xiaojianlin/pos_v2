function printInventory(inputs){
  var cartItems = getCartItems(inputs);
  var inventoryText = getInventoryText(cartItems);
  console.log(inventoryText);
}

function getCartItems(inputs){
  var cartItems = [];
  _.forEach(inputs,function(inputs){
    var input = inputs.split('-');
    var barcode = input[0];
    var count = 1 ;
    if(input[1]){
      count = parseFloat(input[1]);
    }
  var item =_.find(loadAllItems(),{barcode : barcode});
  var cartItem=_.find(cartItems,function(cartItem){
    return barcode === cartItem.item.barcode;
  });
  cartItem ? cartItem.count += count :
            cartItems.push({ item: item , count: count });
  });
  console.log(cartItems);
  return cartItems;
}




function getInventoryText(cartItems){
  return menus = '***<没钱赚商店>购物清单***\n' +
                 '打印时间：' + formattedDateString + '\n' +
                 allMenu(cartItems) +
                 '----------------------\n' +
                 '挥泪赠送商品：\n' +
                 loadMenu(cartItems) +
                 '----------------------\n' +
                 money(cartItems) +
                 '**********************' ;
}
