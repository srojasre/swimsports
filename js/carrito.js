const PRICE_PER_UNIT = 65000;
let totalPrice = 0;
const PRODUCTS = [
    { name: "x100 Bad Bunny", img: "images/swimcapb1.png" },
    { name: "Un verano sin ti Bad Bunny", img: "images/swimcapb2.png" },
    { name: "Mañana será bonito Karol G", img: "images/swimcapk1.png" },
    { name: "Feid", img: "images/swimcapf1.png" }
];

function addItem() {
    const cartBody = document.getElementById('cart-body');
    const row = document.createElement('tr');

    const productSelect = document.createElement('select');
    productSelect.classList.add('form-control');
    productSelect.setAttribute('onchange', 'updateImageAndTotal(this)');
    PRODUCTS.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.text = product.name;
        productSelect.appendChild(option);
    });

    row.innerHTML = `
    <td><img src="${PRODUCTS[0].img}" class="product-img" alt="Imagen del producto"></td>
    <td></td>
    <td>
        <input type="number" class="form-control cantidad-input" value="1" min="1" onchange="updateTotal1(this)">
    </td>
    <td class="item-total precio-total">${PRICE_PER_UNIT}</td>
    <td>
        <button class="btn btn-danger" onclick="removeItem(this)">Eliminar</button>
    </td>
   `;
    row.cells[1].appendChild(productSelect);

    cartBody.appendChild(row);
    updateGrandTotal();
}

function removeItem(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateGrandTotal();
}


function updateTotal1(input){
    const quantity = input.value;
    const row = input.parentNode.parentNode;
    const totalCell = row.querySelector('.item-total');
    if (quantity < 0){
        alert("ERROR CANTIDAD MENOR QUE 0");
        totalCell.textContent = 0;
        updateGrandTotal();
    }
    else if(quantity == 2){
        totalCell.textContent = quantity * 55000
        updateGrandTotal();
        
    }
    else if (quantity >= 3){
        totalCell.textContent = quantity * 50000
        updateGrandTotal(); 
    }
    
    else{
        totalCell.textContent = quantity * PRICE_PER_UNIT;
        updateGrandTotal();
    }
    

}
function updateImageAndTotal(select) {
    const selectedProduct = PRODUCTS.find(product => product.name === select.value);
    const row = select.parentNode.parentNode;
    const imgCell = row.cells[0].querySelector('.product-img');
    imgCell.src = selectedProduct.img;
    updateTotal1(select.parentNode.nextElementSibling.querySelector('input'));
}

function updateGrandTotal() {
    const totalElements = document.querySelectorAll('.item-total');
    totalPrice = 0;
    totalElements.forEach(element => {
        totalPrice += parseInt(element.textContent);
    });
    document.getElementById('total-price').textContent = totalPrice;
}
