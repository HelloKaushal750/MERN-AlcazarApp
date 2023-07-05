import {
  Button,
  Input
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CSS/Payment.css";
import {
  useToast,
} from "@chakra-ui/react";

function Payment({onOpen}) {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cvvNumver: "",
    month: "",
    year: "",
    firstName: "",
    lastName: "",
  });

  const cardDetail = useSelector((state) => {
    return state.cardDetail;
  });

  const checkCardDetail = (toast) => {
    if (
      cardData.cardNumber === "" ||
      cardData.cvvNumver === "" ||
      cardData.month === "" ||
      cardData.year === "" ||
      cardData.firstName === "" ||
      cardData.lastName === ""
    ) {
      toast({
        title: `Kindly fill all the input boxes`,
        position: "top",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (
      cardDetail.cardNo === cardData.cardNumber &&
      cardDetail.cvv === cardData.cvvNumver
    ) {
      toast({
        title: `Card Detail Found`,
        position: "top",
        description: "Please click on Send OTP",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setState(true);
      setCardData({
        cardNumber: "",
        cvvNumver: "",
        month: "",
        year: "",
        firstName: "",
        lastName: "",
      });
    } else {
      toast({
        title: `No Card Detail Found`,
        position: "top",
        description: "Please check the CardNo. or CVV (111111111111, 111)",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="payment-booking-container">
      <div className="payment-container-left">
        <img src="payment.png" alt="" style={{width:"100%",height:"100%",borderRadius:"10px 0 0 10px"}} />
      </div>
      <div className="payment-container-right">
        <h1
          style={{
            textAlign: "left",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "25px",
          }}
        >
          Payment
        </h1>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              textAlign: "left",
              fontWeight: "600",
              marginBottom: "10px",
              fontSize: "16px",
            }}
          >
            Add new credit or debit card
          </h3>
          <h3 style={{ color: "grey" }}>
            <i className="fa-solid fa-lock"></i> Secure
          </h3>
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="logo-div">
            <div>
              <img
                src="https://www.sephora.com/img/ufe/payments/visa.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.sephora.com/img/ufe/payments/masterCard.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.sephora.com/img/ufe/payments/americanExpress.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.sephora.com/img/ufe/payments/sephora.svg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://www.sephora.com/img/ufe/payments/discover.svg"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              height: "250px",
              width: "100%",
              padding: "0 20px",
              gap: "10px",
            }}
          >
            <h1
              style={{
                textAlign: "left",
                marginBottom: "10px",
                color: "rgb(28,160,227)",
                fontSize: "16px",
              }}
            >
              Enter Card Details:
            </h1>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <div>
                <Input
                  size="md"
                  variant="outline"
                  placeholder="Card Number*"
                  maxLength={12}
                  onInput={(e) => {
                    setCardData({ ...cardData, cardNumber: e.target.value });
                  }}
                  value={cardData.cardNumber}
                />
              </div>

              <div style={{ width: "50%", display: "flex", gap: "10px" }}>
                <Input
                  size="md"
                  variant="outline"
                  placeholder="MM*"
                  maxLength={2}
                  onInput={(e) => {
                    setCardData({ ...cardData, month: e.target.value });
                  }}
                  value={cardData.month}
                />
                <Input
                  size="md"
                  variant="outline"
                  placeholder="YY*"
                  maxLength={2}
                  onInput={(e) => {
                    setCardData({ ...cardData, year: e.target.value });
                  }}
                  value={cardData.year}
                />
              </div>
              <div style={{ width: "50%" }}>
                <Input
                  size="md"
                  variant="outline"
                  placeholder="CVV*"
                  maxLength={3}
                  onInput={(e) => {
                    setCardData({ ...cardData, cvvNumver: e.target.value });
                  }}
                  value={cardData.cvvNumver}
                />
              </div>

              <div style={{ display: "flex", gap: "10px", width: "102%" }}>
                <Input
                  size="md"
                  variant="outline"
                  placeholder="First Name*"
                  onInput={(e) => {
                    setCardData({ ...cardData, firstName: e.target.value });
                  }}
                  value={cardData.firstName}
                />
                <Input
                  size="md"
                  variant="outline"
                  placeholder="Last Name*"
                  onInput={(e) => {
                    setCardData({ ...cardData, lastName: e.target.value });
                  }}
                  value={cardData.lastName}
                />
              </div>
              <div>
                {!state ? (
                  <Button
                    style={{
                      backgroundColor: "rgb(237,242,247)",
                      borderRadius: "10px",
                      color: "black",
                      fontSize: "16px",
                      width: "80px",
                      marginTop: "15px",
                    }}
                    onClick={() => {
                      checkCardDetail(toast);
                    }}
                  >
                    Verify
                  </Button>
                ) : (
                  <Button
                    style={{
                      backgroundColor: "rgb(237,242,247)",
                      borderRadius: "10px",
                      color: "black",
                      fontSize: "16px",
                      width: "80px",
                      marginTop: "15px",
                    }}
                    onClick={() =>
                      toast({
                        title: 'OTP sent Successfully to your Registered Mobile Number',
                        description:'Please click on Next for further steps',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                      })
                    }
                  >
                    Send OTP
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            marginTop: "40px",
          }}
        >
          <Button
            onClick={() => {
              dispatch({ type: "UPDATE_STEP", payload: -1 });
            }}
            style={{
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "20px",
              color: "white",
              fontSize: "16px",
              width: "80px",
            }}
          >
            Previous
          </Button>
          &nbsp;&nbsp;
          {state && (
            <Button
              onClick={() => {
                dispatch({ type: "UPDATE_STEP", payload: 1 });
                onOpen();
              }}
              style={{
                backgroundColor: "rgb(28,160,227)",
                borderRadius: "20px",
                color: "white",
                fontSize: "16px",
                width: "80px",
              }}
            >
              Next
            </Button>
           )}
        </div>
      </div>
    </div>
  );
}

export default Payment;
