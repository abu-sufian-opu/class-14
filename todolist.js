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