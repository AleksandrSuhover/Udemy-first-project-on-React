import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyersList from '../employees-list/employees-list';
import EmployersAddForm from '../emloyees-add-form/employees-add-form';

import './app.css'

function App(){
    return (
        <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <EmloyersList/>
        <EmployersAddForm/>
        </div>
    )
}

export default App;