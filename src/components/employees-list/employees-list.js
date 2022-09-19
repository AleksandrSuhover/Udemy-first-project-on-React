import EmloyersListItem from '../employees-list-item/employees-list-item'
import './employees-list.css';

const EmloyersList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <EmloyersListItem key={id} {...itemProps}/>
            
        )
    })

    return (
        <ul className="pp-list list-group">
        {elements}
        </ul>
    )
}

export default EmloyersList;
