import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
  styled
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { getUser, editUser } from "../../Service/api";

import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
  });
  const OnValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await getUser(id);
    // console.log(response);
    setUser(response.data);
  };

  const addUserDetails = async () => {
    // if your assing the api data to variable then we can use async and await
    await editUser(user, id);
    navigate("/allusers");
  };
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", textDecoration: "underline" }}
      >
        Edit USER
      </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => OnValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => OnValueChange(e)}
          name="username"
          value={user.username}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => OnValueChange(e)}
          name="email"
          value={user.email}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Phone No</InputLabel>
        <Input
          onChange={(e) => OnValueChange(e)}
          name="phone"
          value={user.phone}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};
export default EditUsers;
