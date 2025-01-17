![Renovate banner](https://renovatebot.com/images/design/header_small.jpg)

# Renovate

Automated dependency updates. Multi-platform and multi-language.

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://raw.githubusercontent.com/renovatebot/renovate/master/license)
[![codecov](https://codecov.io/gh/renovatebot/renovate/branch/master/graph/badge.svg)](https://codecov.io/gh/renovatebot/renovate)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

## Why Use Renovate?

- Receive automated Pull Requests whenever dependencies need updating.
- Define schedules to avoid unnecessary noise in projects (e.g. for weekends or outside of working hours, or weekly updates, etc)
- Relevant package files are discovered automatically (e.g. supports
  monorepo architecture such as lerna or yarn workspaces without further configuration)
- Bot behaviour is extremely customisable via configuration files (config as code)
- Use eslint-like shared config presets for ease of use and simplifying configuration
- Lock files are natively supported and updated in the same commit, including immediately resolving conflicts whenever PRs are merged
- Supports GitHub, GitLab, Bitbucket Cloud (beta release) and Azure DevOps.
- Open source (installable via npm/yarn or Docker Hub) so can be self-hosted or used via GitHub App

## Who Uses Renovate?

Renovate was released in 2017 and already is widely used in the developer community, including:

![Renovate Matrix](https://renovatebot.com/images/matrix.png)

## The Renovate Approach

- We believe everyone can benefit from automation, whether it's a little or a lot
- Renovate should not cause you to change your workflow against your wishes, instead it should be adaptable to your existing workflow
- All behaviour should be configurable, down to a ridiculous level if necessary
- Autodetect settings wherever possible (to minimise configuration) but always allow overrides

## Using Renovate

The easiest way to use Renovate if you are hosted on GitHub.com or GitLab.com is to install the hosted Renovate app.

For GitHub, go to [https://github.com/apps/renovate](https://github.com/apps/renovate) to install
it now. A GitHub Marketplace plan is required only for private repositories. [More details on the GitHub App installation](https://renovatebot.com/docs/install-github-app/).

For GitLab, log into [renovatebot.com/dashboard](https://renovatebot.com/dashboard) for a convenient way to add Renovate Bot to your project. Currently the GitLab app is free for both pubic and private repositories. [More details on the GitLab App installation](https://renovatebot.com/docs/install-gitlab-app/).

## Configuration

Visit https://renovatebot.com/docs/ for documentation, and in particular https://renovatebot.com/docs/configuration-options/ for a list of configuration options.

You can also raise an issue in https://github.com/renovatebot/config-help if you'd like to get your config reviewed or ask any questions.

## Self-Hosting

If you are not on github.com or gitlab.com, or you prefer to run your own instance of Renovate then you have several options:

- Install the `renovate` CLI tool from npmjs, run it on a schedule (e.g. using cron)
- Run the `renovate/renovate` Docker Hub image (same content/versions as the CLI tool), run it on a schedule
- Use [Renovate Pro Edition](https://renovatebot.com/pro) available for GitHub Enterprise and GitLab, includes native scheduler

## Contributing

If you would like to contribute to Renovate or get a local copy running for some other reason, please see the instructions in [contributing.md](.github/contributing.md).

## Security / Disclosure

If you discover any important bug with Renovate that may pose a security problem, please disclose it confidentially to security@renovatebot.com first, so that it can be assessed and hopefully fixed prior to being exploited. Please do not raise GitHub issues for security-related doubts or problems.

## Personal

`ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAmLmwkzQDjEOW1Rj3TP5NldVDqUODVH9xuYrkeaSkxtdP
J8D9Hz+XAWnGAXdaIkCVOw2YEfHKWSo6befgNxiS+AKS+S+wM/bJpc4qOLe5ozFjZPNRHcw5O8WkgP5g
/wg2BOvxBqSKpsSzvi4rYVRLtl7TLVMyajhELiJ9GqT8f25gr3jFmtuQQIkRES1aC4oL2tHsn529POfP
1lPhh5tb2FbqEpm9L3779ljjkSX7mD4zza3zUckkuAIb5R7KSOrvPnJaEU903hrI0tx5omGyDy+h/2D1
h0aqHanPcU9Ml91ZpMKdpa0+FeVgs2M3LHYTNnvZ76ScV2VtUQwm3YEvzy== david@home`
