//Fiver Order Counter
const fiver_order = document.querySelector('#fiver-order');
const output = document.querySelector('.output');


fiver_order.addEventListener('submit', function(e){
    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    setInterval( () => {
        let start_time = new Date();
        let end_time = new Date(date + " " + time);

        let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

        let total_sec = Math.floor(time_diff / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hours = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hours / 24);
        let total_month = Math.floor(total_day / 30);

        let day = total_day - (total_month * 30);
        let hours = total_hours - (total_month * 30 * 24) - (day * 24);
        let min = total_min - (total_month * 30 * 24 * 60) - (day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_month * 30 * 24 * 60 * 60) - (day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

        output.innerHTML = ` ${ zeroAdd(total_month) } : ${ zeroAdd(day) } : ${ zeroAdd(hours) } : ${ zeroAdd(min) } : ${ zeroAdd(sec) } `;
    }, 1000);

    
});


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
    

    calculator.innerHTML = `Hi ${userName} Your age is ${totalYears} ${totalYears <= 1 ? 'Year' : 'Years'} ${ageMonth} ${ageMonth <= 1 ? 'Month' : 'Months'} ${ageDays} ${ageDays <= 1 ? 'Day' : 'Days'}`;
    

};



//To Do Form

const todo_form = document.getElementById('todo-form');
const list = document.getElementById('list');



todo_form.addEventListener('submit', function(e){
    e.preventDefault();

    let do_name = this.querySelector('input[name="do-name"]').value;
    let opt = this.querySelector('select[name="opt"]').value;

    if( do_name == '' || opt == ''){

        alert ('All fields are requared');

    }else{
        let li = document.createElement('li');
    li.classList.add ("list-group-item");
    li.classList.add ("d-flex");
    li.classList.add ("justify-content-between");
    
    
    let closebtn = document.createElement('button');
    closebtn.classList.add ("btn-close");
    closebtn.classList.add ("btn-sm");
    
    let dotext = document.createTextNode(do_name);
    


    li.appendChild(closebtn);
    li.insertBefore(dotext, closebtn)
    list.appendChild(li);

    this.querySelector('input[name="do-name"]').value = '';
    this.querySelector('select[name="opt"]').value = '';

    closebtn.addEventListener('click', function(){

        this.parentElement.remove();
    })

    }
    

    
});