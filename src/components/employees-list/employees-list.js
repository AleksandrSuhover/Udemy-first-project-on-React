import EmloyersListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmloyersList = () => {
    return (
        <ul className="pp-list list-group">
            <EmloyersListItem/>
            <EmloyersListItem/>
            <EmloyersListItem/>
        </ul>
    )
}

export default EmloyersList;
