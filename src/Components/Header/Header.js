import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu';

import Styles from './Header.module.css';
import Drawer from "./Drawer";

class Header extends React.Component {
    state = {
        drawer: false,
    };

    handleDrawer = () => {
        this.setState({
            drawer: !this.state.drawer,
        })
    };

    render(){
        const {drawer} = this.state;
        return (
            <div>
                <AppBar position="static" className={Styles.container}>
                    <MenuIcon className={Styles["menu-icon"]}
                              onClick={this.handleDrawer}
                    />
                    <div className={Styles.title}> Arbitrage </div>
                    <Drawer open={drawer} onClose={this.handleDrawer}/>
                </AppBar>
            </div>
        )
    }
}

export default Header
