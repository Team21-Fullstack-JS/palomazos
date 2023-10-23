/**
 * Función que permite hacer uso del AuthContextProvider
 */

import { useContext } from 'react';
import { AuthContext } from '../context/authContext.jsx';

export function useAuthContext() {
    return useContext(AuthContext);
}