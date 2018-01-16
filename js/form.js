var clientInfo={
    address:{
        country: 'Afhganistan'

    },
    contact:{

    }

}


function formValidation(){
    
event.preventDefault();

    _addressObj = {
        country: document.getElementById("selection_country").value,
        zip: document.getElementById("zip").value,
        state: document.getElementById("state").value,
        city: document.getElementById("selection_city").value,
        ad1: document.getElementById("ad1").value,
        ad2: document.getElementById("ad2").value
    };

    addressValidation(_addressObj)
    console.log(_addressObj);

}

function addressValidation(_addressObj){

}

function contactValidation( _contactObj){

}

