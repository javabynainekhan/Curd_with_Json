import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled
} from "@mui/material";
import React, { useState } from "react";

import { addUser } from "../../Service/api";

import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUsers = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });
  const OnValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    // if your assing the api data to variable then we can use async and await
    await addUser(user);
    navigate("/allusers");
  };
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", textDecoration: "underline" }}
      >
        ADD USER
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => OnValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => OnValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => OnValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone No</InputLabel>
        <Input onChange={(e) => OnValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};
export default AddUsers;
