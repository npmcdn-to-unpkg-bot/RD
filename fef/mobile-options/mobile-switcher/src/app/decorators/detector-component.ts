import {DecoratorUtils} from './utils';

export function DetectorComponent(metadata: any={}) {
  return function(cls: any) {
    return DecoratorUtils.annotateComponent(cls, metadata);
  };
}

