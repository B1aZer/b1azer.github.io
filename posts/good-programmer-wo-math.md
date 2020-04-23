---
layout: post
title: Can you be a good programmer without knowing Math?
---
## Preface

So happened, I did not study Math well in school. Partially because I attended multiple schools, partially because I did not have interest in it. But I had interest in programming and I thought I was getting good at it. Although I still had gaps in Mathematics, I thought I did not need it much for programming. All those algorithms and data structures I googled without trying to reproduce myself. I can't say I encountered them frequently in the span of my career as web developer, so I felt fine. 

But then I decided to change jobs. I thought if I spent several years as a developer then I could get a job in a big developer company. I googled how the interview will go and what kind of questions will be asked. It appeared interviewers like to ask those questions about algorithms and data structures. OK, I thought, I can study them. Although I still did not see much sense in it, because I only used them few times in an actual work. Interviewers also like to give coding challenges, where you need to solve a problem. I thought it would be a good idea to try to solve some of the problems before the interview. I googled typical interview problems and started solving them. I can't say my solutions were elegant or efficient, but since I did not have a way to determine efficiency, I thought they were good enough. Until I encountered a problem that changed my attitude to Math and my view of programming in general.  Here it is.

## The Problem

There is a cycle of digits from 1 to n.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/gh1fss89xqr838ao3u9g.png)

We start from 1 and delete every *second* digit from the circle until only one digit left. Given n numbers, we have to return the last one. In the above example with n = 10, deletion order is 2,4,6,8,10,3,7,1,9. We left with 5. That's it, rather simple.

I started thinking about possible solutions. We can use a list of numbers as input. And just delete every second number. But when we are at the end of the list, how do we know what next number to delete ? Next number is i + 2 where i is the current number. It seems the next number could be either 0 or 1 depending on whether the current number is odd or even. So we have to make a check. But how do we know if this number odd or even ? We can't determine it based on a current digit, because list length changes with each deletion. Also it seems this rule does not work for a first iteration where we have to delete from i + 1 position regardless of list length.

I thought maybe there is a different structure that I could use, the one that would organically link a tail to the head of the list, making it circular. When preparing to interview I read about linked lists. At first I quickly glanced through them, thinking they are pretty similar to arrays, and since all languages have arrays they are probably never used. But now I remembered that linked lists can be made circular by linking the last item to the first one. Exactly what I needed.

So I started to read about linked lists trying to come up with a better solution. Which I did after some time. 

I created a linked list item.

```javascript
class LinkedItem {
	constructor(val) {
  	this.next = null;
    this.prev = null;
    this.value = val;
    this.index = null;
  }
}
```
Created a linked list.

```javascript
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
    this.currentEl = null;
  }
  add(itm) {
      itm = new LinkedItem(itm);   
      if (this.head) { 	
      this.head.next = itm;    
      itm.prev = this.head;
    } else {
      this.tail = itm;
    }
    this.head = itm;
    this.head.index = this.size; 
    this.size += 1;
    // circular on 1 element
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  showCurrentValue() {
    return this.currentEl.value;
  }
  removeCurrent() {
    this.currentEl.prev.next = this.currentEl.next;
    this.currentEl.next.prev = this.currentEl.prev;
    this.currentEl = this.currentEl.next;
    this.size -= 1;
  }
  setCurrent(index) {
    let el = this.tail;
      while (index !== el.index) {
      el = el.next;
    }
    this.currentEl = el;
  }
  next() {
    this.currentEl = this.currentEl.next;
  }
}
```
And iterated over a list of items, removing items until single left.

```javascript
let lst = new LinkedList();
// populating list
let tmpArr = [...Array(7).keys()];
// removing 0
tmpArr.shift();
tmpArr.forEach(x => {lst.add(x)});
// start from 1
lst.setCurrent(0);
let result = getJfrom(lst);

function getJfrom(lst) {
  if (lst.size === 1) {
    return lst.showCurrentValue();
  }
  lst.next();
  lst.removeCurrent();
  return getJfrom(lst);
} 

console.assert(result === 5, result);
console.info('Hooray');
```

I was pretty proud of my solution. It was much more straightforward than initial solution with arrays, in a sense that I did not have to rely on gimmick checks. It became clear to me that different data structures can be useful depending on the task, even though these structures are not natively supported by the language. But what really blew my mind is that this problem can be solved in one line and you don't even need a computer to solve it.

I found out this problem called Josephus problem and the solution is widely known. There is even a story attached to it. Supposedly, during a Roman-Jewish war, Josephus was among Jewish rebels trapped in a cave by Romans. Preferring suicide to capture, rebels formed a circle and decided to kill every 3rd person in it. Josephus known for his mathematical talents quickly figured out where he should stand to save his life.

The solution to this problem is.

```javascript
function getNumber(n) {
	let rounded_exp = Math.ceil(Math.log2(n));
	return n - Math.pow(2, rounded_exp) + ((n % Math.pow(2, rounded_exp)) + 1);
}
```
Or more general

```C
    /**
	 * 
	 * @param n the number of people standing in the circle
	 * @return the safe position who will survive the execution 
	 *   f(N) = 2L + 1 where N =2^M + L and 0 <= L < 2^M
	 */
	public int getSafePosition(int n) {
		// find value of L for the equation
		int valueOfL = n - Integer.highestOneBit(n);
		int safePosition = 2 * valueOfL  + 1;
		
		return safePosition;
	}
```

The solution is based on formula f(n)=2l+1,
where n= 2^m + l and 0 <= l < 2^m.

The fact that solution can be written in one line and can be derived through mathematics formulas changed something in me. If you can write one line of code why would you write 100 ? To the point that I started to have doubts I should be a programmer. If I don't know math, I can't come up with a better solution. If I can't come up with a better solution, then I can't effectively do my work. I decided to take a break and think about it.

## Decision

After a few days I decided to relearn Mathematics. I thought that I might be doing something else in future, but until I work in software development I have to become better and math is the only way to do it. 

Hopefully [Khan Academy](https://www.khanacademy.org/math) was already a thing and it was perfect for me. Not only did it allowe me to quickly fill the gaps I had from school and university, but I started to actually like Mathematics, which, I have to admit, I did not quite like in school. Not surprisingly, Salman (founder of the academy) and I share the same idea that [everything can be learned](https://www.khanacademy.org/talks-and-interviews/conversations-with-sal/v/lets-teach-for-mastery-not-test-scores-sal-khan), although it might be that we taught the wrong way. 

I started noticing that all these modern concepts of programming like pure functions, state management, probabilities, combinations were already a theme in Mathematics over a 100 years ago. In fact the scientific reasoning that we use to solve programming problems has roots in Euclid's Elements written 2 millennia ago. Math not only allowed me to write better algorithms, but also to reason about their performance.

After relearning Mathematics I started to look at the modern frameworks source code and I saw that data structures are everywhere. For example, AngularJS uses linked lists to store scopes, hashes to uniquely identify elements, hash tables to quickly retrieve element, bit manipulations to quickly identify operation, trees to parse code and store hierarchy, dependency graphs to resolve dependencies, queues to split execution, heaps to determine directive priority. So data structure knowledge greatly helped me to understand code, which sometimes look like this

```js
...

            // Insanity Warning: scope depth-first traversal
            // yes, this code is a bit crazy, but it works and we have tests to prove it!
            // this piece should be kept in sync with the traversal in $broadcast
            if (!(next = (current.$$childHead ||
                (current !== target && current.$$nextSibling)))) {
              while (current !== target && !(next = current.$$nextSibling)) {
                current = current.$parent;
              }
            }
         } while ((current = next));
```

I also think solving puzzles and math problems helped me to think more clear. When you can't solve it one way, try to solve it another way. This type of thinking actually transforms on everyday problems very well.

## Conclusion

Don't be me, learn Math in school and be a good programmers.

###### Josephus problem explored in depth in "Concrete Mathematics" book by Donal Knuth.
