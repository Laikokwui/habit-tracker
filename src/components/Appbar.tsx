import * as React from 'react';

import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { Button } from '@progress/kendo-react-buttons';
import Link from 'next/link';
import LeftMenu from './LeftMenu';

const Appbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const kendokaAvatar = "https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png";
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="app-container">
            <AppBar themeColor="primary" className="fixed top-0 w-full">
                <AppBarSection>
                    <Button type="button" fillMode="flat" svgIcon={menuIcon} onClick={toggleMenu} />
                </AppBarSection>

                <AppBarSection>
                    <h1 className="text-lg m-0">HabitTrackers</h1>
                </AppBarSection>

                <AppBarSection>
                    <ul className="text-sm list-none p-0 m-0 flex">
                        <li className="mx-2 hover:text-blue-400 cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mx-2 hover:text-blue-400 cursor-pointer">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="mx-2 hover:text-blue-400 cursor-pointer">
                            <Link href="/calendar">Calendar</Link>
                        </li>
                        <li className="mx-2 hover:text-blue-400 cursor-pointer">
                            <Link href="/settings">Settings</Link>
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
            <div className="main-content flex">
                {isMenuOpen && <LeftMenu />} {/* Conditionally render LeftMenu */}
                <div className="content flex-grow p-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Appbar;
