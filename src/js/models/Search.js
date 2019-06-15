import axios from 'axios';

class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = '2b34711c21ca4860b43080751d721fda';
        try{
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${key}`);
            this.result = `${res.data.list[1].weather[0].main} and ${res.data.list[1].weather[0].description}`;
            // console.log(1232,this.result);

            return this.result;
        }catch(error){
            return this.result = `
            <span class="color-red">Please enter valid city name</span>
            `;
        }
    
    }
}

export default (query) => new Search(query)
