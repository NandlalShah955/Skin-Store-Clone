import { Button } from "@chakra-ui/react";
import { useState } from 'react'
import data from "./FooterData.json"
import "./Footer.css";
import styles from "./Footer.module.css"
import { Box, Container, Divider, Flex, Heading, HStack, Icon, Image, List, ListItem, Menu, MenuList, Spacer, Stack, Text } from "@chakra-ui/react";




const logos = [
    {
        name: "facebook",
        src: "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-facebook.svg",
    },
    {
        name: "instagram",
        src: "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-instagram.svg",

    },
    {
        name: "twitter",
        src: "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-twitter.svg",

    },
    {
        name: "linkedIn",
        src: "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-linkedin.svg",

    },
    {
        name: "youtube",
        src: "https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/footer/rs-youtube.svg"
    }
]


const Footer = () => {

    const paymentdata = data.payment

    const [pay, setPay] = useState(paymentdata)
    return (
        <Box p={10}>
            <Divider size={50} color={"black"} />
            {/* Icons and Logo  */}
            <Flex w="70%"
                m="auto"
                marginTop={30}
                //  justifyContent="space-between"
                gap={4}
                direction={{ base: "column", md: "row" }}
            >

                <Text color="blue.900" fontSize="lg" mb={8}>Sign up to our email list and receive 20% off your next order</Text>
                <br />
                <Button
                    backgroundColor="#2E3337"
                    color="white"
                    borderRadius={0}
                    _hover={{ bg: "teal.600" }}
                    onClick={() => handleOnClick("/register")}
                    size="sm">SIGN UP
                </Button>

                <Spacer />
                <HStack spacing="4" >
                    {
                        logos.map(item => (
                            <Image cursor="pointer" w={10} key={item.name} src={item.src} alt={item.title} />
                        ))
                    }
                </HStack>


            </Flex>




            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Help & Information</h4>
                            <ul>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Track my order</a></li>
                                <li><a href="#">Accessibility</a></li>
                                <li><a href="#">Cookie Settings</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>About SkinStore</h4>
                            <ul>
                                <li><a href="#">Key Workers Discount</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">Brand Directory</a></li>
                                <li><a href="#">Coupon Codes</a></li>
                                <li><a href="#">Refer A Friend</a></li>
                                <li><a href="#">Student Discount</a></li>
                                <li><a href="#">Join SkinStore Experts</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Legal</h4>
                            <ul>
                                <li><a href="#">Cookie Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Modern Slavery Statement</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <ul>                                <li><a href="#">Message Us</a></li>
                                <li><a href="#">Free Beauty Consultations</a></li>
                                {/* <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a> */}
                            </ul>
                        </div>

                        <div class="footer-colss">
                            <div>
                                <h1>THG</h1>
                                <div><h4>2020 @ The Hut.com Ltd.</h4></div>
                            </div>
                            <div class="social-links">
                                <h4>Pay securely with</h4>
                                <a href="#"><i class="fab fa-facebook-f"></i>
                                    {
                                        pay.map((e) => (
                                            <div className={styles.image}>
                                                <img src={e.icon} />
                                            </div>
                                        ))
                                    }</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* BOTTOM SECTION  */}
        </Box >




    )
}

export default Footer;
