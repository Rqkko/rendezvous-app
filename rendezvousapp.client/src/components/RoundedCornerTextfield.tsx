import { SxProps, TextField } from '@mui/material';
import React from 'react'


interface DefaultTextFieldProps {
    placeholder?: string;
    style?: SxProps;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    label: string;
}

function RoundedCornerTextfield({ placeholder, style, value, handleChange, type, label }: DefaultTextFieldProps): JSX.Element {

    return (
        <TextField
            placeholder={placeholder}
            sx = {{ 
                bgcolor: 'white',
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none',
                    },
                },
                ...style
            }}
            variant = "outlined"
            value={value}
            onChange={handleChange}
            label={label}
            {...(type && { type: type })} // Apply type only if it exists
        />
    )
}

export default RoundedCornerTextfield;