
 

export interface IEvent {

  $key?: string;

  type: string;
  title: string;
}



export class Event implements IEvent {

	type: string;
  	title: string;

	date: Date;
	dateStr: string;

	homeActivity: string;

	classesStr: string;

	gotHomework: string;

	game: string;

	hadFun: string;

	constructor(title: string, 
				type: string,
				) {
		this.title = title;
		this.type = type;

	}
}



