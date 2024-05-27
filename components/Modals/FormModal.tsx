import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import { FormEvent, ReactNode, useState } from "react";

type Props = {
  isOpen: boolean;
  title: string;
  buttonText: string;
  onClose: () => void;
  onCancel: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};
export default function FormModal({
  isOpen,
  title,
  buttonText,
  onClose,
  onCancel,
  onSubmit,
  children,
}: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: onSubmit,
      }}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          boxShadow: `0 0 ${isMouseOver ? 1.5 : 2}vh 0`,
          mb: 3,
        }}
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      </DialogTitle>
      <DialogContent>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          {children}
          <Box sx={{ alignSelf: "end" }}>
            <Button
              variant={"text"}
              onClick={onCancel}
              sx={{ mr: 2, color: "text.secondary" }}
            >
              Annuler
            </Button>
            <Button variant={"contained"} type={"submit"} color={"success"}>
              {buttonText}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
