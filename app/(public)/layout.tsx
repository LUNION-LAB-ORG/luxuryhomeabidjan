import React from 'react';
import {Navbar} from "@/components/navbar";

function PublicLayout({children}: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

export default PublicLayout;