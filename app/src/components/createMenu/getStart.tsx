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
import StyleInput from "../ui/StyleInput";
import { toast } from "sonner";
import { Flex } from "@radix-ui/themes";
import { IoIosCheckmarkCircle } from "react-icons/io";

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
        router.push(`/dashboard/profile/${currentUser?.id}`);
      }, 1000);

    } catch (err) {
      setLoading(false);
      toast.error("خطا در ساخت منو");
    }
  };

  //--------------------------------
  // HANDLE NEXT
  //--------------------------------
  const handleNext = () => {
    if (!validateStep()) {
      toast.error("لطفا کامل کنید")
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
      className={`bg-[#eee] max-[390px]:w-[90%]! rounded-[1.2rem] p-6`}
      sx={{
        maxWidth: "330px",
        mx: "auto",
        mt: 5,
        direction: "rtl",
        textAlign: "right",
      }}

    >
      {/* STEPPER */}
      <Stepper className={`translate-x-[25px]!`} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{'& .MuiStepLabel-label': {fontSize: '12px',},}} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* FORM */}
      <Box sx={{ mt: 4 }}>
        {success ? (
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Flex justify="center" align="center" className="ml-4">
              <IoIosCheckmarkCircle  color="#99cf88" size={50}/>
            </Flex>
          </Box>
        ) : loading ? (
          <Box sx={{ textAlign: "center", mt: 4}}>
            <CircularProgress />
            <Typography className={`text-[13px]! mt-2!`}>در حال ساخت منو...</Typography>
          </Box>
        ) : (
          <>
            {/* STEP 1 */}
            {activeStep === 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <StyleInput
                  label="نام منو"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <StyleInput
                  label="نام انگلیسی (subname)"
                  value={form.subname}
                  onChange={(e) => setForm({ ...form, subname: e.target.value })}
                />
              </Box>
            )}

            {/* STEP 2 */}
            {activeStep === 1 && (
              <TextField
                variant="filled"
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
                <StyleInput
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

              <Button className={`px-6!`} onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "ثبت نهایی" : "بعدی"}
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Button
       className={` px-9! mt-8!`}
      onClick={() => router.push(`/dashboard/${currentUser?.id}`)}
       variant="contained">صرف نظر</Button>
    </Box>
  );
}
