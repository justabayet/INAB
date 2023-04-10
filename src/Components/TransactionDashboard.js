import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material'
import TransactionList from './TransactionList'
import { useExpenses } from '../Providers/GraphValuesProvider/ExpensesProvider'
import { useTargets } from '../Providers/GraphValuesProvider/TargetsProvider'
import { useValues } from '../Providers/GraphValuesProvider/ValuesProvider'
import { useLimits } from '../Providers/GraphValuesProvider/LimitsProvider'
import Transaction from './Transaction'
import Expense from './Expense'

const TransactionDashboard = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue)
    }

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Typography variant="h4">Data</Typography>
            <Tabs value={tabIndex} onChange={handleTabChange} aria-label="tabs" variant='fullWidth'>
                <Tab label="Expenses" />
                <Tab label="Targets" />
                <Tab label="Values" />
                <Tab label="Limits" />
            </Tabs>
            <Box sx={{ p: 1, width: '100%' }}>
                {tabIndex === 0 && <TransactionList useValues={useExpenses} ChildComponent={Expense} />}
                {tabIndex === 1 && <TransactionList useValues={useTargets} ChildComponent={Transaction} />}
                {tabIndex === 2 && <TransactionList useValues={useValues} ChildComponent={Transaction} />}
                {tabIndex === 3 && <TransactionList useValues={useLimits} ChildComponent={Transaction} />}
            </Box>
        </Box>
    )
}

export default TransactionDashboard