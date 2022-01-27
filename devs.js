//get elements

const devs_form = document.getElementById('devs_form');
const devs_area = document.getElementById('devs_area');


// Devs form submit 
devs_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let title = this.querySelector('input[name="title"]');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let gender = this.querySelector('input[name="gender"]:checked');
    let photo = this.querySelector('input[name="photo"]');
    let facebook = this.querySelector('input[name="facebook"]');
    let twitter = this.querySelector('input[name="twitter"]');
    let youtube = this.querySelector('input[name="youtube"]');
    let gmail = this.querySelector('input[name="gmail"]');


    let skills_arr = [];

    for (let i = 0; i < skill.length; i++) {

        skills_arr.push(skill[i].value);
        
    }

    let data_arr;

    if( dataGet('devs') ){
        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    }

    data_arr.push({

        name : name.value,
        title : title.value,
        photo : photo.value,
        facebook : facebook.value,
        youtube : youtube.value,
        twitter : twitter.value,
        gmail : gmail.value,
        gender : gender.value,
        skills : skills_arr
    });

    dataSend('devs', data_arr);
    
    allDevs();

    this.querySelector('input[name="name"]').value = "";
    this.querySelector('input[name="title"]').value = "";
    this.querySelectorAll('input[name="skill"]:checked').value = "";
    this.querySelector('input[name="gender"]:checked').value = "";
    this.querySelector('input[name="photo"]').value = "";
    this.querySelector('input[name="facebook"]').value = "";
    this.querySelector('input[name="twitter"]').value = "";
    this.querySelector('input[name="instagram"]').value = "";
    this.querySelector('input[name="gmail"]').value = "";
    
});

allDevs();

function allDevs(){

    let all_devs = dataGet('devs');

    let data = '';

    all_devs.map(d => {
        
        let lists = '';

        d.skills.map( list => {
            lists += '<li class="list-group-item"> '+ list +' </li>';
            
        })

        data += `

        <div class="col-md-4 my-3">
                <div class="card">
                    <img style="object-fit: cover;" src="${d.photo}" alt="">
                    <div class="card-header text-center">
                        <h2>${d.name}</h2>
                        <p>${d.title}</p>
                        <span>${d.gender}</span>
                    </div>
                    <div class="card-body devs-card">
                        <h3>Skill</h3>
                        <ul class="list-group">
                        ${lists}
                        </ul>
                    </div>

                    <div class="card-footer text-center h-100">

                    <ul class="social-icon d-flex justify-content-center">
                        <li>${ d.facebook == "" ? "" : '<a href=" '+ d.facebook +' "><i class="fab fa-facebook"></i></a>'}</li>
                        <li>${ d.twitter == "" ? "" : '<a href=" '+ d.twitter +' "><i class="fab fa-twitter-square"></i></a>'}</li>
                        <li>${ d.youtube == "" ? "" : '<a href=" '+ d.youtube +' "><i class="fab fa-youtube"></i></a>'}</li>
                        <li>${ d.gmail == "" ? "" : '<a href=" '+ d.gmail +' "><i class="fas fa-envelope"></i></a>'}</li>
                    </ul>
                                                                                            
                    </div>
                    
                </div>
        </div>
        `;
        
    });

    devs_area.innerHTML = data;
};