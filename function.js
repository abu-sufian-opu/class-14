function zeroAdd (time) {
    return time < 10 ? '0' + time : time;
};


function monthCal () {

    let month = new Date().getMonth();
    if( month == 0){
        return 31;
    }else if( month == 1){
        return 28;
    }else if( month == 2){
        return 31;
    }else if( month == 3){
        return 30;
    }else if( month == 4){
        return 31;
    }else if( month == 5){
        return 30;
    }else if( month == 6){
        return 31;
    }else if( month == 7){
        return 31;
    }else if( month == 8){
        return 30;
    }else if( month == 9){
        return 31;
    }else if( month == 10){
        return 30;
    }else if( month == 11){
        return 31;
    }
};


function ageonMsg (age, gender){

    if( age >= 0 && age <= 12){
        if( gender == 'male'){
            return `Tumi Akhono Babu`;
        }else if( gender == 'female' ){
            return `Tumi Akhono Baby`;
        }
    }else if( age >= 13 && age <= 21){
        if( gender == 'male'){
            return `Tumi Akhon Kumar`;
        }else if( gender == 'female' ){
            return `Tumi Akhon Kumari`;
        }
    }else if( age >= 22 && age <= 35){
        if( gender == 'male'){
            return `Tumi Akhon Jubok`;
        }else if( gender == 'female' ){
            return `Tumi Akhon Juboti`;
        }
    }else if( age >= 36 && age <= 50){
        if( gender == 'male'){
            return `Tumi Akhon Uncle`;
        }else if( gender == 'female' ){
            return `Tumi Akhon Aunty`;
        }
    }else if( age >= 36 && age <= 50){
        if( gender == 'male'){
            return `Tumi Akhon Dadu`;
        }else if( gender == 'female' ){
            return `Tumi Akhon Dadi`;
        }
    }
};
console.log(ageonMsg(18,'female'));

/**
 * Sata Send to Ls
 * @param {*} key 
 * @param {*} arr 
 * @returns 
 */
function dataSend( key, arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);
    return true;

};

/**
 * Data Get from Ls
 * @param {*} key 
 * @returns 
 */
function dataGet (key){

    let data = localStorage.getItem(key);
    
    return data ? JSON.parse(data) : false;

};






