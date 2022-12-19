const notebooksContainer = document.getElementById('audio1');
const notebooksContainer2 = document.getElementById('audio2');

getProducts();

async function getProducts() {
    const responseNotebooks = await fetch('JS/audiosystems.json')
    const notebooksArray = await responseNotebooks.json();
    
    RenderProducts1(notebooksArray);
    RenderProducts2(notebooksArray);
}


function RenderProducts1(arr){
    for(let i = 0; i < (arr.length / 2); i++){
        const productHTML = `
        <div class="prdct">
        <div class="prdct__photo">
            <a href="tovar.html" class="prdct__link">
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
      	

      notebooksContainer.insertAdjacentHTML('beforeend', productHTML);
    }
}
function RenderProducts2(arr){
    document.getElementById('audio2').style.display = "none";
    for(let i = (arr.length / 2); i < arr.length; i++){
        const productHTML = `
        <div class="prdct">
        <div class="prdct__photo">
            <a href="tovar.html" class="prdct__link">
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
      	

      notebooksContainer2.insertAdjacentHTML('beforeend', productHTML);
    }
}



function Show1(){
    document.getElementById('audio1').style.display = "flex";
    document.getElementById('audio2').style.display = "none";
}
function Show2(){
    document.getElementById('audio2').style.display = "flex";
    document.getElementById('audio1').style.display = "none";
        
}
