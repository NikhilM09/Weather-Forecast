async function getData()
{  
    var city=document.querySelector("#userdata").value;
    result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3e5a09fb0f011164bcd3582c682192c&units=metric`);
    if (result.status==200)
    {
    response=await result.json();
    console.log(response);
    showWeather(response);
    }
    else{
    alert("Please Enter Valid city");   
    }
}
function showWeather(data){
    document.querySelector(".container-inner").style.background="linear-gradient(to right, rgba(218, 210, 153,0.5), rgba(176, 218, 185,0.5))";  
    document.querySelector(".results").style.display="block";
    document.querySelector("#city").innerHTML=data.name+"<sup>"+data.sys.country+"</sup>";
    document.querySelector("#temp").innerHTML=data.main.temp+"<sup>o</sup><span>c</span>";
    document.querySelector("#max").innerHTML="Max : "+data.main.temp_max+"<sup>o</sup><span>c</span>";
    document.querySelector("#min").innerHTML="Min : "+data.main.temp_min+"<sup>o</sup><span>c</span>";
    document.querySelector("#weather").innerHTML=data.weather[0].description;
    document.querySelector("#symbol").src="css/Images/"+data.weather[0].description+".png";
    document.querySelector("#symbol").style.display="block";
}
