import { Box, TextField, Autocomplete } from "@mui/material";
import { FormEvent } from "react";
import FormModal from "../FormModal";
import { roles } from "../../../utils/constants";
import { createNewAuth } from "../../../services/authentication";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
};
export default function CreateUsersModal({ isOpen, onClose, onCancel }: Props) {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-ignore
    const { username, password, role } = event.target;
    createNewAuth(username.value, password.value, role.value).then(
      (response) => {
        console.log(response);
      },
    );
  };

  return (
    <FormModal
      isOpen={isOpen}
      onClose={onClose}
      onCancel={onCancel}
      onSubmit={onSubmit}
      title={"Créer un nouvel utilisateur"}
      buttonText={"Créer"}
    >
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Box display={"flex"} gap={2}>
          <TextField
            size={"small"}
            variant={"standard"}
            required
            label={"Nom d'utilisateur"}
            name={"username"}
            sx={{ flex: 1 }}
          />
          <TextField
            size={"small"}
            variant={"standard"}
            required
            label={"Mot de passe"}
            name={"password"}
            sx={{ flex: 1 }}
          />
        </Box>
        <Autocomplete
          options={Object.values(roles)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={"rôle"}
              size={"small"}
              variant={"standard"}
              required
              name={"role"}
            />
          )}
        />
      </Box>
    </FormModal>
  );
}
