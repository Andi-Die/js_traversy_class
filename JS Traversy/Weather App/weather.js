class Weather {
    constructor(city) {
        this.apiKey = '1e748c3a8540c7b93a6075039bad3d49';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather () {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // change weather location
    changeLocation(city) {
        this.city = city;
    }
}