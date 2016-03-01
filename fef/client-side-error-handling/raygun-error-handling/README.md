# Raygun


[Website](https://raygun.io/)


* Full stack crash reporting tool (optional performance monitoring with Pulse)
* Price $44.09 (25,000 errors/month, 5 apps) - $449.09 (3,000,000 errors/month, 50 apps)
* Cloud or self-hosting
* Supports private source maps

### Quick setup

```bash
# Add to <head></head> tag

<script type="text/javascript">
  !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
  (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
  f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
  h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
  e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>

# Add to <body></body> tag, including setting a user for error to appear under

<script type="text/javascript">
  rg4js('apiKey', 'e1wEKk//8vTtHCFZxijZJA==');
  rg4js('enableCrashReporting', true);
  rg4js('setUser', {
  identifier: 'users_email_address_or_unique_id@domain.com',
  isAnonymous: false,
  email: 'users_email_address@domain.com',
  firstName: 'Firstname',
  fullName: 'Firstname Lastname'
});
</script>

# 
```

* NPM package available
* Octopus, Rake, Grunt deployment instructions

Relevant languages supported:
* .NET
* Android
* iOS
* JavaScript
* Node.js

Available plugins:
* GitHub
* PivotalTracker
* Slack
* Visual Studio Team Services

Info:
* Total/new/crash-free users
* Total sessions/exceptions
* Timestamp
* Error message
* Version
* Tags
* Stacktrace
* Affected user
* URL
* IP
* OS
* Browser
* Viewport details
* Total instances of error
* Total affected users
* Oldest/newest instance of error

Features:
* Individual apps/environments distinguished by separate API keys (
* Email notifications: on error/on repeated error/daily
* Search by group/tag/host/OS/browser
* Assign teams consisting of Owners/Users
* Errors can have Active/Resolved/Resolved in Version/Ignored/Permanently Ignore statuses
* Errors can be a assigned to a user
* Errors can be linked to external task management software (see 'Available plugins' above)
* Raygun Sidekick MAc app detects and retrieves new dSYM files (for extracting stack trace info)

API:
* Can manually publish errors to Raygun using JSON,  REST API



