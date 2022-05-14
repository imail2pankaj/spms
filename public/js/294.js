(self.webpackChunk=self.webpackChunk||[]).push([[294],{7294:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var n=r(4359),a={class:"flex justify-between flex-col md:flex-row mb-2"},o={class:"mt-3 text-2xl font-bold"},s={class:"md:grid md:grid-cols-3 md:gap-6 mb-6"},c={class:"bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"},u={class:"p-2 bg-white "},l={class:"block"},i={class:"input-form-sub-heading mb-4",style:{paddingTop:0}},d={class:"shadow-md p-4 rounded-md border border-gray-200 mb-4"},p=(0,n.createVNode)("div",{class:"flex justify-between mt-2"},[(0,n.createVNode)("span",{class:"pt-0.5 text-xs text-gray-400"},"Press enter to save task"),(0,n.createVNode)("button",{type:"submit",class:"link-blue text-xs p-1 pull-right"}," Save ")],-1),f={class:"bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"},k={class:"p-2 bg-white "},v={class:"block"},m={class:"input-form-sub-heading mb-4",style:{paddingTop:0}},h={class:"bg-white overflow-hidden shadow-sm rounded-lg w-full max-w-sm mb-6"},w={class:"p-2 bg-white "},g={class:"block"},x={class:"input-form-sub-heading mb-4",style:{paddingTop:0}};var b=r(7757),y=r.n(b),V=r(408),N=r(1826),C=r(2119),B=r(7013);function T(e,t,r,n,a,o,s){try{var c=e[o](s),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){T(o,n,a,s,c,"next",e)}function c(e){T(o,n,a,s,c,"throw",e)}s(void 0)}))}}const j={components:{TaskItem:N.Z},props:{slug:{required:!0,type:String}},setup:function(e){var t=(0,C.yj)(),r=(0,B.oR)(),a=e.slug,o=(0,V.Z)(),s=o.project,c=o.storeTask,u=o.getProjectBySlug,l=o.getTasks,i=(0,n.ref)(null),d=(0,n.computed)((function(){return r.state.currentTask})),p=(0,n.ref)({time:0,created:[],active:[],completed:[]});(0,n.onMounted)(_(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a,"task");case 2:return e.next=4,v();case 4:case"end":return e.stop()}}),e)})))),(0,n.watch)((function(){return t.params.slug}),function(){var e=_(y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,u(t,"task");case 3:return e.next=5,v();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,n.watch)((function(){return d.value.time}),function(){var e=_(y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,v();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var f=function(){var e=_(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.value){e.next=6;break}return e.next=3,c(s.value.id,{title:i.value});case 3:return i.value="",e.next=6,v();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=_(y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(_(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(a,"task");case 2:return e.next=4,v();case 4:case"end":return e.stop()}}),e)}))),3e3);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=_(y().mark((function e(){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.value.time=0,p.value.created=[],p.value.active=[],p.value.completed=[],e.next=6,l();case 6:p.value=e.sent;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{task_title:i,tasks:p,saveTask:f,project:s,slug:a,onClickChild:k,currentTask:d}},render:function(e,t,r,b,y,V){var N=(0,n.resolveComponent)("app-project-nav"),C=(0,n.resolveComponent)("TaskItem"),B=(0,n.resolveComponent)("router-view");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",a,[(0,n.createVNode)("h1",o,(0,n.toDisplayString)(b.project.title)+" | Tasks",1),(0,n.createVNode)(N,{slug:b.slug},null,8,["slug"])]),(0,n.createVNode)("div",s,[(0,n.createVNode)("div",c,[(0,n.createVNode)("div",u,[(0,n.createVNode)("div",l,[(0,n.createVNode)("h3",i,"Created ("+(0,n.toDisplayString)(b.tasks.created.length)+")",1),(0,n.createVNode)("div",d,[(0,n.createVNode)("form",{onSubmit:t[2]||(t[2]=(0,n.withModifiers)((function(){return b.saveTask&&b.saveTask.apply(b,arguments)}),["prevent"]))},[(0,n.withDirectives)((0,n.createVNode)("input",{type:"text",placeholder:"Enter task title",name:"task_title",autocomplete:"off","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.task_title=e}),class:"input-form-control"},null,512),[[n.vModelText,b.task_title]]),p],32)]),(0,n.createVNode)("div",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(b.tasks.created,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(C,{key:t,task:e,task_type:"Created"},null,8,["task"])})),128))])])])]),(0,n.createVNode)("div",f,[(0,n.createVNode)("div",k,[(0,n.createVNode)("div",v,[(0,n.createVNode)("h3",m,"Active ("+(0,n.toDisplayString)(b.tasks.active.length)+")",1),(0,n.createVNode)("div",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(b.tasks.active,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(C,{key:t,task:e,task_type:"Active"},null,8,["task"])})),128))])])])]),(0,n.createVNode)("div",h,[(0,n.createVNode)("div",w,[(0,n.createVNode)("div",g,[(0,n.createVNode)("h3",x,"Completed ("+(0,n.toDisplayString)(b.tasks.completed.length)+")",1),(0,n.createVNode)("div",null,[((0,n.openBlock)(!0),(0,n.createBlock)(n.Fragment,null,(0,n.renderList)(b.tasks.completed,(function(e,t){return(0,n.openBlock)(),(0,n.createBlock)(C,{key:t,task:e,task_type:"Completed"},null,8,["task"])})),128))])])])])]),(0,n.createVNode)(B,(0,n.mergeProps)(e.$attrs,{onClicked:b.onClickChild}),{default:(0,n.withCtx)((function(e){var t=e.Component;return[(0,n.createVNode)(n.Transition,{name:"fade",mode:"out-in"},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(t)))]})),_:2},1024)]})),_:1},16,["onClicked"])],64)}},S=j}}]);