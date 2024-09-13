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

interface IInfo {
  name: string;
  email: string;
  message: string;
  phone: string;
  buttonText: string;
  agreement: boolean;
}

export default function Feedback() {
  const [open, setOpen] = useState<boolean>(false);
  const [info, setInfo] = useState<IInfo>({
    name: "",
    email: "",
    message: "",
    phone: "",
    buttonText: "Submit",
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
    setInfo({ ...info, buttonText: "...sending" });
  };

  const handleDelete = () => {
    setInfo({
      name: "",
      email: "",
      message: "",
      phone: "",
      buttonText: "Submit",
      agreement: false,
    });
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 4 }}>
        Or you can fill out the feedback form and I will contact you
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
            placeholder="Name"
          />
          <Input
            value={phone}
            onChange={handleChange("phone")}
            type="tel"
            placeholder="Phone number"
          />
          <Input
            value={email}
            onChange={handleChange("email")}
            type="email"
            placeholder="E-mail"
          />
          <TextField
            value={message}
            onChange={handleChange("message")}
            id="standard-multiline-static"
            label="Your message"
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
            label="I hereby agree to the Terms of processing of my personal data."
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
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
