export const metadata = {
	title: 'おやつは何円まで',
	description: 'おやつは何円まで',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
