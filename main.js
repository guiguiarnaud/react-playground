// const helloWorld = React.createElement('h1', {}, 'Hello world!');

const helloWorld = <h1>hello World!</h1>

// mauvaise pratique


//ReactDOM.render(helloWorld, document.body);

ReactDOM.render(helloWorld, document.querySelector('#app'));
