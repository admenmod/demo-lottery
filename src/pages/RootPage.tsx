import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';


export function RootPage() {
	const { user } = useTypedSelector(state => state.player);


	return (
		!user ? <Navigate to='/login' /> : <div>
			<Header />

			root
		</div>
	);
}
