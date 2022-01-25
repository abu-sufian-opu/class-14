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







