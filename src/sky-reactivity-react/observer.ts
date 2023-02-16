
import { effect, stop } from "sky-reactivity";

export function observer(clazz: any) {
	var render = clazz.prototype.render;
	clazz.prototype.render = function() {
		stop(this);
		return effect(this, render, this.forceUpdate);
	};
	var componentWillUnmount = clazz.prototype.componentWillUnmount;
	if(componentWillUnmount) {
		clazz.prototype.componentWillUnmount = function() {
			stop(this);
			return componentWillUnmount.apply(this, arguments);
		};
	} else {
		clazz.prototype.componentWillUnmount = function() {
			stop(this);
		};
	}
	return clazz;
}
