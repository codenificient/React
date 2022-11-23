import {
	Button,
	Checkbox,
	FormControl,
	FormLabel,
	GridItem,
	Heading,
	Input,
	Select,
	SimpleGrid,
	Text,
	useBreakpointValue,
	VStack
} from '@chakra-ui/react';
import React from 'react';

function Details() {
	const colSpan = useBreakpointValue({base: 2, md: 1});
	return (
		<VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
			<VStack spacing={3} alignItems="flex-start">
				<Heading size="2xl">Your Details</Heading>
				<Text>If you already have an account, click here to log in</Text>
			</VStack>
			<SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input placeholder="John" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Last Name</FormLabel>
						<Input placeholder="Doe" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel>Address</FormLabel>
						<Input placeholder="1234 Main Chakra UI Street" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder="Sillicon Valley" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>State</FormLabel>
						<Input placeholder="CA" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Zip Code</FormLabel>
						<Input placeholder="98765" />
					</FormControl>
				</GridItem>
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>Country</FormLabel>
						<Select>
							<option value="usa">United States</option>
							<option value="uae">United Arab Emirates</option>
							<option value="uk">United Kingdom</option>
							<option value="vi">United States Virgin Islands</option>
						</Select>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
						<Checkbox defaultChecked>Ship to billing Address</Checkbox>
					</FormControl>
				</GridItem>
				<GridItem colSpan={2}>
					<FormControl>
                        {/*colorScheme="brand"*/} 
						<Button variant="primary" size="lg" w="full">
							Place Order
						</Button>
					</FormControl>
				</GridItem>
			</SimpleGrid>
		</VStack>
	);
}

export default Details;
