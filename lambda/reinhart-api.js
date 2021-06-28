function startOrder(customerID){ 

    //connect to service and create the order 

    console.log("did start order"); 

    var orderNum = 50; 

    var deliveryDate = 02042020; 

     

    return {orderNum, deliveryDate}; 

} 

  

  

function getPendingOrder(customerID){ 

    //connect and see if theres a pending order if not returns zero 

    console.log("did getPendingOrder "); 

    var orderNum = 70; // or zero 

    var deliveryDate = 02042020; 

     

    return {orderNum, deliveryDate}; 

} 

  

  

function getProductByID(productName){ 

    

    console.log("did getProductByID"); 

    var productNames = ["chick","nuts", "pie"]; 

    var productIDs = [1,3,7]; 

     

    return {productNames, productIDs}; 

} 

  

function getProductsFromCatalouge(productName){ 

    

    console.log("did getProductsFromCatalouge"); 

    var productNames = ["chick","nuts", "pie"]; 

    var productIDs = [1,3,7]; 

     

    return {productNames, productIDs}; 

} 

  

function getProductsFromOrderGuide(customerID, productName){ 

     

    console.log("did getProductsFromOrderGuide"); 

    var productNames = ["chick","nuts", "pie"]; 

    var productIDs = [1,3,7]; 

     

    return {productNames, productIDs}; 

} 

  

function getOrderItem(orderNum, productName){ 

  

    console.log("did getOrderItem"); 

    var productNames = "chick"; 

    var productIDs = 1; 

    var quantity = 3; 

     

    return {productNames, productIDs, quantity}; 

} 

  

function getNextDeliveryOrderNums(customerID){ 

  

    console.log("did getNextDeliveryOrderNums"); 

    var orderNumbers = [11,33,55]; 

     

    return {orderNumbers}; 

} 

  

function updateQuantity(orderNum, productID, newQuantity){ 

    console.log("did updateQuantity"); 

    var confirmation = true; 

    return confirmation; 

} 

  

function updateProduct(orderNum, productID, newProductID){ 

    console.log("did getNextDeliveryOrderNums"); 

    var confirmation = true; 

    return confirmation; 

} 

  

function addToOrder(orderNum, productID, quantity){ 

  

    console.log("did addToOrder"); 

  

    var confirmation = true;     

   return confirmation; 

} 

  

function getAllOrderItems(orderNum) { 

     console.log("did getallorderitems"); 

    var productNames = ["chick","nuts", "pie"]; 

    var productIDs = [1,3,7];  

    var quantities = [3,9,200]; 

     

    return {productNames, productIDs, quantities}; 

} 

  

function submitOrder(orderNum){ 

     console.log(" did SubmitOrder"); 

    var confirmation = true; 

    return {confirmation}; 

} 

  

function cancelNextDelivery(customerID){ 

     console.log("did cancelNextDelivery"); 

    var confirmation = true; 

    return {confirmation}; 

} 

  

function getNextDeliveryDate(customerID){ 

     console.log("did getNextDeliveryDate"); 

    var deliverDatesPerWeek = ["monday", "tuesday", "friday"]; 

     

    return {deliverDatesPerWeek}; 

} 

  

function getProductFromNextDelivery(customerID, productName){ 

     console.log("did getProductFromNextDelivery "); 

    var product = "chick"; 

    return {product}; 

} 

  

function getPendingOrderContents(customerID){ 

     console.log("did getPendingORderContents "); 

    var products = ["chick", "avacado", "eggs"]; 

    var quantities = [3,5,7]; 

    return {products, quantities}; 

} 

  

function getNextDeliveryContents(customerID){ 

     

    var products = ["chick", "pie", "mush"]; 

    var quantities = [4,5,7]; 

     

    return products; 

     

} 

  

module.exports = {startOrder, getPendingOrder, getProductByID, getProductsFromCatalouge, getProductsFromOrderGuide, getOrderItem, getNextDeliveryOrderNums, addToOrder, getAllOrderItems, updateQuantity, updateProduct, submitOrder, getNextDeliveryDate, getNextDeliveryContents, getProductFromNextDelivery, getPendingOrderContents}; 