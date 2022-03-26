/**
 *                         <input id="firstname" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Last name</label>
                        <input id="lastname" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Email</label>
                        <input id="email" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-3">
                        <label for="">Address</label>
                        <input id="address"  type="text" class="form-control">
 */
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var address = document.getElementById('address');



var form = document.getElementById('user-form');


firstname.addEventListener('keyup',function(e){
    const val = e.target.value;

    if (val === '') {
        firstname.classList= 'form-control is-invalid';
    } else {
        firstname.classList= 'form-control is-valid';
    }
})

lastname.addEventListener('keyup',function(e){
    const val = e.target.value;

    if (val === '') {
        lastname.classList= 'form-control is-invalid';
    } else {
        lastname.classList= 'form-control is-valid';
    }
})

email.addEventListener('keyup',function(e){
    const val = e.target.value;

    if (val === '') {
        email.classList= 'form-control is-invalid';
    } else {
        // check if it is email

        if ( (val.indexOf('@') != -1)  && val.indexOf('.') != -1 ) {
            email.classList= 'form-control is-valid';
        }else{
            email.classList= 'form-control is-invalid';
        }
    }
})

address.addEventListener('keyup',function(e){
    const val = e.target.value;

    if (val === '') {
        address.classList= 'form-control is-invalid';
    } else {
        address.classList= 'form-control is-valid';
    }
})

form.addEventListener('submit',function(e){
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const addressValue = address.value;

            
    if ( firstnameValue === '' || lastnameValue === '' || emailValue=== '' || addressValue===''  ) {
        e.preventDefault(); 
    } 




    if (firstnameValue === '') {
        firstname.classList= firstname.classList + ' is-invalid';
    }else{
        firstname.classList= 'form-control is-valid';
    }


    if (lastnameValue === '') {
        lastname.classList= lastname.classList + ' is-invalid';
    }else{
        lastname.classList= 'form-control is-valid';
    }


    if (addressValue === '') {
        address.classList= address.classList + ' is-invalid';
    }else{
        address.classList= 'form-control is-valid';
    }


    if (emailValue === '') {
        email.classList= email.classList + ' is-invalid';
    }else{
        email.classList= 'form-control is-valid';
    }




    
})