import { Controller, FieldValues } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { SelectItem, SelectProps } from '@/shared/models/select';

export default function Select<FormValue extends FieldValues>(
    {
        control,
        errors,
        rules,
        id,
        name,
        className,
        label,
        defaultValue,
        size,
        isRequired,
        items,
        styles
    }: SelectProps<FormValue>
) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field}) => (
                <TextField
                    {...field}
                    select
                    defaultValue={defaultValue}
                    id={id}
                    className={className}
                    label={label}
                    size={size}
                    required={isRequired}
                    error={!!errors[name]}
                    helperText={errors[name]?.message as string}
                    sx={styles}>
                    {items.map((item: SelectItem) => (
                        <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>
                    ))}
                </TextField>
            )}
        />
    );
}
