var database, allProducts;
var bill;
var product = [];
var index = 0;
var flag = false;
var product;

//var input,submit;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
   // console.log(database);
    start();

    // var ref = database.ref("products");
    // ref.on("value", (data)=>{
    //     //console.log(data.val());
    //     allProducts = data.val();
    // })


    Product.getProductInfo();
   bill = new Bill();
   while(allProducts == undefined) {
       start();
   }
   bill.displayProducts();
   

// input = createInput("Name");
//   submit = createButton('click');
// input.position(200,100);
// submit.position(200,200);

   
}



function draw()
{
    background("white");
    
  
   
    
    

  
    drawSprites();
}
async function start() {
    product = new Product();
    var nodeRef = await database.ref('products').once('value');
    if(nodeRef.exists()) {
        allProducts = nodeRef.val();
    }
    Product.getProductInfo();
}

