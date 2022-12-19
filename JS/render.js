const productsContainer = document.getElementById('prods1');
const productsContainer2 = document.getElementById('prods2');

getProducts();

async function getProducts() {
    const response = await fetch('JS/products.json')
    const productsArray = await response.json();

    RenderProducts1(productsArray);
    RenderProducts2(productsArray);
}


function RenderProducts1(arr){
    for(let i = 0; i < (arr.length / 2); i++){
        const productHTML = `
        <div class="prdct">
        <div class="prdct__photo">
            <a href="" class="prdct__link">
                <img src="${arr[i].img}" alt="honor">
            </a>
        </div>
        <div class="prdct__description">
            <div class="prdct__name">
                <a href="tovar.html" class="prdct__link">${arr[i].name}</a>
            </div>
            <div class="prdct__info">
                ${arr[i].opisanie}
            </div>
        </div>
        <div class="prdct__cost">
            ${arr[i].price}
        </div>
        <div class="prdct__buttons">
            <button class="cart" onclick="OpenModal()">В корзину</button>
        </div>
    </div>
      `;
      	

      productsContainer.insertAdjacentHTML('beforeend', productHTML);
    }
}
function RenderProducts2(arr){
    document.getElementById('prods2').style.display = "none";
    for(let i = (arr.length / 2); i < arr.length; i++){
        const productHTML = `
        <div class="prdct">
        <div class="prdct__photo">
            <a href="" class="prdct__link">
                <img src="${arr[i].img}" alt="honor">
            </a>
        </div>
        <div class="prdct__description">
            <div class="prdct__name">
                <a href="tovar.html" class="prdct__link">${arr[i].name}</a>
            </div>
            <div class="prdct__info">
                ${arr[i].opisanie}
            </div>
        </div>
        <div class="prdct__cost">
            ${arr[i].price}
        </div>
        <div class="prdct__buttons">
            <button class="cart" onclick="OpenModal()">В корзину</button>
        </div>
    </div>
      `;
      	

      productsContainer2.insertAdjacentHTML('beforeend', productHTML);
    }
}



function Show1(){
    document.getElementById('prods1').style.display = "flex";
    document.getElementById('prods2').style.display = "none";
}
function Show2(){
    document.getElementById('prods2').style.display = "flex";
    document.getElementById('prods1').style.display = "none";
        
}