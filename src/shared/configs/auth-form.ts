import { InputProps } from '@/shared/models/input';
import { LoginFormValue } from '@/shared/models/login-form';
import { PasswordProps } from '@/shared/models/password';
import { SignupFormValue } from '@/shared/models/signup-form';

export const NAME_CONFIG: Omit<InputProps<SignupFormValue>, 'control' | 'errors'> = {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
    size: 'small',
    placeholder: 'Please enter a name',
    isRequired: true,
    autocomplete: 'given-name',
    rules: {
        required: 'The field is required'
    }
};

export const EMAIL_CONFIG: Omit<InputProps<SignupFormValue>, 'control' | 'errors'> = {
    id: 'email',
    name: 'email',
    type: 'email',
    label: 'Email',
    size: 'small',
    placeholder: 'Please enter an email',
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

export const PASSWORD_CONFIG_SIGNUP: Omit<PasswordProps<SignupFormValue>, 'errors'> = {
    name: 'password',
    rules: {
        required: 'The field is required'
    }
};

export const PASSWORD_CONFIG_LOGIN: Omit<PasswordProps<LoginFormValue>, 'errors'> = {
    name: 'password',
    rules: {
        required: 'The field is required'
    }
};

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
