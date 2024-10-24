"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7844],{193:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=l(5893),r=l(1151);const s={slug:"PowerAppsFunction",title:"PowerApps Function",authors:["Luxoep"],tags:["Function"],sidebar_position:1},t=void 0,o={id:"PowerApps/Function",title:"PowerApps Function",description:"From Microsoft Learn",source:"@site/docsMyLearn/PowerApps/Function.md",sourceDirName:"PowerApps",slug:"/PowerApps/PowerAppsFunction",permalink:"/docsMyLearn/PowerApps/PowerAppsFunction",draft:!1,unlisted:!1,tags:[{label:"Function",permalink:"/docsMyLearn/tags/function"}],version:"current",sidebarPosition:1,frontMatter:{slug:"PowerAppsFunction",title:"PowerApps Function",authors:["Luxoep"],tags:["Function"],sidebar_position:1},sidebar:"docsMyLearn",previous:{title:"PowerApps-Learn",permalink:"/docsMyLearn/category/powerapps-learn"},next:{title:"SolidWorksAPI-Learn",permalink:"/docsMyLearn/category/solidworksapi-learn"}},c={},d=[{value:"Patch()",id:"patch",level:3},{value:"Filter()",id:"filter",level:3},{value:"Search()",id:"search",level:3},{value:"LookUp()",id:"lookup",level:3},{value:"NewForm()",id:"newform",level:3},{value:"EditForm()",id:"editform",level:3},{value:"ViewForm()",id:"viewform",level:3},{value:"SubmitForm()",id:"submitform",level:3},{value:"UpdateContext()",id:"updatecontext",level:3},{value:"Set()",id:"set",level:3},{value:"Text()",id:"text",level:3},{value:"Value()",id:"value",level:3},{value:"User()",id:"user",level:3},{value:"Len()",id:"len",level:3},{value:"Upper()",id:"upper",level:3},{value:"Lower()",id:"lower",level:3},{value:"Proper()",id:"proper",level:3}];function h(e){const n={admonition:"admonition",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)("a",{href:"https://learn.microsoft.com/zh-cn/power-platform/power-fx/formula-reference-overview",target:"_blank",children:(0,i.jsx)(n.strong,{children:"From Microsoft Learn"})})}),"\n",(0,i.jsx)(n.h3,{id:"patch",children:"Patch()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)("a",{href:"https://learn.microsoft.com/zh-cn/power-platform/power-fx/reference/function-patch?source=recommendations",target:"_blank",children:(0,i.jsx)(n.strong,{children:"Patch"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"filter",children:"Filter()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a[\u8868\u540d],\u67e5\u8be2\u6761\u4ef6&&\u67e5\u8be2\u6761\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u503c\uff1a\u4f1a\u8fd4\u56de\u4e00\u5f20\u8868"}),"\n",(0,i.jsxs)(n.li,{children:["\u8bed\u6cd5\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Filter( \u6570\u636e\u6e90, \u6761\u4ef61 [, \u6761\u4ef62, ... ] )","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u6e90\uff1a\u53ef\u4ee5\u662f\u96c6\u5408\uff08Collection\uff09\u3001SharePoint \u5217\u8868\u3001SQL \u8868\u3001\u5b9e\u4f53\u7b49\u6570\u636e\u6e90\u3002"}),"\n",(0,i.jsx)(n.li,{children:'\u6761\u4ef6\uff1a\u7528\u6765\u5224\u65ad\u6bcf\u4e2a\u8bb0\u5f55\u662f\u5426\u5339\u914d\u7684\u8868\u8fbe\u5f0f\u3002\u53ef\u4ee5\u662f\u5355\u4e2a\u6761\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u662f\u591a\u4e2a\u6761\u4ef6\uff0c\u591a\u4e2a\u6761\u4ef6\u4e4b\u95f4\u4f7f\u7528 , \u5206\u9694\uff08\u9ed8\u8ba4\u4e3a\u903b\u8f91 "AND" \u5173\u7cfb\uff09'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u793a\u4f8b\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u540d\u4e3a Employees \u7684\u6570\u636e\u6e90\uff0c\u5305\u542b Name \u548c Department \u4e24\u4e2a\u5b57\u6bb5"}),"\n",(0,i.jsxs)(n.li,{children:['\u4f7f\u7528 StartsWith() \u51fd\u6570\u7b5b\u9009\uff1a \u5047\u8bbe\u4f60\u60f3\u8981\u7b5b\u9009\u6240\u6709\u540d\u5b57\u4ee5 "A" \u5f00\u5934\u7684\u5458\u5de5\uff0c\u53ef\u4ee5\u7ed3\u5408 StartsWith() \u51fd\u6570\u3002',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Filter(Employees, StartsWith(Name, "A"))'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 Or \u6765\u7b5b\u9009\u591a\u4e2a\u6761\u4ef6\uff08\u903b\u8f91\u201c\u6216\u201d\uff09\uff1a \u5982\u679c\u60f3\u8981\u7b5b\u9009\u5c5e\u4e8e HR \u90e8\u95e8\u6216\u8005 Sales \u90e8\u95e8\u7684\u5458\u5de5\uff0c\u53ef\u4ee5\u4f7f\u7528 Or \u64cd\u4f5c\u7b26","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Filter(Employees, Department = "HR" Or Department = "Sales")'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:['\u7ed3\u5408 Search() \u51fd\u6570\u8fdb\u884c\u5168\u6587\u641c\u7d22\u548c\u7b5b\u9009\uff1a \u5982\u679c\u4f60\u60f3\u8981\u5728\u7279\u5b9a\u5b57\u6bb5\u4e2d\u6267\u884c\u5168\u6587\u641c\u7d22\uff0c\u5e76\u7ed3\u5408\u5176\u4ed6\u7b5b\u9009\u6761\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 Search() \u51fd\u6570\u3002\u4f8b\u5982\uff0c\u4f60\u60f3\u641c\u7d22\u540d\u5b57\u4e2d\u5305\u542b "John"\uff0c\u4e14\u90e8\u95e8\u4e3a "HR" \u7684\u5458\u5de5\uff1a',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Filter(Search(Employees, "John", "Name"), Department = "HR")'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u96c6\u5408\u4e2d\u4f7f\u7528 Filter()\uff1a \u5047\u8bbe\u4f60\u6709\u4e00\u4e2a Power Apps \u4e2d\u7684\u96c6\u5408 colEmployees\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5bf9\u96c6\u5408\u8fdb\u884c\u7b5b\u9009","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'ClearCollect(colHR, Filter(colEmployees, Department = "HR"))'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Sort()\uff1a\u5728\u4f7f\u7528 Filter() \u7b5b\u9009\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 Sort() \u5bf9\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Sort(Filter(Employees, Department = "HR"), Name, Ascending)'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Collect() \u548c ClearCollect()\uff1a\u5c06\u7b5b\u9009\u7ed3\u679c\u5b58\u5165\u96c6\u5408\u4ee5\u4f9b\u8fdb\u4e00\u6b65\u4f7f\u7528","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'ClearCollect(colHR, Filter(Employees, Department = "HR"))'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"search",children:"Search()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a[\u8868\u540d],\u67e5\u8be2\u6761\u4ef6&&\u67e5\u8be2\u6761\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u503c\uff1a\u4f1a\u8fd4\u56de\u4e00\u5f20\u8868"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lookup",children:"LookUp()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\u4e00\uff1a[\u8868\u540d],\u67e5\u8be2\u6761\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u503c\u4e00\uff1a\u4f1a\u8fd4\u56de\u8bb0\u5f55\u7c7b\u578b"}),"\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\u4e8c\uff1a[\u8868\u540d],\u67e5\u8be2\u6761\u4ef6,\u5b57\u6bb5\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u503c\u4e8c\uff1a\u4f1a\u8fd4\u56de\u7b2c\u4e09\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u7684\u7b2c\u4e00\u4e2a\u503c"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"newform",children:"NewForm()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u7a97\u4f53\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u7a97\u4f53\u8fd8\u539f\u4e3a\u65b0\u5efa\u7a97\u4f53\uff0c\u4e5f\u5c31\u662f\u6e05\u7a7a\uff0c\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"editform",children:"EditForm()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u7a97\u4f53\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u7a97\u4f53\u8bbe\u7f6e\u4e3a\u7f16\u8f91\u7a97\u4f53\uff0c\u9700\u8bbe\u7f6eitem\uff0c\u53ef\u5728\u8df3\u8f6c\u9875\u9762\u524d\u4f7f\u7528\uff0c\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"viewform",children:"ViewForm()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u7a97\u4f53\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u7a97\u4f53\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u7f16\u8f91\u7a97\u4f53\uff08\u5c55\u793a\u7a97\u4f53\uff09\uff0c\u9700\u8bbe\u7f6eitem\uff0c\u53ef\u5728\u8df3\u8f6c\u9875\u9762\u524d\u4f7f\u7528\uff0c\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"submitform",children:"SubmitForm()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u7a97\u4f53\u540d"}),"\n",(0,i.jsx)(n.li,{children:"\u5c06\u7a97\u4f53\u63d0\u4ea4\uff0c\u63d0\u4ea4\u6210\u529f\u4f1a\u8fd4\u56detrue\uff0c\u5426\u5219\u4f1a\u8fd4\u56defalse\uff0c\u53ef\u4ee5\u7528\u5b83\u5224\u65ad\u662f\u5426\u663e\u793a\u63d0\u793a\u4fe1\u606f\uff0c\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"updatecontext",children:["UpdateContext(",")"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u53d8\u91cf\u540d:\u503c,\u53d8\u91cf2\u540d:\u503c"}),"\n",(0,i.jsx)(n.li,{children:"\u5c40\u90e8\u53d8\u91cf\u8d4b\u503c\uff1b\u540c\u540d\u4f1a\u4fee\u6539\uff1b\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"set",children:"Set()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u53d8\u91cf\u540d,\u503c"}),"\n",(0,i.jsx)(n.li,{children:"\u5168\u5c40\u53d8\u91cf\u8d4b\u503c\uff1b\u540c\u4e0a\u4e0d\u80fd\u4e00\u6b21\u8d4b\u591a\u4e2a\u53d8\u91cf\uff0c\u8fd4\u56de\u7c7b\u578b\uff1abool"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"text",children:"Text()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u9700\u8981\u8f6c\u6362\u7684\u53d8\u91cf\u6216\u503c"}),"\n",(0,i.jsx)(n.li,{children:"\u8f6c\u6362\u4e3a\u6587\u672c\uff0c\u8fd4\u56de\u7c7b\u578b\uff1a\u6587\u672c"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"value",children:"Value()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u9700\u8981\u8f6c\u6362\u7684\u53d8\u91cf\u6216\u503c,\uff08\u53ef\u9009\u8f6c\u6362\u7c7b\u578b\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u8f6c\u6362\u4e3a\u6570\u503c\uff0c\u6709\u5b57\u6bcd\u4e0d\u884c\uff0c\u9017\u53f7\u53ef\u4ee5\u8fd4\u56de\u7c7b\u578b\uff1a\u6570\u503c"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"user",children:"User()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Email/FullName/Image \u83b7\u53d6\u5f53\u524d\u7528\u6237\u7684\u8bb0\u5f55\u4f46\u662f\u53ea\u6709\u7535\u5b50\u90ae\u4ef6\u3001\u5168\u540d\u3001\u56fe\u50cf"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"len",children:"Len()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u53c2\u6570\uff1a\u5b57\u7b26\u4e32"}),"\n",(0,i.jsx)(n.li,{children:"\u8fd4\u56de\u503c\uff1a\u6570\u5b57"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"upper",children:"Upper()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u5b57\u7b26\u4e32\u4e2d\u5b57\u6bcd\u8f6c\u4e3a\u5927\u5199"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lower",children:"Lower()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u5b57\u7b26\u4e32\u4e2d\u5b57\u6bcd\u8f6c\u4e3a\u5c0f\u5199"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"proper",children:"Proper()"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5c06\u5b57\u7b26\u4e32\u4e2d\u5355\u8bcd\u7684\u9996\u5b57\u6bcd\u8f6c\u4e3a\u5927\u5199"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>t});var i=l(7294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);