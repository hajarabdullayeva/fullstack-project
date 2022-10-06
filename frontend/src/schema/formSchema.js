import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  // fullName: yup
  //     .string("Full should be a string")
  //     .text("please provide a valid name")
  //     .required("Name address is required"),
  email: yup
    .string('email should be a string')
    .email('please provide a valid email address')
    .required('email address is required'),
  password: yup
    .string('password should be a string')
    .min(5, 'password should have a minimum length of 5')
    .max(12, 'password should have a maximum length of 12')
    .required('password is required'),
  confirmPassword: yup
    .string('password should be a string')
    .oneOf([yup.ref('password')])
    .required('confirm password is required'),
  accountType: yup.string('account type should be a string').oneOf(['female', 'male']).required('Gender is required'),
  remember: yup.boolean().oneOf([true], 'Please tick checkbox'),
  toggle: yup.boolean().oneOf([true], 'Please toggle accept'),
});
