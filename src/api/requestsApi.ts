

const API_KEY = '566f18589bd36af617fc2e080929b406';

export const getWeatherThisDay = (id: number | null = 524894) => { //moscowIdFromAPI
    return fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => data)
}
