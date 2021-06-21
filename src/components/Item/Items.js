import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames';
import styles from './item.module.css';
const Item = ({ value, isDone, onClickDone,onClickDelete, id }) => (<span className={
  classnames({
    [styles.item]:true,
    [styles.done]:isDone
    })
}>
<FormControlLabel
   control={<Checkbox
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      name="checkedH"
      onClick={() => onClickDone(id)}
      onDelete={()=>onClickDelete(id)}
      />}
 />
  {value}
</span>);
export default Item;
