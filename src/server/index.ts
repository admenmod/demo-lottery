import { math as Math } from '@/ver/helpers';
import { EventDispatcher } from '@/ver/events';

// import type { UUID } from '@/typeings/id';
// import type { IGame } from '@/typeings/IGame';
// import type { IPlayer } from '@/typeings/IPlayer';
//
//
// const SOME = 100;
//
//
// class Lottery extends EventDispatcher {
// 	public games: IGame[] = [];
// 	public players: IPlayer[] = [];
//
// 	public getGame(uuid: UUID) { return this.games.find(i => i.uuid === uuid); }
// 	public getPlayer(uuid: UUID) { return this.players.find(i => i.uuid === uuid); }
//
// 	public createGame(): UUID {
// 		const uuid = crypto.randomUUID();
//
// 		this.games.push({
// 			uuid,
// 			balance: 0,
// 			players: []
// 		});
//
// 		return uuid;
// 	}
// 	public createPlayer(name: string): UUID {
// 		const uuid = crypto.randomUUID();
//
// 		this.players.push({
// 			name, uuid,
// 			balance: 0
// 		});
//
// 		return uuid;
// 	}
//
// 	public replnishPlayerBalance(uuid: UUID, count: number): void {
// 		const player = this.getPlayer(uuid)!;
// 		player.balance += count;
// 	}
// 	public removeFromPlayerBalance(uuid: UUID, count: number): void {
// 		const player = this.getPlayer(uuid)!;
// 		player.balance -= count;
// 	}
//
// 	public addPlayerToGame(gameUUID: UUID, playerUUID: UUID): void {
// 		const game = this.getGame(gameUUID)!;
// 		const player = this.getPlayer(playerUUID)!;
//
// 		game.balance += SOME;
// 		player.balance -= SOME;
// 		game.players.push(player.uuid);
// 	}
//
// 	public startGame(uuid: UUID): void {
// 		const game = this.getGame(uuid)!;
// 		const winerId = game.players[Math.randomInt(0, game.players.length-1)];
// 		this.getPlayer(winerId)!.balance += game.balance;
// 		game.balance = 0;
// 	}
// }
//
//
// const lottery = new Lottery();
//
// const user1Id = lottery.createPlayer('user1');
// const user2Id = lottery.createPlayer('user2');
//
// lottery.replnishPlayerBalance(user1Id, 1200);
// lottery.replnishPlayerBalance(user2Id, 1000);
//
// const gameId = lottery.createGame();
//
//
// export type MsgEnam =
// 	|'start game'
// 	|'get player'
// 	|'add player to game';
//
// export const mockFetch = async <Msg extends MsgEnam>(msg: Msg, { payload: uuid }: { payload: UUID | [UUID, UUID] }) => {
// 	let data: unknown | null = null;
//
// 	if(typeof uuid === 'string') {
// 		if(msg === 'start game') data = { data: lottery.startGame(gameId) };
// 		else if(msg === 'get player') data = { data: lottery.getPlayer(uuid) };
// 	} else if(Array.isArray(uuid)) {
// 		if(msg === 'add player to game') data = { data: lottery.addPlayerToGame(uuid[0], uuid[1]) };
// 	}
//
// 	return {
// 		text: async () => JSON.stringify({ msg, data: JSON.stringify(data) }),
// 		json: async () => JSON.parse(JSON.stringify({ msg, data: JSON.stringify(data) }))
// 	};
// };
