import "./CSS/MiddleBooking.css";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import data from "../../db.json";

import { useSelector } from "react-redux";

function MiddleBooking() {
 
  const bookedDataHistory = useSelector((state)=>{
    return state.bookingHistory;
  })
  console.log(bookedDataHistory);
  
  return (
    <div className="booking_middle_container">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Wrap spacing="1.35rem">
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/dan-abramov" />
          </WrapItem>
          <WrapItem>
            <Avatar
              size={"lg"}
              name="Sshigaki Kisame"
              src="https://bit.ly/broken-link"
            />
          </WrapItem>
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/kent-c-dodds" />
          </WrapItem>
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/ryan-florence" />
          </WrapItem>
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/prosper-baba" />
          </WrapItem>
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/code-beast" />
          </WrapItem>
          <WrapItem>
            <Avatar size={"lg"} src="https://bit.ly/sage-adebayo" />
          </WrapItem>
          <WrapItem>
            <Avatar
              name="Sasuke Uchiha"
              size={"lg"}
              src="https://bit.ly/broken-link"
            />
          </WrapItem>
          <WrapItem>
            <Avatar
              size={"lg"}
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
            />
          </WrapItem>
        </Wrap>
      </div>
      <div className="sugeestion_container">
        <div
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhISFRUXFRgYFRcYFhcXGhoYGBUYGhcWFh0YHSggGx4lGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8lICUtLS0vLS0tLS8tLS0uLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIANAA8wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAgMEBQYBB//EAD0QAAEDAgQEBQIEAwcEAwAAAAEAAhEDIQQSMUEFIlFhBhNxgZEyoUKxwfAUUtEHI2JyguHxM0OSoiRTo//EABsBAAIDAQEBAAAAAAAAAAAAAAAEAgMFAQYH/8QANBEAAQMCBAMGBwEAAQUAAAAAAQACAxEhBBIxQVFhcROBkaHR8AUUIjKxwfHhIwYkQsLS/9oADAMBAAIRAxEAPwDz1CWhaizkhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCEhCWhCE5lRlSkLi6k5UZUpCEJOVGVKQhCTlRlSkIQk5UZUpCEJOVGVKQhCTlRlSlyEIXMqMqVC7VpOaS1zS1wMEEQQe4K5VCRlRlXYXV1CTlRlSkIQk5UZUpCEJOVGVKQhCTlRlSkIQk5UZUpCEJOVGVKQhCTlQlIQhKhEJcIhQQkQiEuFyEISYRCVC7CEJEIhLhEIQkQiEuFyEISYRCVCIQhJhcMLs3jfZWfAfDuIxQqOYDkbMkN1MWYydcxjeALnYGibEMibmcaDmrY4S9TfAuAbWxlLMCWtzVIixyDlJ2jM5tt16H4n8K0sW2TyVgOWoB00Dx+IfcKp8CcMrYepVNTIGk+WLCXPYb5DrlHN6x2W4Du68X8Uxr/AJ0SRP8AtAAIPefSnCy1Yom9llIsV4XxvgdbCvy1mxP0uF2ujXKf0N1XQvcuPcJpYukaVWxmWOGrXRqPnQrxfG4R1Ko+m76mOLT7GJHY6r0vwn4mMYwh1nt14EbEfvgVnYjD9kbaFRYRCVCIWslkmEQlBtp2mJ7wDHrBHyiEVC7RJhEJUIhC4kwiEuFyEISYRCVC7CEJEIhLhEIQkQhLhCEJcIhKhdhQqpJEIaybASnaFBz3BrGlziYAAklen+FPC7aFNlRwa6u76jM5AR9I1APU9Skcf8QjwceZ1ydBx58hzor4IDKaDTivK4RC9B8U+ByZq4Vt9XUhv1NO/wD6/HRYOrRc0lrmlpGoIII9QVZg8dFimZ4z1G46j9ioKhJC6N1CE1CIS4V94V8NuxTszpbSFi7TM7+Vtvn26q2fEMgjMkhoB7txKixhe7K0XWehELf4vwEx8mhViBGUtc6TOsjT7pil4CLC01qwIuXNY06AE/UfTp1SA+N4MtzZ78KGvp505pg4OUOy09FhwyVx9J2gA9ST+QH6hKp0LySe0xInaYt7Qm6zpk8wptIa6ATmcZMExpZ3rBTzpCbKLYwEU6ZBkmW6vc0XImC1gveN5XrXgjiJrUMzML/D0W8tMSXExZzjygRNpkyZ6X8jczOAXOYcwHKQY1J0m5AP2W64J4p/hcG0VTRc67aFNrC05GWLqsOMjNYbmD6rF+MYd00TQxtXVoL8eWlbXJ0FU3A8NN1a8Bx78TxLEF73ZaAyMYYAbzEEx1Plk+juy2DM3qPSR9lkvAuEd5RxBl767xUsYGXmymJtJc4+hC1mGpyCfoMxyk/BBsvN/ECwTlrdGgNtpYUPnXrqnIx9FTv6+iWRYW3/AM3+688/tB8OPzuxVJuZsDzQAZaQIzx/LEekLbYx5B2cesQRe0gWPrClYF5y8wAt6Ttfqo4PFvwkolZ0I4jdRmg7SOhXg0KvxmMEQy8mCRr3j23Xs3i3gdF2GrGjRa14YXDKxjA4tEhhOWSHFeP4WhNRu9wKbZEhzoADjFgbAEr2mD+ItxbC5opQ3r+VnHDdmRmWz/s98Oivha+dzzSqPZ5emYPY2XVBM3hzW6bO7Kr8R8DdhKuUnMw3Y+IDhuD0cNx/VeleGeGNw2Gp0ZaCM2e5ALi4kwe0/lZXUCLkx1s4fqPkBeeZ8bfDiXvb9TCTQacgQbmpAvx7gU3JhA9gBsV4NC5C9mxnhLB1Q6aTAXGc7DldO5EW+yrMb4T4dhqZfVBOzS+q8S6CQ0ZPQ7Fa0f8A1Fh30GV1eAAPhdJnBvG4XlsLrKZMgAmASYEwBqT27p7HVnvMMpMY38LKYLjrYFxGdx0XpXgfw8MLSl0ea+XVZP07hkxaNzEHqbJvHfE24WMOI+o6CvpX+2RFhe0Otl5dCIWjr8FbicVVZgrUw673HkaTrljUTMAT7BUDcO51csp5nAv8umDAJLbFxBA1IJ6D2lMsxkbzStDQEg7A8eH+FVGBwFfZ6JuEQpvEOG1KJAqtykiRcH1uFFhXskD2hzTUHcKpzS00IoUiFxLhdUqriVClcM4e+vUbSpgZndbAACST6BRitF4IexuKYXZs5kNiMoBY7MXXnQQPVLYuZ0MD3tFwDRXQR9o8NK1/AOBsw4LWc1T8TyIPp2HaVfsZedPj7QmXYm8DY81juP8AhGHebg9THSD07L55NJJK4veakr0LYw1uVooFMDj1Wb41wJmLf/eOh7LBzcslvQ9Y6RurqvVIaSNYt67KFXqOD2gE9YAi/wCR17LuHe+J+eM0I3C4YmuBBFVW8I8JYRt3UzUItzkke4By/ZaJ2HaGgMAbljLawjQRsPRJYAJga/1S86JsRLMayOJ6mq42FrPtFFxjC0mACCZjcHsu40MLHZyGjK4FxiwLSD+aM681/tL4yKlRmGaczWc1Rs2NSQWAiZOUcxmBzN1VuCwrsTMGA03J4D3ZRmIY3MVksdUHm+Wx+enJGbLGbLIdqbCdPvC3PAfCwr8PqMP92+o4PZYQGt/6cjSCQ72csp4d4T/EOyCp5bS2oWuyZRLRADSbRnIm07L1bCM8mk1pqjLTpgbfSxol2l9JXoPjGMLA2JjvqqCe7TlWt6d1krhoc1XHTT1XjHEeGVqbzQqNaxzdQcriSQDmFyIi4I9IUvgfCTWqBgcIJ5iyGQwGCZAnr7wkcdxz6lWpWe5svMNLyNL5WWAgAd9ZWi/s/wCGjO8hwEMiYs4udyj7GFpzzSRYYyOoHAc6V0tvqVRExr5A3avkvQcO1gyim4NytygTEQOWJjNpF1Ip4t4EuZY35R8yotPDAm7Q2I7gzrCcFFzZyumdtAPQXuvCkA6rXLQpjiHS5mUkjWT7BPteTqI95VXTY5pkDXedf83/AAkcX4kaWHq1RGZlJ7wHA3LWkiwgkT0UchJACiW0FVX+NPEf8IxraIZ57yckiYAEl0fA/wBSwPhPhD62Ja+oXwx+cuGVoJDszKZNpvtaw9FN8P8Ah7EY4/xWJcQKjuYkkOLW2im0fSNRtut9QwrKLQ2AKYPL29QdT31W++WLAQnDxkOkNnEbbU500A8bpRkZmfnOg0HFWVFzotE7h2s9bfvulNd1ZHdv+11FY7U0nNI3bNvUEaKQyp1Eff7rz5anCxPscNR7/wC6xP8AaFxlrmtw1Ite4v5wOZzXNgNaANySe9o3WyzryzjFfyOI1qtPK4SQQ6YBdDn5YIvm32uIWn8HhD5y6lS0VA0BOlz317uSWxAAaKmgNitD4e8OijLnumtfawHRg1nqZOqXxHjgqVBgsO92epy1KhyuDQ5pLizq6N9rrN1uPYyu5tNkc/8AKwaGxc5ziQ0R+Kx9TZPZqOCcWBpfXDRzHLka4zYRdsCLXmRfpoHCyGQunOeQj6Wi4HAu2DQdr1Ue0bkAZZu5P4G5JW0qijhWsY3I1x5aTGQ3MdczgIsIknt1WRbjqfDWw2kMTiHzmdysystAkyWggTvJ9lmuIcRqF/muquDspbmEB1wAAyIj269zO04B4VLWtq1Wh9R1y118ukF06uiJnpAQ/CMwcdZ35g7UDVxF9bfSK1PGvQLjH9qaNFxoToB0G5VRj3YrFtbVxIp4emAXNB05tAAJc4mBsBqYErNwtFxfF08TiadIVR5cnKRo5+U5i3ru0HTU6KBx/h/k1SAIY67NbCbtv0P2hbHw+UNAicA0kZg0CwHU3JOpSWLj1kFwDQnn6KthC6haiQXKxyRn5Z0m02kR7BW3gernqOLoEtflm1s7YOvoNN1qvEXh9mJhznZXsu1wAG1munZZDwZhmsxNYBruWiAQZMHzBYT/AJQO0LAkxzMVhJCLEChHCptfdbMeEOHnaNamx6L0fh9YCQ0dJgmf9QP6JzDvLHZPwwS0+8xP70TdCs2BG4JGxI/e6ijEnMQMwAgvkF2XtruvMZcxPv2Vs5Vc+YktIEkanUqMyqCJBkLudU5aIyqV5ibr4trGlz3Na0alxAHyVX8S4pToMz1HQNgASSejQNSslwyq3HVzWrw5tJzRTpOnI06zG7tL3/JNwYMvYZXWaN6anSg2PPhuqXvAcGD7j7v+uK0OO4zWqjLg2gT/AN6pyNvvTBEv+PlU+E8G0DDsVUq1Kly5xIaCTcgamOk83daOPq5YEaF0XntY/mj+JIjkbM7EH4i8+ytZiXxNyw/SOVKnqf4OSDhmuu6/48P6ncLTo02tZT+los0S71M6i+8qg8WcbayjUphrTUc3KQTlysdqc175fTVXHEeI+XSc9zXCG9QLkwACO5XnPAsEcRiwKzg+A6oWuPK4BwDQZudRqSbJjAYZrg7ETVytv1PvXu2qqcS8giJmrvJTncGczAOxHk+Y9xBa0cxbSuS6+pMAnsnP7OC8DESBB8t3l7Qc9xG8NGmkd1dcZ8Q/w7ctN7HOmIhxyW16AdifssVhsZUpiqaT8xrNygADSTZsaHmie/dacbZ8XhpA8AZnVBPCo8gBY9Uo/s8PK3KdBf3xrqvWOE8UFam1w3n3jop/mLB+DsFWp0S+o7y3ud/05iI0G4kyT79lq8HiC5sn2PUdV57FQMZI4RmrQVpxAuYC4UJVh5izPG+JDFZ8JQdIuMS9p+hgkOY0ieZxGXtzdE5xTjXP/D0CH13NNpswQeZx2PQKPwPgv8NRAH1/U7d2bfm3OvqrIoBC3tX/AHWyj/2O9BtsTe4F6z9bsjdNz+uvHkrD+PFCm0NbYlrKbAbFxs1oIt3OlgVcOfIvp3WH8acXZTDaTXRWzNqEtH0EGzo2J+NVExfGntY2m6q+ofre4m7pE8oEEMA06xOqt+Rc+NjxYuJ60tfp5mvC4k14Mjm7Ci27OJUnOySJERaAZtyne+4Umti2sEucGjqSsHTqQM+Y+W4QD9Qaf5Hj0t6aJNfCvcC4U3O3zE5rf4SDzWHdROCbX7kx2YWk434gysIoOYXZQQTexnQdfXrovOcLTfiKxafoDiajpMvi7wDoCb/mpXGOJwzKGszOnmAggRc2/dyrPwjh6dXCTTBY8OcHSSZdy5XDpYAW7+q1sO35TDFwFKmld+/lw5pGWKOXECM3oKn3+eSXiK5pMNJhexrGuackyQ0QdLmzfdUuNpFokODg5uZjho4ESCJ/JaKo+sJD2wHcjnHQ5jGY+0CR16qhe+pRqeXTcx1Fzzmpu0kvcSWgzlaJFx/LvKtwUuUkDfz7+O97fldx0AfR3Dy7tx5+JT3gbhgqVPMP94GmQ4zBeLiBsBa/cLa8expdTNNtWk0OBzVHPywDqW5RrEjXeVnsViH08K2nhWjK4CSzlJpuAIc3UknNsZEQseMC+mQCw8olrTuSbCIsAZ069lD5Y42XtnOoAbCgNhuQfGl6pdzvlm9nlrxOgqeBVjwbhw/iGik4uax2bPeIBF2hxOummhXoOPwbarT5wzAzEOktidJ6GFUeGsE1tCXU8tYkh5JAzGDlOvKAJMK5pUWgSHB0f4i0AnoZjVJfEMUZJgQaZbA2rXc1HH3umcLhw2K4+7Ufq6w1fg9ZriBTLgND1Gx+ELf5n9P/ANG/q1CvHx7EAaDx/wBSp+ERE6lcqVZdkdo4W7nf7QqLD4CkzFYkhzg59Om4ku0u4GfcA+6nYitL2wZuLDW83uNPhcxDXZ3EWzAAbDNpfvb8lmxktBAOo/Y9FsviBIJ2P6I/ae4awgl0mPpG8jW3aU+aEHMwwZJIMkH1uo+BBayHWifhRMNWzV8wuI7nbvooFpJca28lLLRXNJ/UQTqO/ZROM8ZZh6ed5v8Ahbu4/wBNJOy5i8ayk0uqPDQOp/LcnsF5l4j4yK9VznNblAinmuQOsd9Y+U1gMD8w/wCr7Rrz5D3pVKY3ECBtB9x05c0vF4qvi6jiQ57jJaYgUgIEC/KNYuSZWw4G+jh6bKQN3Zi4AC7jzGJscrRHssv4Yx9R7HtP0NyhovGku99DPdVPE6zm4vMXHkc1zQb7AkALXmiOIJg+1rbgDy6apOPJAwTmri617dT5WXsdGo1zWkXEWkf1TnmLMYHGOgVWAw+DzOtlO5G2ut1Z4ni1Km3M97WjoTckbADUrzroHB1AK8t6rX+kCtbKJ4yeTSY0SS6qBA35XfYaqz4dhqVJgDA2wEuiCT1dKgU6fnGnVDpA5h/qbpfaDtGi5U4nSoNe57wGtmdQPYG09gbpgkmFsLdiSQOJP6CpELQ90p4Ch4D+lZnxeW0apqOcC2oczYuZ3Fun6hY13GaucFjizm5YiRfqn/EXG3YusXuMMFqbNYb37nU/GyrsPSmo1oG4XqIGvZC1smoF+5YEmR0x7PQm3v8AC9B4Vx7KAyu6GkhrXnSTo13T/P8AK0XFMQC12Hplxfyh5zRAkE3P4i3YDcSvLeLOloG2/wAW/VX3gfi5p5qVTSo+WvfoSGhuQk7wBHx65MuDozt26jbbke69v1UHU+YDpTC6w4++OlfxVayhhDQFI0Mhb5jQ7OXNJ8yGmdZdcX9lacQ4yymA0yajrMpD63H9B/iNln8bxcl2VoJAJ5nGBI3A2A/RQKXC21K3nGfMvztMXgAGNCC0z890l2If9Ux49TvflVNFpbZnLuGlu7StlT8Zxr8TWa19NtMAw8C85HGQTve3smfEYa2nRDROWRJ15pMTuAAIB0VzisI1tUi4EkNdrzOykyT1Mekqg8SYCo0tJBAPLBI1uQYnpN1rwyNdIwMsALDx4pCWDJC8uuTutF4QrOdQJZBygtqMfOUiAWER2n4K1GBY1jOUnIRmAP4ZEm/T1WH8A0amd7v+3lyPE73IMa9RPdaPjOJDaPknMS5mWRa0QTKRxkf/ADlg39nwTeEkLoQTr+eHivPuIVw97yycjnnKTrkEwfgBXvgritOkw5n5SarWkTq14gOj/C4a7AqgqYcspuLr5X5R6EG8+4/8lDoYhzHZ2EtI0I/JbUsTZY8lbW8ljRyPilznW/maL2DDXFSnV5oMkmOZpmDbSA37LF4otaK1XLGYHIDqKYHL7uN+whWY4o7EMp+W2S9jfN3gtJhvoTmMnYd1BfXYKzRZzQM9STLQReB/Ntru4d1kQRvaSCL79B6091WxLKwgOrbbmfQevBOcFxhp4Il8h1IAsB/l8wQD6T/7KL4f4pVrEANl1Jt7ZpFheb6ybbuWg4nw5rqOUhoc8wAIglxENHYQDOvKTuoHh+gyk6t/eZHB0GIJygmG6G5iTF9FMSRujkfS5P8AnhWqrLXiSNn/AIge+/RXGGx9OIeHNJaTJgAEGN76rP8AGvFLnFjGPcWNAqutBJA/u2XG7i1OeMC4MGWo5xeIgiS1mUlzraTHRYtuaJkyeoJ/eqngsHG8doe4f1V43EuYcjR3q/o+JH02hmarLdbnXV2/WUKjn+Zxne6Fo/LMSXzkg0ott4m8QPp1PJZU5XQXPaBmaJuGnQGJv+qlYSvmy5XucIbkdcjqLbb6qPjsATRc1sZ3vbJ6CRr2AB/ZTvBCG0g25GZ0f5cxAn8/dYrhH2AyC4NDztr5UppQV67DO0E5DtCK9Kbf3c81ZP4gGMc15zyDaYAF5lZdnEsZXq8riym0tdla3KTTzNjMTzEloJibwrc1m5H1BdrZHrlB0/1GPZROGVScZViQ3IJB6jKB8XXYGBjXuLakDfu7q3UZ3ZnMaHWJ27zXpZReM8Lc+rRdE5X83pYmfiPdZWphiQ/ctqBmb1zD82j5XptUgNNtifWLrNeHsE2rSrB343gz/iAkH5KZwuJLYy52jaDxPol8Xh2vkDW6uDj4Cn5oneA8PylxAPlOa1wMnUfUNNb/ALgrOcdrediKjmQADlbG4baft91rOGFwwuoDgHN0tIc4CeuyzfFMKyg5rAR9AvMkk6k+9vZXYY1xDs2ug7rE+QVWKH/bMLRbXxvTuurzw04+QwPBc0F07xc6RpYhc47gm1W8v4czgN7MkAdyQB7pXhOtyVW9wfkEfoFLDCG59Ive3zKUkJixDiNa277pyECbDNDtCPwoPhDxG2lQd5rzlZMN1JBMty7a2Wd8Q8aqYp0u5Wg8jBoLamdT3UTi1Rr6z3sAa0mYH3MdzJ91EJI1nRaUWGjbIZaXPl09VkzYl7mCKthbrTdda3QbnQDv3U/AUstaCdRHa8KPgaed4AcQdvZWOPwwYWPmYeJt8T9lOV4rk4hEDCB2lND5bp5+HLm6gTpKl0aLX02tePpsRpBFjp+7qLXxMGXAwSI7dwrBrYJPXX16/vokXOcGg94WmGtLyNbUI5FS3YolgYSYAidzGmYnWD8qXwjiAZy1C0AfS4mI7fc/Kq1Q8UxAe62jZH9VXHhhN9Oy7PiOwZmGuwXo7XsFy5vO+RJEEwAA3qYA0UXimHpFpLqYcZzAAXcR1IExe686oNcXNymHA5m+ovZbrh3Eg4ZqhDXxBkw0jY3sqp8KYCHB1fJEGI7dpzNoFC4BVezFupuEB7M0ZQIdrYDQRPwFZ8cwznuYW/5Y+8/voFWkA48OBH05pBmeQj+iteJV3tYSyN7nbYR3krk4rIxw1LRXrdSw5+lzdg406WVWzBA4SSA6SXHeZJDvyb8LK4zBs814YTkBt3tf2mVs8EXMwjGtEvc2Gg9Xmb+gM+yy1WiMzmsdcAwTo4t19JMx7J/COo+RxNqn86+iQxQJZG0C9B+NPzXuUrC8TFKg+m05XVDrs1gEH1JkiFJNHCvo0YceZ2XndAABHmuI6WsqatT5Ghzb7ncG0n3hRvJDu1hp9h++quEIecwJF69dvT2VS6UxDIQDYd25H58uAWgx3HXPxVJ0xSbUAYJ2Jhz3eo+AtNFP/qBts0syTJJJzWGpJn2C83/hwDc7i3XT9Vv+CPLcOwvgQHOM9C5xB+Ck8dC2NjS3a1OPvdN4Gcvc7NveqTXeK0sIawyMxLbmxzDtaN1S8fYykzy2CmcxzZs0w0E2AAtc/ZN18UyS+S43DGmYv9VSp1J2Hoq5uHNSpNR2pEk/hHp+QVkGGLDmcaAbc/3T82CjPihICxgqTbu9+AuVAifwH9+yFpXcMo7VnRtDCfvF0Jn5yLn4Jb5KbgPFW+N4lzeUyC/efpaNSXH0UDH8VMVDSeIaAGmBd7jqOwAKoXVCZJJvr3vN/dJVceAjbSv94+nLmpyfEZHVpb37J48lo3M/+M9s/wDZkdJiZk95TVXE8lLEt+psNqbSIuD+9wjDUvNw7WukQYMbtDpj7QoPDKDw51KqCGP0BkCRpB9B9gl2NAzV1BJI4g2PiPwmnuLslLBzRQ8CLtK1WGxjajczTI/LsUxhsLkDmssC/MO0gSPlVWHwTqNUOa4mmYDgY3MD4MfKuM6TkYGWYatN/wDD0TkTy67xRzfdR1XKOFa0ZRMSXG+pLib/ACqTxFg2uqMDWy5wg9B/L6aOPyrzOoHGKzWsLiY1E9JEE+sSB6qeGe5soduVDFRtdCW6AU8uCoOGcRdhzP1A2I3PT4UPiHEalYzUcYmzBZo9t/UqNiapec1miIDRsNYnruSmH1ui2+zbmzkXWCZH5ezBsu1LaDVJcwzzHbVcFXrdO4OnJJOykTQVQxhcaJ3hhDaoN7D81NxlBz5aPxGZ2idVU1w5rzcyfyP+yteD4iW5d4JHydEtKCP+QJ3DkH/iPNR8fV/ACTG5P3P73Vvwp80mzsI+P9lRYg3M26/kpHDcVkcZJh2wE9l2WKsQA2uq4MRSYk6G3orPihOWcxA0gbz1VKr+sxrhDtPVQ3V6G7QI7f0VWHkytoASrcXBnfUuA6kqBhcPmJcJlpke0KwwWIz52axt1BsQk8HcCHEdTb8vsm8XhTTPmUxvLh66rr3Bzy067KcTSyJrhpvRM8Ixfk12u/CMwM2gEGT6rWYqqK9HNTecsTAtved7CbLHYiq0uLgDF5B6kQfzVrweuWtDmWIgEHQgDePzUcXHWkuht63UcHJTNETa/sK/41iSymGsIBJjvli5HSBuq/hfDswIL7NebDQ21H2upNWi2sQ4kwBEAwRMz+nwl4uoKbMtNoDncrQNfX2uk2uIaI2ak1J9egTrm0eZX7WHvn6Kmr0BUrZKYsDE66auPvPwFHx7Q17wzQGB7WV3TotoUyczWvIjM7SY0HpcrNvxDZ+oa7/mVo4eQOJyn6QKDnxP+LKxMbm0zfc416cB+0UqI/GZBPNHTstBxbiQeG0aZEn6oIgR+GdNfyVDFNwJNSw+rb/xHqpOFqUm5stu/X0XJi1zg+hJbpa1VZBG4NLSQA7W96b05bKw4JgA4lxLTl+kAyJ/xdlYHhDOpvdx/ETv2E+iz7a4DTcSNYB9Z69bq34RxkVOR0B+3Rw/r2SmIEzqv2CbwxhZRtqlWFPDPAAFUNA0AbMe51QnfMQk8zk9RYxKoslwHUgfJUGjjgdbf82Cs+E1Wmo2/Uj2/cr0D3ZWk8l5mJmeQN4kLR4ZoY0NGw9L9UtxnVVOJ43SYYzZr3y3j1UCv4muMjJG+YwfaFjjDyvNaLfOIiYKV7lpi5czrLDxM7/62/J/opTfEjMv0uzRptPr0QcJKNlwYyE7+RV1jMa2m3M4+g3PoslxTH1Kx5jDR9LRp6nqU3icU6o7M4yfsOwTa0cPhWxipufeiysTjXSmjbN96qM5lwBKd8oapxdYwkwBKZ0SlSbBMUaJLoEHrP6J/BOyOcC3UbiydqYJwaXSPTpB+6brkGACSIvaPZUlwksLhNtaYvqdY/mtlNxdJroqWjL6T0ChcIac4O0H/aE7g3l7SwmINv6KNmyEaiCJ9tvt91ENOQsr/FNzwJGyUoDfv3TnE2g1CRvA991GpsINvdS69XMZiEy49NdlewUaAUnK7M4kb1VxinnyrC5An3N1UMpSfaewVlgnkNDXWOonp0UTFCCWjTU95S0BoSweKcxQLg2Q8KU39ldwOIyEzode3dXErPayrbA1pbHSyjiox9w71PATG8Z7lE4i3nPeCkYfFlpaNp/NP4yHDNeQYPZVlWqNFcwB0eV3RLyEsnzN3Ne7+q/fVc0+Y0xAuD03BUGt4geXFzQAYhpN8o7f1VTVrOd9RJSFGPDtH3XVkuJc4/TZOVsQ9/1uc71M/CbQhMaJdCew+Icwy09kyhBFdUA0NQrAcVfeYJIidIXcPjG55IyTuNAdndjMXVa5y4HKsRsGllLt3nU16rY0+I14H9013+K1+66shnPU/KFT8q3gPD/Ux80eLvEf/KaSmPIuCQkoTCSSwV1IRKlVdqloXA5dQupQdGiUysd7polEoXDRWWEfTP1GOx0VpTIjliOyzMpVGuR9LiPdUyRF+6ZgxAjFMvqtHXZmEfrCrcKAWEO/DJH6j5hRRxN4IlwPYpNTEy6SI7BRjic0EFSmnY+jgOIoeCewhLDmHx2SqpzEnqZhR3YjoE26qTur6CtUmXOLcp0UxO4Qc4KhNxJiDe9uqG4krhuCEN+hwIV3iRI9/juFWY5zpAO2/Xok1eIvPQCIiP6qK6oTqSVTFE5uqdxEzJBQJ9lQAC6VRxeW4CiJJcr3AEUKUYSx2YFSsTii8z9PodfVR0lEoAAFAguJNSlIXJXcy6iqFxIc+FxzrLlVwlOF1k3mSKhsuNfZcqop1CbLrpaELuZC5mCF1C4lApBfaU15mi4hSJSXPj5TD6iS8yiqEunVj7pynWv6woyFxCkYh9oXXVdFHLpXS5FV1TS5RmvsfXqkuqH7JuV2qE/UfcXCcdUuLhRy66U93NsiqE65/ME8CoTnc0p2nUsUVQpDXSuqNRenKj4ErqE4SuZlHrPslsfIQiqcJRKSCk1XwhcXWOlKUak6E5SdquIThKSx0hJe/VIolcJQlVXW91wnlTRK67RCEs/ToEmbLma0LkoQlZrhO59VHXQUIXJQhCELpK4hCEIQhCEIQhCEIQhCEIQhCEIQhCEIK6DZcQhCAUtz7JCEIXZQHQuIQhPUn7Jt75SUIQugrrHQkoQhErrVxCEIQhCEIQhCEIQhCEIQhCEL/9k=)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <h3>Nepal, Kathmandu</h3>
          </div>
          <h1>Nepal Mountain</h1>
        </div>
        <div
          style={{
            backgroundImage:
              "url(data:image/jpeg;base64,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)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <h3>USA, Miami</h3>
          </div>
          <h1>USA Sea Beach</h1>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9BPfcvI4zuS7mRDCipIlAls1ZTmfijJZlg&usqp=CAU)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <h3>India, Kolkata</h3>
          </div>
          <h1>India Jhashi</h1>
        </div>
      </div>

      {/* Booking History */}

      <div
        style={{
          marginTop: "30px",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor:"white"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "600" }}>
              Booking History
            </h1>
            <p style={{ fontSize: "13px", color: "rgb(97, 96, 96)" }}>
              {
                bookedDataHistory.length>0 ? `${bookedDataHistory.length} DESTINATION FOUND` : <span style={{color:"red"}}>NO DESTINATION FOUND</span>
              }
            </p>
          </div>
        </div>

        {/* Show Data */}
        <div className="scrolldown">
          {bookedDataHistory.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  padding: "10px",
                  gap: "45px",
                  fontSize: "16px",
                  alignItems: "center",
                  color: "rgb(97, 96, 96)",
                  marginBottom: "10px",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gap: "10px",
                    gridTemplateColumns: "30% 70%",
                    width: "35%",
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "70px", height: "50px" }}>
                    <img
                      src={item.image}
                      alt=""
                      style={{
                        borderRadius: "5px",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <h1
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    {item.location}
                  </h1>
                </div>
                <div>
                  <p>5 Night</p>
                </div>
                <div>
                  <p>
                    <i
                      class="fa-solid fa-plane"
                      style={{ color: "rgb(154, 6, 6)" }}
                    ></i>
                    &nbsp; {item.date}
                  </p>
                </div>
                <div>
                  <p>{item.tickets} Adjust</p>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    {item.pricewithpassengers}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MiddleBooking;
