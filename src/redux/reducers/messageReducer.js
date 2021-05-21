const messages = [
  'Aww yes!',
  'Nice job!',
  'Hooray for you!',
  'Sweet!',
  'Yasssssss!',
  "You're a star!",
  'Way to go!',
];

const messageReducer = () => messages[(Math.random() * messages.length) | 0];

// export default messageReducer;

export default messageReducer;
