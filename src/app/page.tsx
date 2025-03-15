'use client';

import * as React from 'react';

import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import Appbar from '@/components/Appbar';

interface PageInterface {
    skip: number;
    take: number;
}

export default function Home() {
	const [page, setPage] = React.useState<PageInterface>({ skip: 0, take: 5 });

    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(5);

	const habits = [
		{
			habitName: "Exercise",
			points: 10
		},
		{
			habitName: "Reading",
			points: 5
		},
		{
			habitName: "Socializing",
			points: 5
		}
	]

    const handlePageChange = (event: PageChangeEvent) => {
        setSkip(event.skip);
        setTake(event.take);
    };

	return (
		<Appbar>
			<h1>My Habits</h1>
			<hr />
            <Grid
                style={{
                    maxHeight: '400px'
                }}
                data={habits.slice(skip, skip + take)}
            >
                <GridColumn field="habitName" title="Name" width="300px" />
                <GridColumn field="points" title="Points" />
            </Grid>
            <hr />
			<Pager
				responsive={true}
				skip={page.skip}
				take={page.take}
				total={200}
				onPageChange={handlePageChange}
				buttonCount={5}
				info={true}
				previousNext={true}
				type="numeric"
				pageSizes={[5, 10, 15, 20]}
			/>
			<br/>
			<h1>My Progress Today</h1>
			<ProgressBar value={2} max={10} />
		</Appbar>
	);
}
