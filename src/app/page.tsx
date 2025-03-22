'use client';

import * as React from 'react';

import { Pager, PageChangeEvent } from '@progress/kendo-react-data-tools';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { ActionsLayout, Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { DropDownList } from '@progress/kendo-react-dropdowns';

import Appbar from '@/components/Appbar';

interface PageInterface {
    skip: number;
    take: number;
}

export default function Home() {
	const [page, setPage] = React.useState<PageInterface>({ skip: 0, take: 5 });
    const [skip, setSkip] = React.useState(0);
    const [take, setTake] = React.useState(5);
	const [visible, setVisible] = React.useState(false);
    const [layout, setLayout] = React.useState<ActionsLayout>('stretched');

    const toggleDialog = () => {
        setVisible(!visible);
    };

    const onCreateData = () => {
        setVisible(!visible);
    };

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

	const categories = ['Pizza', 'Burger', 'Pasta', 'Burrito'];

	return (
		<Appbar>
			<div className="flex justify-between mb-2">
				<h1>My Habits</h1>
				<Tooltip anchorElement="target" position="left" parentTitle={true}>
					<Button title="create habits" type="button" onClick={toggleDialog} id="open-dialog" >
						Create
					</Button>
				</Tooltip>
			</div>
			
			<div>
				{visible && (
					<Dialog title={'Create Habit'} onClose={toggleDialog} width={350}>
						<div className="example-config">
							<DropDownList style={{ width: '300px' }} data={categories} defaultValue="Pizza" />
						</div>
						<DialogActionsBar layout={layout}>
							<Button type="button" themeColor={'primary'} onClick={toggleDialog}>
								Cancel
							</Button>
							<Button type="button" onClick={onCreateData}>
								Create
							</Button>
						</DialogActionsBar>
					</Dialog>
				)}
			</div>
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
		</Appbar>
	);
}
