import 'dotenv/config';
import fs from 'fs/promises';

import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });





let songNum=async function(){

const data =await fs.readFile('song.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
//   console.log('File contents:', data);
  let songObj=JSON.parse(data);
  // let songLen=songObj.length;

    return songObj.length;



})

}










async function random(min,max){

    let songNum = await songNum();
    

    if (songNum>30){

        
        let set =new Set();
        while (set.size<30){
            let randomNum=Math.floor(Math.random()*(max-min+1)+min);
            set.add(randomNum);
        }
        // console.log(set);
        
    }

    else{
        let set =new Set();
        while (set.size<songNum()){
        let randomNum=Math.floor(Math.random()*(max-min+1)+min);
        set.add(randomNum);
        
      }
    }
    return [...set];
    
};




// console.log(random(0,songNum()));

random(1,100).then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error('Error:',error);
})


















fs.readFile('song.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
//   console.log('File contents:', data);
//   let songObj=JSON.parse(data);
//     console.log(songObj.length);



})























































app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
});