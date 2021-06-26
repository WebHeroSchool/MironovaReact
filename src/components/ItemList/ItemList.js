import React from 'react';
import Item from '../Item/Items';
import styles from './itemList.module.css';
import PropTypes from 'prop-types'
const ItemList = ({ items, onClickDone, onClickDelete}) => (<ul>
   {items.map(item => <li key={item.value} className = {styles.list}>
        <div className={styles.itemText}>
        <Item
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
        />
        </div>
   </li>)}
</ul>);
ItemList.propTypes = {
    items: PropTypes.array.isRequired
};
export default ItemList;
