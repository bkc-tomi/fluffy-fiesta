(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[348],{7320:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/load",function(){return n(9479)}])},2026:function(e,r,n){"use strict";n.d(r,{XM:function(){return o},mr:function(){return a},u:function(){return i}});var s=n(5893),t=n(1664),c=n.n(t),a=function(){var e=["sticky top-0 left-0 bg-azure z-50","max-w-5xl m-auto p-1 flex justify-between items-center","w-32","rounded-sm px-4 py-2 bg-cream hover:animate-bounce"];return(0,s.jsx)("header",{className:e[0],children:(0,s.jsxs)("div",{className:e[1],children:[(0,s.jsx)("h1",{className:e[2],children:(0,s.jsx)("img",{src:"/img/logo.svg",className:e[2]})}),(0,s.jsx)("div",{children:(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)("a",{className:e[3],children:"TOP\u306b\u623b\u308b"})})})]})})},i=function(e){var r=e.children,n=["w-full py-4 mt-4","border-b text-3xl font-black"];return(0,s.jsx)("div",{className:n[0],children:(0,s.jsx)("h1",{className:n[1],children:r})})},o=function(e){var r=e.children,n=e.emoji,t=["w-full py-2 mt-4","text-center text-2xl font-black","text-5xl px-4"];return(0,s.jsx)("div",{className:t[0],children:(0,s.jsxs)("h1",{className:t[1],children:[(0,s.jsx)("span",{className:t[2],children:n}),r,(0,s.jsx)("span",{className:t[2],children:n})]})})}},4267:function(e,r,n){"use strict";var s=n(5893),t=n(9008),c=n.n(t),a=n(2026),i=["w-screen min-h-screen bg-butter","max-w-5xl m-auto"];r.Z=function(e){var r=e.children,n=e.pageTitle;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"\u30d5\u30e9\u30c3\u30d5\u30a3\u30fc | "+n}),(0,s.jsx)("meta",{name:"description",content:"\u60c5\u5831\u79d1\u306e\u677e\u6751\u304c\u904b\u7528\u3059\u308b\u30b5\u30a4\u30c8"}),(0,s.jsx)("link",{rel:"icon",href:"".concat("/fluffy-fiesta","/favicon.ico")})]}),(0,s.jsxs)("div",{className:i[0],children:[(0,s.jsx)(a.mr,{}),(0,s.jsx)("main",{className:i[1],children:r})]})]})}},9479:function(e,r,n){"use strict";n.r(r);var s=n(4051),t=n.n(s),c=n(5893),a=n(1163),i=n(4267),o=n(7294),u=n(9802);function l(e,r,n,s,t,c,a){try{var i=e[c](a),o=i.value}catch(u){return void n(u)}i.done?r(o):Promise.resolve(o).then(s,t)}var m="https://yssscmypirrgbsmpsvkq.supabase.co",h="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzc3NjbXlwaXJyZ2JzbXBzdmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc2MjYzNjgsImV4cCI6MTk4MzIwMjM2OH0.U2VA36pqO5zSjSdOQ3KkSk-cPfHckozGVWg5GQZ_szU";r.default=function(){var e=(0,a.useRouter)(),r=(0,u.eI)(m,h);return(0,o.useEffect)((function(){var n=new URL(location.href).searchParams.get("questionID");if(console.log("qID: "+n),void 0!=n){var s=function(){var s,c=(s=t().mark((function s(){var c,a,i,o,u;return t().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r){s.next=5;break}return e.push("/error?errMsg=\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u63a5\u7d9a\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u30c8\u30c3\u30d7\u306b\u623b\u3063\u3066\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),s.abrupt("return");case 5:return s.next=7,r.from("random_questions").select("*").eq("sub_cat",n).limit(5);case 7:if(!(c=s.sent).error){s.next=13;break}return e.push("/error?errMsg=\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3068\u306e\u63a5\u7d9a\u306b\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002\u30c8\u30c3\u30d7\u306b\u623b\u3063\u3066\u3084\u308a\u76f4\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),s.abrupt("return");case 13:if(!(c.data.length<=0)){s.next=18;break}return e.push("/error?errMsg=\u8a72\u5f53\u306e\u554f\u984c\u304c\u5b58\u5728\u3057\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),s.abrupt("return");case 18:for(a=c.data,i={username:"",quizList:[],totalTime:"",totalScore:0},o=0;o<a.length;o++)u={number:o+1,userAns:"",time:"",score:0,type:a[o].type,paragraph:a[o].paragraph,paragraphImg:a[o].paragraphImg,correct:a[o].correct,choices:a[o].choices,correctScore:a[o].correctScore,explanation:a[o].explanation},i.quizList.push(u);window.sessionStorage.removeItem("questObj"),window.sessionStorage.setItem("questObj",JSON.stringify(i)),e.push("/question?qID=1");case 19:case"end":return s.stop()}}),s)})),function(){var e=this,r=arguments;return new Promise((function(n,t){var c=s.apply(e,r);function a(e){l(c,n,t,a,i,"next",e)}function i(e){l(c,n,t,a,i,"throw",e)}a(void 0)}))});return function(){return c.apply(this,arguments)}}();s()}else e.push("/error?errMsg=\u554f\u984c\u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3067\u3057\u305f\u3002")}),[]),(0,c.jsx)(i.Z,{pageTitle:"\u30ed\u30fc\u30c9",children:(0,c.jsxs)("div",{className:"flex flex-col justify-center items-center h-96 w-full",children:[(0,c.jsx)("img",{src:"/img/cloud_icon.svg",className:"w-96 animate-bounce"}),(0,c.jsx)("p",{className:"animate-pulse",children:"\u554f\u984c\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u3002"})]})})}}},function(e){e.O(0,[996,336,774,888,179],(function(){return r=7320,e(e.s=r);var r}));var r=e.O();_N_E=r}]);