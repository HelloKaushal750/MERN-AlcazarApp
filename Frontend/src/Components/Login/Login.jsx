import {
  Box,
  Button,
  FormControl,
  Text,
  Heading,
  Image,
  Input,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./login.module.css";

import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { signUpData } = useSelector((store) => {
    return store;
  });

  // const calling = () => {
  //   navigate("/");
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(signUpData);
    if (Login.email === "" || Login.password === "") {
      return alert("Please Insert email & password");
    }
    signUpData.map((ele) => {
      if (ele.email === Login.email && ele.password === Login.password) {
        onOpen();
        const arr = ele.name.split(" ");
        dispatch({ type: "FIRSTBTN", payload: `Hello ${arr[0]}` });
        dispatch({ type: "SECONDBTN", payload: false });
        dispatch({ type: "USERNAME", payload: arr[0] });
        // calling();
      } else if (ele.email !== Login.email || ele.password !== Login.password) {
        alert("Wrong Credentials");
      }
    });
  };
  return (
    <div className={styles.background}>
      <Box>
        <Box
          display={"flex"}
          padding={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link to={"/"}>
            <Image src="icon.png" w={"160px"} />
          </Link>

          <Link to={"/signup"}>
            <Text marginRight={"10px"} fontSize={"20px"} color={"white"}>
              Signup
            </Text>
          </Link>
        </Box>
        <Box width={"25%"} margin={"auto"} padding={"14px"} color={"white"}>
          <form onSubmit={handleLogin}>
            <Heading fontSize={"27px"} mb={"40px"} color={"white"}>
              Login to Alcazar
            </Heading>

            <FormControl display={"flex"} flexDirection={"column"} gap={"10px"}>
              <Input
                type="email"
                _placeholder={{ color: "white" }}
                onChange={(e) => {
                  setLogin({ ...Login, email: e.target.value });
                }}
                placeholder="Email"
              />
              <Input
                type="password"
                _placeholder={{ color: "white" }}
                placeholder="Confirm Password"
                onChange={(e) => {
                  setLogin({ ...Login, password: e.target.value });
                }}
              />

              <Button
                borderRadius={"20px"}
                type="submit"
                fontWeight={"light"}
                bg={"blue.400"}
                _hover={"none"}
                border={"1px solid"}
                color={"white"}
              >
                Log In
              </Button>
            </FormControl>
          </form>
        </Box>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
              <AlertDialogHeader
                fontSize="lg"
                fontWeight="bold"
                color={"green"}
                w={"80%"}
              >
                Login Successful
              </AlertDialogHeader>

              <AlertDialogFooter w={"20%"}>
                <Link to={"/"}>
                  <Button colorScheme="green" onClick={onClose} ml={3}>
                    Ok
                  </Button>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </div>
  );
};

export default Login;
