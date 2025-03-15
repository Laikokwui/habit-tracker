'use client';

import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import Appbar from '@/components/Appbar';

export default function CalendarPage() {
    return (
        <Appbar>
            <h1>Habit Date Tracker</h1>
            <Calendar />
        </Appbar>
    )
}
