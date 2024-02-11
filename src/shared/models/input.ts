import { FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';

export type InputProps<FormValue extends FieldValues> = {
    name: string;
    type: string;
    label: string;
    size: 'medium' | 'small';
    placeholder: string;
    isRequired: boolean;
    errors: FieldErrors<FormValue>;
    id?: string;
    className?: string;
    autocomplete?: string;
} & UseControllerProps<FormValue>;
