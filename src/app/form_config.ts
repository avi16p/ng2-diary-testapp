


export const formConfig = {
	
  All: {

    titleQ: {
      type: 'Textbox',
      cfg: {
        key: 'title',
        label: 'Title',
        value: '',
        required: true,  
        order: 1
      }
    },
    
    timeQ: {
      type: 'Checkbox',
      cfg: {
        key: 'currentTime',
        text: 'Current time',
        label: 'Time', 
        value: true, // checked
        order: 3
      }
    },

    dateQ: {
      type: 'Textbox',
      cfg: {
        key: 'date',
        type: 'date',
        label: 'Date',
        value: '',
        required: false,
        cond: 'currentTime',     // enabled when currentTime is check  
        order: 4
      }
    },


  },

  Home: {

    homeActivityQ: { 
       type: 'Dropdown',
       cfg: { 
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
          }
        },

  },

  School: {
    classQcheckBox: {
      type: 'MultiCheckbox',
      cfg: {
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
      }
    },

    gotHomeworkQ: {
      type: 'Dropdown',
      cfg: {
        key: 'gotHomework',
        label: 'Got Homework?',
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'yesBut',  value: 'Yes but will not do'},
          {key: 'no',  value: 'No'},
        ],
        order: 2
      }
    }


  },

  Playground: {
    gameQ: {
      type: 'Dropdown',
      cfg: {
        key: 'game',
        label: 'Played Game',
        options: [
          {key: 'hideAndSeek',  value: 'Hide & seek'},
          {key: 'catches',  value: 'Catches'},
          {key: 'swing',  value: 'Swings'},
          {key: 'other',  value: 'Other'},
        ],
        order: 3
      }
    },

    hadFunQ: {
      type: 'Radio',
      cfg: {
        key: 'hadFun',
        label: 'Had fun?',
        value: 'yes', // checked key
        options: [
          {key: 'yes',  value: 'Yes', checked: true},
          {key: 'kindOf',  value: 'Kind of', checked: false},
          {key: 'no',   value: 'No', checked: false},
        ],
        order: 3
      }
    },


  },


};



/*




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

*/
