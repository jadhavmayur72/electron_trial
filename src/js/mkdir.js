const fs= require('fs')

// fs.mkdir('C:/mkdir','hello')
// console.log('created the directory')

const folderPath='C:/mkdir/'

setInterval(()=>{
let date=new Date()
let year= date.getFullYear()
let month= date.getMonth()+1
let day= date.getDate()
let hrs=date.getHours()
let min= date.getMinutes()

let folderName=year+"_"+month+"_"+day+"_"+hrs+"_"+min
// console.log(year+"-"+month+"-"+day+"--"+hrs+"__"+min)
   
        fs.mkdir(`${folderPath}${folderName}`,function(err){
            if(err){
                console.log('folder already exists ')
            }
            else{
                console.log('folder created with name',`${folderName}`)
            }
        })

    
  

},30000)

