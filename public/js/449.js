(self.webpackChunk=self.webpackChunk||[]).push([[449],{5320:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7757),a=r.n(n),s=r(9669),o=r.n(s),c=r(3518),u=r(2119);function i(e,t,r,n,a,s,o){try{var c=e[s](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){i(s,n,a,o,c,"next",e)}function c(e){i(s,n,a,o,c,"throw",e)}o(void 0)}))}}function p(){var e=(0,u.tv)(),t=(0,c.ref)([]),r=(0,c.ref)([]),n=(0,c.ref)({first_name:"",middle_name:"",last_name:"",email:"",password:"",password_confirmation:"",phone_number:"",emergency_phone_number:"",profile_image:"",gender:"",marital_status:"",dob:"",join_date:"",resign_date:"",resume_file:"",address:"",city:"",state:"",country:"",user_status:"",roles:[],_method:"post"}),s=(0,c.ref)({first_name:"",middle_name:"",last_name:"",email:"",password:"",password_confirmation:"",phone_number:"",emergency_phone_number:"",profile_image:"",gender:"",marital_status:"",dob:"",join_date:"",resign_date:"",resume_file:"",address:"",city:"",state:"",country:"",user_status:"",roles:""}),i=function(){var e=l(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/users");case 2:r=e.sent,t.value=r.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=l(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/users/"+t);case 2:r=e.sent,n.value=r.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=l(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("/api/roles");case 2:t=e.sent,r.value=t.data;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var t=l(a().mark((function t(r){var n,c,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n in s.value)s.value[n]="";return t.prev=1,t.next=4,o().post("/api/users",r);case 4:return t.next=6,e.push({name:"user.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.status)for(u in c=t.t0.response.data.errors)s.value[u]=c[u][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=l(a().mark((function t(r,n){var c,u,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in s.value)s.value[c]="";return t.prev=1,t.next=4,o().post("/api/users/"+r,n);case 4:return t.next=6,e.push({name:"user.index"});case 6:t.next=11;break;case 8:if(t.prev=8,t.t0=t.catch(1),422===t.t0.response.status)for(i in u=t.t0.response.data.errors)s.value[i]=u[i][0];case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}();return{user:n,users:t,errors:s,getUser:p,getUsers:i,storeUser:f,deleteUser:function(){var t=l(a().mark((function t(r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().delete("/api/users/"+r);case 2:return t.next=4,e.push({name:"user.index"});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),updateUser:m,rolesOptions:r,getRolesDropdown:d}}},3449:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var n=r(3518),a={class:"flex justify-between mb-2"},s=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Users ",-1),o=(0,n.createTextVNode)(" Add "),c={class:"bg-white overflow-hidden shadow-sm rounded-lg"},u={class:"p-6 bg-white border-b border-gray-200"},i={class:"min-w-max w-full table-auto"},l=(0,n.createVNode)("thead",null,[(0,n.createVNode)("tr",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Name"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Role"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Email"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Status"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Action")])],-1),p={class:"text-gray-900 text-sm font-light"},d={class:"py-2 px-2 text-left whitespace-nowrap"},f={class:"py-2 px-2 text-left whitespace-nowrap"},m={class:"py-2 px-2 text-left whitespace-nowrap"},v={class:"py-2 px-2 text-center whitespace-nowrap"},h={class:"py-2 px-2 text-center whitespace-nowrap"},x={class:"flex item-center justify-center"},w=(0,n.createVNode)("img",{src:"/images/view-icon.svg",alt:"View"},null,-1),g=(0,n.createVNode)("img",{src:"/images/edit-icon.svg",alt:"Edit"},null,-1),y=(0,n.createVNode)("img",{src:"/images/delete-icon.svg",alt:"Delete"},null,-1);var _=r(7757),N=r.n(_),V=r(5320);function k(e,t,r,n,a,s,o){try{var c=e[s](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function o(e){k(s,n,a,o,c,"next",e)}function c(e){k(s,n,a,o,c,"throw",e)}o(void 0)}))}}const C={setup:function(e){var t=(0,V.Z)(),r=t.users,a=t.getUsers,s=t.deleteUser,o=(0,n.ref)(!1),c=(0,n.ref)(0);(0,n.onMounted)(b(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:case"end":return e.stop()}}),e)}))));var u=function(){var e=b(N().mark((function e(t){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t);case 2:return e.next=4,a();case 4:i();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){o.value=!o.value};return{item_id:c,users:r,showModal:o,togglePopup:i,destroyUser:u}},render:function(e,t,r,_,N,V){var k=(0,n.resolveComponent)("router-link"),b=(0,n.resolveComponent)("app-status"),C=(0,n.resolveComponent)("app-confirm-delete");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",a,[s,(0,n.createVNode)(k,{to:{name:"user.create"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[o]})),_:1},8,["to"])]),(0,n.createVNode)("div",c,[(0,n.createVNode)("div",u,[(0,n.createVNode)("table",i,[l,(0,n.createVNode)("tbody",p,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(_.users,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:t,class:"border-b border-gray-200 hover:bg-gray-100"},[(0,n.createVNode)("td",d,(0,n.toDisplayString)(e.first_name+" "+e.last_name),1),(0,n.createVNode)("td",f,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.roles,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)],64)})),128))]),(0,n.createVNode)("td",m,(0,n.toDisplayString)(e.email),1),(0,n.createVNode)("td",v,[(0,n.createVNode)(b,{status:e.user_status},null,8,["status"])]),(0,n.createVNode)("td",h,[(0,n.createVNode)("div",x,[(0,n.createVNode)(k,{to:"",class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[w]})),_:1}),(0,n.createVNode)(k,{to:{name:"user.edit",params:{id:e.id}},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[g]})),_:2},1032,["to"]),(0,n.createVNode)("button",{type:"button",onClick:function(t){_.item_id=e.id,_.togglePopup()},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[y],8,["onClick"])])])])})),128))])])])]),(0,n.withDirectives)((0,n.createVNode)(C,{modalHeadline:"Delete User?",deleteMessage:"Are you sure?",onDeleteRecordEvent:t[1]||(t[1]=function(e){return _.destroyUser(_.item_id)}),onClose:_.togglePopup},null,8,["onClose"]),[[n.vShow,_.showModal]])],64)}},U=C}}]);