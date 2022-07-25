///////////////////////////////////////////HAMBURBER MENU////////////////////////////////////////////////////////
const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')
const navBar = document.querySelector('nav')


document.querySelector('.openMenu').addEventListener('click', show);
document.querySelector('.closeMenu').addEventListener('click', close);

function show(){
    navBar.style.flexDirection = 'column'
    mainMenu.style.display = 'flex';
    openMenu.style.display = 'none';
    document.querySelector('.firstli').addEventListener('click', close);
    document.querySelector('.secondli').addEventListener('click', close);
}
function close(){
    navBar.style.flexDirection = 'row'
    mainMenu.style.display = "none";
    openMenu.style.display = "flex";
}


/////////////////////////////////////CALCULATION/////////////////////////////////////////////////////////

document.getElementById('calculate').addEventListener('click', lastDate)
document.getElementById('clear').addEventListener('click', refresh)


function lastDate(startDate, currentInventory, weeklyConsumption, transTime, leadTime){
    var startDate = document.getElementById('startDate').value
    var currentInventory = +document.getElementById('currentInventory').value
    var weeklyConsumption = +document.getElementById('weeklyConsumption').value
    var transTime = +document.getElementById('transTime').value
    var leadTime = +document.getElementById('leadTime').value
   
    startDate = `${startDate.slice(5, 7)}/${startDate.slice(8, 10)}/${startDate.slice(0, 4)}`
    console.log(startDate)

/////////////////////////////////////ORDER DATE FORMULA/////////////////////////////////////////////////////////
    let dailyConsumption = Math.ceil(weeklyConsumption / 7)
    let daysTillZero = currentInventory / dailyConsumption
    


    let daysForOrder = daysTillZero - (leadTime + transTime)
    let orderDate = new Date(startDate)
    orderDate.setDate(orderDate.getDate() + daysForOrder)
    let deDate = orderDate.toString().slice(0, 15)

    document.getElementById('last-day').innerText = deDate

///////////////////////////////////////INVENTORY TO ZERO FORMULA///////////////////////////////////////////////////
    
    let date = new Date(startDate)
    date.setDate(date.getDate() + daysTillZero )
    let theDate = date.toString().slice(0, 15)

    document.getElementById('at-zero').innerText = theDate

}

////////////////////////////////////////////////////REFRESH FUNCTION///////////////////////////////////////////////////
function refresh(){
    window.location.reload()
}


    //SHIPMENT SHOULD ARRIVE FORMULA 
    // let shipDate = new Date(startDate)
    // shipDate.setDate(shipDate.getDate() + (daysTillZero - 2))
    // let otherDate = shipDate.toString().slice(0, 15)

  
    // console.log(`you will need to order by 
    // ${otherDate} SHIPMENT NEEDS TO ARRIVE`)