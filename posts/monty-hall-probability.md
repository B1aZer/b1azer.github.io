---
layout: post
title: Monty Hall Probability
---

## The problem 

Infamous Monty Hall problem states:

>Suppose you're on a game show, and you're given the choice of three doors:
Behind one door is a car; behind the others, goats. You pick a door, say No. 1,
and the host, who knows what's behind the doors, opens another door, say No. 3,
which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it
to your advantage to switch your choice?

If you don't know the problem you can think about the answer now. But if you
know it, then we both know that the answer is that the contestant should switch the door. The
assumption is that switching would give a 2/3 chance of winning, while sticking would only
give 1/3 chance. But is that assumption correct?

## Assumption

My initial assumption was that it does not matter if the contestant changes the door or no,
the chance of winning is 50% on step 2. Where step 2 is the step after the 1st door is opened.
Why does it differ from common convention that switching will give 66% percent of winning?

To understand that we need to understand where 66% comes from. Before step 1 (where the 1st
door is opened) the contestant can choose any door from 3 doors. Choosing any door (say door
1) and sticking to it will give 33% of winning. Choosing any door (say door 1) and then
switching door will give 2/3 of winning. Because:

1 - G, 2 - C, 3 - G, Win

 - Contestant chooses door 1
 - Host opens door 3
 - Contestant chooses door 2
 - Host opens door 1
 - Contestant wins a car

1 - C, 2 - G, 3 - G, Lose

 - Contestant chooses door 1
 - Host opens door 3
 - Contestant chooses door 2
 - Host opens door 1
 - Contestant loses a car

1 - G, 2 - G, 3 - C, Win

 - Contestant chooses door 1
 - Host opens door 2
 - Contestant chooses door 3
 - Host opens door 1
 - Contestant wins a car

The contestant finds a car in 2 cases from 3 or in 66% of cases. There are some implicit rules
that defined in this logic:

 1. Host will open the Goat door first on step 1. Host will open the car door last. It does not
    matter what strategy the contestant has, it's not possible for him to lose on this
    step.
 2. The probability is given for th initial state with 3 cases.
 3. Contestant knows about the previous choice and makes decision based on that.

 From 1. We know that it's not possible to lose or win on the first step. If the step does
 not matter, let's omit it. On step 2 we have 2 choices, does the switching logic still
 stand?

1 - G, 2 - C, Lose

 - Contestant chooses door 1
 - Host opens door 2
 - Contestant loses a car

1 - G, 2 - C, Win

 - Contestant chooses door 2
 - Host opens door 1
 - Contestant wins a car

1 - C, 2 - G, Win

 - Contestant chooses door 1
 - Host opens door 2
 - Contestant wins a car

1 - C, 2 - G, Lose

 - Contestant chooses door 2
 - Host opens door 1
 - Contestant loses a car

It seems on step 2 switching does not work and contestant will lose in 50% of chances.
Why do we have step 1 if does not matter? Because it makes the attraction unfair. It makes
predefined outcome more probable.

## Flawed game show

Step 1 is needed to create the illusion of choice. If we have 3 choices and win in 2 of them
then we can say that probability is higher than 50% as we initially thought. Another
reason is we are not able to evenly split 3 items by 2 steps. If we have a sequence of 3 items (say
1,2,3) and we need to make 2 steps in this sequence (from an arbitrary start point), so
that each step removes 1 item (but not the car), we will end up with 2 repeated results:

**1**,2,3

 - start from 1
 - 3 is removed
 - choose item 2
 - result 2

1,**2**,3

 - start from 2
 - 3 is removed
 - choose item 1
 - result 1

1,2,**3**

 - start from 3
 - 1 is removed
 - choose item 2
 - result 2

We can see that we eventually end up on the same item by switching. It's not the same for
sticking where we could end up on any of the 3 items.  Or any of the 2 items to be
correct. If we start from the arbitrary number of choices, we will eventually reduce our
choices to 2 items, one is a car and one is not. It does not matter what strategy we use.
Strategy only matters when we want to calculate the probability of winning.

There are 2 factors we should keep in mind when calculating probability:

 - Probability depends on previous step
 - Outcomes are not equally likely

Even with 2 items left we have to account for all the previous tries. And when
we start with 50 items, sticking will be 1/50. We still end up with 2 items, but
sticking prohibits the switching on last step and the probability is still 1/50.
Which in turn means that my initial assumption was incorrect.

Now lets return to original statement of the question in the problem: "Is it
to your advantage to switch your choice?" Yes, because as we deduced above,
rules of this game favor particular outcome.
