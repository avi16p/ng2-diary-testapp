import { Injectable }       from '@angular/core';
import { DropdownQuestion } from '../../dynamic-form/question-dropdown';
import { QuestionBase }     from '../../dynamic-form/question-base';
import { TextboxQuestion }  from '../../dynamic-form/question-textbox';
import { RadioQuestion }  from '../../dynamic-form/question-radio';
import { CheckboxQuestion }  from '../../dynamic-form/question-checkbox';
import { MultiCheckboxQuestion }  from '../../dynamic-form/question-multiCheckbox';
import { formConfig } from '../../form_config';

@Injectable()
export class QuestionService {


  keyValueMap = {};

  // return the value of a question key to be displayed  (Radio, Checkbox, MultiCheckbox)
  getKeyValue(key: string) {

    if (this.keyValueMap[key]) {
      return this.keyValueMap[key];
    } else {
      return key;
    }

  }


  getQuestion(q: {}) {

    //console.log("q=", JSON.stringify(q));  

    let newQ: QuestionBase<any>;

    switch (q['type']) {

      case 'Textbox':
          newQ = new TextboxQuestion(q['cfg']);
        break;

      case 'Radio':
          newQ = new RadioQuestion(q['cfg']);
          for (var opt in q['cfg']['options']) { 
            this.keyValueMap[q['cfg']['options'][opt]['key']] = q['cfg']['options'][opt]['value']; 
          }
        break; 

      case 'Checkbox':
          newQ = new CheckboxQuestion(q['cfg']);
        break; 

      case 'MultiCheckbox':
          newQ = new MultiCheckboxQuestion(q['cfg']);
          for (var opt in q['cfg']['options']) { 
            this.keyValueMap[q['cfg']['options'][opt]['key']] = q['cfg']['options'][opt]['text']; 
          }
        break; 

      case 'Dropdown':
          newQ = new DropdownQuestion(q['cfg']);
          for (var opt in q['cfg']['options']) { 
            this.keyValueMap[q['cfg']['options'][opt]['key']] = q['cfg']['options'][opt]['value']; 
          }
        break; 

    }

    

    return newQ;

  }


  getQuestions(type: string) {

    let res = [];

    // comon questions
    let all: {} = formConfig['All'];

    for (var q in all){
        res.push(this.getQuestion(all[q]));       
    }

    // type specific questions
    let specific: {} = formConfig[type];

    for (var q in specific){
        res.push(this.getQuestion(specific[q])); 
    }

    // todo: sort by cfg.order
    return res;

  }


}

