import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card, CardContent, Typography } from '@material-ui/core/';

const styles = theme => ({
  card: {
    width: "30%",
    textAlign: "center",
    display: "inline-block",
    margin: "1%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            workNumber: this.props.workNumber,
            cellNumber: this.props.cellNumber,
            email: this.props.email
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" className={classes.pos}>
                    {this.state.firstName} {" "} {this.state.lastName}
                    </Typography>
                    <Typography className={classes.pos} >
                    {"Work: "}{this.state.workNumber} {"Cell: "} {this.state.cellNumber}
                    </Typography>
                    <Typography variant="body2" component="p">
                    {this.state.email}
                    </Typography>
                </CardContent>
            </Card>
        );
    }  
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default withStyles(styles)(ContactCard);