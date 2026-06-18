function trollMainAttack(){
    playerHP -= trollDMG;
    youLost();
    updateView();
}

function trollSpecialAttack(){
    if(trollHP <= 0.1 * trollMAXHP && trollSpecialAction <=1){
        playerHP -= trollDMG * 2;
        trollSpecialAction -= 1;
        }
    youLost();
    updateView();
}

function trollHPRegen(){
    if(trollHP <= 0.5 * trollMAXHP){
        trollHP += 0.01 * trollMAXHP;
    }
        else if(trollHP <= 0.25 * trollMAXHP){
            trollHP += 0.1 * trollMAXHP;
        }
    updateView();
}