import * as React from 'react';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <Menu vertical={true} style={{ display: 'inline-block' }}>
                <MenuItem text="Item1">
                    <MenuItem text="Item1.1" />
                    <MenuItem text="Item1.2">
                        <MenuItem text="Item1.2.1" />
                        <MenuItem text="Item1.2.2" />
                    </MenuItem>
                </MenuItem>
                <MenuItem text="Item2">
                    <MenuItem text="Item2.1" />
                    <MenuItem text="Item2.2" />
                </MenuItem>
                <MenuItem text="Item3" />
            </Menu>
        </div>
    );
}

export default LeftMenu;