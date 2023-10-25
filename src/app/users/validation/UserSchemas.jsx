import { object, string, ref } from 'yup';

export const userLoginSchema = object({
    email: string("Ingresa tu email")
        .required("El email es requerido")
        .nonNullable("El email no puede ir vacio")
        .email("Ingresa un email válido"),
    password: string('Ingresa tu contraseña')
        .required('La contraseña es requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(30, 'La contraseña debe tener máximo 30 caracteres')
        .nonNullable('La contraseña no puede ir vacia')
});

export const userSignupSchema = object({
    firstName: string("Ingresa tu nombre")
        .required("El nombre es requerido")
        .nonNullable("El nombre no puede ir vacio"),
    lastName: string("Ingresa tu apellido")
        .required("El apellido es requerido")
        .nonNullable("El apellido no puede ir vacio"),
    email: string("Ingresa tu email")
        .required("El email es requerido")
        .nonNullable("El email no puede ir vacio")
        .email("Ingresa un email válido"),
    password: string('Ingresa tu contraseña')
        .required('La contraseña es requerida')
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .max(30, 'La contraseña debe tener máximo 30 caracteres')
        .nonNullable('La contraseña no puede ir vacia'),
    confirmPassword: string('Ingresa la confirmacion de tu contraseña')
        .required('La confirmacion de la contraseña es requerida')
        .oneOf([ref('password'), null], 'Los passwords deben coincidir')
        .min(8, 'La confirmacion de la contraseña debe tener al menos 8 caracteres')
        .max(30, 'La confirmacion de la contraseña debe tener máximo 30 caracteres')
        .nonNullable('La confirmacion de la contraseña no puede ir vacia'),
});