import React from "react";
import { Image, Box, Flex, Button } from "@chakra-ui/react";

import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch()
  const firstbtn = useSelector((state)=>{
    return state.firstBtn;
  })
  const secondBtn = useSelector((state)=>{
    return state.secondBtn;
  })
  return (
    <div className="NavbarDiv">
      <Box w={"100%"} style={{ padding: "10px" }}>
        <Box display={"block"} alignItems={"center"}>
          <Flex justifyContent={"space-evenly"} alignItems={"center"} style={{fontWeight:"400"}}>
            <Image w={"110px"} src="icon.png" />
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px"}}>
              <Link>Download App</Link>
              <Link>Partner With Us</Link>
              <Link>Installment</Link>
              <Link>Saved</Link>
              <Link to={'/booking'}>My Booking</Link>
            </div>
          
            <Flex alignItems={"center"} gap={"30px"}>
              <Link to={"/signup"}>
                <Button _hover={"none"} style={{padding:"5px",height:"30px",border:"none"}} variant='outline'>{secondBtn?"SignUp" : `${firstbtn}`}</Button>
              </Link>
              {
                secondBtn ? <Link to="/login">
                <Button style={{padding:"5px",height:"30px",border:"none"}} _hover={"none"} variant='outline'>Login</Button>
              </Link> : <Button onClick={()=>{dispatch({type:"SECONDBTN",payload:true})}} _hover={"none"}  style={{padding:"5px",height:"30px",border:"none"}} variant='outline'>LogOut</Button>
              }
            </Flex>
          </Flex>
        </Box>
      </Box>

      <div className="headss">
        <div className="headingAA">
        <h1>
          Travel around the world
        </h1>
        </div>
        <div className="headingAB">
        <h4>Trusted by 80 million Travelers, Aalcazar is the world's most copetetive travel, flight</h4>
        <h4>and accommodation provider, very easy to access on your smarttree and desktop</h4>
        </div>    
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
