import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Navigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { UserCard } from '@/components/UserCard';


export function HomePage() {
	const { user, balance } = useTypedSelector(state => state.player);


	return (
		!user ? <Navigate to='/login' /> : <div>
			<Header />

			<UserCard user={user} balance={balance} />

			home
		</div>
	);
}
