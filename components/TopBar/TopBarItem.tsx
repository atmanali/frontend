import { Container, Divider, MenuItem, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export type Props = {
    title: string;
    href: string;
    menuItem?: boolean;
}

export default function TopBarItem({ title, href, menuItem=false }: Props ) {
    const router = useRouter();
    const [color, setColor] = useState<'text.primary'|'text.secondary'>()
    const [body, setBody] = useState<'body1'|'body2'>();

    useEffect(() => {
        if (router.asPath.startsWith((`/${href}`))) {
            setColor('text.primary');
            setBody('body1');
        } else {
            setColor('text.secondary');
            setBody('body2');
        }
    }, [router.asPath]);

    return <>
        { menuItem ? (
            <MenuItem>
                <Typography
                    variant={body}
                    color={color}
                    component={'a'}
                    href={href}
                    sx={{
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    {title}
                </Typography>
            </MenuItem>
        ):(
            <Container>
                <Typography
                    variant={body}
                    color={color}
                    component={'a'}
                    href={href}
                    sx={{
                        fontWeight: 'bold',
                        textDecoration: 'none',
                    }}
                >
                    {title}
                </Typography>
                <Divider sx={{borderColor: color}}/>
            </Container>
        )}
    </>;
}