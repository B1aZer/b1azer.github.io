It seems it possible to abuse XSS more efficiently.

Let's say we found XSS in Google. 

https://.youtube.com/watch?v=lG7U3fuNw3A

We can abuse it by clicjacking, stealing cookies (most likely not), getting local
data. But for the most we won't get anything interesting. Like passwords or
credit card data. How can we get that information. If it was ever saved in
browser it most likely encripted and we won;t be able to access it with JS. It
seems the only way we can get this information is by spying on user during
his(er) activities. 

If we found the XSS on the front page spying would become problematic because
user will navigate to next page after search and would loose track of him(er).
But what if we disguise the user into thinking that he navigated to the page
while he stayed on the same page. How this can be done?

We can set event listeners on links that navigate away. When use clicks on any
such link we block this action, instead getting page contents from target page
and replace DOM with contents of the new page. For user nothing changed, he
navigated to another page. But the truth is user left on the exploited page and
we can trace him further. We do the same logic for new page.

The problem rises when user tries to navigate to another site with address bar.
We can't directly control address bar. But we can prevent leave from the page.
Let's say user entered new address in search bar, then clicked enter. We have
beforeunload event on the page with prevents initial page change event. We get
new address in the callback of this event. We set new address as GET param for
current page. We reload current page effectively preventing unload prompt and
load DOM from the GET param, replacing current page. It appears users sees new
page, thinks he navigated, while the truth he did not. 

See - https://stackoverflow.com/questions/821011/prevent-a-webpage-from-navigating-away-using-javascript#

The small issue is that we still have original address in search bar. Can we
change this with pushState?

refresh page

window.history.go(0)


Webcage proof of concept.
