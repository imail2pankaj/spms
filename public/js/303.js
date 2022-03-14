(self.webpackChunk=self.webpackChunk||[]).push([[303],{3303:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(4359),a={class:"flex justify-between flex-col md:flex-row mb-2"},o={class:"mt-3 text-2xl font-bold"},l={class:"bg-white overflow-hidden shadow-sm rounded-lg"},c={class:"p-6 bg-white border-b border-gray-200"},s={class:"grid grid-cols-3 gap-4"},i={class:""},u={class:"mb-6"},d={for:"title",class:"input-form-label"},p=(0,n.createTextVNode)("Title "),f={class:"mb-6"},m={for:"file_name",class:"input-form-label"},v=(0,n.createTextVNode)("Attachment "),h={class:"mb-6"},g={type:"submit",class:"btn-blue"},x={class:"col-span-2"},N={class:"min-w-max w-full table-auto"},V=(0,n.createVNode)("thead",null,[(0,n.createVNode)("tr",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"Title"),(0,n.createVNode)("th",{class:"py-2 px-2 text-left"},"File "),(0,n.createVNode)("th",{class:"py-2 px-2 text-center"},"Action")])],-1),b={class:"text-gray-900 text-sm font-light"},y={class:"py-2 px-2 text-left whitespace-nowrap"},w={class:"py-2 px-2 text-left whitespace-nowrap"},k=(0,n.createVNode)("i",{class:"fa fa-download"},null,-1),C={class:"py-2 px-2 text-center"},_={key:0},A=(0,n.createVNode)("td",{class:"py-2 px-2 text-center",colspan:"4"},"No Milestones found",-1);var S=r(7757),B=r.n(S),D=r(408);function j(e,t,r,n,a,o,l){try{var c=e[o](l),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function F(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){j(o,n,a,l,c,"next",e)}function c(e){j(o,n,a,l,c,"throw",e)}l(void 0)}))}}const M={props:{slug:{required:!0,type:String}},setup:function(e){var t=e.slug,r=(0,D.Z)(),a=r.project,o=r.getProjectBySlug,l=r.submitProjectAttachment,c=r.deleteAttachment,s=(0,n.ref)([]),i=(0,n.ref)(!1),u=(0,n.ref)(0),d=(0,n.ref)(!1),p=(0,n.ref)(null),f=(0,n.ref)({title:"",file_name:""});(0,n.onMounted)(F(B().mark((function e(){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)}))));var m=function(){var e=F(B().mark((function e(){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,"attachment");case 2:s.value=a.value.attachments;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){d.value=!d.value},h=function(){var e=F(B().mark((function e(){var t,r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r in i.value=!0,t=new FormData,f.value)"file_name"===r?t.append("file_name",p.value):t.append(r,f.value[r]);return e.next=5,l(a.value.id,t);case 5:return e.next=7,m();case 7:f.value.title="",f.value.file_name="",p.value="",i.value=!1;case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=F(B().mark((function e(t){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a.value.id,t);case 2:return e.next=4,m();case 4:v();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{attachments:s,showModal:d,togglePopup:v,saveAttachment:h,handleFileUpload:function(e){p.value=e.target.files[0]},item_id:u,submitting:i,project:a,slug:t,form:f,destroyRecord:g}},render:function(e,t,r,S,B,D){var j=(0,n.resolveComponent)("app-project-nav"),F=(0,n.resolveComponent)("app-required"),M=(0,n.resolveComponent)("delete-icon"),P=(0,n.resolveComponent)("app-confirm-delete");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",a,[(0,n.createVNode)("h1",o,(0,n.toDisplayString)(S.project.title)+" | Attachments ",1),(0,n.createVNode)(j,{slug:S.slug},null,8,["slug"])]),(0,n.createVNode)("div",l,[(0,n.createVNode)("div",c,[(0,n.createVNode)("div",s,[(0,n.createVNode)("div",i,[(0,n.createVNode)("form",{onSubmit:t[3]||(t[3]=(0,n.withModifiers)((function(){return S.saveAttachment&&S.saveAttachment.apply(S,arguments)}),["prevent"]))},[(0,n.createVNode)("div",u,[(0,n.createVNode)("label",d,[p,(0,n.createVNode)(F)]),(0,n.withDirectives)((0,n.createVNode)("input",{type:"text",placeholder:"Title","onUpdate:modelValue":t[1]||(t[1]=function(e){return S.form.title=e}),id:"title",name:"title",class:"input-form-control",required:""},null,512),[[n.vModelText,S.form.title]])]),(0,n.createVNode)("div",f,[(0,n.createVNode)("label",m,[v,(0,n.createVNode)(F)]),(0,n.createVNode)("input",{type:"file",ref:"file",onChange:t[2]||(t[2]=function(){return S.handleFileUpload&&S.handleFileUpload.apply(S,arguments)}),id:"file_name",name:"file_name",class:"input-form-control",required:""},null,544)]),(0,n.createVNode)("div",h,[(0,n.createVNode)("button",g,(0,n.toDisplayString)(S.submitting?"Submitting":"Submit"),1)])],32)]),(0,n.createVNode)("div",x,[(0,n.createVNode)("table",N,[V,(0,n.createVNode)("tbody",b,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(S.attachments,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)("tr",{key:t,class:"border-b border-gray-200 hover:bg-gray-100"},[(0,n.createVNode)("td",y,(0,n.toDisplayString)(e.title),1),(0,n.createVNode)("td",w,[(0,n.createTextVNode)((0,n.toDisplayString)(e.file_name)+" ",1),(0,n.createVNode)("a",{href:"https://spms.local/uploads/project/".concat(e.file_name),download:"",class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[k],8,["href"])]),(0,n.createVNode)("td",C,[(0,n.createVNode)("button",{type:"button",onClick:function(t){S.item_id=e.id,S.togglePopup()},class:"no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"},[(0,n.createVNode)(M)],8,["onClick"])])])})),128)),S.attachments.length?(0,n.createCommentVNode)("",!0):((0,n.openBlock)(),(0,n.createBlock)("tr",_,[A]))])])])])])]),(0,n.withDirectives)((0,n.createVNode)(P,{modalHeadline:"Delete Attachment?",deleteMessage:"Are you sure?",onDeleteRecordEvent:t[4]||(t[4]=function(e){return S.destroyRecord(S.item_id)}),onClose:S.togglePopup},null,8,["onClose"]),[[n.vShow,S.showModal]])],64)}},P=M}}]);