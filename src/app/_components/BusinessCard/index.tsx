import { AspectRatio, Box, Flex, Text, Heading, Separator } from '@radix-ui/themes';
import type { ReactNode } from 'react';
import {
	IoIosPin as LocationIcon,
	IoIosMail as MailIcon,
	IoIosCall as PhoneIcon,
	IoLogoLinkedin as LinkedInIcon,
	IoIosLink as WebsiteIcon,
} from 'react-icons/io';
import { Optional } from '../Optional';

export type BusinessCardData = Partial<{
	name: string;
	position: string;
	jobTitle: string;
	company: string;
	location: string;
	email: string;
	phone: string;
	linkedin: string;
	website: string;
}>;

export function BusinessCard({
	name,
	position,
	company,
	location,
	email,
	phone,
	linkedin,
	website,
	qrcode,
}: BusinessCardData & { qrcode: ReactNode }) {
	return (
		<AspectRatio ratio={9 / 5}>
			<Box
				id="business-card"
				p="3"
				width="100%"
				minHeight="250px"
				style={{ border: '1px solid var(--gray-a4)', background: 'white', position: 'relative' }}
				asChild
			>
				<Flex direction="column">
					<Flex align="end" gap="2" mb="3">
						<Optional value={name}>
							<Text color="cyan" asChild>
								<Heading as="h4" size="7">
									{name}
								</Heading>
							</Text>
						</Optional>
						<Separator orientation="vertical" />
						<Optional value={position && company}>
							<Text asChild>
								<Heading as="h5" size="2" weight="regular">
									<sub>
										{position}, @{company}
									</sub>
								</Heading>
							</Text>
						</Optional>
					</Flex>
					<Flex align="center" gap="1" mb="3">
						<Optional value={location}>
							<LocationIcon />
							<Heading as="h5" size="3" weight="light">
								{location}
							</Heading>
						</Optional>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<Optional value={email}>
							<MailIcon />
							<a href={`mailto:${email}`}>
								<Heading as="h5" size="3" weight="regular">
									{email}
								</Heading>
							</a>
						</Optional>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<Optional value={phone}>
							<PhoneIcon />
							<a href={`tel:${phone}`}>
								<Heading as="h5" size="3" weight="regular">
									{phone}
								</Heading>
							</a>
						</Optional>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<Optional value={linkedin}>
							<LinkedInIcon />
							<a href={linkedin} target="_blank" rel="noreferrer">
								<Heading as="h5" size="3" weight="regular">
									Linkedin: @{linkedin?.split('/')[4]}
								</Heading>
							</a>
						</Optional>
					</Flex>
					<Flex align="center" gap="1" mb="1">
						<Optional value={website}>
							<WebsiteIcon />
							<a href={website} target="_blank" rel="noreferrer">
								<Heading as="h5" size="3" weight="regular">
									{website}
								</Heading>
							</a>
						</Optional>
					</Flex>
					<Box style={{ position: 'absolute', bottom: 'var(--space-3)', right: 'var(--space-3)' }}>{qrcode}</Box>
				</Flex>
			</Box>
		</AspectRatio>
	);
}
