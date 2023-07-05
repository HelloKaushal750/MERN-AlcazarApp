import "./CSS/MyBooking.css";
import LeftBooking from "./LeftBooking";
import MiddleBooking from "./MiddleBooking";
import RightBooking from "./RightBooking";
import ShortNavbar from "../Navbar/ShortNavbar";

function MyBooking() {
  return (
    <div>
      <div style={{backgroundColor:"rgb(28,160,227)",color:"white"}}>
        <ShortNavbar />
      </div>
      <div className="booking_main_container">
        {/* Left */}
        <LeftBooking />

        {/* Middle */}
        <MiddleBooking />

        {/* Right */}
        <RightBooking />
      </div>
    </div>
  );
}

export default MyBooking;
