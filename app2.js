//global variables
const itemList = document.querySelector('.items');
const addButtons = document.querySelectorAll('.add');
const cart = document.querySelector('.ships-table');
const col = document.body.querySelector('.ships-table').rows
let i = 0;


//grant buttons the ability to add  items to shopping cart
function addItemToCart(element) {
    element.addEventListener('click', () => {
        //create table row
        const shipPrice = element.previousElementSibling.dataset.price
        const shipName = element.parentElement.previousElementSibling.previousElementSibling.innerText
        const row = cart.insertRow(1);
        const name = row.insertCell(0)
        const price = row.insertCell(1)
        const quantity = row.insertCell(2)
        const total = row.insertCell(3)
        const add = row.insertCell(4)
        const minus = row.insertCell(5)
        name.innerText = shipName
        price.innerText = shipPrice
        quantity.innerText = 1
        total.innerText = shipPrice
        i += 1
        row.setAttribute('id', 'product-' + i)

        //create add button
        const addButton = document.createElement('button')
        addButton.innerText = '+'
        addButton.setAttribute("class", "increase")
        addButton.addEventListener('click', e => {
            increaseQ(e, quantity, price, total)
        });

        //create minus button
        const minusButton = document.createElement('button')
        minusButton.innerText = '-'
        minusButton.setAttribute("class", "decrease")
        minusButton.addEventListener('click', e => {
            decreaseQ(e, quantity, price, total)
        })

        //add buttons to table row
        add.appendChild(addButton)
        minus.appendChild(minusButton)

        getTotal()

    }, { once: true });
}







//increment the quantity of an item in the cart
function increaseQ(e, quantity, price, total) {
    let num = parseInt(quantity.innerText)
    num += 1
    quantity.innerText = num
    let cost = price.innerText
    let currentTotal = num * cost
    total.innerText = currentTotal
    getTotal()



}

//decrement the quantity of an item in the cart
function decreaseQ(e, quantity, price, total) {
    let num = parseInt(quantity.innerText)
    num -= 1
    quantity.innerText = num
    let cost = price.innerText
    let currentTotal = num * cost
    total.innerText = currentTotal
    getTotal()



}

// set shopping cart total
function getTotal() {
    total = 0

    for (let i = 1; i < col.length; i++) {
        let cellVal = parseInt(col[i].cells[3].innerText)
        total += cellVal
        //console.log(total)
    }

    let grandTotal = document.getElementById('grand-total').innerText = total
}


//remove items from cart if cart quantity is 0
cart.addEventListener('click', removeItemFromCart)

function removeItemFromCart(evt) {
    quantity = evt.target.parentElement.parentElement.cells[2].innerText
    itemName = evt.target.parentElement.parentElement.cells[0].innerText

    //document.querySelectorAll('.add')[0].parentElement.previousElementSibling.previousElementSibling.innerText
    if (evt.target.className == 'decrease' && quantity == 0) {
        const tr = evt.target.parentElement.parentElement
        tr.remove()
        restoreEventListener(itemName)
    }

}

//add back event listener 
function restoreEventListener(item) {
    for (let i = 0; i < addButtons.length; i++) {
        if (addButtons[i].parentElement.previousElementSibling.previousElementSibling.innerText === item) {
            addButtons[i].addEventListener('click', addItemToCart(addButtons[i]))
        }
    }

}


//remove all items in cart and reset total to 0
function removeAllRows() {
    let rows = col
    // let counter = 1

    //reverse loop - start at one to not remove columns headers
    for (let i = rows.length - 1; i >= 1; i--) {
        item = rows[i].cells[0].innerText
        restoreEventListener(item)
        rows[i].parentElement.removeChild(rows[i])



    }


    document.getElementById('grand-total').innerText = 0
}

let resetButton = document.getElementById('reset-button')
resetButton.addEventListener('click', removeAllRows);

addButtons.forEach(addItemToCart)















