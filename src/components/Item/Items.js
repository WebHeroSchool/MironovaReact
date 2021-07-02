import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import styles from './item.module.css';
class Item extends React.Component{
  render(){
    const { value, isDone, onClickDone,onClickDelete, id }=this.props;
    return(
      <span className={
        classnames({
          [styles.item]:true,
          [styles.done]:isDone,
          })
      }>
        <FormControlLabel
            control={<Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="checkedH"
            onClick={() => onClickDone(id)}
          />}
       />
        {value}
        <IconButton aria-label="delete" onClick={() => onClickDelete(id)} >
             <DeleteIcon  />
        </IconButton>
      </span>
    )
  }
};
Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};
export default Item;
