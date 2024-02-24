import { FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';

export type PasswordProps<FormValue extends FieldValues> = {
    name: string;
    errors: FieldErrors<FormValue>;
    size?: 'medium' | 'small';
    variant?: 'filled' | 'outlined' | 'standard'
    className?: string;
    styles?: Record<string, any>;
} & UseControllerProps<FormValue>;
