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
    body: 'When I first started writing React, I remember seeing many different approaches to writing components, varying greatly from tutorial to tutorial. Though the framework has matured considerably since then, there doesn’t seem to yet be a firm ‘right’ way of doing things. Over the past year at MuseFind, our team has written a lot of React components. We’ve gradually refined our approach until we’re happy with it. This guide represents our suggested best practices. We hope it will be useful, whether you’re a beginner or experienced. Before we get started, a couple of notes:',
    author: 'Scott Domes',
    category: 'react',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29dy2l0000eysaxem4qp52: {
    id: 'cja29dy2l0000eysaxem4qp52',
    timestamp: 1511992214378,
    title: 'My React List',
    body: 'When I just started playing with React and got into open source, I didn’t know the community at all. I didn’t know who these people are, where to find them, what they care about, and how to get in touch. It took me some time to realize that the tech community, aside from Github, is mostly on Twitter. It’s obvious to you if you’re part of it, but it wasn’t obvious to me back then. That’s why I decided to compile a list of people I think you should follow if you’re starting to use React. If you’re a beginner, this list should help you get a feel of the React community vibe, tools and libraries and their authors, and future directions. I didn’t make it a Twitter list so you don’t end up with a bunch of randos in your feed, and so I could add some comments. If you turn this into a Twitter list, let me know! (Update: William Leong created a Twitter list based on this article!)',
    author: 'Dan Abramov',
    category: 'react',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja43dy2l0111eysaxem4qp69: {
    id: 'cja43dy2l0111eysaxem4qp69',
    timestamp: 1511992214378,
    title: 'React Interview Questions',
    body: 'What happens when you call setState? The first thing React will do when setState is called is merge the object you passed into setState into the current state of the component. This will kick off a process called reconciliation. The end goal of reconciliation is to, in the most efficient way possible, update the UI based on this new state. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this tree, in order to figure out how the UI should change in response to the new state, React will diff this new tree against the previous element tree. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, will able to minimize its footprint on the UI by only making updates where absolutely necessary.',
    author: 'Tyler McGinnis',
    category: 'react',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29e16p0001eysa46to0m1u: {
    id: 'cja29e16p0001eysa46to0m1u',
    timestamp: 1511560118000,
    title: 'A Look Back At Some Inspirational Student Success Stories',
    body: 'We’re thankful that you, our students, have given us the opportunity to support your incredible commitment to lifelong learning. We’re thankful for the opportunity to witness your dedication, your tenacity, and your work ethic. We’re thankful you selected us to be your partner as you work to achieve great things in your lives and in your careers. Above all else, we’re thankful for the powerful example you set every day. As these stories and more make so clear, you are an inspiration to us all!',
    author: 'Caroline Watson',
    category: 'udacity',
    voteScore: 15,
    deleted: false,
    commentCount: 0,
  },
  cja29e1r50002eysa9r5fied6: {
    id: 'cja29e1r50002eysa9r5fied6',
    timestamp: 1511560118000,
    title: 'Happy Thanksgiving from Udacity!',
    body: 'The tradition of setting aside a day for giving thanks goes back hundreds, even thousands of years. Here in the United States, the fourth Thursday of November has been a day of thanksgiving since Abraham Lincoln proclaimed a national Thanksgiving Day in 1863. In 1941, President Franklin D. Roosevelt signed a bill into law, making it “official” that the fourth Thursday of every November would be Thanksgiving Day. So today, we pause to give thanks, and to feel thankful. At Udacity, we have so much to be thankful for. First and foremost, our students. Without you, there is no Udacity. We are so thankful for the inspiring example that you set every day. Thankful that you have entrusted your learning to Udacity. Thankful for all you achieve, and all you bring to the world. We are thankful to know each and every one of you. We are thankful for one another. To our fellow “Udacians,” as we like to call ourselves. It is a wonderful thing to come together in the service of helping others, and in the spirit of learning. I know for myself, I am humbled every single day by the passion, the commitment, and the dedication of my colleagues here at Udacity. I am so thankful to be a part of this community, and so thankful to work alongside this extraordinary group of people.',
    author: 'Christopher Watkins',
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
