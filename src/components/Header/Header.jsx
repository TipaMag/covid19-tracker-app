import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import logo from '../../assets/images/logo.png'

// import Brightness3Icon from '@material-ui/icons/Brightness3'
// import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    logo: {
        width: 200,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color='default'>
                <Toolbar>
                    <img src={logo} alt="logo" className={classes.logo} />
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Brightness3Icon />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header