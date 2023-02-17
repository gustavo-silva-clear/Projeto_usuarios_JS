var nome = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name = gender]:checked")
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var inputFile = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#admin");
console.log(gender);

var fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field , index){


    if(field.name == 'gender'){

        user[field.name] = field.value;
    }
 
    else {

        user[field.name] = field.value;

    }

});
 

