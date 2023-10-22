import { object, string } from 'yup';

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