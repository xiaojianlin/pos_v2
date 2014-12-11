function CartItems(items,count) {
    this.items = items;
    this.count = count;
}


CartItems.getCartItems = function(inputs) {
  var cartItems = [];
  _.forEach(inputs,function(inputs){
    var input = inputs.split('-');
    var barcode = input[0];
    var count = 1 ;
    if(input[1]){
      count = parseFloat(input[1]);
    }
  var item = Item.getItem(barcode);
  var cartItem = _.find(cartItems,function(cartItem){
    return barcode === cartItem.item.barcode;
  });
  cartItem ? cartItem.count += count :
             cartItems.push({ item: item , count: count });
  });
  return cartItems;
};
