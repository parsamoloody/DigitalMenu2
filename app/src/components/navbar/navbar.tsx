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
  Button
} from "@mui/material";
import { TiThMenu } from "react-icons/ti";
import { useCurrentUser } from "@/providers/UserProvider";
import { getCurrentMenu } from "@/packages/lib/prisma/auth/menu-auth.ts";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState<null | string>(null)
  const currentUser = useCurrentUser();
  const pahtname = usePathname()
  
  // console.log('current user id', currentMenuId)
  // if(!currentUser) return notFound();
  const toggle = () => setOpen(!open);

  useEffect(() => {
    async function fetchMenu() {
      const c = await getCurrentMenu();
      if (!c) {
        setCurrentMenuId(null);
        return;
      }
      setCurrentMenuId(c.id!);
    }
    fetchMenu();
  })
  
  // dont show navbar on menu detail page
  if(pahtname.startsWith("/menu/")) return null


  return (
    <>
      
        <IconButton onClick={toggle} className={`p-5!`}>
          <TiThMenu />
        </IconButton>
      


      <Drawer anchor="left" open={open} onClose={toggle}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            منوی من
          </Typography>
          {currentUser && (


            <List>
              <ListItemButton
                component={Link}
                href={`/dashboard/profile/${currentUser.id}`}
              >
                <ListItemText primary="حساب کاربری" />
              </ListItemButton>
              <ListItemButton component={Link} href={`/dashboard/category?menuId=${currentMenuId}`}>
                <ListItemText primary="دسته‌ها" />
              </ListItemButton>

              {/* <ListItemButton component={Link} href="/dashboard/products">
                <ListItemText primary="محصولات" />
              </ListItemButton> */}


            </List>
          )}
          {!currentUser && (
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
