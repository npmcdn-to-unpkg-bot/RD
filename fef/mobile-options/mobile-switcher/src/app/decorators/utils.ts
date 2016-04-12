// angular
import {Component, ChangeDetectionStrategy} from 'angular2/core';

// app
import {ViewBrokerService} from '../services/view-broker-service';

const _reflect: any = Reflect;

export class DecoratorUtils {
  public static getMetadata(metadata: any = {}, customDecoratorMetadata?: any) {

    /**
     * The following allows default component metadata to be configured
     * For instance, here we make `TranslatePipe` available for all our components
     */
    // default directives
    let DIRECTIVES: any[] = [];
    // default pipes
    let PIPES: any[] = [];   
    
    // custom decorator options
    if (customDecoratorMetadata) {
      if (customDecoratorMetadata.directives) {
        DIRECTIVES.push(...customDecoratorMetadata.directives); 
      }
      if (customDecoratorMetadata.pipes) {
        PIPES.push(...customDecoratorMetadata.pipes); 
      }
    }
    
    if (metadata.templateUrl) {
      // correct view for platform target
      metadata.templateUrl = ViewBrokerService.TEMPLATE_URL(metadata.templateUrl, ".html");
    }
		
		if (metadata.styleUrls) {
			// correct styles for platform target
			metadata.styleUrls = ViewBrokerService.TEMPLATE_URLS(metadata.styleUrls, ".css");
		}
    
		// FJ: Removed this as this isn't for Native, it's for Web, so "styleUrls" are still relevant
    // if (metadata.styleUrls && CoreConfigService.IS_MOBILE_NATIVE()) {
    //   // {N} doesn't support all css properties, therefore remove styleUrls to be safe
    //   delete metadata.styleUrls;
    // }
    
    metadata.directives = metadata.directives ? metadata.directives.concat(DIRECTIVES) : DIRECTIVES;
    metadata.pipes = metadata.pipes ? metadata.pipes.concat(PIPES) : PIPES;
    
    if (metadata.changeDetection) {
      metadata.changeDetection = metadata.changeDetection;
    } else {
      // default OnPush
      metadata.changeDetection = ChangeDetectionStrategy.OnPush;
    }
    
    if (metadata.encapsulation) {
      metadata.encapsulation = metadata.encapsulation;
    }
    
    // initialize anything 
    if (metadata.init) {
      metadata.init();
    }   

    return metadata;
  }
  
  public static annotateComponent(cls: any, metadata: any = {}, customDecoratorMetadata?: any) {
    let annotations = _reflect.getMetadata('annotations', cls) || [];
    annotations.push(new Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
    _reflect.defineMetadata('annotations', annotations, cls);
    return cls;
  }
}

