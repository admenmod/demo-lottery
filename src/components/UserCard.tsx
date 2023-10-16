import type { IUser } from '@/models/IUser';


export function UserCard({ user, balance }: { user: IUser, balance: number }) {
	return (
		<div style={{
			padding: '5px 30px',
			position: 'fixed',
			top: 0,
			right: 0,
			background: 'rgba(50, 50, 50, 0.5)'
		}}>
			<div>{user.name}</div>
			<div style={{ fontSize: '1.2em', color: '#aaaa77' }}>balance: {balance}</div>
			<div style={{ fontSize: '0.5em', color: '#777777' }}>{user.uuid}</div>
		</div>
	);
}
