import Item from "./Item"

const ItemList = ({items, handleClickSelectedItem}) => {
    return items.map((item) => 
        <Item 
            key={item.id} 
            details={item} 
            handleClickSelectedItem={handleClickSelectedItem}
            />
    )
}

export default ItemList