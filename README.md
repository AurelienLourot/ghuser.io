<p align="center">
  <a href="https://ghuser.io">
    <img src="https://rawgit.com/AurelienLourot/ghuser.io/master/docs/logo.png"
         width="400" height="108" />
  </a>
</p>
<p align="center">
  <b>Better GitHub profiles</b>
</p>
<br />

# What we are building

> *Example: https://ghuser.io/AurelienLourot*
>
> ![screenshot](docs/screenshot.png)

We love the default GitHub profiles and we want to enhance them:

* The GitHub profiles aren't clearly showing all repos you have contributed to since you joined
  GitHub. We are showing them **all**, even those you don't own and those owned by organizations
  you're not in.<sup>[1](#footnote1)</sup>
* The GitHub profiles are listing all the repos you own but they sort them only by age of the
  latest commit. We prefer to **sort repos** by a combination of how active they are, how much you
  have contributed to them, how popular they are, etc. For each user we want to see first the latest
  greatest repos they have most contributed to.
* On GitHub only repos earn stars. We push it one step further by tranfering these **stars to
  users**. If you have built 23% of a 145 stars repo, you deserve 33 stars for that contribution. We
  add all these stars and clearly show how many of them you earned in total.
* The GitHub profiles don't clearly show how big your contribution to a repo was, when you don't own
  it. Maybe you wrote 5%. Maybe 90%. We **make it clear**.
* GitHub detects programming languages. We want to also know about
  [**technologies/frameworks**](docs/repo-settings.md), e.g. "react", "docker", etc.
* The GitHub profiles allow filtering your repos by programming language. We will allow **filtering
  by technologies/frameworks** as well.
* The GitHub profiles can be tweaked by clicking around. We allow them to be
  [**tweaked programmatically**](docs/user-settings.md).
* On GitHub only users and organizations have avatars. We bring
  [**avatars to repos**](docs/repo-settings.md).

Our enhanced profiles are accessible at `https://ghuser.io/<github-username>`, e.g.
[ghuser.io/AurelienLourot](https://ghuser.io/AurelienLourot).

<a name="footnote1"><sup>1</sup></a> We achieve this by using [github-contribs](https://github.com/AurelienLourot/github-contribs).<br/>

# Get your profile!

[ghuser.io](https://ghuser.io) is still a baby but you can already be an early user and get your
profile by
[creating a request](https://github.com/AurelienLourot/ghuser.io/issues/new?template=profile-request.md)
:)

# Roadmap

* [x] `19 Jun 2018` start coding
* [x] `04 Jul 2018` [first prototype](https://github.com/AurelienLourot/ghuser.io/milestone/1)
* [ ] `15 Aug 2018` fix
      [first scaling issues](https://github.com/AurelienLourot/ghuser.io/milestone/4)
* [ ] `15 Sep 2018` address
      [first user feedback](https://github.com/AurelienLourot/ghuser.io/milestone/3)
* [ ] `30 Nov 2018` display more data on each profile to really make it a modern
      [programmer resume](https://github.com/AurelienLourot/ghuser.io/milestone/2)

# Contributing

* Fork this project.
* Make some changes to the [web app](reframe/).
* Validate your changes by [running the app locally](reframe/README.md#run-locally).
* Create a [pull request](https://github.com/AurelienLourot/ghuser.io/compare) :)

# Team

This project is maintained by the following person(s) and a bunch of
[awesome contributors](https://github.com/AurelienLourot/ghuser.io/graphs/contributors).

[![AurelienLourot](https://avatars0.githubusercontent.com/u/11795312?v=4&s=70)](https://ghuser.io/AurelienLourot) | [![brillout](https://avatars0.githubusercontent.com/u/1005638?v=4&s=70)](https://ghuser.io/brillout) |
--- | --- |
[Aurelien Lourot](https://ghuser.io/AurelienLourot) | [Romuald Brillout](https://ghuser.io/brillout) |

# FAQ

## Why do I need to open an issue in order to get a profile?

The first crawling for discovering everything you did on GitHub
[takes hours](https://github.com/AurelienLourot/github-contribs#why-is-it-so-slow) and would need
several machines in order to be parallelized. Also [ghuser.io](https://ghuser.io) is still a baby
and this process is only semi-automated.

This is annoying for new users and
[we're working on it](https://github.com/AurelienLourot/ghuser.io/issues/49).

## Is my profile static or dynamic?

For now it's static and the data is refreshed at least [once per day](db/README.md). If you scroll
down to the bottom of your profile you can see how old the data is:

> ![screenshot](docs/screenshot-data-age.png)

## Some of my repos are not showing up on my profiles, why?

Did you give them a star? We think that you don't want to show repos with no stars at all, because
if you haven't given them a star, then you probably aren't proud of them (yet).
