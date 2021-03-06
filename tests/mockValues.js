module.exports = [
  {
    name: 'donutName',
    type: 'arr',
    values: [
      'Strawberry Frosted with Sprinkles',
      'Blueberry Cake',
      'Maple Frosted with Sprinkles',
      'French Cruller',
      'Glazed Stick',
      'Glazed Chocolate Stick',
      'Glazed',
      'Chocolate Frosted'
    ]
  },
  { name: 'price', type: 'num', values: [1, 200] },
  { name: 'customerRating', type: 'numFloat', values: [1, 100] },
  {
    name: 'customerComment',
    type: 'arr',
    values: [
      'Great!',
      "Not as good at Tom Hartman's.",
      'Gross!',
      'Meh.',
      'I have had worse.',
      'It was okay... I guess...',
      'Delicious!',
      'I want my money back.',
      'Can I have the recipe?',
      'I ate 23 of these, and then I got sick...'
    ]
  },
  {
    name: 'company',
    type: 'val',
    values: ['The Example Doughnut Company']
  },
  { name: 'sign', type: 'numSigned', values: [1, 2] },
  { name: 'date', type: 'date', values: [[2020], 10, 31] },
  { name: 'date', type: 'numFloat', values: [0, 1] }
]
