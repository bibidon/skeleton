'use client';

import { useState } from 'react';

import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { PasswordProps } from '@/shared/models/password';

export default function Password({size = 'small', variant = 'outlined'}: PasswordProps): JSX.Element {
    const [showPassword, setShowPassword] = useState(false);

    const onShowPasswordBtnClicked = (): void => setShowPassword((show: boolean): boolean => !show);
    const onShowPasswordBtnMouseDown = (event: React.MouseEvent): void => event.preventDefault();

    return (
        <FormControl size={size} variant={variant}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
                id="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={onShowPasswordBtnClicked}
                            onMouseDown={onShowPasswordBtnMouseDown}
                            edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
                placeholder="Please enter a password"
                required
            />
        </FormControl>
    );
}
