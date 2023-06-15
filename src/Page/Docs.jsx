import {
  Box,
  Center,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const Docs = () => {
  return (
    <Box bgGradient="linear(to-b,black, brand.100)">
      <Box
        pt={10}
        pb="100px"
        w="90%"
        display="flex"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
      >
        {/* <SimpleGrid columns={2}> */}
        <Box p="100px" color="white">
          <Heading>'Your Money Our Expertise'</Heading>
          <Text>
            Maximize your financial potential with our expert guidance. Let us
            handle your money matters and unlock opportunities for growth and
            success.
          </Text>
        </Box>
        <Image
          src="Businessman_checks_his_income_has_gone_up_generated.png"
          boxSize="400px"
        />
        {/* </SimpleGrid> */}
      </Box>
      <Heading color="white" textAlign="center" pt="40px">
        Our Mission
      </Heading>
      <Box
        mt="40px"
        color="white"
        borderTop="1px solid #00ff0a"
        borderBottom="1px solid #00ff0a"
        p={6}
      >
        <SimpleGrid columns={3} display="flex" justifyContent="space-around">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src="access-control.png"
              boxSize="80px"
              border="1px solid #00ff0a"
              p="20px"
              borderRadius="50%"
              bgGradient="radial( brand.100,black)"
              m="20px"
            />
            <Text fontSize="30px">Accessibility</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              m="20px"
              src="transparency.png"
              boxSize="80px"
              border="1px solid #00ff0a"
              p="20px"
              borderRadius="50%"
              bgGradient="radial( brand.100,black)"
            />
            <Text fontSize="30px">Transparency</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              src="money.png"
              boxSize="80px"
              border="1px solid #00ff0a"
              p="20px"
              borderRadius="50%"
              bgGradient="radial( brand.100,black)"
              m="20px"
            />
            <Text fontSize="30px">Affordability</Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        color="white"
      >
        <Heading textAlign="center" pt="80px" pb="40px">
          Who We are
        </Heading>
        <Text fontSize="24px" w="90%" textAlign="center" pb="50px">
          Grow Fin is a group of professionals from all walks of life - sharing
          a common passion for wealth creation and a deep understanding of
          investments and entrepreneurs. Grow Fin utilizes data-driven insights
          and in-depth experience to help clients make safe, calculated
          investment choices with the aim of building a stable, long-term
          portfolio.
        </Text>
      </Box>
      <Box color="white" textAlign="center" mb={10}>
        <SimpleGrid columns={3} pb="80px">
          <Box>
            <Heading mb={8}>Company</Heading>
            <RouterLink>About Us</RouterLink>
            <br />
            <RouterLink>Grow Fin Blog</RouterLink>
            <br />
            <RouterLink>Careers</RouterLink>
            <br />
            <RouterLink>Award and Recognition</RouterLink>
            <br />
            <RouterLink>Contact Us</RouterLink>
            <br />
          </Box>
          <Box>
            <Heading mb={8}>Need Help?</Heading>
            <RouterLink>Member Login</RouterLink>
            <br />
            <RouterLink>Sign Up</RouterLink>
            <br />
            <RouterLink>Made Connections</RouterLink>
            <br />
            <RouterLink>How to use Grow Fin.com</RouterLink>
            <br />
            <RouterLink>Premium Membership</RouterLink>
            <br />
            <RouterLink>Customer Support</RouterLink>
            <br />
            <RouterLink>Site Map</RouterLink>
            <br />
          </Box>
          <Box>
            <Heading mb={8}>Privacy and You</Heading>
            <RouterLink>Term of Use</RouterLink>
            <br />
            <RouterLink>Privacy Policy</RouterLink>
            <br />
            <RouterLink>Be Safe Online</RouterLink>
            <br />
            <RouterLink>Report Misuse</RouterLink>
            <br />
          </Box>
        </SimpleGrid>
        <Center>
          <Box
            w="90%"
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box color="white" w="50%" display="flex">
              <Text mr="20px">Home</Text>
              <Text mr="20px">Category</Text>
              <Text mr="20px">Testimonials</Text>
              <Text mr="20px">About us</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" w="15%">
              <Image src="facebook.png" boxSize="20px" />
              <Image src="twitter.png" boxSize="20px" />
              <Image src="instagram.png" boxSize="20px" />
              <Image src="linkedin.png" boxSize="20px" />
            </Box>
          </Box>
        </Center>
        <Center>
          <Divider colorScheme="#00ff0a" />
        </Center>
        <Box color="white" display="flex" justifyContent="space-evenly" w="90%">
          <Text mr="200px">copyright Event Partners. All right reserved</Text>
          <Text>Privacy Policy | Support</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Docs;
