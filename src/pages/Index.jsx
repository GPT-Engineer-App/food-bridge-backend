import React, { useState } from "react";
import { Box, Container, Input, Button, SimpleGrid, Text, Heading, FormControl, FormLabel, Stack, Checkbox, Image, useToast } from "@chakra-ui/react";
import { FaSearch, FaStar, FaUtensils, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const [searchParams, setSearchParams] = useState({
    areaCode: "",
    query: "",
  });
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const toast = useToast();

  // Dummy function for search, replace with actual API call
  const handleSearch = async () => {
    // TODO: Implement actual search logic with the backend
    const results = []; // API call to search endpoint
    setSearchResults(results);

    if (results.length === 0) {
      toast({
        title: "No results found",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // Dummy function for adding to favorites, replace with actual API call
  const handleAddToFavorites = (restaurantId) => {
    // TODO: Implement add to favorites logic with the backend
    setFavorites([...favorites, restaurantId]);
  };

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxW="container.xl">
      <Stack spacing={4}>
        <Heading as="h1" size="xl">
          Food Delivery Portal
        </Heading>
        <FormControl>
          <FormLabel htmlFor="areaCode">Area Code</FormLabel>
          <Input id="areaCode" name="areaCode" value={searchParams.areaCode} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="query">Search</FormLabel>
          <Input id="query" name="query" value={searchParams.query} onChange={handleChange} />
        </FormControl>
        <Button leftIcon={<FaSearch />} onClick={handleSearch}>
          Search
        </Button>

        <SimpleGrid columns={3} spacing={10}>
          {searchResults.map((result) => (
            <Box key={result.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Stack direction="row" justify="space-between">
                <Text fontWeight="bold">{result.name}</Text>
                <Checkbox icon={<FaStar />} isChecked={favorites.includes(result.id)} onChange={() => handleAddToFavorites(result.id)} />
              </Stack>
              <Image src={result.imageSrc || "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzA5NjE1OTgxfDA&ixlib=rb-4.0.3&q=80&w=1080"} alt={result.name} />
              <Text>{result.description}</Text>
              <Stack direction="row" justify="space-between">
                <Button leftIcon={<FaUtensils />} variant="outline">
                  Book Dining
                </Button>
                <Button leftIcon={<FaShoppingCart />} colorScheme="teal">
                  Order Now
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default Index;
