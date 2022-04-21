---
layout: post
title: Better SEO Optimization
tags: seo
date: 2019-04-15 18:30:00 -0400
---

## Keyword research

Before making any optimizations, it’s important to realize what we want to
achieve with them. Any website has a goal, if the user of the site fulfills
this goal, we say it was converted. Conversion rate measures how well a website
copes with its duties. It can be tracked in Google Analytics. By defining a
conversion goal we can measure conversion rate of the traffic sources. It’s
beneficial to identify sources with a high conversion rate and expand them. SEO
(Search Engine Optimization) is responsible for “Organic Search” source.

Google analytics allows us to roughly estimate the conversion rate of a search
phrase for a given site. If you segment pages by a conversion rate, you will
get pages with most conversion. Conversion rate is a number of page views
divided by the number of conversions. Google analytics hides organic search key
phrases for this page. But we can get clues from [Google Search Console](https://search.google.com/search-console/), which
give us all key phrases for a given page. Knowing number of visitors for each
phrase and knowing conversion count we can get conversion rate for each phrase.

We want to expand traffic for high conversion phrases, either by creating
similar phrases or by making our website appear higher for a given phrase in
search results.

### Finding out phrases that we want users to find us in Google with

If we know high conversion phrases we should expand them (see 1. Keyword
research). If not, we have to decide what phrases directly describe our website
activity. If the end goal of the website is to sell services. Then the phrases
should target this intention. For example, for a book store it would be “buy
books” and not “find books”, because “find books” is ambiguous and covers “find
books for reading”, “find place to sell books” as well as “find place to buy
books”. Let’s say our ideal phrases will be:

 - “Find classes for kids online”
 - “Kids online classes”
 - “Book classes for kids”

### Analyze the keywords

We have to determine keyword frequency as well keyword complexity. Where
frequency — number of searches per month, complexity — number and rank of the
competing websites for this phrase.

There are special tools that can do these for us. These tools usually come as
part of toolkit on SEO dedicated services (like ahrefs or moz). Those are great
services, but they are not free and have a subscription system (although they
do have a trial period to give a try). There are also free alternatives.

[Google Trends](https://trends.google.com/trends/) can give approximate keyword popularity for a given keywords.
It’s approximate, because it gives us the percentage of searches and not the
direct number. But it also gives GEO distribution and similar searches. They
are useful because this data helps us evaluate keywords from sub-step 1), as
well as modify them. We don’t want keywords without searches, or keywords that
only popular in a non targeted area.

[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) can give search frequency range and ads competition
level. Another tool that can be used is [Yandex Wordstat](https://wordstat.yandex.com/). It gives an exact
number of searches, but since Yandex is rarely used for English language
searches, it is less relevant. Combining above data with trends information, we
receive a rather accurate estimation of frequency and a hint on complexity.

We can give more accurate estimate of complexity by analyzing web requests
directly in the browser. For example if we google “Find classes for kids
online” in incognito mode (we have to use incognito to eliminate google
recommendation system results). We can see that the 1st place (after google
ads) is occupied by “outschool.com”. We can see how reputable this site is by
checking it with [Alexa](https://www.alexa.com/) (the site, not the device :). Alexa gives a rating of 31446. If we check our site, it
gives a rating of 506136. So this is about 16 times higher than our rating. On
the other hand if we check websites by request “Book classes for kids”, 1st
place is occupied by “hisawyer.com” with a rating of 148180, which is only 3
times higher. We can conclude that the former phrase is more complex than the
latter. We can do the same for the first n positions of results to be more
specific.

This solution is not ideal because a) Alexa rating differs from Google rating
and b) search results depend on GEO location of the client that issued search.
But can give a us an good estimate.

## Internal optimization

When we get keywords we want to rank for from step 1. We can start internal
optimization. Internal optimization consists of optimizing website for a
particular phrase. Most of the time we want to optimize for website for
multiple phrases so we have to optimize separate web pages on the site for each
phrase.

### Meta tags optimization

In the past Google looked at tags like _keywords_ or _description_ and used them as
ranking factors. Nowadays it gets necessary information from the page content,
so these tags won’t affect ranking (but can be useful nonetheless). _Title_ tag
is the header of the web page in search results. _Description_ is the excerpt of
the page in search result. Although google may decide to use its own excerpt
generated from page content, it’s still advisable to keep this tag up to date.

From July 1, 2019 Google uses mobile-first indexing for ranking. That
means it will crawl a web page as a mobile device and later use this snapshot
for ranking. That is why it’s advisable to have _Viewport_ tag defined for all
pages. All other tags are less important for SEO.

### Content optimization

Ideally all the content of the page should be correlated with search phrase. Or
in other terms, the content of the page should fully answer the question, user
asks in the search query. In practice what that means is all of the keywords
should be in the title of the page, ideally the exact phrase. It should be in
the description of the page. It should be found in the body of the page from 3
to 7 times, depending on the length of the text. There are different tools that
can estimate how SEO friendly the text is for a phrase (like content analysis).

Search phrases should be found in the url, ideally in the domain name. The less
symbols between domain name and key phrase the better. It’s not advisable to
have dates in the url, because information could be considered as stale. Words
should be separated with hyphens (%20, \_ could not be handled well by all
search engines).

If we take for example the phrase “Find classes for kids online” there should
be a text describing how exactly users can find classes online, what the
classes are, where they will take place, how much it will cost and so on. The
text should be organic (and not just key phrases inserted in), ideally have
paragraphs or emphasis. If we want to optimize the web page for this phrase and
we just have a list of classes on the page, Google ranking algorithm might not
understand how the search query correlates with the page content. I.e. there
might not be keyword “classes” in class description, there might not be “for
kids”, there might not be “online” on the page content at all. Or if they are,
they might not be in the same order as query, which is better, but not optimal.

All content besides text should be correlated with search phrase. The ones that
are worth mentioning are: images alt attribute and microformats. The biggest
advantage of alt attribute is that it is searchable through Google Image
Search. Website creators rarely update this attribute, so it’s a good
opportunity to gain first positions on Image Search. Microformat is a subset of
html language that Google understands and uses to customize the view of a
search result.

It’s useful to know how a website looks in Google index and how crawler parses
it. This can be checked in Google Search Console. Before optimizing web page it
also makes sense to check if the page already searchable in Google results for
a particular query. If it is, it might be more efficient to update current
page, than creating new one.

### Link optimization

When we have a web page with optimized content, that we checked in Google
Console, we can optimize linking for this page.

When Google started, they introduced a PageRank algorithm that was ranking
pages based on authority of that page. The simplified version of which is [a sum
of ratings of inbound links divided by the number of outbound links](http://ilpubs.stanford.edu:8090/422/1/1999-66.pdf). This means
that to improve the authority of the page we need to either increase the number
of inbound links, their authority or decrease the number of outbound links.

So if we want the web page to rank well for a particular phrase we want to
maximize the number of authoritative inbound links and minimize the number of
outbound links. We also want these links to have appropriate text. For example
with page optimized for “Find classes for kids online” phrase we can do this
by:

 - Decreasing number of outbound links. The page that has a list of items with links will have less authority than page without list.
 - Increasing number of inbound links. We need to rethink site navigation in a way that maximizes inbound links. The simple way this can be done is to put a link for the page in footer or header. Since all site pages have footer and header, they will all link to the desired page. We have to be sure all links have appropriate link text, ideally “find classes for kids online”.
 - Increasing authority of inbound links. Based on the simplified algorithm above we know that the pages that usually have the most authority are the main page (since main page linked from other pages, as well as from other sites) and the pages in main navigation (as they are also all linked from all other pages). So we can have links to the desired page either from the main page (less advisable as it will decrease its authority) or navigation pages (or both).

We often come to situations where we want to optimize a web page with a list of
items, like search page (or shop, or blog). We can use a Proxy technique for
this. We create a page optimized for a particular phrase, increase the number
of inbound authoritative links, decrease number of outbound links, and leave a
single link in the text of the page that links to the desired page. This way we
transfer all the authority of the Proxy page to the desired page. This
technique is used when we can’t optimize a desired page directly (for example
if we don’t want to clutter it with unnecessary SEO information).

### New content

Google highly ranks websites with new content. The more frequent the new
content published and the more it is correlated with search terms, the higher
the rank of the site.

If a website does not have new organic content or lacks text content, it’s
often practical to have a blog under the same domain that has frequent
articles. Articles should have links to the desired pages increasing their
authority (see above).

### Mobile view

Google switched to mobile-first ranking. It means that all SEO information should be accessible from mobile devices. It also means that mobile view should be easily readable and has minimum obtrusive elements (some elements may be good for desktop experience but [harmful for mobile](https://moz.com/blog/popups-seo-whiteboard-friday)). Mobile view errors can be traced in Google Console.

### HTTPS

All of the contents should be served through secured protocol. It’s possible to see mixed content errors in Google Console (where some of the data on the page is served through HTTP).

### Page load time

It’s not certain how this criteria affects search ranking today. But it’s
advisable to have a website that loads fast on 3g connection. Loading time can
be measured in Google Console or by [Google
Insights](https://developers.google.com/speed/pagespeed/insights/).

### Sitemap

Sitemap allows Google to quickly crawl and update links. New sitemaps can be
uploaded directly through Google console. After initial crawl google will
automatically re-fetch sitemaps.

## External optimization

External optimization consists of acquiring links to desired pages (page
optimized in step 2) from external resources. Link should have a proper
keyword, be from an authoritative source (see rules from 3) Link optimization)
and be inside a relevant content. Link should not have the _nofollow_ attribute.
_nofollow_ attribute tells the search system to omit this link from ranking.

There are multiple ways we can achieve this. The simplest way to find a medium
(such as a thematic blog for example) that will allow us to write an article
about our website and leave do follow link to the desired page. Content in such
articles should be relevant to the page you are optimizing for (see 2) Content
optimization).

We can also ask content creators to write articles for us and leave the link on
their website. It would be a good option if the website is relevant and has the
authority. Another option is to ask SEO service to write articles and leave the
links on their network. This option is less favorable, because we have to be
sure that the article is relevant and that resource has authority, which is
harder to do with SEO service.

Restrain from buying links from marketplaces and exchanges. Such links usually
do not carry relevant context. They also do not follow principles of organic
link distribution and may negatively impact the ranking. E.g. exchange could
create/remove multiple links at once, a pattern common for synthetic links, but
not for organic.

The good practice is to know backlinks that point to your site and their
anchors. [Backlink anlysis](https://ahrefs.com/backlink-checker) allows us to do it. You should also be aware about
backlinks that point to competing sites.

## Checking for results

When we define our key phrase, made inner optimization, made external
optimization, we need to track efficiency.

It can be done as simple as checking the position of the optimized page in the
search results for a given search phrase. We write down the initial position of
the page before optimization, and check its position every 2 weeks after
optimization. Google usually makes 1 big ranking update every month and 1 minor
update every 2 weeks. On practice it makes much more updates, the frequency
depends on many factors, but these updates can be unstable (meaning after 2
days website goes down to 5 positions, next day it goes up to 10 and after
another 2 days it reverts back to the original position), so it’s sufficient to
make checks every 2 weeks.

Such a solution can quickly become tedious with the increasing amount of key
phrases. It also may not give an exact result (see 2) Analyze the keywords). In
this case we can use an SEO tool (like ahrefs) that will take a list of phrases
and will do it for us.
