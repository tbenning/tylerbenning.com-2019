---
title: 'UX Quickwins on Mobile'
date: '2018-01-01'
dateRange: '2018-2019'
company: 'Top Hat'
tagline: 'Improving the mobile user experience one ticket at a time'
---

As the lead designer for iOS and Android, I’d inherited UI that didn’t feel like it belonged to the same family as our web product. The typography, colours, and UI was messy and didn't really follow a system. There were lots of small inconsistencies and interaction design issues.

[IMG HERE]

Our mobile team was centralized and small. We had priorities to stabilize crash rates, keep up with new features being introduced to the product, and fix the app whenever there were new OS releases. Sprint after sprint, design kept getting put on the back burner as “something we’ll do once we finish up this other important work”.

After a few frustrating months of trying to get buy in to prioritize a UI refresh, we agreed on an alternative approach that we now call **UX Quick Wins.** Over the course of a year and a half, we slowly chipped away at design debt while continuing to do other important work.

## The Process

1. Notice something wrong in the app
2. Create a JIRA ticket to fix it
3. Create a design, show it to the developers and other designers, and iterate on the design based on feedback
4. Attach a new design to the ticket
5. Get it bundled into the next sprint
6. Repeat

Another infrastructural piece that was missing was common tooling between design and development. We weren’t speaking the same language, and I noticed we were spending a lot of time determining colours, typography, and more.

At Top Hat, every semester we have one week called **Engineering Week**. During this week, the devs have the opportunity to stop chopping down trees, and instead sharpen their axes and work on infrastructure. During this week I worked closely with the mobile developers to set up a proper design system of styles that we would build from. This would reduce the effort when passing off designs.

We created rules around

- Spacing (8pt grid system with 16pt margins)
- Type scale
- Colour palette
- Icon system

To enforce this system we used Zeplin to create the library of styles, and drafted a ReadMe in Github. I even downloaded Xcode and Android Studio to dig into their styles and patterns and remove unnecessary colours, icons. After engineering week, I now had the ability to pull branches of work, run a simulator, demo, and give feedback to the developers when needed.

After this system was put in place, our UX Quick Wins started rapidly picking up speed.

- Log In Flow
- Join Course Flow
- Course Lobby
- Empty States and Illustrations
- Classroom answered/unanswered + tree state
- Gradebook
- Navigation titles + Icons

While we’re still working on UX quick wins and it’s not over yet. Here are some examples of improvements we’ve been able to make over the past year, all while stabilizing the infrastructure, reducing crash rates, and keeping up with projects from other teams.
