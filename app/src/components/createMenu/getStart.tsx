"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Typography,
  CircularProgress,
  Avatar,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/providers/UserProvider";

const steps = ["نام منو", "توضیحات", "آواتار"];

export default function MenuCreateStepper() {
  const router = useRouter();
  const currentUser = useCurrentUser();
  console.log("current user in start",currentUser)

  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    subname: "",
    bio: "",
    avatar: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  //--------------------------------
  // VALIDATIONS FOR EACH STEP
  //--------------------------------
  const validateStep = () => {
    if (activeStep === 0) {
      return form.name.trim() !== "" && form.subname.trim() !== "";
    }
    if (activeStep === 1) {
      return form.bio.trim() !== "";
    }
    if (activeStep === 2) {
      return form.avatar.trim() !== "";
    }
    return false;
  };

  //--------------------------------
  // GENERATE DISPLAY-ID
  //--------------------------------
  const generateDisplayId = (subname: string) => {
    const clean = subname
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    const random = Math.random().toString(36).substring(2, 6);
    return `${clean}-${random}`;
  };

  //--------------------------------
  // SUBMIT FORM
  //--------------------------------
  const submitForm = async () => {
    try {
      setLoading(true);

      await axios.post("/api/menu/add", {
        displayId: generateDisplayId(form.subname),
        ...form,
      });

      setLoading(false);
      setSuccess(true);

      // redirect after 1 sec
      setTimeout(() => {
        router.push(`/dashboard/${currentUser?.id}`);
      }, 1000);

    } catch (err) {
      setLoading(false);
      alert("خطا در ساخت منو");
    }
  };

  //--------------------------------
  // HANDLE NEXT
  //--------------------------------
  const handleNext = () => {
    if (!validateStep()) {
      alert("لطفاً اطلاعات این مرحله را کامل کنید.");
      return;
    }

    // last step → submit
    if (activeStep === steps.length - 1) {
      submitForm();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  //--------------------------------
  // RENDER
  //--------------------------------

  return (
    <Box
      sx={{
        maxWidth: "500px",
        mx: "auto",
        mt: 5,
        direction: "rtl",
        textAlign: "right",
      }}
    >
      {/* STEPPER */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* FORM */}
      <Box sx={{ mt: 4 }}>
        {success ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" color="green">
              منو با موفقیت ساخته شد
            </Typography>
          </Box>
        ) : loading ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>در حال ساخت منو...</Typography>
          </Box>
        ) : (
          <>
            {/* STEP 1 */}
            {activeStep === 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="نام منو"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <TextField
                  label="نام انگلیسی (subname)"
                  value={form.subname}
                  onChange={(e) => setForm({ ...form, subname: e.target.value })}
                />
              </Box>
            )}

            {/* STEP 2 */}
            {activeStep === 1 && (
              <TextField
                multiline
                minRows={3}
                label="توضیحات (bio)"
                fullWidth
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
              />
            )}

            {/* STEP 3 */}
            {activeStep === 2 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  label="لینک آواتار"
                  value={form.avatar}
                  onChange={(e) =>
                    setForm({ ...form, avatar: e.target.value })
                  }
                />

                {form.avatar && (
                  <Avatar
                    src={form.avatar}
                    sx={{ width: 100, height: 100, mx: "auto", mt: 2 }}
                  />
                )}
              </Box>
            )}

            {/* BUTTONS */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                قبلی
              </Button>

              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "ثبت نهایی" : "بعدی"}
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Button
      onClick={() => router.push(`/dashboard/${currentUser?.id}`)}
       variant="outlined" sx={{mt:5}}>صرف نظر</Button>
    </Box>
  );
}
