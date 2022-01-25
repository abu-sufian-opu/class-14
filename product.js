
//Product List by Ls
//get elements
const add_product = document.getElementById('add_product');
const addbox_closebtn = document.querySelector('.addbox_closebtn');
const product_addbox = document.querySelector('.product_addbox');
const product_form = document.getElementById('product_form');
const product_list = document.querySelector('.product_list');


// Click Event
add_product.addEventListener('click', function(){
    product_addbox.style.display = 'block';
});

addbox_closebtn.addEventListener('click', function(){
    product_addbox.style.display = 'none';
});

// Product form submit 
product_form.addEventListener('submit', function(e){

    e.preventDefault();

    let name = this.querySelector('input[name="name"]').value;
    let regular_price = this.querySelector('input[name="regular_price"]').value;
    let sale_price = this.querySelector('input[name="sale_price"]').value;
    let photo = this.querySelector('input[name="photo"]').value;


    let product_arr;

    if( dataGet('products')){
        product_arr = dataGet('products');
    }else{
        product_arr = [];
    }

    product_arr.push({
        Name            : name,
        Product_price   : regular_price,
        Sale_price      : sale_price,
        Prduct_photo    : photo
    });

    dataSend('products', product_arr);
    allProduct();

    this.querySelector('input[name="name"]').value='';
    this.querySelector('input[name="regular_price"]').value='';
    this.querySelector('input[name="sale_price"]').value='';
    this.querySelector('input[name="photo"]').value='';


});

allProduct();

function allProduct (){
     let all_products = dataGet('products');
     console.log(all_products);
     let data = '';

     all_products.map(pdata => {

        data += `
        
            <div class="col-lg-4 my-3">
                <div class="card product-box">
                    <img class="card-image" style="object-fit: cover;" src="${ pdata.Prduct_photo }" alt="">

                    <div class="card-body">
                        <h5>${ pdata.Name }</h5>
                        <p><span class="sale-price">${ pdata.Sale_price }</span>  <span class="regular-price">${ pdata.Product_price }</span></p>
                    </div>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        
        `;
     });

     product_list.innerHTML = data;
};