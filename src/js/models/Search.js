import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const key = '2b34711c21ca4860b43080751d721fda';
        try{
            const res = await axios(`${proxy}api.openweathermap.org/data/2.5/forecast?q=${this.query}&appid=${key}`);
            this.result = `${res.data.list[1].weather[0].main} and ${res.data.list[1].weather[0].description}`;
            console.log(this.result);
        }catch(error){
            alert(error);
        }
    
    }
}
const ins = new Search("London,uk");
console.log(ins.getResults());