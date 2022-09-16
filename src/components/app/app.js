import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyersList from '../employees-list/employees-list';
import EmployersAddForm from '../emloyees-add-form/employees-add-form';

import './app.css'

function App(){
    const data = [
        {name: 'Alex K.', salary: 800, increase: true},
        {name: 'Anton S.', salary: 1400, increase: true},
        {name: 'John V.', salary: 2200, increase: true},
        {name: 'Jack A.', salary: 2500, increase: false}
    ];
    return (
        <div className="app">
        <AppInfo/>
        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        <EmloyersList data={data}/>
        <EmployersAddForm/>
        </div>
    )
}

export default App;