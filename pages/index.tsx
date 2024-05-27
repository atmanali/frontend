import { Button } from "@mui/material";
import { useRouter } from 'next/router';

export default function MainPage() {
    const router = useRouter();
    return (
        <>
            <Button onClick={()=>router.push('/login')}> connection </Button>
            <Button onClick={()=>router.push('/manage-users')}> Gérer les utilisateurs </Button>
        </>
    );
}