"use client";

import { UserProps } from "@/packages/package-core/types";
import { Box, Avatar, Typography, Container } from "@mui/material";

export default function UserProfileComponent({user}:{user: UserProps}) {
//   const user = {
//     name: "Parsa",
//     avatarUrl: "/avatar.png",
//   };

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 120,
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          borderRadius: 4,
          mb: -8,
        }}
      />

      <Avatar
        src={user.avatar}
        alt={user.name}
        sx={{
          width: 120,
          height: 120,
          border: "4px solid white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      />

      <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
        {user.name}
      </Typography>
      <Typography variant="h5" sx={{fontWeight: "bold" }}>
        {user.email}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        حساب کاربری شما
      </Typography>
    </Container>
  );
}
