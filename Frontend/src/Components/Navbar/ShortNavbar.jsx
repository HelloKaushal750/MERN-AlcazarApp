import { Image, Box, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ShortNavbar.css";
import { useSelector, useDispatch } from "react-redux";

function ShortNavbar() {
  const dispatch = useDispatch();
  const firstbtn = useSelector((state) => {
    return state.firstBtn;
  });
  const secondBtn = useSelector((state) => {
    return state.secondBtn;
  });
  return (
    <div className="shortnavdiv">
      <Box w={"100%"} style={{ padding: "10px" }}>
        <Box display={"block"} alignItems={"center"}>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            style={{ fontWeight: "400" }}
          >
            <div style={{ fontSize: "18px" }}>
              <i class="fa-solid fa-plane-up"></i>&nbsp;&nbsp;
              <Link to={"/"}>Alcazar</Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Link>Download App</Link>
              <Link>Partner With Us</Link>
              <Link>Installment</Link>
              <Link>Saved</Link>
              <Link to={"/booking"}>My Booking</Link>
            </div>

            <Flex alignItems={"center"} gap={"30px"}>
              <Link to={"/signup"}>
                <Button
                  _hover={"none"}
                  style={{ padding: "5px", height: "30px", border: "none" }}
                  variant="outline"
                >
                  {secondBtn ? "SignUp" : `${firstbtn}`}
                </Button>
              </Link>
              {secondBtn ? (
                <Link to="/login">
                  <Button
                    style={{ padding: "5px", height: "30px", border: "none" }}
                    _hover={"none"}
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => {
                    dispatch({ type: "SECONDBTN", payload: true });
                  }}
                  _hover={"none"}
                  style={{ padding: "5px", height: "30px", border: "none" }}
                  variant="outline"
                >
                  LogOut
                </Button>
              )}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default ShortNavbar;
