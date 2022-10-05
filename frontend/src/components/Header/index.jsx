import React, {useState} from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import {NavLink} from "react-router-dom";

const Index = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{background: "black"}}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{transform: "scale(2)"}}/>
          {isMatch ? (
            <>
              <Typography sx={{fontSize: "2rem", paddingLeft: "10%"}}>
                PYP Frontend
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                sx={{marginLeft: "auto"}}
                indicatorColor="secondary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label={<NavLink style={{color: "white"}} className={({isActive}) => (isActive ? "active" : "")}
                                     to="/">Home</NavLink>}/>
                <Tab label={<NavLink style={{color: "white"}} className={({isActive}) => (isActive ? "active" : "")}
                                     to="/about">About</NavLink>}/>
                <Tab label={<NavLink style={{color: "white"}} className={({isActive}) => (isActive ? "active" : "")}
                                     to="/users">Users</NavLink>}/>
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Index;
