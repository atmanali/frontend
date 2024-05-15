import { Button } from "@mui/material";
import { useRouter } from 'next/router';

export default function MainPage() {
    const router = useRouter();
    return (
        <>
            <Button onClick={()=>router.push('/login')}> log in </Button>
        </>
    );
}