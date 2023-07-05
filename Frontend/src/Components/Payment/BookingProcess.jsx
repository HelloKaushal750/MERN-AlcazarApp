import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import React from "react";
import { useSelector } from "react-redux";
import OtpVerification from "./OtpVerification";
import ReviewBooking from "./ReviewBooking";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import "./CSS/BookingProcess.css";
import ShortNavbar from "../Navbar/ShortNavbar";

const steps = [
  { title: "Review Booking", description: "Step 1" },
  { title: "Payment", description: "Step 2" },
  { title: "OTP Verification", description: "Step 3" },
  { title: "Confirmation", description: "Step 4" },
];

function BookingProcess() {
  const step = useSelector((state) => {
    return state.step;
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  useEffect(() => {
    
    setActiveStep(step);
  }, [step]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <div>
      <div style={{backgroundColor:"rgb(28,160,227)",color:"white"}}>
      <ShortNavbar />
      </div>
      <div className="booking-process-container">
        <Heading as="h2" size="md" marginBottom={10}>
          Book your Holidays in 4 Simple Steps
        </Heading>
        <Stepper
          style={{ padding: "0 200px" }}
          size={"lg"}
          index={activeStep}
          colorScheme="black"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon values="1" />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        <div>
          {step === 0 ? (
            <ReviewBooking step={step} />
          ) : step === 1 ? (
            <Payment onOpen={onOpen} />
          ) : step === 2 ? (
            <OtpVerification
              finalRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
            />
          ) : (
            <Confirmation step={step} />
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingProcess;
