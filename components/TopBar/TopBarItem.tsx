import { Divider, Typography } from '@mui/material';

export type Props = {
    title: string;
    selected: boolean;
}

export default function TopBarItem({ title, selected }: Props ) {
    const color = selected ? 'text.primary' : 'text.secondary';
    const body = selected ? 'body1' : 'body2';
    const textDecoration = `${selected ? 'underline' : 'none'}`;
    return (
        <>
            <Typography
                variant={body}
                color={color}
                sx={{
                    fontWeight: 'bold',
                    textDecoration: textDecoration,
                }}
            >
                {title}
            </Typography>
        </>
    );
}