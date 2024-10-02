"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Modal,
  Box,
  Input,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { sendEmail } from "@/utils/send-email";

import styles from "./Fedback.module.scss";

export type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  agreement: boolean;
  buttonText: string;
};

interface IContent {
  submitButton: string;
  submitButtonSending: string;
  submitButtonSent: string;
  feedbackButton: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  agreement: string;
  deleteButton: string;
}

interface FeedbackProps {
  content: IContent;
}

export default function Feedback({ content }: FeedbackProps) {
  // button action
  const [buttonText, setButtonText] = useState<string>(content.submitButton);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);
  // form actions
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      agreement: agreement,
      buttonText: content.submitButton,
    },
  });

  function onSubmit(data: FormData) {
    setDisabled(true);
    setButtonText(content.submitButtonSending);
    sendEmail(data);
    setTimeout(() => {
      setButtonText(content.submitButtonSent);
    }, 1000);
    setTimeout(() => {
      setButtonText(content.submitButton);
      reset();
      setDisabled(false);
    }, 2000);
  }
  // modal actions
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 4 }}>
        {content.feedbackButton}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Feedback"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={styles.box}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder={content.name}
            {...register("name", { required: true })}
          />
          <Input
            type="tel"
            placeholder={content.phone}
            {...register("phone", { required: false })}
          />
          <Input
            required
            type="email"
            placeholder={content.email}
            {...register("email", { required: true })}
          />
          <TextField
            id="standard-multiline-static"
            label={content.message}
            multiline
            rows={6}
            variant="standard"
            {...register("message", { required: true })}
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                checked={agreement}
                {...register("agreement", {
                  required: true,
                  onChange: () => {
                    setAgreement(!agreement);
                  },
                })}
              />
            }
            label={content.agreement}
          />
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={disabled}
              endIcon={<SendIcon />}
            >
              {buttonText}
            </Button>
            <Button
              onClick={() => {
                reset();
                setAgreement(false);
                // setTimeout(() => {
                //   handleClose();
                // }, 500);
              }}
              disabled={disabled}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              {content.deleteButton}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
