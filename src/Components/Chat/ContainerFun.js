import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, FormHelperText } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import drawerWidth from "./Top"


const styles = theme => ({
    root: {
        display: 'flex',
    },

    Container: {
        ...theme.mixins.toolbar,
        flexGrow: 1,
        marginLeft: drawerWidth,
        marginTop: 0,

      },

    LeftPaper:{
        // padding: 20,
        // marginTop: 10,
        // MarginBottom: 10
        }
    }
);

class ContainerFunction extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    className={classes.Container}
                >
                    <Grid item sm>
                        <Paper>
                            hello
                        </Paper>
                    </Grid>
                    <Grid item sm>
                    <Paper>
                            righhellot
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

ContainerFunction.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContainerFunction);
