function Inventory(cartItems) {
  this.cartItems = cartItems;
}


Inventory.getInventoryText = function(cartItems){
  return menus = '***<没钱赚商店>购物清单***\n' +
  '打印时间：' + this.getCurrentDate() + '\n' +
  '----------------------\n' +
  this.allMenu(cartItems) +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  this.loadMenu(cartItems) +
  '----------------------\n' +
  this.money(cartItems) +
  '**********************' ;
};



Inventory.allMenu = function(cartItems){
  var menu = '' ;
  _.forEach(cartItems,function(items){
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



Inventory.loadMenu = function(cartItems){
  var menu2 = '' ;
  _.forEach(cartItems,function(items){
    var itemindex = items.item;
    if(Promotion.load(itemindex)){
      menu2 += '名称：' + itemindex.name +
      '，数量：' + parseInt(items.count/3) + itemindex.unit + '\n' ;
    }
  });
  return menu2 ;
};



Inventory.money = function(cartItems){
  var allMoney = 0 ;
  var reduceMoney = 0 ;
  _.forEach(cartItems,function(items){
    var itemindex = items.item ;
    var numbers = items.count ;
    var price = itemindex.price ;
    if(Promotion.load(itemindex)){
      allMoney += price*(numbers-parseInt(numbers/3)) ;
      reduceMoney += price*parseInt(numbers/3);
    }
    else {
      allMoney += price*numbers ;
    }
  });
  return menu3 = '总计：' + allMoney.toFixed(2) + '(元)\n' +
  '节省：' + reduceMoney.toFixed(2) + '(元)\n' ;
};




Inventory.getCurrentDate = function(){
  dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
  };
  var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  return formattedDateString;
};
