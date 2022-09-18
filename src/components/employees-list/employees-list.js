import EmloyersListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmloyersList = ({data}) => {
    const elements = data.map(item => {
        return (
            <EmloyersListItem {...item}/>
            
        )
    })

    return (
        <ul className="pp-list list-group">
        {elements}
        </ul>
    )
}

export default EmloyersList;
