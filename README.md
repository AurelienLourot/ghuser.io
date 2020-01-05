[![Build Status](https://travis-ci.org/ghuser-io/ghuser.io.svg?branch=master)](https://travis-ci.org/ghuser-io/ghuser.io)
[![All Contributors](https://img.shields.io/badge/all_contributors-35-orange.svg?style=flat-square)](#contributors)
[![Twitter](https://img.shields.io/badge/-twitter-black.svg?style=flat-square&logo=twitter&colorB=555555)](https://twitter.com/ghuserio)

<p align="center">
  <a href="https://ghuser.io">
    <img src="https://cdn.jsdelivr.net/gh/ghuser-io/ghuser.io@f44119258dfeade99c800232044cf7c3e3a91982/docs/logo.png"
         width="400" height="108" />
  </a>
</p>
<p align="center">
  <b>Better GitHub profiles</b>
</p>
<br />

<!-- issue190 -->
> **WARNING**: This project
> [isn't actively maintained anymore](https://github.com/ghuser-io/ghuser.io/issues/190).

# Table of Contents

<!-- toc -->

- [What we are building](#what-we-are-building)
- [Contributing](#contributing)
  * [To the web app's implementation](#to-the-web-apps-implementation)
  * [To the documentation](#to-the-documentation)
  * [Contributors](#contributors)
- [FAQ](#faq)
  * [Is my profile static or dynamic?](#is-my-profile-static-or-dynamic)
  * [Some of my repos are not showing up on my profile, why?](#some-of-my-repos-are-not-showing-up-on-my-profile-why)
  * [Does ghuser.io intend to compete with the default GitHub profiles?](#does-ghuserio-intend-to-compete-with-the-default-github-profiles)
  * [How are the organizations sorted in the `Contributed to` section?](#how-are-the-organizations-sorted-in-the-contributed-to-section)

<!-- tocstop -->

# What we are building

> *Example: https://ghuser.io/AurelienLourot*
>
> ![screenshot](docs/screenshot.png)

We love the default GitHub profiles and we want to enhance them:

* The GitHub profiles aren't clearly showing all the repos you have contributed to since you joined
  GitHub. We are showing them **all**, even those you don't own and those owned by organizations
  you're not in.<sup>[1](#footnote1)</sup>
* The GitHub profiles are listing all the repos you own but they sort them only by age of the
  latest commit. We prefer to **sort repos** by a combination of how much you
  have contributed to them, their size, how popular they are, etc. For each user we want to see
  first the latest greatest repos they have most contributed to.
* On GitHub only repos earn stars. We push it one step further by having **users earn stars**:
  You earn stars when you contribute to a repo.
  We add all these earned stars and show how many you've earned in total.
* The GitHub profiles don't clearly show how big your contribution to a repo was, when you don't own
  it. Maybe you wrote 5%. Maybe 90%. We **make it clear**.
* GitHub detects programming languages. We also want to know about
  [**technologies/frameworks**](docs/repo-settings.md), e.g. "react", "docker", etc.
* The GitHub profiles allow filtering your repos by programming language. We will allow **filtering
  by technologies/frameworks** as well.
* The GitHub profiles can be tweaked by clicking around. We allow them to be
  [**tweaked programmatically**](docs/user-settings.md).
* On GitHub only users and organizations have avatars. We bring
  [**avatars to repos**](docs/repo-settings.md).

Our enhanced profiles are accessible at `https://ghuser.io/<github-username>`, e.g.
[ghuser.io/AurelienLourot](https://ghuser.io/AurelienLourot).

<a name="footnote1"><sup>1</sup></a> We achieve this by using [github-contribs](https://github.com/ghuser-io/github-contribs).

# Contributing

## To the web app's implementation

* Fork this project.
* Make some changes to the [web app](reframe/).
* Validate your changes by [running the app locally](reframe/README.md#run-locally).
* Create a [pull request](https://github.com/ghuser-io/ghuser.io/compare) :)

## To the documentation

* Fork this project.
* Make some changes to the markdown files.
* Validate your changes by running `./build.sh`.
* Create a [pull request](https://github.com/ghuser-io/ghuser.io/compare) :)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/11795312?v=4" width="100px;"/><br /><sub><b>Aurelien Lourot</b></sub>](https://ghuser.io/AurelienLourot)<br />[💬](#question-AurelienLourot "Answering Questions") [🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3AAurelienLourot "Bug reports") [💻](https://github.com/ghuser-io/ghuser.io/commits?author=AurelienLourot "Code") [📖](https://github.com/ghuser-io/ghuser.io/commits?author=AurelienLourot "Documentation") [🤔](#ideas-AurelienLourot "Ideas, Planning, & Feedback") [👀](#review-AurelienLourot "Reviewed Pull Requests") | [<img src="https://avatars2.githubusercontent.com/u/1005638?v=4" width="100px;"/><br /><sub><b>Romuald Brillout</b></sub>](https://twitter.com/brillout)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Abrillout "Bug reports") [💻](https://github.com/ghuser-io/ghuser.io/commits?author=brillout "Code") [🤔](#ideas-brillout "Ideas, Planning, & Feedback") [🚇](#infra-brillout "Infrastructure (Hosting, Build-Tools, etc)") [👀](#review-brillout "Reviewed Pull Requests") [💬](#question-brillout "Answering Questions") | [<img src="https://avatars3.githubusercontent.com/u/4883293?v=4" width="100px;"/><br /><sub><b>Charles</b></sub>](https://github.com/wowawiwa)<br />[💻](https://github.com/ghuser-io/ghuser.io/commits?author=wowawiwa "Code") [🤔](#ideas-wowawiwa "Ideas, Planning, & Feedback") | [<img src="https://avatars3.githubusercontent.com/u/13546486?v=4" width="100px;"/><br /><sub><b>Tim Lange</b></sub>](http://timlange.me)<br />[💬](#question-venarius "Answering Questions") [💻](https://github.com/ghuser-io/ghuser.io/commits?author=venarius "Code") | [<img src="https://avatars1.githubusercontent.com/u/56003167?v=4" width="100px;"/><br /><sub><b>Sharon Lin</b></sub>](http://sharontlin.github.io)<br />[💻](https://github.com/ghuser-io/ghuser.io/commits?author=sharontlin "Code") | [<img src="https://avatars2.githubusercontent.com/u/25279263?v=4" width="100px;"/><br /><sub><b>James George</b></sub>](https://ghuser.io/jamesgeorge007)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Ajamesgeorge007 "Bug reports") [💻](https://github.com/ghuser-io/ghuser.io/commits?author=jamesgeorge007 "Code") | [<img src="https://avatars1.githubusercontent.com/u/229881?v=4" width="100px;"/><br /><sub><b>Steven</b></sub>](https://www.ceriously.com)<br />[🤔](#ideas-styfle "Ideas, Planning, & Feedback") [💻](https://github.com/ghuser-io/ghuser.io/commits?author=styfle "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/55238?v=4" width="100px;"/><br /><sub><b>Terrell Russell</b></sub>](http://weblog.terrellrussell.com)<br />[💻](https://github.com/ghuser-io/ghuser.io/commits?author=trel "Code") | [<img src="https://avatars3.githubusercontent.com/u/35304641?v=4" width="100px;"/><br /><sub><b>K Yasaswi Sri Chandra Gandhi</b></sub>](https://github.com/G7-TheKing)<br />[💻](https://github.com/ghuser-io/ghuser.io/commits?author=G7-TheKing "Code") | [<img src="https://avatars3.githubusercontent.com/u/34555510?v=4" width="100px;"/><br /><sub><b>Reece Dunham</b></sub>](https://rdil.rocks/)<br />[💻](https://github.com/ghuser-io/ghuser.io/commits?author=RDIL "Code") | [<img src="https://avatars1.githubusercontent.com/u/15092?v=4" width="100px;"/><br /><sub><b>John Vandenberg</b></sub>](https://jayvdb.github.io/)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Ajayvdb "Bug reports") [🤔](#ideas-jayvdb "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/30195193?v=4" width="100px;"/><br /><sub><b>Naveen Naidu</b></sub>](https://github.com/Naveenaidu)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3ANaveenaidu "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/15799589?v=4" width="100px;"/><br /><sub><b>Shubham Rath</b></sub>](https://sr6033.github.io/)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Asr6033 "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/15871340?v=4" width="100px;"/><br /><sub><b>Aditya Agarwal</b></sub>](http://adi.surge.sh)<br />[📝](#blog-itaditya "Blogposts") |
| [<img src="https://avatars1.githubusercontent.com/u/31209617?v=4" width="100px;"/><br /><sub><b>Rupesh Krishna Jha</b></sub>](https://www.linkedin.com/in/rupesh-jha-7aab6b155/)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3ARupeshiya "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/1951866?v=4" width="100px;"/><br /><sub><b>CrazyMax</b></sub>](https://github.com/crazy-max)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Acrazy-max "Bug reports") | [<img src="https://avatars2.githubusercontent.com/u/16784959?v=4" width="100px;"/><br /><sub><b>Michal Weizman</b></sub>](http://hakabuk.com)<br />[🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Azurda "Bug reports") [🤔](#ideas-zurda "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/12212282?v=4" width="100px;"/><br /><sub><b>Wei WANG</b></sub>](https://www.marsrainbow.cn)<br />[🚇](#infra-tianshanghong "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/166162?v=4" width="100px;"/><br /><sub><b>Brandon Rhodes</b></sub>](http://rhodesmill.org/brandon)<br />[🚇](#infra-brandon-rhodes "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/u/910753?v=4" width="100px;"/><br /><sub><b>Richard Littauer</b></sub>](https://burntfen.com)<br />[🤔](#ideas-RichardLitt "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/131818?v=4" width="100px;"/><br /><sub><b>Jordan Sissel</b></sub>](http://www.semicomplete.com/)<br />[🚇](#infra-jordansissel "Infrastructure (Hosting, Build-Tools, etc)") |
| [<img src="https://avatars2.githubusercontent.com/u/19894116?v=4" width="100px;"/><br /><sub><b>JPBotelho</b></sub>](https://github.com/JPBotelho)<br />[🤔](#ideas-JPBotelho "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/3104386?v=4" width="100px;"/><br /><sub><b>George Xie</b></sub>](http://xiegeo.com)<br />[🤔](#ideas-xiegeo "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/357499?v=4" width="100px;"/><br /><sub><b>Anish Karandikar</b></sub>](https://github.com/anishkny)<br />[🤔](#ideas-anishkny "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/21367710?v=4" width="100px;"/><br /><sub><b>Palash Nigam</b></sub>](https://www.linkedin.com/in/palash25/)<br />[📝](#blog-palash25 "Blogposts") | [<img src="https://avatars0.githubusercontent.com/u/96793?v=4" width="100px;"/><br /><sub><b>Andrew Bredow</b></sub>](http://andrewbredow.com)<br />[🤔](#ideas-andrewbredow "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/1449512?v=4" width="100px;"/><br /><sub><b>Shadab Zafar</b></sub>](http://dufferzafar.github.io)<br />[🤔](#ideas-dufferzafar "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/633283?v=4" width="100px;"/><br /><sub><b>Phil de Joux</b></sub>](https://github.com/philderbeast)<br />[🤔](#ideas-philderbeast "Ideas, Planning, & Feedback") |
| [<img src="https://avatars3.githubusercontent.com/u/1855021?v=4" width="100px;"/><br /><sub><b>Sam Johnson</b></sub>](https://github.com/sam0x17)<br />[🤔](#ideas-sam0x17 "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/22138672?v=4" width="100px;"/><br /><sub><b>Arseniy Klempner</b></sub>](https://github.com/adklempner)<br />[🤔](#ideas-adklempner "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/827205?v=4" width="100px;"/><br /><sub><b>Daniel Ruf</b></sub>](https://daniel-ruf.de)<br />[🤔](#ideas-DanielRuf "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/1803556?v=4" width="100px;"/><br /><sub><b>Joe Cohen</b></sub>](https://joecohens.com)<br />[🤔](#ideas-joecohens "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/4399499?v=4" width="100px;"/><br /><sub><b>Jacob Weisz</b></sub>](http://www.jacobweisz.com)<br />[🤔](#ideas-ocdtrekkie "Ideas, Planning, & Feedback") [🐛](https://github.com/ghuser-io/ghuser.io/issues?q=author%3Aocdtrekkie "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/16623935?v=4" width="100px;"/><br /><sub><b>Mehtab Zafar</b></sub>](http://mzfr.github.io)<br />[🤔](#ideas-mzfr "Ideas, Planning, & Feedback") | [<img src="https://avatars2.githubusercontent.com/u/119472?v=4" width="100px;"/><br /><sub><b>Neal McBurnett</b></sub>](http://neal.mcburnett.org/)<br />[🤔](#ideas-nealmcb "Ideas, Planning, & Feedback") |
[<img src="https://avatars1.githubusercontent.com/u/41539319?s=460&v=4" width="100px;"/><br /><sub><b>Somyajit Chakraborty</b></sub>](https://github.com/Samsomyajit/)<br />[🤔](#ideas-Samsomyajit "Ideas, Planning, & Feedback") |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

> **NOTE**: if you should be on the list of contributors but we forgot you, don't be shy and let us
> know!

# FAQ

## Is my profile static or dynamic?

For now it's static and the data<sup>[2](#footnote2)</sup> is refreshed at least
[once per day](https://github.com/ghuser-io/db/tree/master/fetchBot). If you scroll down to the
bottom of your profile you can see how old the data is:

> ![screenshot](docs/screenshot-data-age.png)

<a name="footnote2"><sup>2</sup></a> All the data about you and your contributions.

## Some of my repos are not showing up on my profile, why?

Did you give them a star? We don't display repos with no stars at all. We think that if even you
haven't given them a star, then you probably aren't proud of them (yet).

## Does ghuser.io intend to compete with the default GitHub profiles?

No, in fact we'd love GitHub to copy ghuser.io or to even do better, so that this project can die.

## How are the organizations sorted in the `Contributed to` section?

For now it's kind of random. See
[#142](https://github.com/ghuser-io/ghuser.io/issues/142#issuecomment-419743403) for more
details.
