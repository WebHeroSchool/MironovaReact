import React from 'react';
import Item from '../Item/Items';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './itemList.module.css';
const ItemList = ({ items }) => (<ul>
   {items.map(item => <li key={item.value}>
     <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
      />
        <div className={styles.itemText}><Item value={item.value} isDone={item.isDone} /></div>
        <div>
        <IconButton aria-label="delete">
             <DeleteIcon />
           </IconButton>
        </div>
   </li>)}
</ul>);

export default ItemList;
