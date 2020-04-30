---
title: Do we actually need backend?
---

We always looking for grail. Css grail. Seo grail. And so on.

It seems all techologies now migrated to front end. Or the browser. Soon enough we won't
need operating systems. Everything will be availabe from the browser. Or probably galsses.
Search system now understand js code and site is full written with js (css, html).
Assembly is not written in js. Augmented reality written in js. Graphics written in js.
Still there is one still is missing - persistent database.

The grail would like like following: developer writes web site (html, css, js or just js).
Pushes site to a web server. And that's all.

When user enters site he downloads necessary files, parses them. When he goes to next
page. He download files for next page. When he checks out, hes uses browser API. When he
wants to see movie, he uses browser API. When he wants to stream, he uses browser API...

The issue arises when user tries to share information with other user. In this case user
saves information in persistent storage through browser API. But that information is only
available to that user. This is an developer's issue. If instead of localstorage we had
webstorage, then this would solve the issue. Webstorage will sync information with global
storage of the website. Developer has the scema but he does not care how information will
be saved and where. All he cares about the data he can save and retrieve similar to
localstorage.

Graphql is serious step in that deirection. It abstracts all db work and provide schema
for developer. But do we really need graphql if we had webstorage?

With webstorage we could do User.save = () => {storage.save(this)}. storage.save will save
information in persistent db. User is able to access his information but is not able to
acess other user's information. To the nature of javascript user is able to make queries
to db, but it will enforce auth checks and will show only information related to this
user. If we need to get some private information we can abstracact with separate service
API.

How to define admin user that ables to get all information? Storage has to define roles
and allow access based on roles. Admin user can write db with his private key.

Does this method has any drawbacks or security flaws?

Can we use blockchain to decentrilize db storage? Can we use smart contracts
for role distribution, validation?
