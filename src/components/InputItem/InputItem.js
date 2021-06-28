import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from './inputItem.module.css';
import PropTypes from 'prop-types';
class InputItem extends React.Component{
  state={
    inputValue:''
  };
  onButtonCLick=()=>{
    this.setState({
      inputValue:''
    })
  this.props.onClickAdd(this.state.inputValue);
  }
  render(){
    const {onClickAdd}=this.props;
    return(
      <Grid className={styles.inputItem}>
          <TextField
            label={ "Добавить новое дело" }
            id="filled-margin-dense"
            margin="dense"
            fullwidth
            value={this.state.inputValue}
            onChange={event=>this.setState({inputValue:event.target.value.toUpperCase()})}
            helperText={ this.props.hasError ? "Поле не может быть пустым" : ""}
            color={ this.props.error ? "secondary" : "primary" }
           />
           <Button
              variant="contained"
              color="primary"
              fullwidth
              onClick={this.onButtonCLick}>
            Добавить
          </Button>
      </Grid>);
      }
  }
  InputItem.propTypes = {
    inputValue: PropTypes.string.isRequired,
    isError: PropTypes.bool.isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onButtonCLick: PropTypes.func.isRequired
}
export default InputItem
