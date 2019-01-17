import React from 'react';
import PropTypes from 'prop-types';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Styles from './Header.module.css';

const Drawer = props => {
    const menu = ['Dashboard','Settings'];
    return (
        <div>
            <MaterialDrawer open={props.open} onClose={props.onClose}>
                <List className={Styles.list}>
                    {menu.map(item => (
                        <ListItem button={true} key={item}>
                            <ListItemText primary={item}/>
                        </ListItem>
                    ))}
                </List>
            </MaterialDrawer>
        </div>
    )
};

Drawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Drawer;
