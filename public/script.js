
function song(path, image, tittle) {
    let songDiv = document.createElement('div')
    songDiv.style.width = "150px";
    songDiv.style.height = "auto";
    songDiv.style.border = "2px solid #302b2bff";
    songDiv.style.background = "#302b2bff";
    songDiv.style.borderRadius = "10px";
    songDiv.style.padding = "5px";
    songDiv.style.margin = "10px";



    let thumbnail = document.createElement('img');
    thumbnail.src = `/api/songs/${image}`;
    thumbnail.alt = "";
    thumbnail.style.width = "150px";
    thumbnail.style.height = "auto";



    let tittleDiv = document.createElement('div');
    tittleDiv.innerHTML = tittle;
    tittleDiv.style.textAlign = "center";



    songDiv.appendChild(thumbnail);
    songDiv.appendChild(tittleDiv);
    document.getElementById('album').appendChild(songDiv);












}


fetch('/api/songs')
  .then(res => res.json())
  .then(data => {
    // console.log(data);

    data.forEach(songItem => {
      song(songItem.path, songItem.image, songItem.tittle);
    });
  })
  .catch(err => console.error(err));


