import { useSelector } from 'react-redux';

export function useAuth() {
    const { username, email, token, id } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        username,
        email,
        token,
        id,
    };
}
