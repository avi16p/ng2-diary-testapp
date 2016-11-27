import { Injectable }       from '@angular/core';
import { DropdownQuestion } from '../../dynamic-form/question-dropdown';
import { QuestionBase }     from '../../dynamic-form/question-base';
import { TextboxQuestion }  from '../../dynamic-form/question-textbox';
import { RadioQuestion }  from '../../dynamic-form/question-radio';
import { CheckboxQuestion }  from '../../dynamic-form/question-checkbox';
import { MultiCheckboxQuestion }  from '../../dynamic-form/question-multiCheckbox';

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
        label: 'Classes today',
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




    // let classQcheckBox: MultiCheckboxQuestion = 
    //   new MultiCheckboxQuestion({
    //     key: 'class',
    //     label: 'Classes today',
    //     options: [
    //       {key: 'math',  text: 'Math', value: false},
    //       {key: 'hebrew',  text: 'Hebrew', value: false},
    //       {key: 'geography',  text: 'Geography', value: false},
    //       {key: 'gym',  text: 'Gym', value: false},
    //       {key: 'social',  text: 'Social', value: false},
    //       {key: 'biology',  text: 'Biology', value: false},
    //       {key: 'science',  text: 'Science', value: false},
    //       {key: 'other',  text: 'Other', value: false},
    //     ],
    //     order: 2
    //   });    




    let classQcheckBox: MultiCheckboxQuestion = 
      new MultiCheckboxQuestion({
        key: 'class',
        label: 'Classes today',
        options: [
          {key: 'math',  text: 'Math', value: false},
          {key: 'hebrew',  text: 'Hebrew', value: false},
          {key: 'geography',  text: 'Geography', value: false},
          {key: 'gym',  text: 'Gym', value: false},
          {key: 'social',  text: 'Social', value: false},
          {key: 'biology',  text: 'Biology', value: false},
          {key: 'science',  text: 'Science', value: false},
          {key: 'other',  text: 'Other', value: false, altInput: true},
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
        value: 'yes', // checked key
        options: [
          {key: 'yes',  value: 'Yes', checked: true},
          {key: 'kindOf',  value: 'Kind of', checked: false},
          {key: 'no',   value: 'No', checked: false},
        ],
        order: 3
      });


    // Checkbox - one element
    let timeQ: CheckboxQuestion = 
       new CheckboxQuestion({
        key: 'currentTime',
        text: 'Current time',
        label: 'Time', 
        value: true, // checked
        order: 3
      });



    let dateQ: TextboxQuestion = 
      new TextboxQuestion({
        key: 'date',
        type: 'date',
        label: 'Date',
        value: '',
        required: false,
        cond: 'currentTime',     // enabled when currentTime is check  
        order: 4
      });



       
  	if (type == 'Home') return [titleQ, timeQ, dateQ, homeActivityQ];

  	if (type == 'School') return [titleQ, timeQ, dateQ, classQcheckBox, gotHomeworkQ];

  	if (type == 'Playground') return [titleQ, timeQ, dateQ, gameQ ,hadFunQ2];

    return []; 

  }


}

