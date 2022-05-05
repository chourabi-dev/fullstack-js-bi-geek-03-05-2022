exports.getCurrentYear = function(){
    const year = new Date().getFullYear();


    return year;
}

exports.getCurrentMonth = function(){
    const year = new Date().getMonth()+1;


    return year;
}

exports.getCurrentDate = function(){
    const year = new Date().getDate();


    return year;
}