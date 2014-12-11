function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}


Promotion.load = function(itemindex){
  var loadItem = false ;
  var barcodes = loadPromotions()[0].barcodes ;
  _.forEach(barcodes, function(trg){
    if(itemindex.barcode === trg ){
      loadItem = true ;
    }
  });
  return loadItem ;
};
