import * as Yup from "yup";

export const PASSWORD_REGEXES = {
    minLength8: /.{8,}/,
    hasLowercase: /(?=.*[a-z])/,
    hasUppercase: /(?=.*[A-Z])/,
    hasNumber: /(?=.*\d)/,
    hasSpecialChar: /(?=.*[@$!%*?&])/,
    noSpaces: /^\S*$/,
    allowedChars: /^[A-Za-z\d@$!%*?&]*$/,
};

export const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    last_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .matches(
            PASSWORD_REGEXES.hasLowercase,
            'Password must contain at least one lowercase letter'
        )
        .matches(
            PASSWORD_REGEXES.hasUppercase,
            'Password must contain at least one uppercase letter'
        )
        .matches(
            PASSWORD_REGEXES.hasNumber,
            'Password must contain at least one number'
        )
        .matches(
            PASSWORD_REGEXES.hasSpecialChar,
            'Password must contain at least one special character (@$!%*?&)'
        )
        .matches(
            PASSWORD_REGEXES.noSpaces,
            'Password cannot contain spaces'
        ),

    confirmPassword: Yup
        .string()
        .required('Please confirm your password')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});