---
title: Pipes with Promises in JavaScript
layout: post
tags: production note, javascript 
date: 2020-04-28 10:30:00 -0400
---

When I was working on one of the sites I noticed that it has much more bugs related to
the front code compared to the back. This is partly because the front code base was larger (35.23%
JavaScript, 30.29%  HTML, 26.30% Python, 7.97% CSS to be exact). But it also
seemed because backend code was simpler. It did not have async events, did not
use shared state, backend views are mostly pure (meaning they will return the
same result on the same input).

Front code on the other hand was much more complex. It did not have any state
management solutions, it was hard to predict the current state, as well as not
possible to revert it. The team were in the process of migrating from AngularJS to
newest Angular. Most of the functions had side effects, in fact angular binding
is based on shared state and mutation of this state. This approach is
discouraged in modern frameworks like React, that favors immutability and
managed state. 

And by looking at the codebase we can see why. AngularJS controllers serve as
closures for smaller action functions. These functions often do not take any
arguments and work on shared state and closed dependencies. If 2 functions work
with the same shared object, the 1st function can directly manipulate output of
the 2nd function (e.g. if the 1st function writes to the object read in 2nd).
Sometimes this leads to subtle bugs.

As an example: [Fiddle 1](https://jsfiddle.net/b1azer/b7j6wg9r/74/). Function
`run` issues 2 tasks, one is Create request, another is Update request. In this
case an Update request can update different items depending on response's
delay. If we run a snippet several times it will show different results. This
might not be the outcome we desire. On production this could be actual
requests, timeouts, user events. The simple fix to make the logic consistent is
to define input value before the async event: [Fiddle
2](https://jsfiddle.net/b1azer/b7j6wg9r/72).

In fact the closer the input to the beginning of the function and the larger
the degree of cohesion between code, the more explicit the function becomes and
the less it prone to errors. In functional programming sequential cohesion is
natural. Each function works on input returned by preceding function. This
concept (functional composition) is widely used in popular js libraries:
lodash, ramba, RxJS and called pipe (or chain). An example from RxJS:

```js

from([1,2,3,4,5,6])
  .pipe(
    filter(x => x % 2 === 0),
    map(x => x + x),
    scan((acc, x) => acc + x))
  .subscribe(x => console.log(x))
```

This concept is common for several reasons:

 - it explicitly states input, output and all actions
 - does not modify input
 - can eliminate or make side effects clearly visible
 - can deal with edge cases ([], null)
 - can handle async events
 - is easier to debug

We even can mimic this concept with promises. Here is an example from
the production code:

```js

    function saveInstructorsDispatch() {
      instructorsSave();
      instructorsUpdate();
    }

    function instructorsSave() {
      const instructorsEmails = vm.instructors.map(vm.extractEmail);
      return getArrayOfInstructors(vm.newInstructors, instructorsEmails)
        .then(filterNewInstructors)
        .then((instructorsArr) => {
          vm.saveButtonText = 'Saving';
          return instructorsArr;
        })
        .then(data => Instructor.save(data).$promise)
        .then((instructorsArrFromResp) => {
          vm.instructors = pushAndUnselect(
            vm.instructors, instructorsArrFromResp
          );
          vm.saveButtonText = 'Saved';
          toastr.success('Instructors saved successfully');
          $modalInstance.close();
        })
        .catch(readError)
        .then((data) => {
          if (!data) return;
          vm.saveButtonText = 'Save';
          vm.errors = extractErrors(data);
        });
    }

    /**
     * getArrayOfInstructors
     *
     * Can be replaced with observable in Angular
     *
     * @param {Array} instructorsNew
     * @param {Array} instructorsEmails
     * @returns Promise that resolves to data or rejects to null
     *
     */
    function getArrayOfInstructors(instructorsNew, instructorsEmails) {
      return $q((res, rej) => {
        const instructorsArr = (instructorsNew.filter(i => i.email));
        instructorsArr.length
          ? res({ instructorsArr, instructorsEmails })
          : rej(null);
      });
    }

    /**
     * filterNewInstructors
     *
     * @param {Array} instructorsArr
     * @param {Array} instructorsEmails
     * @returns {Array}
     */
    function filterNewInstructors({ instructorsArr, instructorsEmails }) {
      ...
    }
    function instructorsUpdate() {
      ...
    }

```

Action hook (from DOM event) runs an action function that returns a promise
(which can be subscribed to if needed). First function in the chain creates a
promise with data for manipulation. If there is no data it rejects with null.
Shared object (vm) is manipulated in the body of the function for visibility,
while initial input never mutates. Edge cases and async rejects are catched in
a separate function. Such construction has all advantages stated above.
Debugging can be made as simple as .then(debug). Where `debug = (data) => {
$log(data); return data; }`. JSDoc is used to define input/output types. But
since type check is built in TypeScript it is not necessary.  Of course this
concept does not prevent bugs that are introduced by programmers themselves
(by not imagining all cases for example). But I think it has the potential to
reduce the number of subtle bugs, make state transition explicitly visible and
code more readable. 

There is one more advantage to using promises this way. The chain splits tasks into sub tasks.
Each sub task is treated as microtask in JS (see this great article 
[https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/). Meaning they will be executed separately but will have higher priority then timeout
tasks. Frameworks such as Vue.js use this technique internally to split execution
into smaller chunks.
