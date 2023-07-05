import "./CSS/ReviewBooking.css";
import SimpleImageSlider from "react-simple-image-slider";
import {
  Heading,
  Highlight,
  Collapse,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useDisclosure, Button, Box } from "@chakra-ui/react";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const images = [
  {
    url: "https://img.freepik.com/free-photo/breathtaking-scenery-amazing-landscape-view_181624-19152.jpg?size=626&ext=jpg&ga=GA1.1.1765068721.1684903380&semt=location_fest_v1"
  },
  {
    url: "https://img.freepik.com/free-photo/beautiful-landscape-beach-sea-ocean-with-empty-chair-deck-umbrella-nearly-coconut-palm-tree-with-white-cloud-blue-sky_74190-9982.jpg?size=626&ext=jpg&ga=GA1.1.1765068721.1684903380&semt=location_fest_v1",
  },
  {
    url: "https://img.freepik.com/premium-photo/creative-background-red-suitcase-sneakers-plane-blue-background_99433-28.jpg?size=626&ext=jpg&ga=GA1.1.1765068721.1684903380&semt=ais",
  },
  {
    url: "https://img.freepik.com/premium-photo/lover-woman-man-asian-travel-nature-travel-relax-natural-park-moutain-thailand_36074-492.jpg?size=626&ext=jpg&ga=GA1.1.1765068721.1684903380&semt=location_fest_v1",
  },
  // { url: "images/4.jpg" },
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];

function ReviewBooking({ step }) {
  const [discount, setDiscount] = useState(0);
  const [code, setCode] = useState("");
  const [status, setStatus] = useState(false);
  const [codeStatus, setCodeStatus] = useState();
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const bookedData = useSelector((state) => {
    return state.bookingData;
  });
  console.log(bookedData);

  const promoCode = useSelector((state) => {
    return state.promocode;
  });

  const handleCheck = () => {
    console.log(code, promoCode);
    setStatus(true);
    if (code === promoCode) {
      setCodeStatus(true);
      let newTotal = 0.7 * bookedData.pricewithpassengers;
      let grandTotal = newTotal.toFixed(2);
      let newTotalP = (bookedData.pricewithpassengers - newTotal)
      let discountedAmount = newTotalP.toFixed(2)
      setDiscount(discountedAmount);
      dispatch({ type: "BOOKINGDATA", payload: {...bookedData,pricewithpassengers:grandTotal} });

    } else {
      setCodeStatus(false);
    }
    setCode("");
  };

  return (
    <div className="review-booking-container">
      <div className="container-left">
        <h1 className="heading1">Booking Summary</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ fontWeight: "600", fontSize: "20px" }}>
            {bookedData.location} for All -{" "}
          </h3>
          <Heading size={10} textAlign={"left"} fontWeight={"600"}>
            <Highlight
              query={bookedData.type}
              styles={{ px: "2", py: "1", rounded: "full", bg: "green.100" }}
            >
              {bookedData.type}
            </Highlight>
          </Heading>
          <h3 style={{ color: "grey", fontSize: "15px" }}>
            {" "}
            - 5 Nights 6 Days
          </h3>
        </div>
        <div style={{ marginTop: "20px" }}>
          <table style={{ textAlign: "left", fontSize: "16px" }}>
            <tbody>
              <tr>
                <td>Starting From</td>
                <td style={{ color: "rgb(98, 96, 96)" }}>Main Square, Old Town</td>
              </tr>
              <tr>
                <td>Package Type</td>
                <td style={{ color: "rgb(98, 96, 96)" }}>{bookedData.type}</td>
              </tr>
              <tr>
                <td>Date of Travel</td>
                <td style={{ color: "rgb(98, 96, 96)" }}>
                  {bookedData.date}
                </td>
              </tr>
              <tr>
                <td>No. of Travellers</td>
                <td style={{ color: "rgb(98, 96, 96)" }}>
                  {bookedData.tickets} Adults
                </td>
              </tr>
              <tr>
                <td>Promo Code</td>
                <td
                  style={{
                    color: "rgb(98, 96, 96)",
                    display: "flex",
                    alignItems: "baseline",
                  }}
                >
                  <Input
                    size="sm"
                    fontSize={16}
                    variant="flushed"
                    value={code}
                    placeholder="Enter Code Here..."
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  />
                  <Button
                    onClick={handleCheck}
                    style={{
                      padding: "10px",
                      fontSize: "12px",
                      height: "12px",
                      color:"black"
                    }}
                    isDisabled={codeStatus === true}
                  >
                    Submit
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ marginBottom: "20px" }}>
          {status ? (
            codeStatus ? (
              <Alert
                status="success"
                backgroundColor={"white"}
                color={"green"}
                p={0}
                fontSize={"12px"}
              >
                <AlertIcon fontSize={"12px"} />
                Congratulation you got 30% discount
              </Alert>
            ) : (
              <Alert
                status="error"
                backgroundColor={"white"}
                color={"red"}
                p={0}
                fontSize={"12px"}
              >
                <AlertIcon fontSize={"12px"} />
                Invalid Promo Code
              </Alert>
            )
          ) : null}
        </div>
        <div>
          <table>
            <tbody
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginTop: "-15px",
                fontWeight: "600",
              }}
            >
              <tr>
                <td>Grand Total</td>
                <td>$ {bookedData.pricewithpassengers}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Button
            style={{
              display: "flex",
              justifyContent: "left",
              fontSize: "16px",
              height: "30px",
              color:"rgb(28,160,227)"
            }}
            onClick={onToggle}
          >
            Fare Break Up
          </Button>
          <Collapse in={isOpen} animateOpacity>
            <Box
              pb="-5px"
              pl={2}
              color="black"
              mt="4"
              bg="rgb(237,242,247)"
              rounded="md"
              shadow="md"
            >
              <table>
                <tbody style={{ textAlign: "left", fontSize: "16px" }}>
                  <tr>
                    <td>Total Tour Cost</td>
                    <td>$ {bookedData.pricewithpassengers}</td>
                  </tr>
                  <tr>
                    <td>Additional Discount</td>
                    <td>$ {discount}</td>
                    <td style={{ color: "blue", fontSize: "12px" }}>
                      (Use PromoCode to get 30% discount)
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
          </Collapse>
        </div>
        <div style={{ display: "flex", justifyContent: "right", gap: "10px" }}>
          {step === 1 && (
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
          )}
          <Button
            onClick={() => {
              dispatch({ type: "UPDATE_STEP", payload: 1 });
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
        </div>
      </div>
      <div className="container-right">
        <SimpleImageSlider
          width="38.6%"
          height={490}
          images={images}
          showBullets={true}
          slideDuration={1}
          autoPlay={true}
          autoPlayDelay={2}
        />

      </div>
    </div>
  );
}

export default ReviewBooking;
