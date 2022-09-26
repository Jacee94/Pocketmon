export const battle = {
    initiated: false
}

export function setBattleInitiated(val){
    if(val === true || val === false) battle.initiated = val;
}

export function getBattleInitiated(){
    return battle.initiated;
}