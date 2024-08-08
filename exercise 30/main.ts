let userName=["Nayab","Wajid","Bilal","Areeba"]
userName.forEach(oneUser =>{
    if(oneUser==="Admin"){
        console.log(`Hello ${oneUser},would you like to see a status report?.`);
        
    }else{
        console.log(`Helllo ${userName}, thankyou for logging again`)
    }
      
})