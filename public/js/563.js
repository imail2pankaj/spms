(self.webpackChunk=self.webpackChunk||[]).push([[563],{5216:(e,r,t)=>{"use strict";t.d(r,{Z:()=>p});var n=t(7757),o=t.n(n),a=t(9669),s=t.n(a),i=t(4359),c=t(2119);function u(e,r,t,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function l(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){u(a,n,o,s,i,"next",e)}function i(e){u(a,n,o,s,i,"throw",e)}s(void 0)}))}}function p(){var e=(0,c.tv)(),r=(0,i.ref)({name:"",permission:[],_method:"post"}),t=(0,i.ref)([]),n=(0,i.ref)([]),a=(0,i.ref)({current_page:1,total:0,per_page:5,last_page:0,links:[]}),u=(0,i.ref)({name:"",permission:""}),p=function(){var e=l(o().mark((function e(r){var n,i,c,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i in n="?",r)n+=i+"="+r[i]+"&";return e.next=4,s().get("/api/roles"+n);case 4:for(u in c=e.sent,t.value=c.data.data,a.value)a.value[u]=c.data[u];case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=l(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/roles/"+t);case 2:n=e.sent,r.value=n.data;case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=l(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/permissions");case 2:r=e.sent,n.value=r.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var r=l(o().mark((function r(t){var n,a,i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(n in u.value)u.value[n]="";return r.prev=1,r.next=4,s().post("/api/roles",t);case 4:return r.next=6,e.push({name:"role.index"});case 6:r.next=11;break;case 8:if(r.prev=8,r.t0=r.catch(1),422===r.t0.response.status)for(i in a=r.t0.response.data.errors)u.value[i]=a[i][0];case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=l(o().mark((function r(t,n){var a,i,c;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(a in u.value)u.value[a]="";return r.prev=1,r.next=4,s().post("/api/roles/"+t,n);case 4:return r.next=6,e.push({name:"role.index"});case 6:r.next=11;break;case 8:if(r.prev=8,r.t0=r.catch(1),422===r.t0.response.status)for(c in i=r.t0.response.data.errors)u.value[c]=i[c][0];case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e,t){return r.apply(this,arguments)}}();return{errors:u,role:r,roles:t,getRole:f,getRoles:p,storeRole:v,pagination:a,deleteRole:function(){var e=l(o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/roles/"+r);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),updateRole:m,permissionsOptions:n,getPermissionsDropdown:d}}},5563:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>P});var n=t(4359),o={class:"flex justify-between mb-2"},a=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Role Edit ",-1),s=(0,n.createTextVNode)(" List "),i={class:"bg-white overflow-hidden shadow-sm rounded-lg"},c={class:"p-6 bg-white border-b border-gray-200"},u={class:"mb-6"},l=(0,n.createVNode)("label",{for:"name",class:"input-form-label"},"Name",-1),p={key:0},f={class:"mb-6"},d=(0,n.createVNode)("label",{for:"permisions",class:"input-form-label"},"Permissions",-1),v={class:"inline-flex items-center"},m={class:"ml-2"},h=(0,n.createVNode)("button",{type:"submit",class:"btn-blue"}," Save ",-1);var b=t(7757),w=t.n(b),x=t(5216);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){g(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r,t,n,o,a,s){try{var i=e[a](s),c=i.value}catch(e){return void t(e)}i.done?r(c):Promise.resolve(c).then(n,o)}function N(e){return function(){var r=this,t=arguments;return new Promise((function(n,o){var a=e.apply(r,t);function s(e){O(a,n,o,s,i,"next",e)}function i(e){O(a,n,o,s,i,"throw",e)}s(void 0)}))}}const V={props:{id:{required:!0,type:String}},setup:function(e){var r=e.id,t=(0,x.Z)(),o=t.errors,a=t.role,s=t.getRole,i=t.permissionsOptions,c=t.getPermissionsDropdown,u=t.updateRole;(0,n.onMounted)(N(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:s(r);case 3:case"end":return e.stop()}}),e)}))));var l=function(){var e=N(w().mark((function e(t){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.value._method="PATCH",e.next=4,u(r,k({},a.value));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return{errors:o,role:a,saveRole:l,permissionsOptions:i}},render:function(e,r,t,b,w,x){var y=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",o,[a,(0,n.createVNode)(y,{to:{name:"role.index"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[s]})),_:1},8,["to"])]),(0,n.createVNode)("div",i,[(0,n.createVNode)("div",c,[(0,n.createVNode)("form",{onSubmit:r[3]||(r[3]=(0,n.withModifiers)((function(){return b.saveRole&&b.saveRole.apply(b,arguments)}),["prevent"]))},[(0,n.createVNode)("div",u,[l,(0,n.withDirectives)((0,n.createVNode)("input",{type:"text","onUpdate:modelValue":r[1]||(r[1]=function(e){return b.role.name=e}),id:"name",name:"name",class:"input-form-control",placeholder:"Name",required:""},null,512),[[n.vModelText,b.role.name]]),b.errors.name?((0,n.openBlock)(),(0,n.createBlock)("span",p,(0,n.toDisplayString)(b.errors.name),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",f,[d,((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(b.permissionsOptions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("div",{key:e.value},[(0,n.createVNode)("label",v,[(0,n.withDirectives)((0,n.createVNode)("input",{"onUpdate:modelValue":r[2]||(r[2]=function(e){return b.role.permission=e}),type:"checkbox",value:e.id,class:"form-checkbox"},null,8,["value"]),[[n.vModelCheckbox,b.role.permission]]),(0,n.createVNode)("span",m,(0,n.toDisplayString)(e.name),1)])])})),128))]),h],32)])])],64)}},P=V}}]);