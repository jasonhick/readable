const clone = require('clone');

const db = {};
const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: '10 Tips for Better Redux Architecture',
    body: 'When I started using React, there was no Redux. There was only the Flux architecture, and about a dozen competing implementations of it. Now there are two clear winners for data management in React: Redux and MobX, and the latter isn’t even a Flux implementation. Redux has caught on so much that it’s not just being used for React anymore. You can find Redux architecture implementations for other frameworks, including Angular 2. See ngrx:store, for example.',
    author: 'Eric Elliott',
    category: 'redux',
    voteScore: 6,
    deleted: false,
    commentCount: 2,
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'You might not need Redux!',
    body: 'People often choose Redux before they need it. “What if our app doesn’t scale without it?” Later, developers frown at the indirection Redux introduced to their code. “Why do I have to touch three files to get a simple feature working?” Why indeed! People blame Redux, React, functional programming, immutability, and many other things for their woes, and I understand them. It is natural to compare Redux to an approach that doesn’t require “boilerplate” code to update the state, and to conclude that Redux is just complicated. In a way it is, and by design so.',
    author: 'Dan Abramov',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0,
  },
  '6ni6ok3ym7mf1p33labc': {
    id: '6ni6ok3ym7mf1p33labc',
    timestamp: 1510418085001,
    title: 'A cartoon intro to Redux',
    body: 'Redux solves the same problems as Flux, plus some. Just like Flux, it makes state changes in apps more predictable. If you want to change state, you have to fire off an action. There’s no way to change the state directly because the thing holding the state (the store) only has a getter, not setters. These basics of Flux and Redux are pretty similar. So why a different pattern? Redux creator Dan Abramov saw an opportunity to improve on Flux. He wanted better developer tools. He saw that if you moved a couple of things around, you could make better developer tools possible, but still have the same predictability that Flux gives you. He wanted hot reloading and time travel debugging (there’s another cartoon to explain these). But there were some problems which made developer tooling hard to do with Flux.',
    author: 'Lin Clark',
    category: 'redux',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29dy2l0000eysaxem4qp47: {
    id: 'cja29dy2l0000eysaxem4qp47',
    timestamp: 1510418085001,
    title: 'Our Best Practices for Writing React Components',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'Scott Domes',
    category: 'react',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29e16p0001eysa46to0m1u: {
    id: 'cja29e16p0001eysa46to0m1u',
    timestamp: 1510418085001,
    title: 'A Look Back At Some Inspirational Student Success Stories',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingone',
    category: 'udacity',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29e1r50002eysa9r5fied6: {
    id: 'cja29e1r50002eysa9r5fied6',
    timestamp: 1510418085001,
    title: 'Happy Thanksgiving from Udacity!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingone',
    category: 'udacity',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
};

function getData(token) {
  let data = db[token];
  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
}

function getByCategory(token, category) {
  return new Promise((res) => {
    const posts = getData(token);
    const keys = Object.keys(posts);
    const filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted);
    res(filtered_keys.map(key => posts[key]));
  });
}

function get(token, id) {
  return new Promise((res) => {
    const posts = getData(token);
    res(posts[id].deleted
      ? {}
      : posts[id]);
  });
}

function getAll(token) {
  return new Promise((res) => {
    const posts = getData(token);
    const keys = Object.keys(posts);
    const filtered_keys = keys.filter(key => !posts[key].deleted);
    res(filtered_keys.map(key => posts[key]));
  });
}

function add(token, post) {
  return new Promise((res) => {
    const posts = getData(token);

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false,
      commentCount: 0,
    };

    res(posts[post.id]);
  });
}

function vote(token, id, option) {
  return new Promise((res) => {
    const posts = getData(token);
    post = posts[id];
    switch (option) {
      case 'upVote':
        post.voteScore += 1;
        break;
      case 'downVote':
        post.voteScore -= 1;
        break;
      default:
        console.log(`posts.vote received incorrect parameter: ${option}`);
    }
    res(post);
  });
}

function disable(token, id) {
  return new Promise((res) => {
    const posts = getData(token);
    posts[id].deleted = true;
    res(posts[id]);
  });
}

function edit(token, id, post) {
  return new Promise((res) => {
    const posts = getData(token);
    for (prop in post) {
      posts[id][prop] = post[prop];
    }
    res(posts[id]);
  });
}

function incrementCommentCounter(token, id, count) {
  const data = getData(token);
  if (data[id]) {
    data[id].commentCount += count;
  }
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll,
  incrementCommentCounter,
};
