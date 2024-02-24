import { Controller, FieldValues } from 'react-hook-form';

import TextField from '@mui/material/TextField';

import { InputProps } from '@/shared/models/input';

export default function Input<FormValue extends FieldValues>(
    {
        control,
        errors,
        rules,
        id,
        name,
        type,
        className,
        label,
        size,
        placeholder,
        isRequired,
        autocomplete,
        styles
    }: InputProps<FormValue>
) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {ref, ...field}}) => (
                <TextField
                    {...field}
                    inputRef={ref}
                    id={id}
                    type={type}
                    className={className}
                    label={label}
                    size={size}
                    placeholder={placeholder}
                    required={isRequired}
                    autoComplete={autocomplete}
                    error={!!errors[name]}
                    helperText={errors[name]?.message as string}
                    sx={styles}
                />
            )}
        />
    );
}
