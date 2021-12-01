(self.webpackChunk=self.webpackChunk||[]).push([[127],{8045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7757),a=r.n(n),o=r(9669),c=r.n(o),s=r(4359),i=r(2119);function u(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){u(o,n,a,c,s,"next",e)}function s(e){u(o,n,a,c,s,"throw",e)}c(void 0)}))}}function p(){var e=(0,i.tv)(),t=(0,s.ref)({name:"",description:"",short_description:"",parent_id:0,image:"",status:0}),r=(0,s.ref)([]),n=(0,s.ref)([]),o=(0,s.ref)({name:"",description:"",short_description:"",parent_id:"",image:"",status:""}),u=function(){var e=l(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/api/categories");case 2:t=e.sent,r.value=t.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=l(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/api/categories/"+r);case 2:n=e.sent,t.value=n.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=l(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("/api/categories");case 2:t=e.sent,n.value=t.data.map((function(e){return{name:e.name,value:e.id}}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=l(a().mark((function t(r){var n,s,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in o.value)o.value[n]="";return t.prev=1,t.next=4,c().post("/api/categories",r);case 4:return t.next=6,e.push({name:"category.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.code)for(i in s=t.t0.response.data.errors)o.value[i]=s[i][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=l(a().mark((function t(r,n){var s,i,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s in o.value)o.value[s]="";return t.prev=1,t.next=4,c().post("/api/categories/"+r,n);case 4:return t.next=6,e.push({name:"category.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.code)for(u in i=t.t0.response.data.errors)o.value[u]=i[u][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}();return{errors:o,category:t,categories:r,getCategory:p,getCategories:u,storeCategory:f,deleteCategory:function(){var e=l(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().delete("/api/categories/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateCategory:g,categoryOptions:n,getCategoriesDropdown:d}}},4127:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(4359),a={class:"flex justify-between mb-2"},o=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Categories ",-1),c=(0,n.createTextVNode)(" Add "),s={class:"bg-white overflow-hidden shadow-sm rounded-lg"},i={class:"p-6 bg-white border-b border-gray-200"},u={class:"min-w-max w-full table-auto"},l=(0,n.createVNode)("thead",null,[(0,n.createVNode)("tr",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Image"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Name"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Parent"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Status"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Action")])],-1),p={class:"text-gray-900 text-sm font-light"},d={class:"py-2 px-2 text-left whitespace-nowrap"},f={key:1,src:"/images/no-image.png",class:"w-20 rounded "},g={class:"py-2 px-2 text-left whitespace-nowrap"},v={class:"py-2 px-2 text-left whitespace-nowrap"},m={class:"py-2 px-2 text-center whitespace-nowrap"},h={class:"py-2 px-2 text-center whitespace-nowrap"},x={class:"flex item-center justify-center"},y=(0,n.createVNode)("img",{src:"/images/view-icon.svg",alt:"View"},null,-1),w=(0,n.createVNode)("img",{src:"/images/edit-icon.svg",alt:"Edit"},null,-1),N=(0,n.createVNode)("img",{src:"/images/delete-icon.svg",alt:"Delete"},null,-1);var V=r(7757),k=r.n(V),C=r(8045);function b(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){b(o,n,a,c,s,"next",e)}function s(e){b(o,n,a,c,s,"throw",e)}c(void 0)}))}}const B={setup:function(e){var t=(0,n.ref)(!1),r=(0,n.ref)(0),a=(0,C.Z)(),o=a.categories,c=a.getCategories,s=a.deleteCategory;(0,n.onMounted)(c);var i=function(){var e=_(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.value=!t.value;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{item_id:r,showModal:t,categories:o,destroyCategory:function(){var e=_(k().mark((function e(t){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return i(),e.next=5,c();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),togglePopup:i,deleteCategory:s}},render:function(e,t,r,V,k,C){var b=(0,n.resolveComponent)("router-link"),_=(0,n.resolveComponent)("app-status"),B=(0,n.resolveComponent)("app-confirm-delete");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",a,[o,(0,n.createVNode)(b,{to:{name:"category.create"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["to"])]),(0,n.createVNode)("div",s,[(0,n.createVNode)("div",i,[(0,n.createVNode)("table",u,[l,(0,n.createVNode)("tbody",p,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(V.categories,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:t,class:"border-b border-gray-200 hover:bg-gray-100"},[(0,n.createVNode)("td",d,[e.image?((0,n.openBlock)(),(0,n.createBlock)("img",{key:0,src:"/uploads/category/"+e.image,class:"w-20 rounded "},null,8,["src"])):(0,n.createCommentVNode)("",!0),e.image?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("img",f))]),(0,n.createVNode)("td",g,(0,n.toDisplayString)(e.name),1),(0,n.createVNode)("td",v,(0,n.toDisplayString)(e.parent_category_name?e.parent_category_name:"None"),1),(0,n.createVNode)("td",m,[(0,n.createVNode)(_,{status:e.status},null,8,["status"])]),(0,n.createVNode)("td",h,[(0,n.createVNode)("div",x,[(0,n.createVNode)(b,{to:"",class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[y]})),_:1}),(0,n.createVNode)(b,{to:{name:"category.edit",params:{id:e.id}},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[w]})),_:2},1032,["to"]),(0,n.createVNode)("button",{type:"button",onClick:function(t){V.item_id=e.id,V.togglePopup()},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[N],8,["onClick"])])])])})),128))])])])]),(0,n.withDirectives)((0,n.createVNode)(B,{modalHeadline:"Delete Category?",deleteMessage:"Are you sure?",onDeleteRecordEvent:t[1]||(t[1]=function(e){return V.destroyCategory(V.item_id)}),onClose:V.togglePopup},null,8,["onClose"]),[[n.vShow,V.showModal]])],64)}},P=B}}]);