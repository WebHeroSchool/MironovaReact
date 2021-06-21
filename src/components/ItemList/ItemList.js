import React from 'react';
import Item from '../Item/Items';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './itemList.module.css';
const ItemList = ({ items, onClickDone, onClickDelete}) => (<ul>
   {items.map(item => <li key={item.value}>
        <div className={styles.itemText}>
        <Item
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
        />
        </div>
        <div>
        <IconButton aria-label="delete" >
             <DeleteIcon onClick={() => onClickDelete(item.id)}  />
           </IconButton>
        </div>
   </li>)}
</ul>);

export default ItemList;
