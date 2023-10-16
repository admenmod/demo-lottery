import type { UUID } from './id';


export declare interface IGame {
	uuid: UUID;
	balance: number;
	players: UUID[];
}
