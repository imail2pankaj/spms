(self.webpackChunk=self.webpackChunk||[]).push([[54],{2195:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(7757),a=r.n(n),o=r(9669),s=r.n(o),i=r(4359),l=r(2119);function c(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){c(o,n,a,s,i,"next",e)}function i(e){c(o,n,a,s,i,"throw",e)}s(void 0)}))}}function p(){var e=(0,i.ref)([]),t=(0,i.ref)({id:0,name:"",email:"",address:"",website:"",status:0}),r=(0,l.tv)(),n=(0,i.ref)({name:"",email:"",address:"",website:""}),o=function(){var t=u(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("/api/companies");case 2:r=t.sent,e.value=r.data;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var e=u(a().mark((function e(r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/api/companies/"+r);case 2:n=e.sent,t.value=n.data;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=u(a().mark((function e(t){var o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value.name="",n.value.email="",n.value.address="",n.value.website="",e.prev=4,e.next=7,s().post("/api/companies",t);case 7:return e.next=9,r.push({name:"company"});case 9:e.next=14;break;case 11:if(e.prev=11,e.t0=e.catch(4),422===e.t0.response.status)for(i in o=e.t0.response.data.errors)n.value[i]=o[i][0];case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=u(a().mark((function e(t,o){var i,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.value.name="",n.value.email="",n.value.address="",n.value.website="",e.prev=4,e.next=7,s().post("/api/companies/"+t,o);case 7:return e.next=9,r.push({name:"company"});case 9:e.next=14;break;case 11:if(e.prev=11,e.t0=e.catch(4),422===e.t0.response.status)for(l in i=e.t0.response.data.errors)n.value[l]=i[l][0];case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t,r){return e.apply(this,arguments)}}();return{errors:n,company:t,companies:e,getCompany:c,getCompanies:o,storeCompany:p,saveCompany:d,deleteCompany:function(){var e=u(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().delete("/api/companies/"+t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},54:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(4359),a={class:"flex justify-between mb-2"},o=(0,n.createVNode)("h1",{class:"text-2xl font-bold"}," Company Create ",-1),s=(0,n.createTextVNode)(" List "),i={class:"bg-white overflow-hidden shadow-sm rounded-lg"},l={class:"p-6 bg-white border-b border-gray-200"},c={class:"mb-6"},u=(0,n.createVNode)("label",{for:"name",class:"input-form-label"},"Company Name",-1),p={key:0},d={class:"mb-6"},m=(0,n.createVNode)("label",{for:"logo",class:"input-form-label"},"Company Logo",-1),f={key:0},v={class:"mb-6"},y=(0,n.createVNode)("label",{for:"email",class:"input-form-label"},"Company email",-1),b={key:0},h={class:"mb-6"},w=(0,n.createVNode)("label",{for:"address",class:"input-form-label"},"Company address",-1),k={key:0},V={class:"mb-6"},C=(0,n.createVNode)("label",{for:"website",class:"input-form-label"},"Company Website",-1),N={key:0},x={class:"mb-6"},g=(0,n.createVNode)("label",{for:"status",class:"input-form-label"},"Company Status",-1),B=(0,n.createVNode)("button",{type:"submit",class:"btn-blue"}," Save Company ",-1);var D=r(7757),S=r.n(D),U=r(2262),F=r(2195);function M(e,t,r,n,a,o,s){try{var i=e[o](s),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,a)}function q(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){M(o,n,a,s,i,"next",e)}function i(e){M(o,n,a,s,i,"throw",e)}s(void 0)}))}}const T={setup:function(){var e=(0,F.Z)(),t=e.errors,r=e.storeCompany,n=(0,U.iH)(null),a=(0,U.iH)({name:"",logo:"",email:"",address:"",website:"",status:0});return{errors:t,form:a,saveCompany:function(){var e=q(S().mark((function e(t){var o,s,i,l;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),o=new FormData,s=0,i=Object.keys(a.value);s<i.length;s++)"logo"===(l=i[s])?o.append("logo",n.value):o.append(l,a.value[l]);return e.next=5,r(o);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),handleFileUpload:function(){var e=q(S().mark((function e(t){return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n.value=t.target.files[0];case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),statusOptions:[{value:1,display:"Active"},{value:0,display:"InActive"}]}},render:function(e,t,r,D,S,U){var F=(0,n.resolveComponent)("router-link");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",a,[o,(0,n.createVNode)(F,{to:{name:"company"},class:"link-blue"},{default:(0,n.withCtx)((function(){return[s]})),_:1})]),(0,n.createVNode)("div",i,[(0,n.createVNode)("div",l,[(0,n.createVNode)("form",{onSubmit:t[7]||(t[7]=(0,n.withModifiers)((function(){return D.saveCompany&&D.saveCompany.apply(D,arguments)}),["prevent"]))},[(0,n.createVNode)("div",c,[u,(0,n.withDirectives)((0,n.createVNode)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return D.form.name=e}),id:"name",name:"name",class:"input-form-control",placeholder:"Company name",required:""},null,512),[[n.vModelText,D.form.name]]),D.errors.name?((0,n.openBlock)(),(0,n.createBlock)("span",p,(0,n.toDisplayString)(D.errors.name),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",d,[m,(0,n.createVNode)("input",{type:"file",ref:"file",onChange:t[2]||(t[2]=function(){return D.handleFileUpload&&D.handleFileUpload.apply(D,arguments)}),id:"logo",name:"logo",class:"input-form-control",placeholder:"Company email",required:""},null,544),D.errors.logo?((0,n.openBlock)(),(0,n.createBlock)("span",f,(0,n.toDisplayString)(D.errors.logo),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",v,[y,(0,n.withDirectives)((0,n.createVNode)("input",{type:"email","onUpdate:modelValue":t[3]||(t[3]=function(e){return D.form.email=e}),id:"email",name:"email",class:"input-form-control",placeholder:"Company email",required:""},null,512),[[n.vModelText,D.form.email]]),D.errors.email?((0,n.openBlock)(),(0,n.createBlock)("span",b,(0,n.toDisplayString)(D.errors.email),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",h,[w,(0,n.withDirectives)((0,n.createVNode)("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return D.form.address=e}),id:"address",name:"address",class:"input-form-control",placeholder:"Company address",required:""},null,512),[[n.vModelText,D.form.address]]),D.errors.address?((0,n.openBlock)(),(0,n.createBlock)("span",k,(0,n.toDisplayString)(D.errors.address),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",V,[C,(0,n.withDirectives)((0,n.createVNode)("input",{type:"text","onUpdate:modelValue":t[5]||(t[5]=function(e){return D.form.website=e}),id:"website",name:"website",class:"input-form-control",placeholder:"Company website",required:""},null,512),[[n.vModelText,D.form.website]]),D.errors.website?((0,n.openBlock)(),(0,n.createBlock)("span",N,(0,n.toDisplayString)(D.errors.website),1)):(0,n.createCommentVNode)("",!0)]),(0,n.createVNode)("div",x,[g,(0,n.withDirectives)((0,n.createVNode)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return D.form.status=e}),name:"status",id:"status",class:"input-form-control"},[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(D.statusOptions,(function(e){return(0,n.openBlock)(),(0,n.createBlock)("option",{key:e.value,value:e.value},(0,n.toDisplayString)(e.display),9,["value"])})),128))],512),[[n.vModelSelect,D.form.status]])]),B],32)])])],64)}},P=T}}]);