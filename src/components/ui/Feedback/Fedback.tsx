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

interface Input {
  text: string;
  tel: string;
  email: string;
  textarea: string;
  agreement: boolean;
}

export default function Feedback() {
  const [open, setOpen] = useState<boolean>(false);
  const [input, setInput] = useState<Input>({
    text: "a",
    tel: "b",
    email: "c",
    textarea: "d",
    agreement: false,
  });
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value: string = e.target.value;
    input[e.target.type] = value;
    // setInput(input[e.target.type]);
    // console.log(e.target.type);
    console.log(setInput(input));
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSend = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const form = e.target;
    // const formData = new FormData(form);
    console.log(e.currentTarget.value);
  };

  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("delete");
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Feedback"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box} component="form">
          <Input onChange={handleInput} placeholder="Name" />
          <Input onChange={handleInput} type="tel" placeholder="Phone number" />
          <Input onChange={handleInput} type="email" placeholder="E-mail" />
          <TextField
            onChange={handleInput}
            id="standard-multiline-static"
            label="Your message"
            multiline
            rows={6}
            variant="standard"
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="I hereby agree to the Terms of processing of my personal data."
          />
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              onClick={handleSend}
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
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
