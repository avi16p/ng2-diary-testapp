import { QuestionBase } from './question-base';

export class MultiCheckboxQuestion extends QuestionBase<string> {
  controlType = 'multiCheckbox';
  options: {key: string, text: string, value: boolean, altInput: boolean}[] = []; // other != null ==> user input

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
