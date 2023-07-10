import React, { useState } from 'react'

import { TextField } from '@mui/material'

import { useDeviceDetails } from 'Providers'

import { textFieldStyle } from 'style'


interface AmountFieldProps {
    amount: number
    setAmount: (newAmount: number) => void
    label?: string
}

const AmountField = ({ amount, setAmount, label }: AmountFieldProps): JSX.Element => {
    const [internalAmount, setInternalAmount] = useState<string>(amount.toString())
    const { isBodyFullSize } = useDeviceDetails()

    const maxWidth = isBodyFullSize ? 180 : 120

    const regex = /^(?!^0\d)-?\d*\.?\d*$|^$/

    return (
        <TextField
            variant='outlined'
            sx={{ ...textFieldStyle, maxWidth }}
            size='small'
            value={internalAmount}
            label={label}
            onFocus={event => {
                event.target.select();
            }}
            onChange={(event) => {
                setInternalAmount(event.target.value)
            }}
            onBlur={() => {
                if (regex.test(internalAmount)) {
                    setAmount(parseInt(internalAmount))
                }
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    if (regex.test(internalAmount)) {
                        setAmount(parseInt(internalAmount))
                    }
                }
            }}
        />
    )
}


export default AmountField
