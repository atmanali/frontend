import { AppBar, Avatar, Box, Container, Divider, Icon, Typography } from '@mui/material';
import TopBarItem, { Props as TopBarItemProps } from './TopBarItem';


type Props = {
    topBarItems: TopBarItemProps[];
}

export default function ( { topBarItems }:Props ) {

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
                    <Box display={'flex'} flex={1} gap={5} alignItems={'center'} >
                    <Icon
                        sx={{
                            background: '#7fe1ff',
                        }}
                    />
                        <Box display={'flex'} flex={1} gap={3} >
                            {topBarItems?.map((tabItem) => (
                                <TopBarItem key={tabItem.title} title={tabItem.title} selected={tabItem.selected} />
                            ))}
                        </Box>
                    </Box>
                    <Avatar />
                </Container>
            </AppBar>
        </>
    );
}