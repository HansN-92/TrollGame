
/* test start */

const page = document.getElementById("spill");
let currentpage = "gameCombatWindow";

updateView();

function updateView(){
    let html = "";

    if(currentpage == "mainMenu") html = mainMenu();
    else if(currentpage == "gameCombatWindow") html = gameCombatWindow();
    else if(currentpage == "combatWonWindow") html = combatWonWindow();
    else if(currentpage == "combatLostWindow") html = combatLostWindow();
    else if(currentpage == "shopWindow") html = shopWindow(); 
    else if(currentpage == "nextRoundSelectWindow") html = nextRoundSelectWindow();
    else if(currentpage == "campRestWindow") html = campRestWindow(); 


    page.innerHTML = html;
}

function changeGameViewWindow(element){
    currentpage = element;
    updateView();
}

function mainMenu(){
    return /*HTML*/ `
        <input id="myInput" onchange="setName()">
        <button id="start" onclick="changeGameViewWindow('gameCombatWindow')">Start</button>

`;
}

function gameCombatWindow(){
    return /*HTML*/ `
        <h2>Velkommen ${playerName}</h2>
        <br>
        <h3>Stage: ${stageNumber}</h3>
        <br>
        <p id="playerHPHUD" class="infoHUD">HP: ${playerHP} <progress id="playerHPBar" value="${playerHP}" max="${maxPlayerHP}"></progress></p>
        <p id="trollHPHUD" class="infoHUD"><img class="img" src="troll.jpg">TrollHP: ${trollHP} <progress id="trollHPBar" value="${trollHP}" max="${trollMAXHP}"></progress></p>
        <p id="coinsHUD" class="infoHUD">Coins: ${coins}</p>
        <p id="maxStaminaHUD" class="infoHUD">Max Stamina: ${maxStamina}</p>
        <p id="staminaHUD" class="infoHUD">Stamina: ${stamina} / Stamina Cost: ${staminaCost} <progress id="playerStaminaBar" value="${stamina}" max="${maxStamina}"></progress></p>
        <p id="weaponHUD" class="infoHUD">Weapon: ${weapon} / Strength: ${strength}</p>
        <p id="berryHUD" class="infoHUD">Berry: ${berries} <button id="berryButton" class="eatFoodButton" onclick="eatFood('Berry', 10)">Eat Berry +10</button></p>
        <p id="meatHUD" class="infoHUD">Meat: ${meats} <button id="meatButton" class="eatFoodButton" onclick="eatMeat('Meat', 25)">Eat Meat +25</button></p>
        <p id="mealHUD" class="infoHUD">Big Meal: ${bigMeals} <button id="mealButton" class="eatFoodButton" onclick="eatMeal('BigMeal', 50)">Eat Big Meal +50</button></p>
        <p id="potionHUD" class="infoHUD">HP Potion: ${healthPotions} <button id="drinkPotion" onclick="useHPPotion()">Drink HP Potion</button></p>

        <button id="attackButton" onclick="hitTroll()">Attack</button>

        <button id="hammerButton" class="weaponPickUp" onclick="pickUpWeapon('Hammer', 20, 3)">Pick up Hammer +20str Stam cost 3</button>
        <button id="axeButton" class="weaponPickUp" onclick="pickUpWeapon('Axe', 50, 5)">Pick up Axe +50str Stam cost 5</button>
        <button id="sawButton" class="weaponPickUp" onclick="pickUpWeapon('Chainsaw', 150, 15)">Pick up Chainsaw +150str Stam cost 15</button>
        `;
}
    
function combatWonWindow(){
    return /*HTML*/ `
        <h2>You Win</h2>
        <br>
        <button class="combatWonWindow" id="shopButton" onclick="changeGameViewWindow('shopWindow')">Shop</button>
        <button class="combatWonWindow" id="nextStageButton" onclick="changeGameViewWindow('nextRoundSelectWindow')">Next</button>
`;
}

function combatLostWindow(){
    return /*HTML*/ `
        lol you ded hahahaa
        <button id="restartButton" onclick="restartGame()">Restart</button> 
`;
}

function shopWindow(){
    return /*HTML*/ `
        <p id="coinsHUD" class="infoHUD">Coins: ${coins}</p>
        <p id="berryHUDShop" class="infoHUDShop">Berry: ${berries}</p>
        <p id="meatHUDShop" class="infoHUDShop">Meat: ${meats}</p>
        <p id="mealHUDShop" class="infoHUDShop">Big Meal: ${bigMeals}</p>
        <p id="potionHUDShop" class="infoHUDShop">HP Potion: ${healthPotions}</p>
        <button class="nextRoundselectWindow" id="campLongRest" onclick="changeGameViewWindow('campRestWindow')">Long Rest</button>
        <br>
        <div id="shopContainer">
            <div id="strRing" style="visibility:${buyButtonStrRing ? 'hidden' : 'visible'};">
            <img class="shopItemsIMG" id="strRingIMG" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/37b45cc0-364f-497c-9a38-fb1c5ba4cda0/dhxabav-b3efc4a4-88ec-4659-98f2-0e2f9a7a5504.png/v1/fill/w_1920,h_1920,q_80,strp/the_celestial_harmonic_ring_dnd_rpg_item_adoptable_by_dissunder_dhxabav-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8zN2I0NWNjMC0zNjRmLTQ5N2MtOWEzOC1mYjFjNWJhNGNkYTAvZGh4YWJhdi1iM2VmYzRhNC04OGVjLTQ2NTktOThmMi0wZTJmOWE3YTU1MDQucG5nIiwiaGVpZ2h0IjoiPD0xOTIwIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiL3dtLzM3YjQ1Y2MwLTM2NGYtNDk3Yy05YTM4LWZiMWM1YmE0Y2RhMC9kaXNzdW5kZXItNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.74_XWG9zXBaO5DnGav82-7SF4g_RygFPYIOxGGFCtDM">
            <p>Ring of Strength</p>
            <button onclick="buyItemStrRing()">BUY</button>
            </div>

            <div id="maxHPArmor" style="visibility:${buyButtonHPArmor ? 'hidden' : 'visible'};">
            <img class="shopItemsIMG" id="maxHPArmorIMG" src="https://www.gmbinder.com/images/VABQk5f.png">
            <p>Max HP Armor</p>
            <button onclick="buyItemArmor()">BUY</button>
            </div>

            <div id="speedBoots" style="visibility:${buyButtonSpeedBoots ? 'hidden' : 'visible'};">
            <img class="shopItemsIMG" id="speedBootsIMG" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhPKkiOLGjGaqJ6Rovtf2RPppJ0INtD81GA&s">
            <p>Boots of Speed</p>
            <button onclick="buyItemBoots()">BUY</button>
            </div>

            <div id="consumablesContainer">
                <label for="chosenItem"></label>
                <select id="chosenItem" onclick="priceSelector(this.value)">
                    <option value="healthPotions">Potion</option>
                    <option value="meats">Raw Meat</option>
                    <option value="bigMeals">Big Meal</option>
                    <option value="berries">Berry</option>
                </select>

                <button onclick="changeSelectedQuantity(true, false)">-</button>
                <button onclick="buyConsumables()">BUY</button>
                <button onclick="changeSelectedQuantity(false, true)">+</button>
                
            </div>
        </div>
`;
}

function nextRoundSelectWindow(){
    return /*HTML*/ `
        <button class="nextRoundselectWindow" id="nextstageroundselect" onclick="nextStage()">Next Stage</button>
        <button class="nextRoundselectWindow" id="lootButton" onclick="afterCombatLoot()">Loot</button>
        <button class="nextRoundselectWindow" id="campLongRest" onclick="changeGameViewWindow('campRestWindow')">Long Rest</button>

`;
}

function campRestWindow(){
    return /*HTML*/ `
    <div class="campRestWindow" id="campRestWindowID">
        <button id="campForageButton" onclick="campActionForage()">Forage</button>
        <button id="campHuntButton" onclick="campActionHunt()">Hunt</button>
        <button id="campCookButton" onclick="campActionCook()">Cook</button>
        <button id="campRestButton" onclick="campRest()">Rest</button>
        <button id="campBrewPotionButton" onclick="campActionBrewPotion()">Brew Potion</button>
        <br>
        <p id="berryHUDCamp" class="infoHUDCamp">Berry: ${berries} </p>
        <p id="meatHUDCamp" class="infoHUDCamp">Meat: ${meats} </p>
        <p id="mealHUDCamp" class="infoHUDCamp">Big Meal: ${bigMeals} </p>
        <p id="potionHUDCamp" class="infoHUDCamp">HP Potion: ${healthPotions} </p>
        <p id="playerHPHUDCamp" class="infoHUDCamp">HP: ${playerHP} </p>
        <p id="playerHPHUDCamp" class="infoHUDCamp">Camp Actions: ${playerCampActions} </p>
        </div>
`;
}

/* test end*/
