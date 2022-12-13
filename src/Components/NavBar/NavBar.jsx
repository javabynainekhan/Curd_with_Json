import { AppBar, styled, Toolbar} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const AppBarStyles = styled(AppBar)`
  background: linear-gradient(283.95deg, red -12.57%, blue 126.88%);
`;
const NavLinkStyles = styled(NavLink)`
  font-size: 25px;
  margin-right: 20px;
  color: orange;
  text-decoration: none;
`;
const kickimg =
  "https://w7.pngwing.com/pngs/757/365/png-transparent-kick-buttowski-drawing-cartoon-television-others-miscellaneous-white-text.png";
const NavBar = () => {
  return (
    <div>
      {/* <AppBar> */}
      <AppBarStyles position="static">
        <Toolbar>
          <NavLinkStyles to="/">
            <img
              src={kickimg}
              alt="this is Kick pic"
              width="40px"
              height="40px"
              style={{ borderRadius: "50%" }}
            />
          </NavLinkStyles>
          <NavLinkStyles to="/">Code With Julkhair</NavLinkStyles>
          <NavLinkStyles to="/allusers">All User's</NavLinkStyles>
          <NavLinkStyles to="addusers">Add User's</NavLinkStyles>
        </Toolbar>
      </AppBarStyles>
      {/* </AppBar> */}
    </div>
  );
};
export default NavBar;
