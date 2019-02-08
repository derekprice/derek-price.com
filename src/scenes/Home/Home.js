import React, { Component } from 'react';
import withRouter from 'react-router/withRouter';
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    hahaStyle: {
        fontSize: '20px'
    }
})
class Home extends Component {

    render() {
        const classes = this.props

        return (
            <div className={classes.hahaStyle}>
                <p>
                    Hi there.
                </p>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(Home))