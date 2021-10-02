import React,{useState, useEffect} from "react";

function WeatherFetch() {
    const key = '3624efc9f5e447e48e0114133210110%20';

    const [location, setLocation] = useState('');
    const [feelsLike,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [iconID,setIconID] = useState('');

    useEffect(()=> {
        fetch('http://api.weatherapi.com/v1/current.json?key='+key+'&q=London')
          .then((res)=>res.json())
          .then(data=>{
            setFeelsLike(data.current.feelslike_c);
            setMainTemp(data.current.temp_c);
            setDescription(data.current.condition.text);
            setIconID(data.current.condition.icon);
            setLocation(data.location);
            console.log(data);
          })
    },[]);

return(<div>
    {
        location !== '' ? 
            <div>
              <h1>{location.name} current weather</h1>
              <p>Local Time : {location.localtime}</p>
            </div>
        : <p>Loading</p>
    }
    <div className='info'>
        <div className='weatherInfo'>
            {
                description !== '' ? 
                    <h2>{description}</h2>
                : <p>Loading</p>
            }
            {
                iconID !== '' ? 
                    <img src={iconID}/>
                : <p>Loading</p>
            }
        </div>
        <div className='temp'>
            {
                mainTemp !== '' ? 
                    <h2>temperature: {mainTemp} c°</h2>
                : <p>Loading</p>
            }
            {
                feelsLike !== '' ? 
                    <h2>Feels like {feelsLike} c°</h2>
                : <p>Loading</p>
            }
        </div>
    </div>
</div>)
}
export default WeatherFetch;