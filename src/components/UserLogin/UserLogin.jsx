import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./UserLogin.css";
import "../UserSignup/UserSignup.css";
import Footer from "../Footer/Footer";
import AppleIcon from '@mui/icons-material/Apple';
import Logo from "../../assets/Linkedin-logo2.png";
import { ReactComponent as GoogleIcon } from "../../assets/icons-google.svg";
import { ReactComponent as LinkIcon } from "../../assets/link-icon.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUsers } from "../../redux/slice/login/loginAction";
import validator from "validator";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [navigation, setNavigation] = useState(true)

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      setNavigation(true)
    } else {
      setErrorMessage("Is Not a valid Password");
      setNavigation(false)
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleEmail = (e) => {
    setInputs({ ...inputs, email: e.target.value })
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(e.target.value)) {
      setEmailErrorMsg("Please enter a valid email address.");
      setNavigation(false)
    } else {
      setEmailErrorMsg("");
      setNavigation(true)
    };
  };
  const handlePassword = (e) => {
    setInputs({ ...inputs, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(navigation === false){
      alert('Enter Valid Credentials')
    }
    else{
      console.log(inputs);
      dispatch(loginUsers(inputs));
      navigate("/");
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className="login-page"
      style={{ backgroundColor: "#fff" }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "100%",
          marginLeft: "114px",
          marginTop: "32px",
        }}
      >
        <img src={Logo} alt="Logo" className="login-logo" />
      </Stack>

      <Box className="login-form-box">
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          className="login-form"
        >
          <Typography
            align="left"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Sign in
          </Typography>
          <Typography
            paragraph="true"
            align="left"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontSize: "14px",
            }}
          >
            Stay updated on your professional world
          </Typography>

          <form onSubmit={(e) => {handleSubmit(e)}}>
          <TextField
            label="Email"
            // variant="filled"
            sx={{
              width: "100%",
              fontFamily:
                "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ",
              fontWeight: "400",
              fontSize: "32px",
              position: "relative",
              zIndex: "1",
              borderRadius: "4px !important",
              background: "none",
            }}
            value={inputs.email}
            onChange={(e) => {handleEmail(e)}}
          />
          <Typography style={{ color: "red" }}>{emailErrorMsg}</Typography>
          <FormControl sx={{ width: "100%" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>

            <Input
              id="standard-adornment-password"
              inputProps={{
                style: {
                  height: "3px",
                  borderWidth: "1px",
                  padding: "14px 16px 14px 16px",
                },
              }}
              sx={{
                paddingRight: "0",
              }}
            value={inputs.password}
            onChange={(e) => {
              handlePassword(e)
              validate(e.target.value)
            }}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      fontWeight: 500,
                      fontFamily:
                        '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',

                      "&:hover": { background: "none", border: "none" },
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputAdornment>
              }
            />
            <Typography paragraph='true'>
              {errorMessage === "" ? null : (
                <span
                  style={{
                    fontWeight: "normal",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span>
              )}
            </Typography>
          </FormControl>

          <Typography
            align="left"
            sx={{
              color: "#0b66c2",
              fontWeight: "500",
              width: "100%",
              marginTop: "10px",
              cursor: "pointer",
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
            }}
          >
            Forgot password?
          </Typography>

          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              width: "100%",
              boxShadow: "none",
              height: "min-content",
              minHeight: "48px",
              borderRadius: "28px",
              padding: "10px 24px 10px 24px",
              textAlign: "center",
              fontSize: "16px",
              fontWeight: 500,
              marginTop: "20px",
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif',
              backgroundColor: "#0a66c2",
            }}
            type="submit"
          >
            Sign in
          </Button>
          </form>

          {/* <Divider>or</Divider> */}
          <Box className="form-divider">
            <span>
              <span className="divider-line"></span>
            </span>
            <span className="divider-text-content">
              {/* <span className="divider-text">or</span> */}
            </span>
            <p className='login-text'>By clicking to Continue, you agree to the LinkedIn's <span className='login-text-span'>User Agreement</span>, <span className='login-text-span'>Privacy Policy</span>, and <span className='login-text-span'>Cookie Policy</span>.</p>
          </Box>
          <Box className="third-party-container-login">
            <Button
              variant="outlined"
              startIcon={
                <GoogleIcon
                  style={{ width: "21px", height: "21px", minWidth: "18px" }}
                />
              }
              className="third-party-btns"
            >
              Continue with Google
            </Button>
          </Box>
          <Box className="third-party-container-login">
            <Button
              variant="outlined"
              startIcon={
                <AppleIcon
                  style={{ width: "21px", height: "21px", minWidth: "18px" }}
                />
              }
              className="third-party-btns"
            >
              Sign in with Apple
            </Button>
          </Box>
          <Box className="third-party-container-login">
            <Button
              variant="outlined"
              startIcon={
                <LinkIcon
                  style={{ width: "21px", height: "21px", minWidth: "18px" }}
                />
              }
              className="third-party-btns"
            >
              Sign in with a one-time link
            </Button>
          </Box>
          <Box className="third-party-container-login">
            <Button
              variant="outlined"
              className="third-party-btns"
            >
              Sign in with a passkey
            </Button>
          </Box>
        </Stack>
      </Box>
      
      <Box>
        <Typography paragraph={true} className="login-footer-text">New to LinkedIn? <span className="login-footer-text-btn">Join Now</span> </Typography>
      </Box>

      <footer style={{ width: "100%" }}>
        <Footer />
      </footer>
    </Stack>
  );
};

export default UserLogin;
