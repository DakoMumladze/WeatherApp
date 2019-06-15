import Search from './models/Search';
import * as searchView from './views/base';


let searchCity = async function () {
    let searchValue = searchView.baseSelectors.searchForm.value.trim();
    const ins = Search(searchValue);
    let result = await ins.getResults();
    console.log(result, 8888);
    if (searchValue == "") {
        result = `
        <span class="color-red">Please enter valid city name</span>
        `;
    } else {
        let results = `
        <li class="result-item">${result}</li>
    `;
        searchView.baseSelectors.resultsContainer.insertAdjacentHTML('beforeend', results);
    }

}

searchView.baseSelectors.searchBtn.addEventListener('click', searchCity);