import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../../db.json";
import ShortNavbar from "../Navbar/ShortNavbar";
import {
  Box,
  Image,
  Badge,
  Heading,
  Button,
  Highlight,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  UnorderedList,
  ListItem,
  Text,
  Grid,
  Input,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Select,
  FormControl,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import style from "./productdetailspage.module.css";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkBooking, setCheckBooking] = useState(false);

  useEffect(() => {
    let productData = data.filter((item) => {
      return item.id === id;
    });
    setCurrentProduct(productData[0]);
  }, []);

  const dispatch = useDispatch();

  // console.log(image, location, price, description);
  const [bookingdata, setbookingdata] = useState({
    name: "",
    email: "",
    contactNo: "",
    type: "",
    date: "",
    tickets: "",
    id: id,
    pricewithpassengers: "",
    image: "",
    location: "",
    price: "",
    description: "",
  });

  console.log(bookingdata);

  const handlesubmit = (e) => {
    e.preventDefault();
    const { image, location, price, description } = currentProduct;
    if (bookingdata.tickets) {
      let total = Number(bookingdata.tickets) * Number(currentProduct.price);
      let totalP = total.toFixed(2);
      setbookingdata({
        ...bookingdata,
        pricewithpassengers: totalP,
        image: image,
        location: location,
        price: price,
        description: description,
      });
    } else {
      setbookingdata({
        ...bookingdata,
        pricewithpassengers: currentProduct.price,
        image: image,
        location: location,
        price: price,
        description: description,
      });
    }
    setCheckBooking(true);
  };

  useEffect(() => {
    dispatch({ type: "BOOKINGDATA", payload: bookingdata });
  }, [bookingdata]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnref = useRef();

  return (
    <div>
      <div
        style={{
          height: "600px",
          backgroundImage: "url(https://wallpaperaccess.com/full/1192057.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          color:"white"
        }}
      >
        <ShortNavbar />
      </div>
      <Box>
        <Box display={"flex"} flexDirection={"row"}>
          <Box margin={"20px 100px"} w={"50%"}>
            <Box className={style.TopStack}>
              <Heading fontWeight={"bold"} style={{ textAlign: "left" }}>
                {currentProduct.location}
              </Heading>
              <Badge fontSize={"20px"}>
                {" "}
                $ {currentProduct.price} / Per Person
              </Badge>
            </Box>
            <Box marginBottom={"20px"} maxWidth={"700px"} textAlign={"left"}>
              {currentProduct.description}
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Text fontSize={"22px"} mb={"10px"} style={{ textAlign: "left" }}>
                <InfoIcon textAlign={"left"} /> INFORMATION
              </Text>
              <TableContainer>
                <Table>
                  <Tbody>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Destination</Td>
                      <Td>{currentProduct.location}</Td>
                    </Tr>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Departure</Td>
                      <Td>Main Square,Old Town</Td>
                    </Tr>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Departure Time</Td>
                      <Td>Appr. 8.30AM </Td>
                    </Tr>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Return Time</Td>
                      <Td>Appr. 7.30PM</Td>
                    </Tr>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Dress Code</Td>
                      <Td>Casual, Comfortable and Light</Td>
                    </Tr>
                    <Tr>
                      <Td style={{ fontWeight: "600" }}>Included</Td>
                      <Td>
                        <UnorderedList>
                          <ListItem p={"4px"}>5Star Accommodation</ListItem>
                          <ListItem p={"4px"}>Airport Transfer </ListItem>
                          <ListItem p={"4px"}>Breakfast</ListItem>
                          <ListItem p={"4px"}>Presonal Guide</ListItem>
                        </UnorderedList>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Text
                m={"10px 0px 10px 0px"}
                fontSize={"22px"}
                mb={"10px"}
                style={{ textAlign: "left" }}
              >
                {" "}
                GALLERY{" "}
              </Text>
              <Grid className={style.galleryGrid}>
                <Image
                  className={style.galleryImage}
                  src="https://smudgedpostcard.com/wp-content/uploads/2019/11/Piazza-del-Popolo-Ascoli-Piceno.jpg"
                />
                <Image
                  className={style.galleryImage}
                  src="https://mypathintheworld.com/wp-content/uploads/2022/02/Piazzas-in-Italy-piazza-plebiscito-naples.jpg"
                />
                <Image
                  className={style.galleryImage}
                  src="https://architectureofcities.com/wp-content/uploads/2021/09/St.Peters.Square.Rome_.Above-AOC-Huge.jpg"
                />
                <Image
                  className={style.galleryImage}
                  src="https://thumbs.dreamstime.com/b/night-view-venice-italy-nightscape-beautiful-city-129128439.jpg"
                />
              </Grid>
            </Box>
          </Box>

          <Box className={style.discountBookBox}>
            <Button
              ref={btnref}
              onClick={onOpen}
              _hover={"none"}
              borderRadius={"30px"}
              marginBottom={"40px"}
              bg={"blue.400"}
              p={"15px 34px"}
              color={"white"}
            >
              Book Now
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnref}
              className={style.Drawer}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Book This Tour</DrawerHeader>
                <DrawerBody>
                  <form onSubmit={handlesubmit}>
                    <FormControl className={style.formbook}>
                      <Input
                        placeholder="Full Name*"
                        type="text"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            name: e.target.value,
                          });
                        }}
                      />
                      <Input
                        placeholder="Email id*"
                        type="email"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            email: e.target.value,
                          });
                        }}
                      />
                      <Input
                        type="date"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            date: e.target.value,
                          });
                        }}
                      />
                      <Select
                        placeholder="Type"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            type: e.target.value,
                          });
                        }}
                      >
                        <option>Normal</option>
                        <option> Semi-Premium</option>
                        <option> Premium</option>
                      </Select>
                      <Input
                        type="type"
                        placeholder="Contact No*"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            contactNo: e.target.value,
                          });
                        }}
                        maxLength={10}
                      />
                      <Input
                        placeholder="Number of Tickets*"
                        onChange={(e) => {
                          setbookingdata({
                            ...bookingdata,
                            tickets: e.target.value,
                          });
                        }}
                      />
                      {!checkBooking && (
                        <Button
                          type="Submit"
                          bg={"blue.400"}
                          p={"15px 34px"}
                          color={"white"}
                          _hover={"none"}
                        >
                          Submit
                        </Button>
                      )}
                      {checkBooking && (
                        <div>
                          <h1>Proceed for payment purpose</h1>
                          <Link to="/payment">
                            <Button
                              type="Submit"
                              bg={"blue.400"}
                              p={"15px 34px"}
                              color={"white"}
                              _hover={"none"}
                              w={"100%"}
                            >
                              Proceed
                            </Button>
                          </Link>
                        </div>
                      )}
                    </FormControl>
                  </form>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Image
              w={"300px"}
              marginLeft={"50px"}
              mb={"20px"}
              src="https://img.freepik.com/premium-vector/travel-sale-banner-with-yellow-tag-tickets-hot-fares-domestic-international-flights_372769-345.jpg?w=2000"
            />

            <Highlight
              query="MASAI40"
              styles={{ px: "1", py: "1", bg: "black.100" }}
            >
              40 % OFF on MASAI40
            </Highlight>
            <Image
              w={"300px"}
              m={"10px 0px 20px 50px"}
              src="https://img.freepik.com/free-vector/flat-design-travel-sale-banner_23-2149081602.jpg?w=1060&t=st=1685047157~exp=1685047757~hmac=821c667ca827c3d15627ee174c5adc61139f48e11f61a69e3f84b7c3f7826ba8"
            />
            <Highlight
              query="MASAI50"
              styles={{ px: "1", py: "1", bg: "black.100" }}
            >
              50 % OFF on MASAI50
            </Highlight>
          </Box>
        </Box>
      </Box>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
