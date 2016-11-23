

 

export class Event {


	date: Date;

	homeActivity: string;

	class: string; // TODO: delete
	classes: {} = {};

	gotHomework: string;

	game: string;

	hadFun: string;


	constructor(public title: string, 
				public type: string,
				) {


	}
}



