function youWin(){
    changeGameViewWindow("combatWonWindow");
    coins += 20 + 10 * stageNumber;
    updateView();
    
}

function setName(){
    playerName = document.getElementById("myInput").value;
    console.log(playerName);
    /* updateView(); trenger den kalles opp?? ser ikke sånn ut */
} 

function nextStage(){
    changeGameViewWindow("gameCombatWindow");
    stageNumber += 1;
    strength += stageNumber * strengthStageGrowth;
    trollMAXHP += stageNumber * trollHPStageGrowth;
    trollHP = trollMAXHP;
    maxPlayerHP += stageNumber * playerHPStageGrowth;
    trollDMG += stageNumber * trollDMGStageGrowth;
    playerCampActions = 3;
    updateView();
}

function youLost(){
    if(playerHP <= 0){
        changeGameViewWindow("combatLostWindow");
        updateView();
    }
}

function campActionForage(){
    if(playerCampActions >= 1){
        playerCampActions -= 1;
        berries += Math.floor(Math.random() * 10) +1;
        updateView();
    }
}
function campActionHunt(){
    if(playerCampActions >= 1){
        playerCampActions -= 1;
        meats += Math.floor(Math.random() * 3) +1;
        updateView();
    }
}
function campActionCook(){
    if(playerCampActions >= 1 && meats >= 1){
        playerCampActions -= 1;
        meats -= 1;
        bigMeals += 1;
        updateView();
    }
}
function campActionBrewPotion(){
    if(playerCampActions >= 1 && berries >= 3 && meats >= 1){
        playerCampActions -= 1;
        berries -= 3;
        meats -= 1;
        healthPotions += 1;
        updateView();
    }

}

function campRest(){
    nextStage();
    playerHP = maxPlayerHP;
    stamina = maxStamina;
    updateView();
}

function afterCombatLoot(){
    
}


function restartGame(){
playerName = "";
trollHP = 1000;
trollMAXHP = 1000;
trollHPStageGrowth = 100;
trollDMG = 50;
trollDMGStageGrowth = 5;
trollSpecialAction = 1;
stamina = 50;
coins = 0;
strength = 10;
weapon = "";
staminaCost = 1;
berries = 10;
meats = 5;
bigMeals = 2;
maxStamina = 50;
weaponStrengthBonus = 0;
stageNumber = 1;
strengthStageGrowth = 1;
playerHP = 500;
maxPlayerHP = 500;
playerHPStageGrowth = 10;
playerCampActions = 3;
buyButtonStrRing = false;
buyButtonHPArmor = false;
buyButtonSpeedBoots = false;
healthPotions = 1;

    changeGameViewWindow("mainMenu");
    updateView();
     
}

