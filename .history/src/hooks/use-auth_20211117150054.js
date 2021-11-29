import { useSelector } from 'react-redux';

export function useAuth() {
    const {} = useSelector((state) => state.user);
}
