import Search from './models/Search';
import * as baseView from './views/base';

let searchCity = async function () {
    let searchValue = baseView.baseSelectors.searchForm.value.trim();
    const ins = Search(searchValue);
    let result = await ins.getResults();
    baseView.baseSelectors.resultsContainer.innerHTML = '';
    if (searchValue !== "") {
        let results = `
        <li class="result-item">${result}</li>
    `;
        baseView.baseSelectors.resultsContainer.insertAdjacentHTML('beforeend', results);
    }
    baseView.baseSelectors.searchForm.value = " ";
}

baseView.baseSelectors.searchBtn.addEventListener('click', searchCity);
