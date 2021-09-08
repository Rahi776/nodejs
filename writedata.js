/*--Write data in a file by taking input from user*/

const prompt=require('prompt-sync')();
const name = prompt('what is your Name?');
const FatherName= prompt ('what is your father Name?');
const DateofBirth=prompt('what is your DoB?');
const Address=prompt('whats is your current Address?');
const Qualification=prompt('what is your Qualification?');


var fs=require('fs');

var mydata={
    name,
    FatherName,
    DateofBirth,
    Address,
    Qualification    
}
var data=JSON.stringify(mydata);

fs.writeFile('Mydata.txt',data,function(err){
    if (err){
        console.log('There has been an error saving your configutration data');
        console.log(err.message);
        return;
    }
    console.log('configuration saved successfully')
    
});
