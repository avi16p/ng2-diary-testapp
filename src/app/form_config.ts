


export const formConfig = {
	
  Common: {

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
        hideCond: 'currentTime',     // hidden when currentTime is checked  
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

    hadFunQ: {
      type: 'Radio',
      cfg: {
        key: 'hadFun',
        label: 'Had fun?',
        value: 'yes', // checked key
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'kindOf',  value: 'Kind of'},
          {key: 'no',   value: 'No'},
        ],
        order: 3
      }
    },

  },





  Dinner: {


    dinnerTypeQ: { 
       type: 'Dropdown',
       cfg: { 
            key: 'dinnerType',
            label: 'Dinner type',
            options: [
              {key: 'pizza',  value: 'Pizza'},
              {key: 'egg',  value: 'Eggs'},
              {key: 'pasta',  value: 'Pasta'},
              {key: 'other',  value: 'Other'},
             
            ],
            order: 2
          }
        },


    enjoyQ: {
      type: 'Radio',
      cfg: {
        key: 'enjoy',
        label: 'Enjoy your dinner?',
        value: 'yes', // checked key
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'kindOf',  value: 'Kind of'},
          {key: 'no',   value: 'No'},
        ],
        order: 3
      }
    },


    restaurantQ: {
      type: 'Textbox',
      cfg: {
        key: 'restaurant',
        label: 'Restaurant name',
        value: '',
        required: false,  
        order: 1
      }
    },

    recommandQ: {
      type: 'Radio',
      cfg: {
        key: 'recommand',
        label: 'Recommand this place?',
        value: 'yes', // checked key
        options: [
          {key: 'yes',  value: 'Yes'},
          {key: 'notRealy',  value: 'Not realy'},
          {key: 'no',   value: 'No'},
          {key: 'na',   value: 'N/A'},
        ],
        order: 3
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



    whereQ: {
      type: 'Textbox',
      cfg: {
        key: 'where',
        label: 'Where?',
        value: '',
        required: false,  
        order: 2
      }
    },


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
          {key: 'yes',  value: 'Yes'},
          {key: 'kindOf',  value: 'Kind of'},
          {key: 'no',   value: 'No'},
        ],
        order: 3
      }
    },


  },


};


