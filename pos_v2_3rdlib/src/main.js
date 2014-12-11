function printInventory(inputs){
  var cartItems = CartItems.getCartItems(inputs);
  var inventoryText = Inventory.getInventoryText(cartItems);
  console.log(inventoryText);
}
