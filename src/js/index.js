import Search from './models/Search';
import * as searchView from './views/base';


const searchValue = searchView.baseSelectors.searchForm.value;
searchView.baseSelectors.searchForm.addEventListener('keydown',() => {
    console.log(searchValue);
    
})
