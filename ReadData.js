/*-- Read data from Mydata--*/
const fs=require('fs');
fs.readFile('/media/rehmat/My data/Networking and Cloudcomputing/Mydata.txt','utf-8',(err,data)=>{
    if(err){
        console.error(err)
        return;
    }
    console.log(data);
});
