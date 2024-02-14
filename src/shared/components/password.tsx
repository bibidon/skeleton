'use client';

import { useState } from 'react';

import { InputAdornment, IconButton, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { Controller, FieldValues } from 'react-hook-form';

import { PasswordProps } from '@/shared/models/password';

export default function Password<FormValue extends FieldValues>(
    {
        control,
        errors,
        rules,
        name,
        className,
        size = 'small',
        variant = 'outlined'
    }: PasswordProps<FormValue>
): JSX.Element {
    const [showPassword, setShowPassword] = useState(false);

    const onShowPasswordBtnClicked = (): void => setShowPassword((show: boolean): boolean => !show);
    const onShowPasswordBtnMouseDown = (event: React.MouseEvent): void => event.preventDefault();

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {ref, ...field}}): JSX.Element => (
                <TextField
                    {...field}
                    inputRef={ref}
                    id="current-password"
                    type={showPassword ? 'text' : 'password'}
                    className={className}
                    label="Password"
                    size={size}
                    variant={variant}
                    placeholder="Please enter a password"
                    required
                    autoComplete="current-password"
                    error={!!errors[name]}
                    helperText={errors[name]?.message as string}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={onShowPasswordBtnClicked}
                                    onMouseDown={onShowPasswordBtnMouseDown}
                                    edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            )}
        />
    );
}
