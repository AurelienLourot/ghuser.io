# Database

It is here to cache GitHub's data. During the prototyping phrase, it's just a set of
[JSON files](data/) that we update once per day.

## Updating the database

Several scripts form a pipeline for updating the database. Here is the data flow:

```
[ ./addUser.js myUser ]   [ ./rmUser.js myUser ]
                 │             │
                 v             v
              ┌───────────────────┐
              │ users/myuser.json │<───────────┐
              └────────────────┬──┘ │─┐        │
                └──────────────│────┘ │        │                    ╔════════╗
                  └────┬───────│──────┘        │                    ║ GitHub ║
                       │       │               │                    ╚════╤═══╝
                       │       v               │                         │
                       │   [ ./fetchUserDetailsAndContribs.js myUser ]<──┤
                       │                                                 │
                       ├──────────────────>[ ./fetchOrgs.js ]<───────────┤
                       │                            │                    │
                       │                            v                    │
                       │                      ┌───────────┐              │
                       │                      │ orgs.json │              │
                       │                      └─────┬─────┘              │
                       │                            │                    │
                       ├──>[ ./fetchRepos.js ]<──────────────────────────┘
                       │         │                  │
                       │         v        ┌─────────┘
                       │  ┌────────────┐  │
                       │  │ repos.json │  │
                       │  └──────┬─────┘  │
                       │         │        │
                       v         v        v
                   [ ./calculateContribs.js ]
                                 │
                                 v
                      ┌──────────────────────┐
                      │ contribs/myuser.json │─┐
                      └──────────────────────┘ │─┐
                        └──────────────────────┘ │
                          └──────────────────────┘
```

For running the entire data pipeline at once, do

```bash
$ npm install
$ export GITHUB_CLIENT_ID=0123456789abcdef0123
$ export GITHUB_CLIENT_SECRET=0123456789abcdef0123456789abcdef01234567
$ export GITHUB_USERNAME=AurelienLourot
$ export GITHUB_PASSWORD=********
$ ./fetchAndCalculateAll.sh
```

> **NOTE**: API keys can be created [here](https://github.com/settings/developers).

## Serving one more user

```bash
$ ./addUser.js newGreatUser
$ ./fetchAndCalculateAll.sh
```

## Deleting a profile

```bash
$ ./rmUser.js formerUser "you asked us to remove your profile in https://github.com/AurelienLourot/ghuser.io/issues/666"
$ ./fetchAndCalculateAll.sh # will also perform some garbage collection
```
