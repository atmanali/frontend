import {
    AppBar,
    Avatar,
    Box,
    Container,
    Icon,
    IconButton,
    ListItemButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import TopBarItem, { Props as TopBarItemProps } from './TopBarItem';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


type Props = {
    topBarItems: TopBarItemProps[];
    setTopBarItems: React.Dispatch<React.SetStateAction<TopBarItemProps[]>>
}

export default function ( { topBarItems }:Props ) {
    const [anchorMenu, setAnchorMenu] = useState<null | HTMLElement>()
    const router = useRouter();

    return (
        <>
            <AppBar
                sx={{
                    background: 'ghostwhite',
                    minHeight: '4rem',
                    alignContent: 'center',
                }}
            >
                <Container
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: {mobile: 5, laptop: 10},
                        }}
                    >
                        <IconButton
                            onClick={() => router.push('/')}
                            sx={{
                                background: '#7fe1ff',
                                display: {mobile: 'none', tablet:'inline'},
                            }}
                        />
                        <Box
                            sx={{
                                display: {mobile: 'none', tablet: 'flex'},
                                gap: {tablet: 3, laptop: 9},
                                alignItems: 'baseline',
                            }}
                        >
                            {topBarItems?.map((tabItem) => (
                                <TopBarItem key={tabItem.title} title={tabItem.title} href={tabItem.href} />
                            ))}
                        </Box>
                        {/*mobile*/}
                        <Icon
                            onClick={(event) => setAnchorMenu(event.currentTarget)}
                            sx={{
                                background: '#89f6a0',
                                display: {mobile: 'inline', tablet:'none'},
                            }}
                        />
                        <Menu
                            open={Boolean(anchorMenu)}
                            anchorEl={anchorMenu}
                            onClose={() => setAnchorMenu(null)}
                            onClick={() => setAnchorMenu(null)}
                            sx={{ paddingRight: 4 }}
                        >
                            <MenuItem component={'a'} href={'/'}>
                                <Typography
                                    variant={'body1'}
                                    sx={{
                                        textDecoration: 'none',
                                    }}
                                >
                                    Accueil
                                </Typography>
                            </MenuItem>
                            {topBarItems?.map((tabItem) => (
                                <TopBarItem key={tabItem.title} title={tabItem.title} href={tabItem.href} menuItem />
                            ))}
                        </Menu>

                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            color: 'text.primary',
                            fontWeight: 'bold',
                            fontSize: '1.3em',
                            fontFamily: 'monospace',
                            //background:'blue',
                        }}
                    >
                        Atman Ali
                        <Avatar />
                    </Box>
                </Container>
            </AppBar>
        </>
    );
}