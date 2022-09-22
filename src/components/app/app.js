import { Component } from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmloyersList from '../employees-list/employees-list';
import EmployersAddForm from '../emloyees-add-form/employees-add-form';
import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex K.', salary: 800, increase: true, id: 1},
                {name: 'Anton S.', salary: 1400, increase: true, id: 2},
                {name: 'John V.', salary: 2200, increase: true, id: 3},
                {name: 'Jack A.', salary: 2500, increase: false, id: 4},
                {name: 'Dmitriy E.', salary: 2500, increase: false, id: 5}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    render() {
        return (
            <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmloyersList 
                data={this.state.data}
                onDelete={this.deleteItem}/>
            <EmployersAddForm/>
            </div>
        );
    }
}
export default App;