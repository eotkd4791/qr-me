import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Theme } from '@radix-ui/themes';

import './globals.css';
import '@radix-ui/themes/styles.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Share Me',
	description: 'Share your business card with ease.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
					{children}
				</Theme>
			</body>
		</html>
	);
}
