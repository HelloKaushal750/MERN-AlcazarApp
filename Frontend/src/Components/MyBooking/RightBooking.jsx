import "./CSS/RightBooking.css";
import { location3 } from "./locationData";

function RightBooking() {
  return (
    <div className="booking_right_container">
      <div
        style={{
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          backgroundColor:"white"
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "20px", fontWeight: "600" }}>
          Flight
        </h1>
        <div className="flight-chart">
          <div>
            <div>
              <p>
                Leave &nbsp;
                <i class="fa-solid fa-plane-up"></i>
              </p>
            </div>
            <div>
              <p>
                <i class="fa-solid fa-plane-up"></i>&nbsp; Return
              </p>
            </div>
          </div>
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            <p>20 June</p> --------->
            <p>25 June</p>
          </div>
          <div>
            <p>9 am</p>
            <p>6 pm</p>
          </div>
        </div>
        <div className="flight-chart" style={{ backgroundColor: "#930145" }}>
          <div>
            <div>
              <p>
                Leave &nbsp;
                <i class="fa-solid fa-plane-up"></i>
              </p>
            </div>
            <div>
              <p>
                <i class="fa-solid fa-plane-up"></i>&nbsp; Return
              </p>
            </div>
          </div>
          <div style={{ fontSize: "18px", fontWeight: "600" }}>
            <p>1 July</p> --------->
            <p>5 July</p>
          </div>
          <div>
            <p>11 am</p>
            <p>9 pm</p>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "14px",
            color: "rgb(97, 96, 96)",
          }}
        >
          <p>
            SHOW MORE FLIGHT &nbsp;&nbsp;&nbsp;
            <i class="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </div>

      {/* Upcoming Trips */}

      <div
        style={{
          marginTop: "20px",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "left",
          paddingBottom:"5px",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          backgroundColor:"white"
        }}
      >
        <h1
          style={{
            textAlign: "left",
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Upcoming Trips
        </h1>
        {location3.map((item) => {
          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "30% 70%",
                gap: "10px",marginBottom:"16px"
              }}
            >
              <div>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "100%", height: "100%", borderRadius: "5px" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ fontSize: "18px", fontWeight: "600" }}>
                  {item.place}
                </h1>
                <p style={{ fontSize: "12px", color: "rgb(96,96,96)" }}>
                  Start From : {item.date}
                </p>
                <p style={{ fontSize: "12px", color: "grey" }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightBooking;
