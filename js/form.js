var clientInfo={
    address:{},
    contact:{}
}

function formValidation(){

if (addressValidation() && contactValidation()){
    console.log("Formulario ok");
} else{
    console.log("Please, fill in all input fields.");
    }
}

function addressValidation(){
        ret = false;
        addressObj = {
        country: document.getElementById("selection_country").value,
        zip: document.getElementById("zip").value,
        state: document.getElementById("state").value,
        city: document.getElementById("selection_city").value,
        ad1: document.getElementById("ad1").value,
        ad2: document.getElementById("ad2").value
    };


        if(addressObj.country=='0'){
            return false;
        }else if(addressObj.city=='0'){
return false;
        }
         else if(addressObj.zip.trim().length==0){
return false;
        } else if(addressObj.state.length==0){
return false;
        }else if(addressObj.ad1.trim().length==0){
return false;
        }else if(addressObj.ad2.trim().length==0){
return false;
    } else{
        return true;
    }
}



function contactValidation(){
    var cont = false
    contactObj={
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
    };

if(contactObj.name.trim().length==0){
    return false;
} else if(contactObj.lastname.trim().length==0){
    return false;
} else if(contactObj.email.trim().length==0){
    return false;
}else if(contactObj.phone.trim().length==0){
    return false;
} else{
        return true;
}
}

