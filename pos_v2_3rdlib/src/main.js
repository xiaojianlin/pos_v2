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
//  console.log(cartItems);
  return cartItems;
}

function getInventoryText(cartItems){
  return menus = '***<没钱赚商店>购物清单***\n' +
                 '打印时间：' + getCurrentDate + '\n' +
                 '----------------------\n' +
                 allMenu(cartItems) +
                 '----------------------\n' +
                 '挥泪赠送商品：\n' +
                 loadMenu(cartItems) +
                 '----------------------\n' +
                 money(cartItems) +
                 '**********************' ;
}

function allMenu(cartItems){
  var menu = '' ;
  _.forEach(cartItems,function(items){
  var itemindex = items.item;
  var numbers = items.count;
  var number = numbers ;
  if(load(itemindex)){
    numbers = numbers - parseInt(numbers/3) ;
  }
  menu += '名称：' + itemindex.name +
          '，数量：' +number + itemindex.unit +
          '，单价：' + itemindex.price.toFixed(2) +
          '(元)，小计：' + itemindex.price*numbers.toFixed(2) + '(元)\n' ;
  });
  return menu ;
}

function load(itemindex){
  var loadItem = false ;
  var barcodes = loadPromotions()[0].barcodes ;
  _.forEach(barcodes, function(trg){
    if(itemindex.barcode === trg ){
      loadItem = true ;
    }
  });
  return loadItem ;
}

function loadMenu(cartItems){
  var menu2 = '' ;
  _.forEach(cartItems,function(items){
    var itemindex = items.item;
    if(load(itemindex)){
      menu2 += '名称：' + itemindex.name +
               '，数量：' + parseInt(items.count/3) + itemindex.unit + '\n' ;
    }
  });
  return menu2 ;
}







function money(cartItems){
  var allMoney = 0;
  var reduceMoney = 0;
  // _.forEach(leadNumbers,function(number, index){
  //   var price = loadAllItems()[index].price ;
  //   if (number!==0 && load(index)){
  //     allMoney += price*(number-parseInt(number/3)) ;
  //     reduceMoney += price*parseInt(number/3);
  //   }
  //   else {
  //     allMoney += price*number ;
  //   }
  // } ) ;
  return menu3 = '总计：' + allMoney.toFixed(2) + '(元)\n' +
  '节省：' + reduceMoney.toFixed(2) + '(元)\n' ;
}







function getCurrentDate(){
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
}
