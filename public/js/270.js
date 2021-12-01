(self.webpackChunk=self.webpackChunk||[]).push([[270],{5216:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7757),o=r.n(n),a=r(9669),s=r.n(a),c=r(4359),u=r(2119);function i(e,t,r,n,o,a,s){try{var c=e[a](s),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){i(a,n,o,s,c,"next",e)}function c(e){i(a,n,o,s,c,"throw",e)}s(void 0)}))}}function p(){var e=(0,u.tv)(),t=(0,c.ref)({name:"",permission:[],_method:"post"}),r=(0,c.ref)([]),n=(0,c.ref)([]),a=(0,c.ref)({name:"",permission:""}),i=function(){var e=l(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/roles");case 2:t=e.sent,r.value=t.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=l(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/roles/"+r);case 2:n=e.sent,t.value=n.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=l(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/permissions");case 2:t=e.sent,n.value=t.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=l(o().mark((function t(r){var n,c,u;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in a.value)a.value[n]="";return t.prev=1,t.next=4,s().post("/api/roles",r);case 4:return t.next=6,e.push({name:"role.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.code)for(u in c=t.t0.response.data.errors)a.value[u]=c[u][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=l(o().mark((function t(r,n){var c,u,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in a.value)a.value[c]="";return t.prev=1,t.next=4,s().post("/api/roles/"+r,n);case 4:return t.next=6,e.push({name:"role.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.code)for(i in u=t.t0.response.data.errors)a.value[i]=u[i][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}();return{errors:a,role:t,roles:r,getRole:p,getRoles:i,storeRole:f,deleteRole:function(){var e=l(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/roles/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateRole:v,permissionsOptions:n,getPermissionsDropdown:d}}},4270:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>V});var n=r(4359),o={class:"flex justify-between mb-2"},a=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Roles ",-1),s=(0,n.createTextVNode)(" Add "),c={class:"bg-white overflow-hidden shadow-sm rounded-lg"},u={class:"p-6 bg-white border-b border-gray-200"},i={class:"min-w-max w-full table-auto"},l=(0,n.createVNode)("thead",null,[(0,n.createVNode)("tr",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Name"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Action")])],-1),p={class:"text-gray-900 text-sm font-light"},d={class:"py-2 px-2 text-left whitespace-nowrap"},f={class:"py-2 px-2 text-center whitespace-nowrap"},v={class:"flex item-center justify-center"},h=(0,n.createVNode)("img",{src:"/images/view-icon.svg",alt:"View"},null,-1),m=(0,n.createVNode)("img",{src:"/images/edit-icon.svg",alt:"Edit"},null,-1),x=(0,n.createVNode)("img",{src:"/images/delete-icon.svg",alt:"Delete"},null,-1);var w=r(7757),g=r.n(w),y=r(5216);function k(e,t,r,n,o,a,s){try{var c=e[a](s),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){k(a,n,o,s,c,"next",e)}function c(e){k(a,n,o,s,c,"throw",e)}s(void 0)}))}}const N={setup:function(e){var t=(0,n.ref)(!1),r=(0,n.ref)(0),o=(0,y.Z)(),a=o.roles,s=o.getRoles,c=o.deleteRole;(0,n.onMounted)(s);var u=function(){var e=b(g().mark((function e(){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.value=!t.value;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{item_id:r,showModal:t,roles:a,destroyRole:function(){var e=b(g().mark((function e(t){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:return u(),e.next=5,s();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),togglePopup:u,deleteRole:c}},render:function(e,t,r,w,g,y){var k=(0,n.resolveComponent)("router-link"),b=(0,n.resolveComponent)("app-confirm-delete");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",o,[a,(0,n.createVNode)(k,{to:{name:"role.create"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[s]})),_:1},8,["to"])]),(0,n.createVNode)("div",c,[(0,n.createVNode)("div",u,[(0,n.createVNode)("table",i,[l,(0,n.createVNode)("tbody",p,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(w.roles,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:t,class:"border-b border-gray-200 hover:bg-gray-100"},[(0,n.createVNode)("td",d,(0,n.toDisplayString)(e.name),1),(0,n.createVNode)("td",f,[(0,n.createVNode)("div",v,[(0,n.createVNode)(k,{to:"",class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[h]})),_:1}),(0,n.createVNode)(k,{to:{name:"role.edit",params:{id:e.id}},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[m]})),_:2},1032,["to"]),(0,n.createVNode)("button",{type:"button",onClick:function(t){w.item_id=e.id,w.togglePopup()},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[x],8,["onClick"])])])])})),128))])])])]),(0,n.withDirectives)((0,n.createVNode)(b,{modalHeadline:"Delete Role?",deleteMessage:"Are you sure?",onDeleteRecordEvent:t[1]||(t[1]=function(e){return w.destroyRole(w.item_id)}),onClose:w.togglePopup},null,8,["onClose"]),[[n.vShow,w.showModal]])],64)}},V=N}}]);