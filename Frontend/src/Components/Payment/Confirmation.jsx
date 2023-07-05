import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./CSS/Confirmation.css";
import { Link } from "react-router-dom";

function Confirmation() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => {
    return state.bookingData;
  });

  const step = useSelector((state)=>{
    return state.step
  })
  const [date, setDate] = useState();
  useEffect(() => {
    dispatch({ type: "BOOKINGHISTORY", payload: bookingData });
    setDate(Date.now());
  }, []);
  console.log(step);
  return (
    <div className="confirm-main-div">
      <div className="confirm-left-div">
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          <i className="fa-regular fa-circle-check" id="icon-successful"></i>
        </div>
        <h1 style={{ fontSize: "25px", fontWeight: "600" }}>Congratulations</h1>
        <p
          style={{
            width: "60%",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          Your transaction has been processed. Thankyou for choosing Alcazar
          Travel Agency.
        </p>
        <Link to="/">
          <Button
            style={{
              backgroundColor: "rgb(28,160,227)",
              borderRadius: "20px",
              color: "white",
              fontSize: "14px",
              wclassNameth: "80px",
            }}
            onClick={()=>{dispatch({ type: "UPDATE_STEP", payload: -4 });}}
          >
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="confirm-right-div">
        <div
          style={{
            textAlign: "left",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontSize: "25px", fontWeight: "600", color: "black" }}>
            Payment Information
          </h1>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "rgb(28,160,227)",
            }}
          >
            Alcazar
          </h1>
        </div>
        <div>
          <table>
            <tbody className="tableBody" style={{ textAlign: "left" }}>
              <tr>
                <td>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    ORDER NUMBER
                  </p>
                  <p>226622-2023-05-20T21-31-20</p>
                </td>
                <td>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    DATE
                  </p>
                  <p>{bookingData.date}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    STORE NAME
                  </p>
                  <p>ALCAZAR TRAVELS</p>
                </td>
                <td>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    AMOUNT
                  </p>
                  <p>$ {bookingData.pricewithpassengers}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ textAlign: "left" }}>
          <h1 style={{ fontSize: "14px", color: "black", fontWeight: "600" }}>
            SUMMARY
          </h1>
          <p>ALCAZAR - #{date}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "16px", color: "black" }}>
              Get our assistance for any query
            </h1>
            <button style={{ fontSize: "18px" }}>
              <i class="fa-solid fa-phone"></i>&nbsp; Want us to call you ?
            </button>
          </div>
          <div>
            <h1 style={{ fontSize: "16px", color: "black" }}>
              Call us at (Toll Free No.)
            </h1>
            <h1 style={{ fontSize: "18px" }}>1800-209-3344</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
