import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';

const kendokaAvatar = 'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

const Appbar = () => {
    return (
        <>
            <AppBar themeColor="primary" className="fixed top-0 w-full">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} />
                </AppBarSection>

                <AppBarSpacer className="w-1" />

                <AppBarSection>
                    <h1 className="text-lg m-0">HabitTracker</h1>
                </AppBarSection>

                <AppBarSpacer className="w-8" />

                <AppBarSection>
                    <ul className="text-sm list-none p-0 m-0 flex">
                    <li className="mx-2 hover:text-blue-400 cursor-pointer">
                        <span>Home</span>
                    </li>
                    <li className="mx-2 hover:text-blue-400 cursor-pointer">
                        <span>Calender</span>
                    </li>
                    <li className="mx-2 hover:text-blue-400 cursor-pointer">
                        <span>Progress</span>
                    </li>
                    </ul>
                </AppBarSection>

                <AppBarSpacer />

                <AppBarSection className="actions">
                    <Button type="button" fillMode="flat" svgIcon={bellIcon}>
                    <BadgeContainer>
                        <Badge rounded="full" themeColor="primary" size="small" position="inside" />
                    </BadgeContainer>
                    </Button>
                </AppBarSection>

                <AppBarSection>
                    <span className="k-appbar-separator" />
                </AppBarSection>

                <AppBarSection>
                    <Avatar type="image" className="w-6 h-6">
                    <img src={kendokaAvatar} alt="KendoReact Layout Kendoka Avatar" />
                    </Avatar>
                </AppBarSection>
            </AppBar>
        </>
    );
};

export default Appbar;
