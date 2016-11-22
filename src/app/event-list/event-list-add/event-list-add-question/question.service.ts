import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { RadioQuestion }  from './question-radio';
import { CheckboxQuestion }  from './question-checkbox';
@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous



  getQuestions(type: string) {


  	let titleQ: TextboxQuestion = 
  	  new TextboxQuestion({
        key: 'title',
        label: 'Title',
        value: '',
        required: true,
        order: 1
      });



    let homeActivityQ: DropdownQuestion = 
       new DropdownQuestion({
        key: 'homeActivity',
        label: 'Activity',
        options: [
          {key: 'tv',  value: 'Watch TV'},
          {key: 'Smartphone',  value: 'Play with my Smartphone'},
          {key: 'pc',  value: 'PC'},
          {key: 'book',  value: 'Book reading'},
          {key: 'friend',  value: 'Play with a friend'},
          {key: 'other',  value: 'Other'},
         
        ],
        order: 2
      });


    let classQ: DropdownQuestion = 
       new DropdownQuestion({
        key: 'class',
        label: 'Class',
        options: [
          {key: 'math',  value: 'Math'},
          {key: 'hebrew',  value: 'Hebrew'},
          {key: 'geography',  value: 'Geography'},
          {key: 'gym',  value: 'Gym'},
          {key: 'social',  value: 'Social'},
          {key: 'biology',  value: 'Biology'},
          {key: 'science',  value: 'Science'},
          {key: 'other',  value: 'Other'},
        ],
        order: 2
      });



    let gotHomeworkQ: DropdownQuestion = 
       new DropdownQuestion({
        key: 'gotHomework',
        label: 'Got Homework?',
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'yesBut',  value: 'Yes but will not do'},
          {key: 'no',  value: 'No'},
        ],
        order: 2
      });




    let gameQ: DropdownQuestion = 
       new DropdownQuestion({
        key: 'game',
        label: 'Played Game',
        options: [
          {key: 'hideAndSeek',  value: 'Hide & seek'},
          {key: 'catches',  value: 'Catches'},
          {key: 'swing',  value: 'Swings'},
          {key: 'other',  value: 'Other'},
        ],
        order: 3
      });


    let hadFunQ: DropdownQuestion = 
       new DropdownQuestion({
        key: 'hadFun',
        label: 'Had fun?',
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'kindOf',  value: 'Kind of'},
          {key: 'no',   value: 'No'},
        ],
        order: 3
      });

    // try with RadioQuestion
    let hadFunQ2: RadioQuestion = 
       new RadioQuestion({
        key: 'hadFun',
        label: 'Had fun?',
        options: [
          {key: 'yes',  value: 'Yes', checked: true},
          {key: 'kindOf',  value: 'Kind of', checked: false},
          {key: 'no',   value: 'No', checked: false},
        ],
        order: 3
      });


    // Checkbox - one element
    let todayQ: CheckboxQuestion = 
       new CheckboxQuestion({
        key: 'dateToday',
        label: 'Today?',
        options: [
          {key: 'yes',  value: 'Yes', checked: true},
        ],
        order: 3
      });


       
  	if (type == 'Home') return [titleQ, homeActivityQ];

  	if (type == 'School') return [titleQ, classQ, gotHomeworkQ];

  	if (type == 'Playground') return [titleQ, gameQ ,hadFunQ2];

    return []; 

  }


}

