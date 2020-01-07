import React from 'react';
import { withStyles, Typography, Fab, Button } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, } from '@material-ui/icons';

const styles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

class Decrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startNumber: this.props.startNumber
        };
    };
    increment = () => {
        this.setState({
           startNumber : this.state.startNumber +1
        });
    }
    decrement = () => {
        if(this.state.startNumber>0){
            this.setState({
                startNumber : this.state.startNumber -1
            });
        }
        else
            alert("Value cannot go below 0!");            
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root} align="center">
                <Button color="secondary" aria-label="edit" onClick= {this.decrement}>
                    <ArrowDownward/>
                </Button>
                <Button variant="extended" className={classes.extendedIcon}>
                    <Typography variant='h5'>{this.state.startNumber}</Typography>
                </Button>
                <Button color="primary" aria-label="add" onClick = {this.increment}>
                    <ArrowUpward/>
                </Button>
                
            </div>
        );
    }
}

// Decrement.propTypes = {
//     startNumber:
// }

export default withStyles(styles)(Decrement);