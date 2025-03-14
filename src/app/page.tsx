'use client';

import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import Appbar from '@/components/Appbar';

export default function Home() {
	const handleButtonClick = () => {
		console.log('click');
		alert('KendoReact Button was clicked.');
	};

	const kendokaAvatar = 'https://demos.telerik.com/kendo-react-ui/assets/suite/kendoka-react.png';

	return (
		<>
			<Appbar />
		</>
	);
}
