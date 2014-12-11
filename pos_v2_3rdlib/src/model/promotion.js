function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.promotionItems = function(item) {
  var promotionItem = false ;
  var barcodes = loadPromotions()[0].barcodes ;
  _.forEach(barcodes, function(barcode) {
    if(item.barcode === barcode ){
      promotionItem = true ;
    }
  });
  return promotionItem ;
};
