# Deployment

Before deploying the script for scheduled runs, it's recommend you test your
settings locally first.

## Server cron

Adding `renovate` as a `cron` job is the simplest way to deploy.

### Installation

Install using `npm install -g`.

### Configuration

At a minimum, you will need to configure the token and repository list. Simplest
would be to specify both via CLI. Alternatively, configure the token via
Environment Variable if you don't want it to show in any cron logs.

Token JWT : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Running daily should suit most people. At most, hourly.
