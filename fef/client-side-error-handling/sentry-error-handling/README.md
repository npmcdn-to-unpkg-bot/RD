# Raygun


[Website](https://getsentry.com/)


* Full stack crash reporting tool
* Price $29/mo (10 team members, 30 day history, 20 events/min) - $999/mo (unlimited team, 90 days, 500 events/min)
* SaaS or on-premises
* Can upload source maps
* Some high profile clients

### Quick setup

```bash
# Add to <head></head> tag

<script src="https://cdn.ravenjs.com/2.1.0/raven.min.js"></script>

# Declare in app start

declare var Raven

# Add to main() method

Raven
    .config('https://b8e916fed3e048e08199da571f80c090@app.getsentry.com/69187')
    .install();

# 
```

* NPM package (Raven) available, has Angular1-specific Raven package

Relevant tech supported:
* JavaScript
* Node.js
* Objective-C (for iOS)
* Java (for Android)
* C#

Notifications:
* Email
* WhatsApp
* Slack
* Webhooks

Available ticketing integration:
* GitHub
* PivotalTracker
* Slack
* Visual Studio Team Services
* Others

Info:
* Message
* Exception
* Browser
* Device
* Level
* OS
* URL
* User IP
* First / last seen intances of error

Features:
* Able to enable/disable event logging for individual environments
* Enhanced privacy setting (limits personally idenfiable information / source code exposure)
* Search by group/tag/host/OS/browser
* Assign teams with varying permissions (Billing / Member / Admin / Manager / Owner)
* Google / GitHub single sign-on
* Can set delivery frequency
* Events can have custom tags as well as usual Browser/Device/OS etc.
* Errors can be a assigned to a user
* Errors can be linked to external task management software (see 'Available plugins' above)
* Release tracking - automatically record new releases of applications

Negatives:
* No analytics tools like Raygun (though it's a pro feature on Raygun)



