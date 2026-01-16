import 'dotenv/config';
import fs from 'fs/promises';

import express from 'express';


const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));

app.use('/api/songs', express.static('song'));
//     ('/api/songs') is not url of your local 
//     folder this is for where your file can access
//     or will find. ==more==> script.js line 15  




// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });








async function songNum() {
  try {
    const data = await fs.readFile('song.json', 'utf8');
    const songObj = JSON.parse(data);
    return songObj.length;
  } catch (err) {
    console.error('Error reading file:', err);
    throw err;
  }
}









async function songList() {
  const songCount = await songNum(); // total songs
  const limit = Math.min(30, songCount);

  const set = new Set();

  while (set.size < limit) {
    const randomNum = Math.floor(Math.random() * songCount);
    set.add(randomNum);
  }

  // console.log(set);
  return [...set];
}


// console.log(await songList());



async function showSongs(list) {
  try {
    const data=await fs.readFile('song.json', 'utf8')
    const songObj = JSON.parse(data);
    const songs = list.map(index => songObj[index])
    // console.log(songs);
    return songs;
  }
  catch(err){
    console.log(err);
  }

  
}



// (async () => {
//   const indices = await songList();
//   await showSongs(indices);
// })();








app.use('/api/songs', async (req, res) => {
  try {
    const songs = await showSongs(await songList());
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load songs' });
  }
});















































app.listen(port, () => {
  console.log(`Server is running on port:http://localhost:${port}`);
});









































//------------------------------------short cut-------------------------------------------


// async function getRandomSongs() {
//   const data = await fs.readFile('song.json', 'utf8');
//   const songs = JSON.parse(data);

//   const limit = Math.min(30, songs.length);
//   const set = new Set();

//   while (set.size < limit) {
//     set.add(Math.floor(Math.random() * songs.length));
//   }

//   return [...set].map(i => songs[i]);
// }































// async function songNum() {
//   try{

//   return await fs.readFile('song.json', 'utf8')
    
//   let songObj = JSON.parse(data);
//   let songLen=songObj.length;
//     console.log(songLen);
//   return songObj.length;
    
//   }
//   catch(err){
//     console.log(err);
//   }

// }











// async function songList() {
  
  
//   const songCount = await songNum(); // total songs
//   const limit = songCount > 30 ? 30 : songCount;
//   const set = new Set();
//   let randomNum=Math.floor(Math.random()*songNum());
//   while (set.size < limit) {
//     set.add(randomNum);
//   }
//   console.log(set);
//   return[...set];
// }



// await songList();
