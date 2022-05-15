// 1)
//Re-resolve a promise?
//What’s the output of the code below?
//
//let promise = new Promise(function(resolve, reject) {
//  resolve(1);
//
//  setTimeout(() => resolve(2), 1000);
//});
//
//promise.then(alert);
// answer: will only resolve 1 because the promise will only return the first resolve
// the set time out still runs but inst returned

//2) Delay with a promise
//The built-in function setTimeout uses callbacks. Create a promise-based alternative.
//
//The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:
//
//function delay(ms) {
//  // your code
//}
//
//delay(3000).then(() => alert('runs after 3 seconds'));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }  //youre going to retunr a new promise with the resolve set in the set time and a timer
  
  delay(3000).then(() => alert('runs after 3 seconds'));


// 3)Animated circle with promise
//Rewrite the showCircle function in the solution of the task Animated circle with callback so that it returns a promise instead of accepting a callback.
//
//The new usage:showCircle(150, 150, 100).then(div => {
//      div.classList.add('message-ball');
//      div.append("Hello, world!");
//    });
//
/*function go() {
    showCircle(150, 150, 100, div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
      div.style.width = radius * 2 + 'px';
      div.style.height = radius * 2 + 'px';

      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        callback(div);
      });
    }, 0);
  }*/

  function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');  //use given .then 
      div.append("Hello, world!");
    });
  }

  function showCircle(cx, cy, radius) { //take callback off
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {  //set up a promise to have the timer set as the resolve
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }