import "./CSS/MidSectionHome.css";
import { feedBackData } from "../MyBooking/locationData";
import { Avatar } from "@chakra-ui/react";

function MidSectionHome() {
  return (
    <div className="mid_section">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "120px",
        }}
      >
        <div style={{ height: "350px", padding: "30px 30px 10px 30px" }}>
          <img
            src="photo1.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ padding: "50px", textAlign: "left" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
            Safely Saved Lists
          </h1>
          <p style={{ color: "rgb(132, 148, 168)", marginTop: "20px" }}>
            Neatly arranged for your ease of access. Go to saved at the top
            navigation abr, where we save your saved items. We group them based
            on category. Just a few clicks away from starting your journey! Whwn
            you want to make a purchase from saved.
          </p>
          <button
            style={{
              marginTop: "40px",
              width: "130px",
              padding: "10px",
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Read More
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "120px",
        }}
      >
        <div style={{ padding: "50px", textAlign: "left", marginTop: "20px" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
            Flight Price Alert
          </h1>
          <p style={{ color: "rgb(132, 148, 168)", marginTop: "20px" }}>
            Instance Notifications you will get alerted as soon as the flight's
            prices match your budget, so you will be able to book the right
            flight at the right time. You only need to fill in the details of
            your desired flight, such as time of departure.
          </p>
          <button
            style={{
              marginTop: "40px",
              width: "130px",
              padding: "10px",
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Find It Here
          </button>
        </div>
        <div style={{ height: "350px", padding: "30px 30px 10px 40px" }}>
          <img
            src="photo2.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "120px",
        }}
      >
        <div style={{ height: "350px", padding: "30px 30px 10px 30px" }}>
          <img
            src="photo3.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ padding: "50px", textAlign: "left", marginTop: "20px" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
            Passenger Quick Pick
          </h1>
          <p style={{ color: "rgb(132, 148, 168)", marginTop: "20px" }}>
            Fill the passenger details now, pick passengers quickly later.
            Passenger Quick Pick saves you the hassle of entering the same
            passenger details every time you book.
          </p>
          <button
            style={{
              marginTop: "40px",
              width: "130px",
              padding: "10px",
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Check It Out
          </button>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "120px",
          marginTop: "10px",
        }}
      >
        <div style={{ padding: "50px", textAlign: "left", marginTop: "20px" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
            Easy Reschedule
          </h1>
          <p style={{ color: "rgb(132, 148, 168)", marginTop: "20px" }}>
            No more chasing after the airline. Changing your flight is only a
            matter of a few clicks. Easy Reschedule utlimately saves your time!
            Open your e-ticket. Through My Booking, open the e-ticket of the
            flight you want to reschedule.
          </p>
          <button
            style={{
              marginTop: "40px",
              width: "130px",
              padding: "10px",
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Read More
          </button>
        </div>
        <div style={{ height: "350px", padding: "30px 30px 10px 40px" }}>
          <img
            src="photo4.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "120px",
          marginTop: "10px",
        }}
      >
        <div style={{ height: "350px", padding: "30px 30px 10px 30px" }}>
          <img
            src="photo5.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ padding: "50px", textAlign: "left", marginTop: "20px" }}>
          <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
            Stay Guarantee
          </h1>
          <p style={{ color: "rgb(132, 148, 168)", marginTop: "20px" }}>
            How to Claim Stay Guarantee with ease follow the 4 steps below. Open
            your Traveloka App (minimum version 2.9), On the homepage, tap the
            My Booking menu at the bottom of the page. View your ...
          </p>
          <button
            style={{
              marginTop: "40px",
              width: "130px",
              padding: "10px",
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "30px",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Read More
          </button>
        </div>
      </div>

      {/* Feedback */}
      <div style={{ marginTop: "50px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "15% 70% 15%" }}>
          <div>
            <img src="arrowLeft.png" alt="" />
          </div>
          <div>
            <h1 style={{ fontSize: "35px", fontWeight: "600" }}>
              Satisfied Customers Are Our Best Ads
            </h1>
          </div>
          <div>
            <img src="arrowRight.png" alt="" />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            marginTop: "50px",
            gap: "40px",
          }}
        >
          {feedBackData.map((data,i) => {
            return (
              <div key={i}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80% 20%",
                    color: "rgb(132, 148, 168)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",

                      gap: "10px",
                    }}
                  >
                    <Avatar src={data.image}></Avatar>
                    <div style={{ textAlign: "left" }}>
                      <h1
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        {data.name}
                      </h1>
                      <p style={{ fontSize: "14px" }}>{data.designation}</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i class="fa-solid fa-star" style={{ color: "orange" }}></i>
                    &nbsp;&nbsp;
                    <h1>{data.rating}</h1>
                  </div>
                </div>
                <hr
                  style={{ marginTop: "15px", color: "rgb(132, 148, 168)" }}
                />
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    color: "rgb(132, 148, 168)",
                    marginTop: "15px",
                  }}
                >
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{marginTop:'100px'}}>
          <img
            src="photo6.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MidSectionHome;
