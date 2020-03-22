function sum(numberSet: number[]){
    return numberSet.reduce((a,b)=>a+b, 0);
}

function avg(numberSet: number[]){
    return sum(numberSet)/numberSet.length;
}

function unique(numberSet: number[]){
    return numberSet.filter((v,i)=>numberSet.indexOf(v)===i);
}

function random(from: number, to: number, isInt?: boolean) {
    const num = Math.random()*(to - from) + from;
    return isInt? Math.floor(num): num;
}
