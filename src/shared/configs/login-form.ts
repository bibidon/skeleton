import { InputProps } from '@/shared/models/input';
import { LoginFormValue } from '@/shared/models/login-form';
import { PasswordProps } from '@/shared/models/password';

export const USERNAME_CONFIG: Omit<InputProps<LoginFormValue>, 'control' | 'errors'> = {
    id: 'username',
    name: 'username',
    type: 'email',
    label: 'Username',
    size: 'small',
    placeholder: 'Please enter an username',
    isRequired: true,
    autocomplete: 'username',
    rules: {
        required: 'The field is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email address'
        }
    }
};

export const PASSWORD_CONFIG: Omit<PasswordProps<LoginFormValue>, 'errors'> = {
    name: 'password',
    rules: {
        required: 'The field is required'
    }
};
