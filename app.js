 let cit= document.getElementById('cit');
 let api='https://api.weatherapi.com/v1/current.json?key=5cf2b00c80444766967171544240309&q=';
 let weatherPic=document.getElementById('img1');
 



 function search(){
   fetch(api+cit.value).then((data)=>{
        return  data.json();
    }).then((data)=>{
       document.getElementById('temp').innerText=data.current.temp_c+'°C';
       document.getElementById('humidity').innerText=data.current.humidity+'%';
       document.getElementById('city').innerText=data.location.name;
       document.getElementById('wind').innerText=data.current.wind_mph+'km/h';
        if(data.current.condition.text == 'Mist'){
            weatherPic.src="images/mist.png";
        }
        else if(data.current.condition.text == 'Sunny'){
            weatherPic.src="images/clear.png";
        }
        else if(data.current.condition.text == 'Clouds'){
          weatherPic.src="images/clouds.png"
        }
        else if(data.current.condition.text == Rain){
            weatherPic.src="images/rain.png";
        }
       
    })
    cit.value='';
 }
 