"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import { useCurrentUser } from "@/providers/UserProvider";
import { usePathname } from "next/navigation";
import { getCurrentMenu } from "@/lib/auth/menu-auth.ts";

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState<string | null>(null);
  const currentUser = useCurrentUser();
  const pathname = usePathname();

  const toggle = () => setOpen(!open);

  useEffect(() => {
    async function fetchMenu() {
      const c = await getCurrentMenu();
      if (!c) {
        setCurrentMenuId(null);
        return;
      }
      setCurrentMenuId(c.id ?? null);
    }

    fetchMenu();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/menu/") || pathname.startsWith("/auth")) {
    return null;
  }

  return (
    <>
      <IconButton onClick={toggle} className="p-5!">
        <TiThMenu />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            منوی من
          </Typography>

          {currentUser ? (
            <List>
              <ListItemButton
                component={Link}
                href={`/dashboard/profile/${currentUser.id}`}
              >
                <ListItemText primary="حساب کاربری" />
              </ListItemButton>

              {
                currentMenuId ? (
                  <>
                    <ListItemButton
                      component={Link}
                      href={`/dashboard/category?menuId=${currentMenuId}`}
                    >
                      <ListItemText primary="دسته‌ها" />
                    </ListItemButton>
                    <ListItemButton
                      component={Link}
                      href={`/menu/${currentMenuId}`}
                    >
                      <ListItemText primary="منوی من" />
                    </ListItemButton>
                  </>
                ) :
                  (
                    <ListItemButton
                      component={Link}
                      href={`/get-start/${currentUser.id}`}
                    >
                      <ListItemText primary="ایجاد منو" />
                    </ListItemButton>
                  )
              }
            </List>
          ) : (
            <Box sx={{ mt: 3 }}>
              <Button
                component={Link}
                href="/auth"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.4,
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                }}
              >
                ورود به حساب کاربری
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}
