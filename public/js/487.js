(self.webpackChunk=self.webpackChunk||[]).push([[487],{487:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>f});var n=r(4359),o={class:"flex justify-between mb-2"},c={class:"mt-3 text-2xl font-bold"},s=(0,n.createStaticVNode)('<div class="bg-white overflow-hidden shadow-sm rounded-lg"><div class="p-6 bg-white border-b border-gray-200"><div class="md:grid md:grid-cols-3 md:gap-6 mb-6"><div class="block"> Created </div><div class="block"> Active </div><div class="block"> Completed </div></div></div></div>',1);var i=r(7757),a=r.n(i),d=r(6252),l=r(408);function u(e,t,r,n,o,c,s){try{var i=e[c](s),a=i.value}catch(e){return void r(e)}i.done?t(a):Promise.resolve(a).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var c=e.apply(t,r);function s(e){u(c,n,o,s,i,"next",e)}function i(e){u(c,n,o,s,i,"throw",e)}s(void 0)}))}}const p={props:{slug:{required:!0,type:String}},setup:function(e){var t=e.slug,r=(0,l.Z)(),n=r.project,o=r.getProjectBySlug;return(0,d.bv)(v(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,"note");case 2:case"end":return e.stop()}}),e)})))),{project:n,slug:t}},render:function(e,t,r,i,a,d){var l=(0,n.resolveComponent)("app-project-nav");return(0,n.openBlock)(),(0,n.createBlock)(n.Fragment,null,[(0,n.createVNode)("div",o,[(0,n.createVNode)("h1",c,(0,n.toDisplayString)(i.project.title)+" | Note ",1),(0,n.createVNode)(l,{slug:i.slug},null,8,["slug"])]),s],64)}},f=p}}]);