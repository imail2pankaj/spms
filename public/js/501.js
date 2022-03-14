(self.webpackChunk=self.webpackChunk||[]).push([[501],{2561:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(7757),n=a.n(r),o=a(9669),s=a.n(o),c=a(4359),l=a(2119);function i(e,t,a,r,n,o,s){try{var c=e[o](s),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(r,n)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function s(e){i(o,r,n,s,c,"next",e)}function c(e){i(o,r,n,s,c,"throw",e)}s(void 0)}))}}function d(){var e,t,a,r="/api/user-leaves",o=(0,l.tv)(),i=(0,c.ref)([]),d=(0,c.ref)({current_page:1,total:0,per_page:5,last_page:0,links:[]}),p=(0,c.ref)({description:"",comment:"",start_date:"",end_date:"",type:"Half",status:"Applied",_method:"post"}),v=(0,c.ref)((a="",(t="type")in(e={description:"",comment:"",start_date:"",end_date:"",type:"",status:""})?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e)),f=function(){var e=u(n().mark((function e(t){var a,o,c,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o in a="?",t)a+=o+"="+t[o]+"&";return e.next=4,s().get(r+a);case 4:for(l in c=e.sent,i.value=c.data.data,d.value)d.value[l]=c.data[l];case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=u(n().mark((function e(t){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get(r+"/"+t);case 2:a=e.sent,p.value=a.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=u(n().mark((function e(t){var a,c,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in v.value)v.value[a]="";return e.prev=1,e.next=4,s().post(r,t);case 4:return e.next=6,o.push({name:"leave.index"});case 6:e.next=11;break;case 8:if(e.prev=8,e.t0=e.catch(1),422===e.t0.response.status)for(l in c=e.t0.response.data.errors)v.value[l]=c[l][0];case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=u(n().mark((function e(t,a){var c,l,i;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in v.value)v.value[c]="";return e.prev=1,e.next=4,s().post(r+"/"+t,a);case 4:return e.next=6,o.push({name:"leave.index"});case 6:e.next=11;break;case 8:if(e.prev=8,e.t0=e.catch(1),422===e.t0.response.status)for(i in l=e.t0.response.data.errors)v.value[i]=l[i][0];case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}();return{leave:p,leaves:i,errors:v,getLeave:m,getLeaves:f,storeLeave:h,pagination:d,deleteLeave:function(){var e=u(n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete(r+"/"+t);case 2:return e.next=4,o.push({name:"leave.index"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateLeave:y}}},2501:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var r=a(4359),n={class:"flex justify-between mb-2"},o=(0,r.createVNode)("h1",{class:"text-2xl font-bold"}," Leave Edit ",-1),s=(0,r.createTextVNode)(" List "),c={class:"bg-white overflow-hidden shadow-sm rounded-lg"},l={class:"bg-white border-b border-gray-200"},i={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},u={class:"mb-6"},d={for:"description",class:"input-form-label"},p=(0,r.createTextVNode)("Description "),v={key:0,class:"input-error"},f={class:"md:grid md:grid-cols-3 md:gap-6"},m={class:"mb-6"},h={for:"start_date",class:"input-form-label"},y=(0,r.createTextVNode)("Date "),b={key:0,class:"input-error"},k={class:"mb-6"},V={for:"end_date",class:"input-form-label"},x=(0,r.createTextVNode)("End Date "),g={key:0,class:"input-error"},N={class:"mb-6"},w=(0,r.createVNode)("label",{for:"type",class:"input-form-label"},"Type",-1),D={key:0,class:"mb-6"},_=(0,r.createVNode)("label",{for:"status",class:"input-form-label"},"Status",-1),B={key:1,class:"mb-6"},C=(0,r.createVNode)("label",{for:"comment",class:"input-form-label"},"Comment",-1),S={key:0},L={class:"px-4 py-3 bg-gray-50 text-left sm:px-6"};var T=a(7757),M=a.n(T),Y=a(7013),P=a(381),U=a.n(P),q=a(2561),F=a(2871);function O(e,t,a,r,n,o,s){try{var c=e[o](s),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(r,n)}function R(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function s(e){O(o,r,n,s,c,"next",e)}function c(e){O(o,r,n,s,c,"throw",e)}s(void 0)}))}}const A={props:{id:{required:!0,type:String}},setup:function(e){var t=(0,Y.oR)(),a=(0,r.computed)((function(){return t.state.user})),n=(0,r.ref)(0),o=(0,r.ref)(!1),s=e.id,c=(0,q.Z)(),l=c.errors,i=c.leave,u=c.updateLeave,d=c.getLeave;(0,r.onMounted)(R(M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(s);case 2:case"end":return e.stop()}}),e)}))));return{leave:i,errors:l,user:a,handleDate:function(e){var t=U()(form.value.start_date,"YYYY-MM-DD"),a=U()(form.value.end_date,"YYYY-MM-DD");t>a?(l.value.end_date="End date can not be less than start date",disabled.value=!0):(l.value.end_date="",disabled.value=!1),n.value=U().duration(a.diff(t)).asDays(),form.value.type=n>=1?"Full":"Half"},saveLeave:function(){var e=R(M().mark((function e(){var t,a;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in o.value=!0,t=new FormData,i.value)t.append(a,i.value[a]);return t.append("_method","PATCH"),e.next=6,u(s,t);case 6:o.value=!1;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),submitting:o,diffDays:n,leaveStatusOptions:F.m3,leaveTypeOptions:F.fA,managementRoles:F.T4}},render:function(e,t,a,T,M,Y){var P=(0,r.resolveComponent)("router-link"),U=(0,r.resolveComponent)("app-required");return(0,r.openBlock)(),(0,r.createBlock)(r.Fragment,null,[(0,r.createVNode)("div",n,[o,(0,r.createVNode)(P,{to:{name:"leave.index"},class:"link-blue"},{default:(0,r.withCtx)((function(){return[s]})),_:1},8,["to"])]),(0,r.createVNode)("form",{onSubmit:t[9]||(t[9]=(0,r.withModifiers)((function(){return T.saveLeave&&T.saveLeave.apply(T,arguments)}),["prevent"]))},[(0,r.createVNode)("div",c,[(0,r.createVNode)("div",l,[(0,r.createVNode)("div",i,[(0,r.createVNode)("div",u,[(0,r.createVNode)("label",d,[p,(0,r.createVNode)(U)]),(0,r.withDirectives)((0,r.createVNode)("textarea",{placeholder:"Description","onUpdate:modelValue":t[1]||(t[1]=function(e){return T.leave.description=e}),id:"description",name:"description",class:"input-form-control",required:""},null,512),[[r.vModelText,T.leave.description]]),T.errors.description?((0,r.openBlock)(),(0,r.createBlock)("span",v,(0,r.toDisplayString)(T.errors.description),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",f,[(0,r.createVNode)("div",m,[(0,r.createVNode)("label",h,[y,(0,r.createVNode)(U)]),(0,r.withDirectives)((0,r.createVNode)("input",{type:"date",onChange:t[2]||(t[2]=function(){return T.handleDate&&T.handleDate.apply(T,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return T.leave.start_date=e}),id:"start_date",name:"start_date",class:"input-form-control",placeholder:"Joining Date",required:""},null,544),[[r.vModelText,T.leave.start_date]]),T.errors.start_date?((0,r.openBlock)(),(0,r.createBlock)("span",b,(0,r.toDisplayString)(T.errors.start_date),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",k,[(0,r.createVNode)("label",V,[x,(0,r.createVNode)(U)]),(0,r.withDirectives)((0,r.createVNode)("input",{type:"date",onChange:t[4]||(t[4]=function(){return T.handleDate&&T.handleDate.apply(T,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return T.leave.end_date=e}),id:"end_date",name:"end_date",class:"input-form-control",placeholder:"Joining Date",required:""},null,544),[[r.vModelText,T.leave.end_date]]),T.errors.end_date?((0,r.openBlock)(),(0,r.createBlock)("span",g,(0,r.toDisplayString)(T.errors.end_date),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",N,[w,(0,r.withDirectives)((0,r.createVNode)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return T.leave.type=e}),name:"type",id:"type",class:"input-form-control"},[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(T.leaveTypeOptions,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("option",{key:e,value:e},(0,r.toDisplayString)(e)+" Day ",9,["value"])})),128))],512),[[r.vModelSelect,T.leave.type]])]),T.managementRoles().includes(T.user.role)?((0,r.openBlock)(),(0,r.createBlock)("div",D,[_,(0,r.withDirectives)((0,r.createVNode)("select",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return T.leave.status=e}),name:"status",id:"status",class:"input-form-control"},[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(T.leaveStatusOptions,(function(e){return(0,r.openBlock)(),(0,r.createBlock)("option",{key:e,value:e},(0,r.toDisplayString)(e),9,["value"])})),128))],512),[[r.vModelSelect,T.leave.status]])])):(0,r.createCommentVNode)("",!0),T.managementRoles().includes(T.user.role)&&"Applied"!==T.leave.status?((0,r.openBlock)(),(0,r.createBlock)("div",B,[C,(0,r.withDirectives)((0,r.createVNode)("textarea",{placeholder:"Comment","onUpdate:modelValue":t[8]||(t[8]=function(e){return T.leave.comment=e}),id:"comment",name:"comment",class:"input-form-control"},null,512),[[r.vModelText,T.leave.comment]])])):(0,r.createCommentVNode)("",!0)]),T.leave.comment?((0,r.openBlock)(),(0,r.createBlock)("span",S,"Reason : "+(0,r.toDisplayString)(T.leave.comment),1)):(0,r.createCommentVNode)("",!0)]),(0,r.createVNode)("div",L,[(0,r.createVNode)("button",{type:"submit",class:"btn-blue",disabled:T.submitting},(0,r.toDisplayString)(T.submitting?"Saving":"Save"),9,["disabled"])])])])],32)],64)}},E=A}}]);