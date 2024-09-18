"use client";

import { useState } from "react";
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

import styles from "./Fedback.module.scss";

interface IContent {
  submitButton: string;
  submitButtonSending: string;
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

interface IInfo {
  name: string;
  email: string;
  message: string;
  phone: string;
  buttonText: string;
  agreement: boolean;
}

export default function Feedback({ content }: FeedbackProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<IInfo>({
    name: "",
    email: "",
    message: "",
    phone: "",
    buttonText: content.submitButton,
    agreement: false,
  });
  const { name, email, message, phone, buttonText, agreement } = info;

  const handleChange =
    (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.type === "checkbox") {
        setInfo({ ...info, [name]: e.target.checked });
        return;
      }
      setInfo({ ...info, [name]: e.target.value });
    };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setInfo({ ...info, buttonText: content.submitButtonSending });
  };

  const handleDelete = () => {
    setInfo({
      name: "",
      email: "",
      message: "",
      phone: "",
      buttonText: content.submitButton,
      agreement: false,
    });
    setTimeout(() => {
      handleClose();
    }, 500);
  };

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
        <Box className={styles.box} component="form" onSubmit={handleSubmit}>
          <Input
            value={name}
            onChange={handleChange("name")}
            placeholder={content.name}
          />
          <Input
            value={phone}
            onChange={handleChange("phone")}
            type="tel"
            placeholder={content.phone}
          />
          <Input
            required
            value={email}
            onChange={handleChange("email")}
            type="email"
            placeholder={content.email}
          />
          <TextField
            value={message}
            onChange={handleChange("message")}
            id="standard-multiline-static"
            label={content.message}
            multiline
            rows={6}
            variant="standard"
          />
          <FormControlLabel
            required
            control={
              <Checkbox
                onChange={handleChange("agreement")}
                checked={agreement}
              />
            }
            label={content.agreement}
          />
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
            >
              {buttonText}
            </Button>
            <Button
              onClick={handleDelete}
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
