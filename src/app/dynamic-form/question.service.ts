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

  resData: {} = {};

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


//================= form answers... ===================================





  getFormAnswer(q: {}, formValue: {}) {

    //console.log("q=", JSON.stringify(q));  

    let cfg;
    let keyValueMap = {};

    switch (q['type']) {

      case 'Textbox':
          cfg = q['cfg'];
          this.resData[cfg['key']] = {
              qType: 'Textbox',
              label: cfg['label'],
              value: formValue[cfg['key']] || "",
            }
          
        break;

      case 'Radio':
          cfg = q['cfg'];

          for (var opt in q['cfg']['options']) { 
            keyValueMap[q['cfg']['options'][opt]['key']] = q['cfg']['options'][opt]['value']; 
          }
          this.resData[cfg['key']] = {
              qType: 'Radio',
              label: cfg['label'],
              value: keyValueMap[formValue[cfg['key']]],
            }

        break; 

      case 'Checkbox':
          cfg = q['cfg'];
          this.resData[cfg['key']] = {
              qType: 'Checkbox',
              label: cfg['label'],
              text: cfg['text'],
              value: formValue[cfg['key']],
            }

        break; 

      case 'MultiCheckbox':
          cfg = q['cfg'];
          

          // build prity value
          let str = '';
          let first = true;
          for (var opt in q['cfg']['options']) { 

            if (formValue[cfg['key'] + '__' + cfg['options'][opt]['key']]) {

              let newItem = cfg['options'][opt]['text'];

              // special case of altInput
              if (cfg['options'][opt]['altInput']) {
                let name = cfg['key'] + '__' + cfg['options'][opt]['key'] + '__altInput';
                if (formValue[name]) { // might be null
                  newItem = newItem + ": " + formValue[name];
                }         
              }

              if (first) {
                first = false;
                str = newItem;
              } else {
                str = str + ", " + newItem;
              }
            }
          }

          this.resData[cfg['key']] = {
              qType: 'MultiCheckbox',
              label: cfg['label'],
              value: str,
          }

        break; 

      case 'Dropdown':
          cfg = q['cfg'];

          for (var opt in q['cfg']['options']) { 
            keyValueMap[q['cfg']['options'][opt]['key']] = q['cfg']['options'][opt]['value']; 
          }

          this.resData[cfg['key']] = {
              qType: 'Dropdown',
              label: cfg['label'],
              value: keyValueMap[formValue[cfg['key']]] || '',
          }

        break; 

    }    
  }





  // build json with formapped ansers per question
  // result is: {
  //           
  //             }
  getFormAnswers(type: string, formValue: {}) {

    console.log('getFormAnswers ', type, formValue);

    this.resData = {}; // clear


    // comon questions
    let common: {} = formConfig['Common'];

    for (var q in common){
        this.getFormAnswer(common[q], formValue);
    }

    // type specific questions
    let specific: {} = formConfig[type];

    for (var q in specific){
        this.getFormAnswer(specific[q], formValue);
    }

    return this.resData;

  }






}

