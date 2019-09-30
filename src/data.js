const data = [
  {
    id: 1,
    type: 'text', 
    title: 'What\'s your name?'
  },
  {
    id: 4,
    type: 'radio',
    name: 'gender',
    title: 'Your gender?',
    options: [ 'Male', 'Female' ]
  },
  {
    id: 2,
    type: 'number',
    title: 'How many Banh Chung season have you gone through?'
  },
  {
    id: 10,
    type: 'select',
    title: 'Your status:',
    options: [
      'Single', 'Complicated', 'Married'
    ]
  },
  {
    id: 5,
    type: 'radio',
    name: 'relationshipRating',
    title: 'Rating our relationship?',
    options: [ 'Speechless (1/3)', 'Fine (2/3)', 'So good (3/3)']
  },
  {
    id: 9,
    type: 'checkbox',
    name: 'relatedTags',
    title: 'Some related-to-you tags:',
    options: [ 'Bread🍔', 'Pizza 🍕', 'Dog 🐶', 'Cat 😽']
  },
  {
    id: 6,
    type: 'date',
    title: 'When do we have a meeting?'
  },
  {
    id: 8,
    type: 'textarea',
    title: 'Something for me:'
  },
  {
    id: 7,
    type: 'capcha',
    title: 'Confirm that you\'s not a robot ?',
  },
]
export default data;