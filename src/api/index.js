
export const getWeatherDataForCity= async(city)=>{
    const baseURL =`https://api.weatherapi.com/v1/current.json?key=a9e41a5c2d114bdab9d122143251406&q=${city}&aqi=yes`
    const response =await fetch(baseURL)
    return await response.json();
};