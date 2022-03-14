(self.webpackChunk=self.webpackChunk||[]).push([[667],{8450:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7757),i=r.n(n),o=r(9669),a=r.n(o),c=r(4359),s=r(2119);function u(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){u(o,n,i,a,c,"next",e)}function c(e){u(o,n,i,a,c,"throw",e)}a(void 0)}))}}function p(){var e="/api/service-tickets",t=(0,s.tv)(),r=(0,c.ref)([]),n=(0,c.ref)({current_page:1,total:0,per_page:5,last_page:0,links:[]}),o=(0,c.ref)({title:"",description:"",priority:"",status:"",type:"",user_id:"",_method:"post"}),u=(0,c.ref)({title:"",description:"",priority:"",status:"",type:"",user_id:""}),p=function(){var t=l(i().mark((function t(o){var c,s,u,l;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s in c="?",o)c+=s+"="+o[s]+"&";return t.next=4,a().get(e+c);case 4:for(l in u=t.sent,r.value=u.data.data,n.value)n.value[l]=u.data[l];case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=l(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a().get(e+"/"+r);case 2:n=t.sent,o.value=n.data;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var r=l(i().mark((function r(n){var o,c,s;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(o in u.value)u.value[o]="";return r.prev=1,r.next=4,a().post(e,n);case 4:return r.next=6,t.push({name:"service-ticket.index"});case 6:r.next=11;break;case 8:if(r.prev=8,r.t0=r.catch(1),422===r.t0.response.status)for(s in c=r.t0.response.data.errors)u.value[s]=c[s][0];case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=l(i().mark((function r(n,o){var c,s,l;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(c in u.value)u.value[c]="";return r.prev=1,r.next=4,a().post(e+"/"+n,o);case 4:return r.next=6,t.push({name:"service-ticket.index"});case 6:r.next=11;break;case 8:if(r.prev=8,r.t0=r.catch(1),422===r.t0.response.status)for(l in s=r.t0.response.data.errors)u.value[l]=s[l][0];case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e,t){return r.apply(this,arguments)}}();return{serviceTicket:o,serviceTickets:r,errors:u,getServiceTicket:d,getServiceTickets:p,storeServiceTicket:v,pagination:n,deleteServiceTicket:function(){var r=l(i().mark((function r(n){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a().delete(e+"/"+n);case 2:return r.next=4,t.push({name:"service-ticket.index"});case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),updateServiceTicket:f}}},1667:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>C});var n=r(4359),i={class:"flex justify-between mb-2"},o=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Service Ticket Create ",-1),a=(0,n.createTextVNode)(" List "),c={class:"bg-white overflow-hidden shadow-sm rounded-lg"},s={class:"p-6 bg-white border-b border-gray-200"},u={class:"mb-6"},l=(0,n.createVNode)("label",{for:"title",class:"input-form-label"},"Title",-1),p={key:0},d={class:"mb-6"},v=(0,n.createVNode)("label",{for:"description",class:"input-form-label"},"Description",-1),f={key:0},m={class:" mb-6"},k=(0,n.createVNode)("label",{for:"type",class:"input-form-label"},"Type",-1),y={class:"mb-6"},h=(0,n.createVNode)("label",{for:"priority",class:"input-form-label"},"Priority",-1),b={key:0,class:"mb-6"},w=(0,n.createVNode)("label",{for:"status",class:"input-form-label"},"Status",-1);var x=r(7757),V=r.n(x),g=r(7013),N=r(2871),S=r(8450);function T(e,t,r,n,i,o,a){try{var c=e[o](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,i)}function B(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){T(o,n,i,a,c,"next",e)}function c(e){T(o,n,i,a,c,"throw",e)}a(void 0)}))}}const D={setup:function(){var e=(0,g.oR)(),t=(0,n.computed)((function(){return e.state.user})),r=(0,S.Z)(),i=r.errors,o=r.storeServiceTicket,a=(0,n.ref)(!1),c=(0,n.ref)({title:"",description:"",type:"Other",priority:"Low",status:"Open"});(0,n.onMounted)(B(V().mark((function e(){return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));var s=function(){var e=B(V().mark((function e(){var t,r;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in a.value=!0,t=new FormData,c.value)t.append(r,c.value[r]);return e.next=5,o(t);case 5:a.value=!1;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{form:c,user:t,errors:i,submitting:a,saveServiceTicket:s,priorityOptions:N.jY,serviceTicketTypeOptions:N.Ky,serviceTicketStatusOptions:N.K_}},render:function(e,t,r,x,V,g){var N=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",i,[o,(0,n.createVNode)(N,{to:{name:"service-ticket.index"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[a]})),_:1},8,["to"])]),(0,n.createVNode)("div",c,[(0,n.createVNode)("div",s,[(0,n.createVNode)("form",{onSubmit:t[6]||(t[6]=(0,n.withModifiers)((function(){return x.saveServiceTicket&&x.saveServiceTicket.apply(x,arguments)}),["prevent"]))},[(0,n.createVNode)("div",u,[l,(0,n.withDirectives)((0,n.createVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return x.form.title=e}),id:"title",name:"title",class:"input-form-control",placeholder:"Title",required:""},null,512),[[n.vModelText,x.form.title]]),x.errors.title?((0,n.openBlock)(),(0,n.createBlock)("span",p,(0,n.toDisplayString)(x.errors.title),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",d,[v,(0,n.withDirectives)((0,n.createVNode)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return x.form.description=e}),id:"description",name:"description",class:"input-form-control",placeholder:"Description",required:""},null,512),[[n.vModelText,x.form.description]]),x.errors.description?((0,n.openBlock)(),(0,n.createBlock)("span",f,(0,n.toDisplayString)(x.errors.description),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",m,[k,(0,n.withDirectives)((0,n.createVNode)("select",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return x.form.type=e}),name:"type",id:"type",class:"input-form-control"},[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(x.serviceTicketTypeOptions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("option",{key:e,value:e},(0,n.toDisplayString)(e),9,["value"])})),128))],512),[[n.vModelSelect,x.form.type]])]),(0,n.createVNode)("div",y,[h,(0,n.withDirectives)((0,n.createVNode)("select",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return x.form.priority=e}),name:"priority",id:"priority",class:"input-form-control"},[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(x.priorityOptions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("option",{key:e,value:e},(0,n.toDisplayString)(e),9,["value"])})),128))],512),[[n.vModelSelect,x.form.priority]])]),["super-admin","admin","hr"].includes(x.user.role)?((0,n.openBlock)(),(0,n.createBlock)("div",b,[w,(0,n.withDirectives)((0,n.createVNode)("select",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return x.form.status=e}),name:"status",id:"status",class:"input-form-control"},[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(x.serviceTicketStatusOptions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("option",{key:e,value:e},(0,n.toDisplayString)(e),9,["value"])})),128))],512),[[n.vModelSelect,x.form.status]])])):(0,n.createCommentVNode)("",!0),(0,n.createVNode)("button",{type:"submit",class:"btn-blue",disabled:x.submitting},(0,n.toDisplayString)(x.submitting?"Saving":"Save"),9,["disabled"])],32)])])],64)}},C=D}}]);