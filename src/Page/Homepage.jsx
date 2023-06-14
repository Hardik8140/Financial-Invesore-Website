import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Image,
  Input,
  ScaleFade,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

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

      <Box color="white">
        <Box>
          <Heading>Sign UP</Heading>
          <Text>
            Grow Fin the brokerage platform which <br />
            helps the users to connect with the Investors and Fund Raisers.
          </Text>
          <Button>Sign Up</Button>
        </Box>
        <Image />
      </Box>
    </Container>
  );
};

export default HomePage;
