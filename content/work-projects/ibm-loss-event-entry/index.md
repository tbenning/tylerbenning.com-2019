---
title: 'Loss Event Entry'
date: '2016-01-01'
dateRange: 'Dec 2015 - Mar 2016'
company: 'IBM OpenPages'
tagline: 'Driving risk further into business departments'
---

## Problem

Picture this. You manage a team of currency traders at a large bank and you find that one of your team members made a mistake while trading currencies that cost your department \$50,000. At this point, it’s your team’s responsibility to report a loss event to the risk management team.

What do you do next? Who do you tell? Who's accountable? How do you collect more information? What system do you need to use to record the information?

😅😅😅

Reporting loss events at banks can be scary. You’re stressed about the mistake that was made, and now you have to figure out the rigorous process to report it to the risk team. In an ideal world, everyone in a company would work together to report loss events, but communication problems, team silos, and difficult pieces of legacy software prevent teams from working together and submitting these events.

> Our customers needed an elegant solution for infrequent and non-users of OpenPages to submit loss events quickly and easily, so that they could improve risk management practices across the business.

## My Role

I was the team lead and user experience designer.

Located in Toronto, our team of 4 worked remotely with the OpenPages product management and development teams in Massachusetts and Australia.

My responsibilities included:

- Coordinating remotely with our Product Manager and Developers
- Collaborating on initial research
- Facilitating customer-facing workshops for problem discovery
- Team sketching sessions
- Low fidelity prototyping
- Testing prototypes for validity and usability
- Presenting design “playbacks” to our remote teams

Our team was usually juggling multiple projects at once. Loss Event Entry is one of about eight projects I worked on with the OpenPages team, which we completed over the course of 3 months from initial scope to completion.

## Research

Dylan, our user researcher and I lead design activities with teams at two separate “Big Five Banks” in Toronto. We facilitated journey mapping exercises to map out the loss event process in different teams. We learned a lot from the study, but the participants were surprised to find that they learned more about their own processes throughout the exercise!

There were a few emergent themes:

- **Ad Hoc Processes**
  Events are documented and submitted in ad-hoc processes, which change across the business.
- **Collaboration**
  It’s necessary for different actors to work together when collecting information about a loss event.
- **Usability matters**
  We found an internal tool that was built to capture loss events, but was failing to do the job properly because it was over 100 inputs long, with no helper text, and 90% of the fields were mandatory. _Nobody used it._

## Design & Development

As a designer, I believe it can be important to ideate without major constraints to understand an ideal user-centred solution, and then scale back based on constraints. It’s important to expand the teams understanding of what’s possible, but also take a balanced perspective to come to a good compromise.

We learned what our users needed, but we also needed to decide what was the essential job that our product could fulfill, and what was extra. To understand the technical constraints, I worked with the development team to get a sense of what types of information we could access to via their REST API.

I put together a user journey and low fidelity mocks of the ideal solution. We worked with our Product Manager Bob, and our technical leads to undergo various rounds of iteration and feedback to come to a good solution.

**Working Within Constraints**
We stripped down the collaborative features, and built a form that users could work through incrementally. We made only absolutely necessary fields required, and added an area for helpful tool tips. We used progressive disclosure, so that users could work through bitesized chunks of data input, and skip areas that didn’t apply to their type of loss event.

Our UI designer Jasmine picked a colour scheme, type scale, and spacing that would work well to balance that information architecture but also adhere to the IBM Design Guide. She worked closely with our front end developer Susan to build a simple front end prototype in Angular, which we brought back to customers to perform user testing. We found usability improvements and workflow improvements that we were able to get into the production build of the application.

The project was finished with a few weeks to spare, so we had the appropriate time to test and get extra UI polish and copywriting changes into the final version.
