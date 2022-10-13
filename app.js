

let grandTotal = document.getElementById('grand-total')

// let allTotals = document.querySelectorAll('small-total')

// function setToZero(item) {
//     item.innerText = 0;
// };

// let resetButton = document.getElementById('reset-button')
// resetButton.addEventListener('click', item => {
//     allTotals.forEach(setToZero(item))
// });



//algorithm
/* const prices = Array.from(document.getElementsByClassName('price'))
const buttons = Array.from(document.getElementsByClassName('add'))
const quantities = Array.from(document.getElementsByClassName('quantity'))
const totals = Array.from(document.getElementsByClassName('small-total'))

function getNums(element) {
    console.log(element.dataset.price)
}

prices.forEach(getNums)

for (b of buttons) {
    b.addEventListener('click', () => {
        console.log(b)
    })
}
 */





//Cube
const cubePrice = document.getElementById('cube-price').dataset.price
const cubeAdd = document.getElementById('cube-increase')
const cubeButton = document.getElementById('cube-button')
const cubeMinus = document.getElementById('cube-decrease')
const cubeTotal = document.getElementById('cube-total')
const cubeQuantity = document.getElementById('cube-quantity')



cubeButton.addEventListener('click', () => {
    cubeQuantity.innerText = 1
    cubeTotal.innerText = cubePrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += cubePrice

});


// cubeAdd.addEventListener('click', () => {
//     num = parseInt(cubeQuantity.innerText)
//     num += 1
//     cubeQuantity.innerText = num
//     const currentTotal = num * cubePrice
//     cubeTotal.innerText = currentTotal
//     let intTotal = parseInt(grandTotal.innerText)
//     intTotal += (currentTotal - cubePrice)
//     grandTotal.innerText = intTotal

// })

cubeMinus.addEventListener('click', () => {
    num = parseInt(cubeQuantity.innerText)
    num -= 1
    cubeQuantity.innerText = num
    const currentTotal = num * cubePrice
    cubeTotal.innerText = currentTotal
    let intTotal = parseInt(grandTotal.innerText)
    intTotal -= (currentTotal - cubePrice)
    grandTotal.innerText = intTotal


})







// Falcon
const falconPrice = document.getElementById('falcon-price').dataset.price
const falconButton = document.getElementById('falcon-button')
const falconAdd = document.getElementById('falcon-increase')
const falconMinus = document.getElementById('falcon-decrease')
const falconQuantity = document.getElementById('falcon-quantity')
const falconTotal = document.getElementById('falcon-total')


falconButton.addEventListener('click', () => {
    falconQuantity.innerText = 1
    falconTotal.innerText = falconPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += cubePrice

});


falconAdd.addEventListener('click', () => {
    num = parseInt(falconQuantity.innerText)
    num += 1
    falconQuantity.innerText = num
    falconTotal.innerText = num * falconPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += (currentTotal - falconPrice)
    grandTotal.innerText = intTotal

});

falconMinus.addEventListener('click', () => {
    num = parseInt(falconQuantity.innerText)
    num -= 1
    falconQuantity.innerText = num
    falconTotal.innerText = num * falconPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal -= (currentTotal - falconPrice)
    grandTotal.innerText = intTotal


});



// Firefly
const fireflyPrice = document.getElementById('firefly-price').dataset.price
const fireflyButton = document.getElementById('firefly-button')
const fireflyAdd = document.getElementById('firefly-increase')
const fireflyMinus = document.getElementById('firefly-decrease')
const fireflyTotal = document.getElementById('firefly-total')
const fireflyQuantity = document.getElementById('firefly-quantity')



fireflyButton.addEventListener('click', () => {
    fireflyQuantity.innerText = 1
    fireflyTotal.innerText = fireflyPrice
    grandTotal.innerText += fireflyPrice;

});



fireflyAdd.addEventListener('click', () => {
    num = parseInt(fireflyQuantity.innerText)
    num += 1
    fireflyQuantity.innerText = num
    fireflyTotal.innerText = num * fireflyPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += (currentTotal - fireflyPrice)
    grandTotal.innerText = intTotal


})

fireflyMinus.addEventListener('click', () => {
    num = parseInt(fireflyQuantity.innerText)
    num -= 1
    fireflyQuantity.innerText = num
    fireflyTotal.innerText = num * fireflyPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += (currentTotal - fireflyPrice)
    grandTotal.innerText = intTotal


})

// Voyager
const voyagerPrice = document.getElementById('voyager-price').dataset.price
const voyagerButton = document.getElementById('voyager-button')
const voyagerAdd = document.getElementById('voyager-increase')
const voyagerMinus = document.getElementById('voyager-decrease')
const voyagerTotal = document.getElementById('voyager-total')
const voyagerQuantity = document.getElementById('voyager-quantity')


voyagerButton.addEventListener('click', () => {
    voyagerQuantity.innerText = 1
    voyagerTotal.innerText = voyagerPrice
    grandTotal.innerText += voyagerPrice;

})

voyagerAdd.addEventListener('click', () => {
    num = parseInt(voyagerQuantity.innerText)
    num += 1
    voyagerQuantity.innerText = num
    voyagerTotal.innerText = num * voyagerPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += (currentTotal - voyagerPrice)
    grandTotal.innerText = intTotal


})

voyagerMinus.addEventListener('click', () => {
    num = parseInt(voyagerQuantity.innerText)
    num -= 1
    voyagerQuantity.innerText = num
    voyagerTotal.innerText = num * voyagerPrice
    let intTotal = parseInt(grandTotal.innerText)
    intTotal += (currentTotal - voyagerPrice)
    grandTotal.innerText = intTotal


})

