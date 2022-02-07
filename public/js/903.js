(self.webpackChunk=self.webpackChunk||[]).push([[903],{6903:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var n=r(4359),o={class:"flex justify-between mb-2"},a=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Projects ",-1),c=(0,n.createTextVNode)(" Add "),l={class:"bg-white overflow-hidden shadow-sm rounded-lg"},s={class:"p-6 bg-white border-b border-gray-200"},i={class:"min-w-max w-full table-auto"},u=(0,n.createVNode)("thead",null,[(0,n.createVNode)("tr",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Name"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Assigned"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Type"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Status"),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Action")])],-1),d={class:"text-gray-900 text-sm font-light"},p={class:"py-2 px-2 text-left whitespace-nowrap"},f={class:"py-2 px-2 text-left whitespace-nowrap"},m=(0,n.createVNode)("b",null,"Dev - ",-1),g=(0,n.createVNode)("br",null,null,-1),x=(0,n.createVNode)("b",null,"Des - ",-1),k=(0,n.createVNode)("br",null,null,-1),h=(0,n.createVNode)("b",null,"PM - ",-1),N=(0,n.createVNode)("br",null,null,-1),v=(0,n.createVNode)("b",null,"BDE - ",-1),V=(0,n.createVNode)("br",null,null,-1),y=(0,n.createVNode)("b",null,"QA - ",-1),w=(0,n.createVNode)("br",null,null,-1),b=(0,n.createVNode)("b",null,"Customer - ",-1),B=(0,n.createVNode)("br",null,null,-1),C={class:"py-2 px-2 text-left whitespace-nowrap"},D={class:"py-2 px-2 text-center whitespace-nowrap"},_={class:"py-2 px-2 text-center whitespace-nowrap"},j={class:"flex item-center justify-center"};var F=r(7757),P=r.n(F),S=r(408);function T(e,t,r,n,o,a,c){try{var l=e[a](c),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function L(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){T(a,n,o,c,l,"next",e)}function l(e){T(a,n,o,c,l,"throw",e)}c(void 0)}))}}const A={setup:function(e){var t=(0,S.Z)(),r=t.projects,o=t.pagination,a=t.getProjects,c=t.deleteProject,l=(0,n.ref)(!1),s=(0,n.ref)(0),i=(0,n.ref)({});(0,n.onMounted)(L(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));var u=function(){var e=L(P().mark((function e(t){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.value=i,e.next=3,a(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=L(P().mark((function e(t){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:return e.next=4,a(i.value);case 4:p();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){l.value=!l.value};return{projects:r,item_id:s,showModal:l,pagination:o,searchData:u,togglePopup:p,destroyRecord:d}},render:function(e,t,r,F,P,S){var T=(0,n.resolveComponent)("router-link"),L=(0,n.resolveComponent)("view-icon"),A=(0,n.resolveComponent)("edit-icon"),M=(0,n.resolveComponent)("delete-icon"),E=(0,n.resolveComponent)("app-datatables"),R=(0,n.resolveComponent)("app-confirm-delete");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",o,[a,(0,n.createVNode)(T,{to:{name:"project.create"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[c]})),_:1},8,["to"])]),(0,n.createVNode)("div",l,[(0,n.createVNode)("div",s,[(0,n.createVNode)(E,{pagination:F.pagination,onChangePageEvent:F.searchData},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)("table",i,[u,(0,n.createVNode)("tbody",d,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(F.projects,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:t,class:"border-b border-gray-200 hover:bg-gray-100"},[(0,n.createVNode)("td",p,(0,n.toDisplayString)(e.title),1),(0,n.createVNode)("td",f,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.developers,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[m,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),g],64)})),128)),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.designers,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[x,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),k],64)})),128)),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.pms,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[h,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),N],64)})),128)),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.bdes,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[v,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),V],64)})),128)),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.qas,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[y,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),w],64)})),128)),((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(e.customers,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,{key:t},[b,(0,n.createTextVNode)((0,n.toDisplayString)(e.first_name),1),B],64)})),128))]),(0,n.createVNode)("td",C,(0,n.toDisplayString)(e.project_type),1),(0,n.createVNode)("td",D,(0,n.toDisplayString)(e.project_status),1),(0,n.createVNode)("td",_,[(0,n.createVNode)("div",j,[(0,n.createVNode)(T,{to:{name:"project.task",params:{slug:e.slug}},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(L)]})),_:2},1032,["to"]),(0,n.createVNode)(T,{to:{name:"project.edit",params:{id:e.id}},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(A)]})),_:2},1032,["to"]),(0,n.createVNode)("button",{type:"button",onClick:function(t){F.item_id=e.id,F.togglePopup()},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[(0,n.createVNode)(M)],8,["onClick"])])])])})),128))])])]})),_:1},8,["pagination","onChangePageEvent"])])]),(0,n.withDirectives)((0,n.createVNode)(R,{modalHeadline:"Delete Project?",deleteMessage:"Are you sure?",onDeleteRecordEvent:t[1]||(t[1]=function(e){return F.destroyRecord(F.item_id)}),onClose:F.togglePopup},null,8,["onClose"]),[[n.vShow,F.showModal]])],64)}},M=A}}]);