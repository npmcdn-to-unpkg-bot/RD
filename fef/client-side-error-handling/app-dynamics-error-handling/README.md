# App Dynamics


[Website](https://www.appdynamics.com/)


* Extensive performance monitoring/analytics tool
* 'Web App dashboard' available
* Price by quote, or
* Limited free 'lite' option - limited data retention / agents / analytics features
* SaaS or on-premises options
* Some notable clients such as Sony, Nasdaq

### Quick setup

```bash
# Add to <head></head> tag

<script> 

  window['adrum-start-time']= new Date().getTime(); 

  window['adrum-app-key'] = '[appKey]'; 

</script> 

# Add adrum.js to base app or use CDN

<script src="https://cdn.appdynamics.com/adrum/adrum-latest.js"></script>
```

Web agents for:
* .NET
* Node.js

Info:
* End user response time / distribution / trend
* Page requests (per...)
* Page requests by country / browser / device
* Performance by browser / device
* 'Geo Dashboard' to get above info by country
* Browser snapshots - summaries of page requests:
* User (IP)
* URL
* Browser
* Device
* OS
* Location (to city)
* Exceptions (message/stack trace)

Features:
* Customisable dashboards

Negatives:
* Seems heavily geared towards server-side transaction monitoring
* Limited JavaScript / AJAX error logging - errors are included as a log of 'snapshots' of browser requests
* Seemingly no way to categorise the errors, link to ticketing system, view occurences by browser, etc. - just proportions / total number of requests ending in errors
* Seems a little slow to update (by default anyway)


