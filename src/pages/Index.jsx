import React, { useState } from "react";
import { Box, Button, Container, Heading, FormControl, FormLabel, Input, Table, Thead, Tbody, Tr, Th, Td, Image, Text, VStack } from "@chakra-ui/react";
import { FaConnectdevelop } from "react-icons/fa";

const Index = () => {
  const [connected, setConnected] = useState(false);
  const [accountData, setAccountData] = useState(null);

  const handleConnect = () => {
    // TODO: Implement MetaTrader 5 connection logic
    setConnected(true);
    // Simulated account data
    setAccountData({
      accountNumber: "1234567",
      balance: 10000,
      trades: [
        { id: 1, symbol: "EURUSD", profit: 500, openTime: "2023-06-01 10:00" },
        { id: 2, symbol: "GBPUSD", profit: -200, openTime: "2023-06-02 14:30" },
        { id: 3, symbol: "USDJPY", profit: 750, openTime: "2023-06-03 09:15" },
      ],
    });
  };

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZXRhdHJhZGVyJTIwNSUyMGxvZ298ZW58MHx8fHwxNzExNjk2NzY4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="MetaTrader 5 Logo" />
        <Heading as="h1" size="xl">
          MetaTrader 5 Account Overview
        </Heading>
        {!connected ? (
          <Box>
            <FormControl id="server">
              <FormLabel>MetaTrader 5 Server</FormLabel>
              <Input type="text" placeholder="Enter server address" />
            </FormControl>
            <FormControl id="login" mt={4}>
              <FormLabel>Login</FormLabel>
              <Input type="text" placeholder="Enter your login" />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Button leftIcon={<FaConnectdevelop />} colorScheme="blue" mt={8} onClick={handleConnect}>
              Connect to MetaTrader 5
            </Button>
          </Box>
        ) : (
          <Box>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Account Number: {accountData.accountNumber}
            </Text>
            <Text fontSize="xl" mb={8}>
              Balance: ${accountData.balance}
            </Text>
            <Heading as="h2" size="lg" mb={4}>
              Trading History
            </Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Symbol</Th>
                  <Th>Profit</Th>
                  <Th>Open Time</Th>
                </Tr>
              </Thead>
              <Tbody>
                {accountData.trades.map((trade) => (
                  <Tr key={trade.id}>
                    <Td>{trade.symbol}</Td>
                    <Td>${trade.profit}</Td>
                    <Td>{trade.openTime}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
