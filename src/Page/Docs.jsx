import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
const Docs = () => {
  return (
    <Box bgGradient="linear(to-b,black, brand.100)">
      <Center>
        <Box
          pt={[2, 5, 10]}
          pb={[8, 16, 20, "100px"]}
          w={["100%", "90%"]}
          display="flex"
          justifyContent="center"
          textAlign="center"
          alignItems="center"
          flexDirection={["column", "column", "row"]}
        >
          {/* <SimpleGrid columns={2}> */}

          <Box p={[4, 8, 12]} color="white">
            <Heading fontSize={["xl", "2xl", "3xl"]}>
              'Your Money Our Expertise'
            </Heading>
            <Text fontSize={["sm", "md", "lg"]}>
              Maximize your financial potential with our expert guidance. Let us
              handle your money matters and unlock opportunities for growth and
              success.
            </Text>
          </Box>
          <Image
            src="Businessman_checks_his_income_has_gone_up_generated.png"
            boxSize={["250px", "300px", "400px"]}
            mt={[4, 8, 0]}
          />
          {/* </SimpleGrid> */}
        </Box>
      </Center>

      <Heading textAlign="center" color="white" mb={["30px", "50px"]}>
        Our Upgraded Plans
      </Heading>

      <Center>
        <SimpleGrid
          w={["90%", "90%"]}
          columns={{ base: 1, sm: 1, md: 3, lg: 3 }}
          spacing={["20px", "40px"]}
          pb={["40px", "60px"]}
        >
          <Card maxW="sm" p={3} borderRadius="20px" bg="black" color="white">
            <CardBody textAlign="center">
              <Heading>Pro</Heading>
              <Stack mt="6" spacing="3">
                <Text>
                  Connect our Investor and Entrepreneurs to get some idealogy
                  and Grow your Business
                </Text>
                <Text color="Yellow" fontSize="2xl">
                  $2,000.00/year
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button
                  bg="brand.100"
                  color="white"
                  _hover={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Center>
            <Heading size="sm">The best benefits of Pro:</Heading>
            <UnorderedList>
              <ListItem>Connect with 5 Investors</ListItem>
              <ListItem>Coneect with 5 Entrepreneurs</ListItem>
              <ListItem>Take best deal</ListItem>
              <ListItem>
                In a Month one time you can meet with the investors and
                Entrepreneurs support{" "}
              </ListItem>
            </UnorderedList>
          </Card>

          <Card maxW="sm" p={3} borderRadius="20px" bg="black" color="white">
            <CardBody textAlign="center">
              <Heading>Pro+</Heading>
              <Stack mt="6" spacing="3">
                <Text>
                  Connect our Investor,Entrepreneurs to get some idealogy and
                  Grow your Business
                </Text>
                <Text color="Yellow" fontSize="2xl">
                  $4,000.00/year
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button
                  bg="brand.100"
                  color="white"
                  _hover={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Center>
            <Heading size="sm">The best benefits of Pro:</Heading>
            <UnorderedList>
              <ListItem>Connect with 10 Investors</ListItem>
              <ListItem>Coneect with 10 Entrepreneurs</ListItem>
              <ListItem>Take best deal</ListItem>
              <ListItem>
                In a Month two time you can meet with the investors and
                Entrepreneurs support
              </ListItem>
            </UnorderedList>
          </Card>

          <Card maxW="sm" p={3} borderRadius="20px" bg="black" color="white">
            <CardBody textAlign="center">
              <Heading>Premium</Heading>
              <Stack mt="6" spacing="3" textAlign="center">
                <Text>
                  Connect our Investor and Entrepreneurs to get some idealogy
                  and Grow your Business
                </Text>
                <Text color="Yellow" fontSize="2xl">
                  $6,000.00/year
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <Center>
              <CardFooter>
                <Button
                  bg="brand.100"
                  color="white"
                  _hover={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Center>
            <Heading size="sm">The best benefits of Pro:</Heading>
            <UnorderedList>
              <ListItem>Connect with Multiple Investors</ListItem>
              <ListItem>Coneect with Multiple Entrepreneurs</ListItem>
              <ListItem>Take best deal</ListItem>
              <ListItem>
                In a Month multiple time you can meet with the investors and
                Entrepreneurs support{" "}
              </ListItem>
            </UnorderedList>
          </Card>
        </SimpleGrid>
      </Center>

      <Heading color="white" textAlign="center" pt="40px">
        Our Mission
      </Heading>
      <Box
        borderTop="1px solid #00ff0a"
        borderBottom="1px solid #00ff0a"
        display="flex"
        justifyContent="space-around"
        flexDirection={{ base: "column", md: "row" }}
        mt="70px"
        mb={{ base: "40px", md: "70px" }}
        p="20px"
        color="white"
      >
        {/* <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3 }}
          display="flex"
          justifyContent="space-around"
        > */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center"
        >
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
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center"
        >
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
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          alignItems="center"
        >
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
        {/* </SimpleGrid> */}
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
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} pb="80px">
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
