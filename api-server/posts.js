const clone = require('clone');

const db = {};
const defaultData = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2,
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0,
  },
  '6ni6ok3ym7mf1p33labc': {
    id: '6ni6ok3ym7mf1p33labc',
    timestamp: 1510418085001,
    title: 'Udacity rocks!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingone',
    category: 'udacity',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29dy2l0000eysaxem4qp47: {
    id: 'cja29dy2l0000eysaxem4qp47',
    timestamp: 1510418085001,
    title: 'Udacity rocks!',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates ipsa soluta et laboriosam aut, magnam beatae dicta minus ut sit illum laudantium perspiciatis velit odio provident dolorum, recusandae, reprehenderit iusto.',
    author: 'thingone',
    category: 'udacity',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29e16p0001eysa46to0m1u: {
    id: 'cja29e16p0001eysa46to0m1u',
    timestamp: 1510418085001,
    title: 'Udacity rocks!',
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
    title: 'Udacity rocks!',
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
