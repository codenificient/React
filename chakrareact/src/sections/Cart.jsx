import {
	FormControl,
	GridItem,
	Checkbox,
	Button,
	FormLabel,
	Input,
	Box,
	VStack,
	HStack,
	Heading,
	Image,
	Text,
	Select,
	SimpleGrid,
    useColorMode, 
    useColorModeValue
} from '@chakra-ui/react';
import React from 'react';

function Cart() {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('green.50', 'whiteAlpha.50');
    const secondaryTextColor = useColorModeValue('gray.600', 'gray.400');
	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
			<VStack spacing={3} alignItems="flex-start">
				<Heading size="2xl">Your Details</Heading>
				<Text>If the price is too hard on your eyes,{' '}<Button onClick={toggleColorMode} variant="outline">try changing the theme</Button></Text>
			</VStack>
			<HStack justifyContent="space-between" w="full">
				<Image src="albert.svg" boxSize="100px" />
				<VStack>
					<Heading size="md">Penny board</Heading>
					<Text color={secondaryTextColor}>PNYCOMP27541</Text>
				</VStack>
				<Heading size="md">119</Heading>
			</HStack>
			<HStack justifyContent="space-between" w="full">
				<Text color={secondaryTextColor} size="sm">Subtotal</Text>
				<Heading size="md">119</Heading>
			</HStack>
			<HStack justifyContent="space-between" w="full">
				<Text color={secondaryTextColor} size="sm">Shipping</Text>
				<Heading size="md">19.99</Heading>
			</HStack>
			<HStack justifyContent="space-between" w="full">
				<Text color={secondaryTextColor} size="sm">Taxes</Text>
				<Heading size="md">23.80</Heading>
			</HStack>
			<HStack justifyContent="space-between" w="full">
				<Text color={secondaryTextColor} size="md">TOTAL</Text>
				<Heading size="md">162.80</Heading>
			</HStack>
		</VStack>
	);
}

export default Cart;
