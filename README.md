# Sanity

## What

A Chrome extension which hides the "Explore" tab and the "What's Happening" card on Twitter.

## Why?

As documentaries like [The Social Dilemma](https://www.netflix.com/title/81254224) have shown us, social media feeds on engagement.

The more a company knows about us, the more it can curate our feeds with content that causes us to engage.

This content can be polarizing, depressing, and cause damage to one's mental health. At its most extreme, it can radicalize people and lead to self-harm.

Twitter is a fantastic service when used correctly. You can connect with people in your hobby, industry, interests, etc. and gain a lot of value from it.

At the same time, Twitter can be an endless distraction causing people to doomscroll through current events and coordinated harrassment campaigns.

While we can explicitly curate our own Twitter timelines by unfollowing and muting others, there are two temptations in the front and center of Twitter: The Explore tab and What's Happening.

Sanity's goal is to restore your sanity by giving back control of your attention while on Twitter. It hides the parts of Twitter which can tempt you into engaging.

## How

The script looks for two things:

1. The specific class that the What's Happening card uses
2. The specific anchor tag for the Explore tab

And removes each of them

It checks every half second because of two reasons:

1. The What's Happening card does not render immediately when the page loads
2. When navigating to a new page, it re-renders

## Contributions

Sanity works as long as Twitter does not change its obfuscated class names for the What's Happening tab, which I suppose can happen every time they push a new build.

In the event that happens, I will need to grab the new class.

Additionally Twitter can scramble the arrangement of those classes, which would break this extension.

Your contributions in making this more resilient are greatly appreciated.

## Support

None, sorry! I hacked this together in a couple minutes.

