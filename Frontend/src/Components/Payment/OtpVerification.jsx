import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/OtpVerification.css";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
} from "@chakra-ui/react";

function OtpVerification({ finalRef, isOpen, onClose }) {
  const [state, setState] = useState(false);
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });
  const optData = useSelector((state) => {
    return state.otp;
  });
  const dispatch = useDispatch();
  const toast = useToast();
  const checkOTP = () => {
    if (
      otp.first === optData.f &&
      otp.second === optData.s &&
      otp.third === optData.t &&
      otp.fourth === optData.fo &&
      otp.fifth === optData.fi
    ) {
      dispatch({ type: "UPDATE_STEP", payload: 2 });
      setState(true);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Correct OTP: 11111",
        position: "top",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setOtp({ first: "", second: "", third: "", fourth: "", fifth: "" });
    }
  };

  return (
    <Container>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={170}>
          <ModalHeader>OTP Verification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="Container">
              <h1 style={{ marginBottom: "10px", fontWeight: "600" }}>
                Enter the OTP(One Time Password) which sent to your mobile number.
              </h1>
              <div className="UserInput">
                <input
                  type="Text"
                  className="otpInput"
                  maxLength="1"
                  onChange={(e) => {
                    setOtp({ ...otp, first: e.target.value });
                  }}
                  value={otp.first}
                />
                <input
                  type="Text"
                  className="otpInput"
                  maxLength="1"
                  onChange={(e) => {
                    setOtp({ ...otp, second: e.target.value });
                  }}
                  value={otp.second}
                />
                <input
                  type="Text"
                  className="otpInput"
                  maxLength="1"
                  onChange={(e) => {
                    setOtp({ ...otp, third: e.target.value });
                  }}
                  value={otp.third}
                />
                <input
                  type="Text"
                  className="otpInput"
                  maxLength="1"
                  onChange={(e) => {
                    setOtp({ ...otp, fourth: e.target.value });
                  }}
                  value={otp.fourth}
                />
                <input
                  type="Text"
                  className="otpInput"
                  maxLength="1"
                  onChange={(e) => {
                    setOtp({ ...otp, fifth: e.target.value });
                  }}
                  value={otp.fifth}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="ghost"
              onClick={() => {
                checkOTP();
              }}
              style={{
                backgroundColor: "rgb(28,160,227)",
                borderRadius: "20px",
                color: "white",
                fontSize: "16px",
                width: "80px",
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default OtpVerification;
