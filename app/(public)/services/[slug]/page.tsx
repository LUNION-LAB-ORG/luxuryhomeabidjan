import React from 'react';
import ServiceDetailsContent from "@/components/services/service-details-content";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

async function ServiceDetailsPage(props: Props) {
	const {slug} = await props.params;
	return (
		<ServiceDetailsContent/>
	);
}

export default ServiceDetailsPage;