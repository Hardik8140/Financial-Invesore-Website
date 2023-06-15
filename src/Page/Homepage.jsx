import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const HomePage = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container maxW="container.xsm" bg="black">
      <Center>
        <Image src="BlackLogo.png" boxSize="12em" mt="50px" />
      </Center>
      <Heading textAlign="center" color="white" mb="20px">
        Welcome to Grow Fin
      </Heading>
      <Heading as="h4" size="md" color="white" textAlign="center" mb="10px">
        "Your money Our expertise"
      </Heading>
      <Text textAlign="center" color="white" mb="8px">
        We understand that raising capital can be one of te most challenging
        aspects of launching or growing a business. <br /> that's why we're help
        entrepreneurs navigate the investment landscape with confidence and
        ease.
      </Text>
      <Box
        mt="3rem"
        border="1px solid #00ff0a"
        borderRadius="20px"
        bg="#092312"
        w="100%"
        p={6}
        color="white"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        {/* <SimpleGrid ></SimpleGrid> */}
        <Box>
          <Heading as="h4" size="md" color="white" textAlign="center" m={5}>
            What do people call you
          </Heading>
          <Input
            type="text"
            placeholder="Name"
            bg="black"
            border="1px solid #00ff0a"
          />
        </Box>
        <Box>
          <Heading as="h4" size="md" color="white" textAlign="center" m={5}>
            What do people call you
          </Heading>
          <Input
            type="email"
            placeholder="xxxxxxxxxxxx@gamil.com"
            bg="black"
            border="1px solid #00ff0a"
          />
        </Box>
        <Box>
          <Heading as="h4" size="md" color="white" textAlign="center" m={5}>
            What do people call you
          </Heading>
          <Select bg="black" border="1px solid #00ff0a">
            <option value="entrepreneur">Entrepreneur</option>
            <option value="investor">investor</option>
          </Select>
        </Box>
        <Button
          mt="60px"
          bg="black"
          border="1px solid #00ff0a"
          color="white"
          colorScheme="#092312"
        >
          Submit
        </Button>
      </Box>
      <Heading mt="4rem" textAlign="center" color="white">
        How To Invest Or Scale UP
      </Heading>
      <Box
        display="flex"
        justifyContent="space-around"
        bgGradient="linear(to-t, black, brand.100, black)"
        p="80px"
        mt="60px"
        color="white"
        textAlign="center"
        // border="1px solid red"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          // _hover={<ScaleFade initialScale={0.9} in={isOpen} />}
        >
          <Image
            m={4}
            src="signup.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />

          <Heading mb={3}>Sign up</Heading>
          <Text>Sign up for free and update your portfolio</Text>
        </Box>
        <Spacer />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m={4}
            src="users.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />
          <Heading mb={3}>Connect</Heading>
          <Text>
            Select and connect with entrepreneurs <br /> or investors{" "}
          </Text>
        </Box>
        <Spacer />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            m={4}
            src="conversation.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />
          <Heading mb={3}>Interact</Heading>
          <Text>
            Become a premium member and start <br /> a conversion
          </Text>
        </Box>
      </Box>

      <SimpleGrid
        color="white"
        columns={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Heading mb={5}>Sign UP</Heading>
          <Text pb={5}>
            Grow Fin the brokerage platform which <br />
            helps the users to connect with the Investors and Fund Raisers.
          </Text>
          <Button
            border="1px solid #00ff0a"
            borderRadius="30px"
            color="white"
            bg="brand.100"
            _hover={{ bg: "brand.100" }}
          >
            Sign Up
          </Button>
        </Box>
        <Image src="1.png" />
      </SimpleGrid>

      <SimpleGrid
        color="white"
        columns={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image src="2.png" />
        <Box>
          <Heading mb={5}>How to Raise Funds</Heading>
          <Text pb={5}>
            Sign In to the Grow Fin and describe your <br />
            Domain or specific Niche in your profile <br />
            to get the investors attention.
          </Text>
          <Button
            border="1px solid #00ff0a"
            borderRadius="30px"
            color="white"
            bg="brand.100"
            _hover={{ bg: "brand.100" }}
          >
            Scale Up
          </Button>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        color="white"
        columns={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
      >
        <Box>
          <Heading mb={5}>How to Invest</Heading>
          <Text pb={5}>
            Sing Up to the Grow Fin and update your <br />
            profile to demonstrate how much would <br />
            you like to Invest for the Interested Specific <br />
            Business
          </Text>
          <Button
            border="1px solid #00ff0a"
            borderRadius="30px"
            color="white"
            bg="brand.100"
            _hover={{ bg: "brand.100" }}
          >
            Sign Up
          </Button>
        </Box>
        <Image src="3.png" />
      </SimpleGrid>

      <Box color="white" textAlign="center" mt="80px" mb="50px">
        <Heading>The Service Which We Provide</Heading>
        <Text>
          our solution for connecting to a global network of participants with
          which your customers can instantly send <br />
          and receive or transfer money almost any where in the world{" "}
        </Text>
      </Box>

      <SimpleGrid
        bg="black"
        columns={2}
        p={12}
        mb="50px"
        spacing={5}
        alignItems="center"
      >
        <Box textAlign="center">
          <Box border="1px solid #00ff0a" borderRadius="20px" p="50px" m={8}>
            <Text color="white">
              Technological
              <br />
              and initiative money Transfer
              <br />
              platforms
            </Text>
          </Box>
          <Box border="1px solid #00ff0a" borderRadius="20px" p="50px" m={8}>
            <Text color="white">
              Connecting to the
              <br />
              Network or Participants
            </Text>
          </Box>
          <Box border="1px solid #00ff0a" borderRadius="20px" p="50px" m={8}>
            <Text color="white">
              Compliance and
              <br />
              financial Accounting Solutions
            </Text>
          </Box>
        </Box>
        <Image src="4.png" boxSize="600px" />
      </SimpleGrid>

      <Heading textAlign="center" color="white">
        Why Us
      </Heading>
      <SimpleGrid
        columns={3}
        // border="1px solid red"
        p="40px"
        mt={10}
        spacing={12}
        textAlign="center"
        color="white"
      >
        <Box border="1px solid #00ff0a" borderRadius="20px" p="20px">
          <Heading as="h6">
            Fast <br />
            Connection
          </Heading>
          <Text>Use White Level Money Transfers Software Solutions</Text>
        </Box>
        <Box border="1px solid #00ff0a" borderRadius="20px" p="20px">
          <Heading as="h6">Prosperity</Heading>
          <Text>Success manage your Business Using new opportunities</Text>
        </Box>
        <Box border="1px solid #00ff0a" borderRadius="20px" p="20px">
          <Heading as="h6">Scale Up</Heading>
          <Text>
            Use ready made technological solutions and the expert experience of
            the team
          </Text>
        </Box>
      </SimpleGrid>
      <Heading textAlign="center" color="white">
        Testimonials
      </Heading>
      <Heading textAlign="center" color="white">
        Trusted By Millions
      </Heading>
      {/* <Divider orientation="horizontal" colorScheme="#00ff0a" /> */}
      <Box
        borderTop="1px solid #00ff0a"
        borderBottom="1px solid #00ff0a"
        // textAlign="center"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt="70px"
        mb="70px"
        p="20px"
        color="white"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image
            src="social-network.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />
          <Text>Easy Connections</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image
            src="verify.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />
          <Text>Verified Profiles</Text>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Image
            src="padlock.png"
            border="1px solid #00ff0a"
            boxSize="5em"
            p={5}
            borderRadius="50%"
            bgGradient="radial( brand.100,black)"
          />
          <Text>100% Privacy</Text>
        </Box>
      </Box>

      {/* <Divider orientation="horizontal" color="#00ff0a" /> */}
      <Box color="white" textAlign="center" mb="100px">
        <SimpleGrid columns={3}>
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
      </Box>

      <Box
      // w="30rem"
      // textAlign="center"
      // display="flex"
      // justifyContent="space-around"
      // alignItems="center"
      // flexDirection="column"
      // color="white"
      // border="1x solid red"
      >
        {/* <AbsoluteCenter> */}
        <Heading textAlign="center" color="white" mb={10}>
          Stay In Touch!
        </Heading>
        <Center>
          <InputGroup size="md" w="33%" mb="30px">
            <Input
              pr="10px"
              type="email"
              placeholder="Enter Your Email"
              borderRadius="10px"
              border="1px solid #00ff0a"
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                p="10px"
                bg="#00ff0a"
                color="Yellow"
              >
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Center>
        {/* </AbsoluteCenter> */}
      </Box>

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
          <Box></Box>
        </Box>
      </Center>
      <Center>
        <Divider colorScheme="#00ff0a" />
      </Center>
      <Box color="white" display="flex" justifyContent="space-evenly" w="90%">
        <Text mr="200px">copyright Event Partners. All right reserved</Text>
        <Text>Privacy Policy | Support</Text>
      </Box>
    </Container>
  );
};

export default HomePage;
