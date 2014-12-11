function printInventory(inputs){
  var cartItems = CartItems.getCartItems(inputs);
  var inventory = new Inventory(cartItems);
  console.log(inventory.getInventoryText());
}
