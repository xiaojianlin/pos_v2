function Inventory(cartItems) {
  this.cartItems = cartItems;
}


Inventory.prototype.getInventoryText = function() {
  return   '***<没钱赚商店>购物清单***\n' +
           '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
           '----------------------\n' +
           this.itemsText() +
           '----------------------\n' +
           '挥泪赠送商品：\n' +
           this.promotionText() +
           '----------------------\n' +
           this.amountText() +
           '**********************' ;
};



Inventory.prototype.itemsText = function() {
  var menu = '' ;
  _.forEach(this.cartItems, function(cartItem){
    var item = cartItem.item;
    var count = cartItem.count;
    var primaryCount = count ;
    if(Promotion.promotionItems(item)){
      count = count - parseInt(count/3) ;
    }
    menu += '名称：' + item.name +
            '，数量：' +primaryCount + item.unit +
            '，单价：' + item.price.toFixed(2) +
            '(元)，小计：' + (item.price * count).toFixed(2) + '(元)\n' ;
  });
  return menu ;
};



Inventory.prototype.promotionText = function() {
  var menu2 = '' ;
  _.forEach(this.cartItems, function(cartItem){
    var item = cartItem.item;
    if (Promotion.promotionItems(item)){
      menu2 += '名称：' + item.name +
               '，数量：' + parseInt(cartItem.count/3) + item.unit + '\n' ;
    }
  });
  return menu2 ;
};



Inventory.prototype.amountText = function() {
  var allAmount = 0 ;
  var reduceAmount = 0 ;
  _.forEach(this.cartItems, function(cartItem){
    var item = cartItem.item ;
    var count = cartItem.count ;
    var price = item.price ;
    if(Promotion.promotionItems(item)){
      allAmount += price * (count-parseInt(count/3)) ;
      reduceAmount += price * parseInt(count/3);
    }
    else {
      allAmount += price*count ;
    }
  });
  return '总计：' + allAmount.toFixed(2) + '(元)\n' +
         '节省：' + reduceAmount.toFixed(2) + '(元)\n' ;
};
