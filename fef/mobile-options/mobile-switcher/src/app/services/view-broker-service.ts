export class ViewBrokerService {
  
  public static TEMPLATE_URL(path: string, ext: string): string {  
		let suffix: string = path;
		let ua: string = window.navigator.userAgent;
		
		// Yes, this is a _really_ _noddy_ browser detector!
		if (ua.indexOf("Android") >= 0) {
			suffix = "android";
		} else if (ua.indexOf("iPhone") >= 0) {
			suffix = "ios";
		} else {
			// default to desktop
			suffix = "desktop";
		}
		
		path += `-${suffix}${ext}`;
		
		return path;
  }
	
	public static TEMPLATE_URLS(paths: Array<string>, ext: string): Array<string> {
		let templatedUrls: Array<string> = null;
		
		templatedUrls = paths.map((p) => {
			return ViewBrokerService.TEMPLATE_URL(p, ext); 
		});
		
		return templatedUrls;
	}
	
}

