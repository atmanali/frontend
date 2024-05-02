import { Button } from "@mui/material";
import { login } from '../utils/authentication';
import { isRequestSuccessful } from '../utils/requestUtils';

export default function MainPage() {
    return (
        <>
            app pagnan
            <Button
                onClick={() => {
                    login({username: 'atmanali', password: 'atmanali'})
                        .then((response)=>{
                            isRequestSuccessful(response) && console.log(response.data)
                        })
                }}
            > log in </Button>
        </>
    );
}