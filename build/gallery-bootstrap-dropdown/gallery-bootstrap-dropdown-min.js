YUI.add("gallery-bootstrap-dropdown",function(e,t){function r(e){r.superclass.constructor.apply(this,arguments)}var n=e.namespace("Bootstrap");r.NAME="Bootstrap.Dropdown",r.NS="dropdown",e.extend(r,e.Plugin.Base,{defaults:{className:"open",target:"target",selector:""},initializer:function(t){this._node=t.host,this.config=e.mix(t,this.defaults),this.publish("show",{preventable:!0,defaultFn:this.show}),this.publish("hide",{preventable:!0,defaultFn:this.hide}),this._node.on("click",this.toggle,this)},toggle:function(){var e=this.getTarget(),t=this.config.className;e.toggleClass(t),e.once("clickoutside",function(n){e.toggleClass(t)})},show:function(){this.getTarget().addClass(this.config.className)},hide:function(){this.getTarget().removeClass(this.config.className)},open:function(){this.getTarget().addClass(this.config.className)},close:function(){this.getTarget().removeClass(this.config.className)},getTarget:function(){var t=this._node,n=t.getData(this.config.target),r;return n||(n=t.getAttribute("href"),n=r&&r.replace(/.*(?=#[^\s]*$)/,"")),r=e.all(n),r.size()===0&&(r=t.get("parentNode")),r}}),n.Dropdown=r,n.dropdown_delegation=function(){e.delegate("click",function(e){var t=e.currentTarget;e.preventDefault(),typeof e.target.dropdown=="undefined"&&(t.plug(r),t.dropdown.toggle())},document.body,"*[data-toggle=dropdown]")}},"@VERSION@");
