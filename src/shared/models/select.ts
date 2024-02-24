import { FieldErrors, FieldValues, UseControllerProps } from 'react-hook-form';

export type SelectItem = {
    id: string;
    value: any;
    label: string;
};

export type SelectProps<FormValue extends FieldValues> = {
    name: string;
    label: string;
    size: 'medium' | 'small';
    isRequired: boolean;
    errors: FieldErrors<FormValue>;
    items: Array<SelectItem>;
    id?: string;
    className?: string;
} & UseControllerProps<FormValue>;
