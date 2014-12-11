function Inventory(cartItems) {
  this.cartItems = cartItems;
}


Inventory.prototype.getInventoryText = function() {
  return menus = '***<没钱赚商店>购物清单***\n' +
  '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
  '----------------------\n' +
  this.allText() +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  this.loadText() +
  '----------------------\n' +
  this.amountText() +
  '**********************' ;
};



Inventory.prototype.allText = function() {
  var menu = '' ;
  _.forEach(this.cartItems,function(items){
    var itemindex = items.item;
    var numbers = items.count;
    var number = numbers ;
    if(Promotion.load(itemindex)){
      numbers = numbers - parseInt(numbers/3) ;
    }
    menu += '名称：' + itemindex.name +
    '，数量：' +number + itemindex.unit +
    '，单价：' + itemindex.price.toFixed(2) +
    '(元)，小计：' + (itemindex.price*numbers).toFixed(2) + '(元)\n' ;
  });
  return menu ;
};



Inventory.prototype.loadText = function() {
  var menu2 = '' ;
  _.forEach(this.cartItems,function(items){
    var itemindex = items.item;
    if(Promotion.load(itemindex)){
      menu2 += '名称：' + itemindex.name +
      '，数量：' + parseInt(items.count/3) + itemindex.unit + '\n' ;
    }
  });
  return menu2 ;
};



Inventory.prototype.amountText = function() {
  var allAmount = 0 ;
  var reduceAmount = 0 ;
  _.forEach(this.cartItems,function(items){
    var item = items.item ;
    var numbers = items.count ;
    var price = item.price ;
    if(Promotion.load(item)){
      allAmount += price*(numbers-parseInt(numbers/3)) ;
      reduceAmount += price*parseInt(numbers/3);
    }
    else {
      allAmount += price*numbers ;
    }
  });
  return menu3 = '总计：' + allAmount.toFixed(2) + '(元)\n' +
  '节省：' + reduceAmount.toFixed(2) + '(元)\n' ;
};
