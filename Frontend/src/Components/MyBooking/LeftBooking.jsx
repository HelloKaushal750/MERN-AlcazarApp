import {
  Button,
  Collapse,
  useDisclosure,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./CSS/LeftBooking.css";
import { location, location2 } from "./locationData";
import { Link } from "react-router-dom";

function LeftBooking() {
  const { isOpen, onToggle } = useDisclosure();
  const [display, setDisplay] = useState(true);
  const userName = useSelector((state) => {
    return state.userName;
  });

  return (
    <div className="booking_left_container">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginLeft: "-7px",
        }}
      >
        <div style={{ width: "30%" }}>
          <Avatar
            size={"lg"}
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.1765068721.1684903380&semt=sph"
          >
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </div>
        <div style={{ textAlign: "left" }}>
          <h3 style={{ fontSize: "25px", fontWeight: "600" }}>{userName}</h3>
          <p style={{ color: "rgb(77, 76, 76)" }}>Mumbai, India</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
          marginBottom: "40px",
        }}
      >
        <Button
          style={{
            backgroundColor: "rgb(28,160,227)",
            color: "white",
            paddingLeft: "-10px",
            width: "80%",
          }}
        >
          <Link to={'/'}>
            <div
              style={{
                marginLeft: "-50px",
                display: "flex",
                gap: "20px",
                fontSize: "16px",
                alignItems: "center",
              }}
            >
              <i class="fa-solid fa-house-chimney"></i>
              <h3>Homepage</h3>
            </div>
          </Link>
        </Button>
        <Button
          style={{
            backgroundColor: "white",
            color: "rgb(77, 76, 76)",
            padding: "8px",
            width: "80%",
          }}
        >
          <div
            style={{
              marginLeft: "-25px",
              display: "flex",
              gap: "20px",
              fontSize: "16px",
              alignItems: "center",
            }}
          >
            <i class="fa-solid fa-user-group"></i>
            <h3>Mutual Tourist</h3>
          </div>
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <h4
            style={{
              color: "rgb(77, 76, 76)",
              textAlign: "left",
              fontWeight: "600",
            }}
          >
            OUR NEW DESTINATION
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            paddingLeft: "10px",
          }}
        >
          {location.map((ele, i) => {
            if (i < 5) {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    fontSize: "18px",
                    gap: "20px",
                    alignItems: "center",
                  }}
                >
                  <i
                    class="fa-solid fa-location-crosshairs"
                    style={{ color: `${ele.color}`, fontSize: "30px" }}
                  ></i>
                  <h3>{ele.place}</h3>
                </div>
              );
            } else if (i === 5) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "left",
                    width: "80%",
                  }}
                >
                  {display && (
                    <Button
                      colorScheme="white"
                      onClick={() => {
                        onToggle();
                        setDisplay(false);
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                          marginLeft: "-60px",
                          color: "black",
                          alignItems: "center",
                        }}
                      >
                        <i class="fa-solid fa-angle-down"></i> Show More
                      </div>
                    </Button>
                  )}
                  <Collapse in={isOpen} animateOpacity>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      {location2.map((ele) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              fontSize: "18px",
                              gap: "20px",
                              alignItems: "center",
                            }}
                          >
                            <i
                              class="fa-solid fa-location-crosshairs"
                              style={{
                                color: `${ele.color}`,
                                fontSize: "30px",
                              }}
                            ></i>
                            <h3>{ele.place}</h3>
                          </div>
                        );
                      })}
                    </div>
                  </Collapse>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px",
          marginBottom: "0px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          width={"100%"}
          style={{ borderRadius: "10px" }}
        />
        <h1
          style={{
            color: "rgb(28,160,227)",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Get Premium
        </h1>
        <p>Lots of Service</p>
        <button
          style={{
            backgroundColor: "rgb(28,160,227)",
            borderRadius: "20px",
            color: "white",
            fontSize: "16px",
            padding: "5px",
            width: "150px",
            fontWeight: "600",
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

export default LeftBooking;
