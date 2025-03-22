'use client';

import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { ProgressBar } from '@progress/kendo-react-progressbars';
import Appbar from '@/components/Appbar';

export default function CalendarPage() {
    return (
        <Appbar>
            <h1>Habit Date Tracker</h1>

            <div className="my-4">
                <h2>My Progress Today</h2>
                <ProgressBar value={2} max={10} />
            </div>
            <Calendar />
        </Appbar>
    )
}
