import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { frFR } from "@mui/x-date-pickers/locales";
import {
  createNewAuth,
  getAuthInformation,
} from "../../services/authentication";
import { createNewUser } from "../../services/users";
import { makeDateFromSlashFormat } from "../../utils/dateUtils";

export default function username() {
  const router = useRouter();
  const [username, setUsername] = useState<string>();
  const [role, setRole] = useState<string>();

  useEffect(() => {
    if (router.query?.username) {
      getAuthInformation(router.query.username as string).then((response) => {
        setUsername(response.data.username);
        setRole(response.data.role);
      });
    }
  }, [router.query?.username]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    const { last_name, first_name, birth_day } = event.target;
    createNewUser(
      last_name.value,
      first_name.value,
      username,
      makeDateFromSlashFormat(birth_day.value),
    ).then(console.log);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: { mobile: "20%", desktop: "10%" },
          marginInline: { mobile: "5%", laptop: "10%", desktop: "20%" },
          paddingInline: 5,
          paddingBlock: 3,
          gap: 3,
        }}
        component={"form"}
        onSubmit={onSubmit}
      >
        <Toolbar sx={{ alignSelf: "center" }}>
          <Typography variant={"h5"} sx={{ mr: 1 }}>
            Fiche de renseignement
          </Typography>
          <Avatar variant={"rounded"} sx={{ backgroundColor: "info.main" }} />
        </Toolbar>
        <Box display={"flex"} gap={3}>
          <TextField
            name={"last_name"}
            size={"small"}
            variant={"standard"}
            placeholder={"NOM"}
            required
            sx={{ flex: 1 }}
          />
          <TextField
            name={"first_name"}
            size={"small"}
            variant={"standard"}
            placeholder={"Prénom"}
            required
            sx={{ flex: 1 }}
          />
        </Box>
        {username && (
          <TextField
            name={"username"}
            variant={"standard"}
            value={username}
            size={"small"}
            disabled
          />
        )}
        {role && (
          <TextField
            name={"role"}
            variant={"standard"}
            value={role}
            size={"small"}
            disabled
          />
        )}
        <LocalizationProvider
          dateAdapter={AdapterLuxon}
          localeText={
            frFR.components.MuiLocalizationProvider.defaultProps.localeText
          }
          adapterLocale={"fr"}
        >
          <DatePicker
            name={"birth_day"}
            slotProps={{
              textField: {
                variant: "standard",
              },
            }}
          />
        </LocalizationProvider>
        <Button variant={"outlined"} type={"submit"} sx={{ alignSelf: "end" }}>
          Enregistrer
        </Button>
      </Paper>
    </>
  );
}
