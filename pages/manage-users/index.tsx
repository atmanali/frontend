import { Button } from "@mui/material";
import { useState } from "react";
import CreateUsersModal from "../../components/Modals/Users/Create";

export default function () {
  const [isCreateOpen, setIsCreateOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setIsCreateOpen(true)}>
        Créer un nouvel utilisateur
      </Button>

      <CreateUsersModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCancel={() => setIsCreateOpen(false)}
      />
    </>
  );
}
