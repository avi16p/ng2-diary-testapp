import { Injectable }       from '@angular/core';
import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { RadioQuestion }  from './question-radio';
import { CheckboxQuestion }  from './question-checkbox';
import { MultiCheckboxQuestion }  from './question-multiCheckbox';
import { formConfig } from '../form_config';

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
    let common: {} = formConfig['Common'];

    for (var q in common){
        res.push(this.getQuestion(common[q]));       
    }

    // type specific questions
    let specific: {} = formConfig[type];

    for (var q in specific){
        res.push(this.getQuestion(specific[q])); 
    }

    // todo: sort by cfg.order
    return res;

  }


  getTypes() {

    let res = [];

    for (var t in formConfig){
        if (t != 'Common') {
          res.push(t);
        }
    }    

    return res;

  }


}

