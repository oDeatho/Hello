import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    LeftPaper:{
        padding: 20,
        marginTop: 10,
        MarginBottom: 10
        }
    }
);


class LeftBar extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid item sm="2">
                    <Paper className={classes.LeftPaper}>
                        Left
                    </Paper>
                </Grid>
                {/* <Grid item sm>
                <Paper>
                        right
                    </Paper>
                </Grid> */}
            </Grid>
        );
    }
}

LeftBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftBar);
