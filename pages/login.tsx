import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { LockOpen, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
import { login } from "../services/authentication";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const regexArray = [
  /(?=.*\d)/,
  /(?=.*[a-z])/,
  /(?=.*[A-Z])/,
  /(?=.*\W)/,
  /.{12,}/,
];
const totalRegex = RegExp(
  regexArray
    .map((regex) => regex.toString())
    .join("")
    .replaceAll("/", ""),
);
export default function Login() {
  const router = useRouter();
  const [passwordType, setPasswordType] = useState<"password" | "">("password");
  const [passwordValidity, setPasswordValidity] = useState<
    0 | 20 | 40 | 60 | 80 | 100
  >(0);
  const [isConnected, setIsConnected] = useState(false);
  const [youCanSendRequest, setYouCanSendRequest] = useState(true);

  const isValidPassword = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    let validity: 0 | 20 | 40 | 60 | 80 | 100 = 0;
    regexArray.map(
      (regex) => (validity += regex.test(event.target.value) ? 20 : 0),
    );
    setPasswordValidity(validity);
    setYouCanSendRequest(totalRegex.test(event.target.value));
  };
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //@ts-ignore
    const { username, password } = event.target;
    youCanSendRequest &&
      login({
        username: username.value,
        password: password.value,
      }).then((response) => {
        if (response.status === 200) {
          setIsConnected(true);
          router.push("/");
          cookie.set('access_token', response.data);
        }
        if (response.status === 202) {
          setIsConnected(true);
          router.push(`/register/${username.value}`);
        }
      });
  };
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "20%",
          marginInline: { mobile: "15%", laptop: "20%", desktop: "30%" },
          paddingInline: 5,
          paddingBlock: 3,
          gap: 3,
        }}
        component={"form"}
        onSubmit={onSubmit}
      >
        <Toolbar sx={{ alignSelf: "center" }}>
          <Typography variant={"h5"} sx={{ mr: 1 }}>
            Connexion
          </Typography>
          <Avatar
            sx={{
              backgroundColor: isConnected
                ? "success.light"
                : "secondary.light",
            }}
          >
            {isConnected ? <LockOpen /> : <Lock />}
          </Avatar>
        </Toolbar>

        <TextField
          name={"username"}
          size={"small"}
          placeholder={"username"}
          type={"text"}
          required
        />
        <TextField
          name={"password"}
          size={"small"}
          placeholder={"password"}
          type={passwordType}
          onChange={isValidPassword}
          required
          InputProps={{
            endAdornment: (
              <Box
                onClick={() => setPasswordType(passwordType ? "" : "password")}
                sx={{
                  display: "flex",
                  opacity: 0.4,
                  "&:hover": { cursor: "pointer" },
                }}
              >
                {passwordType ? <Visibility /> : <VisibilityOff />}
              </Box>
            ),
          }}
        />
        {passwordValidity && (
          <Toolbar component={"div"}>{passwordValidity}</Toolbar>
        )}
        <Button variant={"contained"} type={"submit"}>
          Connexion
        </Button>
        <Toolbar component={"div"}>mot de passe oublié ? Atmanali1é"'</Toolbar>
      </Paper>
    </>
  );
}
