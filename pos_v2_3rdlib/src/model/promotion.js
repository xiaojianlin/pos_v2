function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.load = function(item){
  var loadItem = false ;
  var barcodes = loadPromotions()[0].barcodes ;
  _.forEach(barcodes, function(barcode) {
    if(item.barcode === barcode ){
      loadItem = true ;
    }
  });
  return loadItem ;
};
