import { Divider, Typography } from '@mui/material';

export type Props = {
    title: string;
    selected: boolean;
}

export default function TopBarItem({ title, selected }: Props ) {
    const color = selected ? 'text.primary' : 'text.secondary';
    return (
        <>
            <Typography
                variant={'h6'}
                color={color}
                sx={{
                    fontWeight: 'bold'
                }}
            >
                {title}
                <Divider sx={{borderColor: `${color}`}} />
            </Typography>
        </>
    );
}