const salon={
    name:'The Fashion Pet',
    address:{
        city:'Tijuana',
        street:'Av. Univesidad',
        number:'262-k'
    },
    hours:{
        open:'9:00 am',
        close:'5:00 pm'
    },
    pets:[]
}

var {name,address:{city,street,number},hours:{open,close}}=salon; 

function displayInfo(){
    document.getElementById('footer-info').innerHTML=`
    <p> ${name}</p>
    <p> ${street} ${number}, ${city}</p>
    <p> It opens from ${open} to ${close}</p>
    `;
}

class Pet{
    constructor(name,age,gender,breed,service,owner,phone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.price=0;
    }
}

//create register function


// get the value from inputs and store them in vars
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');


function register(){
    if(txtName.value !="" && txtAge.value !="" && txtGender.value!=""){
        // create a generic thePet
        var thePet=new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value);
        console.log(thePet);
        //push thePet into the array
        salon.pets.push(thePet);
        displayTable(thePet);
        console.log(salon.pets);
        clear();
    }else{
        alert("Hey you have to complete all the fields");
    }
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

function profitCalculation(){
    var sum=0;
    for(var i=0;i<salon.pets.length;i++){
        sum=sum+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits: $${sum}`;
}



function init(){
    
    var scooby=new Pet("Scooby",50,"Male","Dane","full","Shaggy","555-555-555");
    var scrapy=new Pet("Scrappy",40,"Male","Dane","shower","Shaggy","555-555-555");
    salon.pets.push(scooby);
    salon.pets.push(scrapy);
    // create pets 
    displayTable(scooby);
    displayTable(scrapy);
    profitCalculation();

    // hook events
}

window.onload=init;