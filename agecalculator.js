//Age Calculator

const sbmtbtn = document.getElementById('sbmtbtn');
const calculator = document.querySelector('.calculator');
const agecall = document.querySelector('#agecall');


agecall.addEventListener('submit', ageCal)

function ageCal(e){
     e.preventDefault();

    const userName = document.querySelector('#name').value;
    const birthDate = document.querySelector('#birthdate').value;
    const gender = document.querySelector('input[type="radio"]:checked').value;
     

    const crntTime = new Date().getTime();
    const birthTime = new Date(birthDate).getTime();

    let timeDiff = Math.floor(Math.abs(crntTime - birthTime));

    let totalSec = Math.floor(timeDiff / 1000);
    let totalMin = Math.floor(totalSec / 60);
    let totalHours = Math.floor(totalMin / 60);
    let totalDays = Math.floor(totalHours / 24);
    let totalMonths = Math.floor(totalDays / monthCal());
    let totalYears = Math.floor(totalMonths / 12);

    let ageMonth = totalMonths - (totalYears * 12);
    let ageDays = totalDays - (totalYears * 12 * monthCal()) - (ageMonth * monthCal());
    

    calculator.innerHTML = `Hi ${gender == 'male' ? 'Mr.' : 'Mrs.'} ${userName}  Your age is ${totalYears} ${totalYears <= 1 ? 'Year' : 'Years'} ${ageMonth} ${ageMonth <= 1 ? 'Month' : 'Months'} ${ageDays} ${ageDays <= 1 ? 'Day' : 'Days'} <br> <span>${ageonMsg(totalYears, gender)}</span>`;
    

};

