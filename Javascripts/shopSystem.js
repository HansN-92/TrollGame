function buyItemStrRing(){
    if(coins >= 1){
        strength += 10;
        coins -=1;
        buyButtonStrRing = true;
        updateView();
        
    }
}

function buyItemArmor(){
    if(coins >= 1){
       maxPlayerHP *= 2;
       coins -=1;
       buyButtonHPArmor = true;
       updateView();
    }
}

function buyItemBoots(){
    if(coins >= 1){
        maxStamina += 25;
        coins -=1;
        buyButtonSpeedBoots = true;
        updateView();
    }
}

function buyConsumables(){
    if(coins >= totalPrice){
        coins -= totalPrice;

        if(chosenItem == healthPotions){
            healthPotions += buyConsumablesQuantity
        }
        if(chosenItem == meats){
            meats += buyConsumablesQuantity
        }
        if(chosenItem == bigMeals){
            bigMeals += buyConsumablesQuantity
        }
        if(chosenItem == berries){
            berries += buyConsumablesQuantity
        }

        buyConsumablesQuantity = 0;
        totalPriceCheck();
        updateView();
    }
}

function changeSelectedQuantity(minus, plus){
    if(minus && buyConsumablesQuantity > 0){
        buyConsumablesQuantity -= 1;
    }
    if(plus){
    buyConsumablesQuantity += 1;
    }
    totalPriceCheck();
    
}



function totalPriceCheck(){
totalPrice = consumablePrice * buyConsumablesQuantity;
document.querySelector('label').innerHTML = `Item / Quantity ${buyConsumablesQuantity} Total Price ${totalPrice} `
} 


function priceSelector(newValue){
    if(newValue == "healthPotions"){
        consumablePrice = potionPrice;
        chosenItem = healthPotions;
    }

    else if(newValue == "meats"){
        consumablePrice = rawMeatPrice;
        chosenItem = meats;
    }

    else if(newValue == "bigMeals"){
        consumablePrice = bigMealPrice;
        chosenItem = bigMeals;
    }

    else if(newValue == "berries"){
        consumablePrice = berryPrice;
        chosenItem = berries;
    }
    totalPriceCheck();
}
