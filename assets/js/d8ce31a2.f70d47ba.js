"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5750],{5264:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>E,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=l(5893),r=l(1151);const i={slug:"SQLServer",title:"SQL Server Document",authors:["Luxoep"],tags:["SQL Server"],sidebar_position:1},d=void 0,c={id:"SQLServer/SQLServerDoc",title:"SQL Server Document",description:"SQL Server \u662f\u7531\u5fae\u8f6f\uff08Microsoft\uff09\u5f00\u53d1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff08RDBMS\uff09\uff0c\u4e13\u95e8\u7528\u4e8e\u5b58\u50a8\u3001\u7ba1\u7406\u548c\u68c0\u7d22\u6570\u636e\u3002SQL Server \u91c7\u7528\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\uff08SQL\uff09\u4f5c\u4e3a\u4e3b\u8981\u7684\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u8a00\uff0c\u5e76\u4e3a\u4f01\u4e1a\u548c\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u6570\u636e\u7ba1\u7406\u89e3\u51b3\u65b9\u6848",source:"@site/docsMyLearn/SQLServer/SQLServerDoc.md",sourceDirName:"SQLServer",slug:"/SQLServer/SQLServer",permalink:"/docsMyLearn/SQLServer/SQLServer",draft:!1,unlisted:!1,tags:[{label:"SQL Server",permalink:"/docsMyLearn/tags/sql-server"}],version:"current",sidebarPosition:1,frontMatter:{slug:"SQLServer",title:"SQL Server Document",authors:["Luxoep"],tags:["SQL Server"],sidebar_position:1},sidebar:"docsMyLearn",previous:{title:"SQLServer-Learn",permalink:"/docsMyLearn/category/sqlserver-learn"}},t={},h=[{value:"CURD",id:"curd",level:3},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"SELECT\uff1a\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u6570\u636e",id:"select\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u6570\u636e",level:3},{value:"INSERT INTO\uff1a\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e",id:"insert-into\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e",level:3},{value:"UPDATE\uff1a\u66f4\u65b0\u8868\u4e2d\u7684\u6570\u636e",id:"update\u66f4\u65b0\u8868\u4e2d\u7684\u6570\u636e",level:3},{value:"DELETE\uff1a\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e",id:"delete\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e",level:3},{value:"CREATE TABLE\uff1a\u521b\u5efa\u65b0\u8868",id:"create-table\u521b\u5efa\u65b0\u8868",level:3},{value:"ALTER TABLE\uff1a\u4fee\u6539\u8868\u7ed3\u6784",id:"alter-table\u4fee\u6539\u8868\u7ed3\u6784",level:3},{value:"DROP TABLE\uff1a\u5220\u9664\u8868",id:"drop-table\u5220\u9664\u8868",level:3}];function x(n){const e={admonition:"admonition",br:"br",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)("a",{href:"https://www.microsoft.com/en-us/sql-server/sql-server-downloads?msockid=1f7e8f591d946ee72b419d961c106f82",target:"_blank",children:(0,s.jsx)(e.strong,{children:"SQL Server \u662f\u7531\u5fae\u8f6f\uff08Microsoft\uff09\u5f00\u53d1\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff08RDBMS\uff09\uff0c\u4e13\u95e8\u7528\u4e8e\u5b58\u50a8\u3001\u7ba1\u7406\u548c\u68c0\u7d22\u6570\u636e\u3002SQL Server \u91c7\u7528\u7ed3\u6784\u5316\u67e5\u8be2\u8bed\u8a00\uff08SQL\uff09\u4f5c\u4e3a\u4e3b\u8981\u7684\u6570\u636e\u5e93\u67e5\u8be2\u8bed\u8a00\uff0c\u5e76\u4e3a\u4f01\u4e1a\u548c\u5e94\u7528\u7a0b\u5e8f\u63d0\u4f9b\u6570\u636e\u7ba1\u7406\u89e3\u51b3\u65b9\u6848"})})}),"\n",(0,s.jsxs)(e.admonition,{type:"note",children:[(0,s.jsxs)(e.p,{children:["\u6570\u636e\u67e5\u8be2\u8bed\u8a00 (DQL)\uff1a\u7528\u4e8e\u67e5\u8be2\u6570\u636e\uff0c\u4f8b\u5982 SELECT \u8bed\u53e5",(0,s.jsx)(e.br,{}),"\n","\u6570\u636e\u5b9a\u4e49\u8bed\u8a00 (DDL)\uff1a\u7528\u4e8e\u5b9a\u4e49\u548c\u4fee\u6539\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4f8b\u5982 CREATE\u3001ALTER \u548c DROP \u8bed\u53e5",(0,s.jsx)(e.br,{}),"\n","\u6570\u636e\u64cd\u4f5c\u8bed\u8a00 (DML)\uff1a\u7528\u4e8e\u64cd\u4f5c\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e\uff0c\u4f8b\u5982 INSERT\u3001UPDATE \u548c DELETE \u8bed\u53e5",(0,s.jsx)(e.br,{}),"\n","\u6570\u636e\u63a7\u5236\u8bed\u8a00 (DCL)\uff1a\u7528\u4e8e\u63a7\u5236\u8bbf\u95ee\u6743\u9650\uff0c\u4f8b\u5982 GRANT \u548c REVOKE \u8bed\u53e5",(0,s.jsx)(e.br,{}),"\n","\u4e8b\u52a1\u63a7\u5236\u8bed\u8a00 (TCL)\uff1a\u7528\u4e8e\u7ba1\u7406\u4e8b\u52a1\uff0c\u4f8b\u5982 COMMIT \u548c ROLLBACK \u8bed\u53e5"]}),(0,s.jsx)(e.h3,{id:"curd",children:"CURD"}),(0,s.jsx)(e.p,{children:"Create\uff08\u521b\u5efa\uff09\u3001Update\uff08\u66f4\u65b0\uff09\u3001Read\uff08\u8bfb\u53d6\uff09\u3001Delete\uff08\u5220\u9664\uff09"}),(0,s.jsx)(e.h3,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),(0,s.jsx)("a",{href:"https://learn.microsoft.com/en-us/sql/t-sql/data-types/sql-variant-transact-sql?view=sql-server-ver16",children:"sql_variant (Transact-SQL)"})]}),"\n",(0,s.jsx)(e.h3,{id:"select\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u6570\u636e",children:"SELECT\uff1a\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u6570\u636e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"SELECT column1, column2 FROM table_name WHERE condition"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u5b57\u7b26\u4e32\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u8fde\u63a5\u4e24\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\u4e32","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT 'Hello'+ ' '+ 'World' AS Greeting","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e Hello World"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SUBSTRING()"}),"\uff1a\u4ece\u5b57\u7b26\u4e32\u4e2d\u63d0\u53d6\u5b50\u5b57\u7b26\u4e32","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT SUBSTRING('Hello World', 1, 5) AS SubStr","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e Hello"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"LEN()"}),"\uff1a\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u3002","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT LEN('Hello') AS StringLength","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e 5"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"UPPER()"})," \u548c ",(0,s.jsx)(e.strong,{children:"LOWER()"}),"\uff1a\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5927\u5199\u6216\u5c0f\u5199\u3002","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT UPPER('hello') AS UpperCase","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e HELLO"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["SELECT LOWER('HELLO') AS LowerCase","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e hello"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"REPLACE()"}),"\uff1a\u5728\u5b57\u7b26\u4e32\u4e2d\u66ff\u6362\u5b50\u5b57\u7b26\u4e32\u3002","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT REPLACE('Hello World', 'World', 'SQL') AS NewString","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e Hello SQL"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u65e5\u671f\u548c\u65f6\u95f4\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"GETDATE()"}),"\uff1a\u8fd4\u56de\u5f53\u524d\u65e5\u671f\u548c\u65f6\u95f4","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT GETDATE() AS CurrentDateTime","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--2024-09-18 12:34:56.789 (\u5177\u4f53\u53d6\u51b3\u4e8e\u5f53\u524d\u65f6\u95f4)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"DATEADD()"}),"\uff1a\u5411\u65e5\u671f\u6dfb\u52a0\u6307\u5b9a\u7684\u65f6\u95f4\u95f4\u9694","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT DATEADD(DAY, 10, '2024-09-18') AS NewDate","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e 2024-09-28"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"DATEDIFF()"}),"\uff1a\u8fd4\u56de\u4e24\u4e2a\u65e5\u671f\u4e4b\u95f4\u7684\u5dee\u5f02","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT DATEDI(i)FF(DAY, '2024-09-01', '2024-09-18') AS DateDifference","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e 17"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CONVERT()"}),"\uff1a\u5c06\u65e5\u671f\u65f6\u95f4\u683c\u5f0f\u5316\u4e3a\u6307\u5b9a\u7684\u683c\u5f0f","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT CONVERT(VARCHAR(10), GETDATE(), 120) AS FormattedDate"}),"\n",(0,s.jsx)(e.li,{children:"101\uff1amm/dd/yyyy"}),"\n",(0,s.jsx)(e.li,{children:"103\uff1add/mm/yyyy"}),"\n",(0,s.jsx)(e.li,{children:"112\uff1ayyyymmdd"}),"\n",(0,s.jsx)(e.li,{children:"120\uff1ayyyy-mm-dd"}),"\n",(0,s.jsxs)(e.li,{children:["....","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e 2024-09-18"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"YEAR()"}),"\u3001",(0,s.jsx)(e.strong,{children:"MONTH()"}),"\u3001",(0,s.jsx)(e.strong,{children:"DAY()"}),"\uff1a\u63d0\u53d6\u65e5\u671f\u7684\u5e74\u4efd\u3001\u6708\u4efd\u6216\u5929\u6570","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["SELECT YEAR(GETDATE()) AS CurrentYear, MONTH(GETDATE()) AS CurrentMonth, DAY(GETDATE()) AS CurrentDay","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"--\x3e 2024, 9, 18"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u805a\u5408\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"COUNT()"})," \u8fd4\u56de\u884c\u6570\u6216\u67d0\u5217\u7684\u975e\u7a7a\u503c\u6570\u91cf"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"SUM()"})," \u8fd4\u56de\u67d0\u5217\u6570\u503c\u7684\u603b\u548c"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"AVG()"})," \u8fd4\u56de\u67d0\u5217\u6570\u503c\u7684\u5e73\u5747\u503c"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"MAX() \u548c MIN()"})," \u5206\u522b\u8fd4\u56de\u67d0\u5217\u7684\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u6761\u4ef6\u4e0e\u8f6c\u6362\u51fd\u6570"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"ISNULL()"}),"\uff1a\u66ff\u6362 NULL \u503c\u4e3a\u6307\u5b9a\u503c","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT ISNULL(NULL, 'Default Value') AS ReplacedValue   --\x3e Default Value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"COALESCE()"}),"\uff1a\u8fd4\u56de\u7b2c\u4e00\u4e2a\u975e NULL \u503c","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT COALESCE(NULL, NULL, 'First Non-NULL Value') AS NonNullValue   --\x3e First Non-NULL Value"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CAST() \u548c CONVERT()"}),"\uff1a\u7528\u4e8e\u6570\u636e\u7c7b\u578b\u8f6c\u6362","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT CAST(123.45 AS INT) AS IntValue  --\x3e 123"}),"\n",(0,s.jsx)(e.li,{children:"SELECT CONVERT(VARCHAR(10), GETDATE(), 103) AS FormattedDate  --\x3e 18/09/2024"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"CASE"}),"\uff1a\u7c7b\u4f3c\u4e8e IF-ELSE \u7684\u6761\u4ef6\u8868\u8fbe\u5f0f","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT ID, USENAME, LOGINID, (CASE WHEN [GROUP] = 2 THEN '1' ELSE '0' END) AS NEWGROUP FROM CLASS"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5d4c\u5957\u67e5\u8be2\uff08\u5b50\u67e5\u8be2\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u67e5\u8be2\u5458\u5de5ROLE\u5927\u4e8eROLE\u5e73\u5747\u6570\u7684\u5458\u5de5","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT * FROM CLASS AS CLASS_NEW WHERE (ROLE > (SELECT AVG(ROLE) AS ROLEAVG FROM CLASS AS CLASS_old))"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"GROUP BY \u67e5\u8be2"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"GROUP BY \u7528\u4e8e\u5c06\u6570\u636e\u6309\u7167\u67d0\u4e00\u5217\u8fdb\u884c\u5206\u7ec4\uff0c\u5e76\u4e14\u901a\u5e38\u4e0e\u805a\u5408\u51fd\u6570\uff08\u5982 COUNT()\u3001SUM()\u3001AVG() \u7b49\uff09\u7ed3\u5408\u4f7f\u7528"}),"\n",(0,s.jsxs)(e.li,{children:["\u7edf\u8ba1\u6bcf\u4e2aROLE\u7684LOGINID\u603b\u6570\u548c\u5e73\u5747ID","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT ROLE, COUNT(LOGINID) AS LOGINIDCOUNT, AVG(ID) AS AVERAGEID FROM CLASS GROUP BY ROLE"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"ORDER BY \u67e5\u8be2"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["ORDER BY \u7528\u4e8e\u6839\u636e\u4e00\u5217\u6216\u591a\u5217\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\u3002\u9ed8\u8ba4\u662f\u5347\u5e8f (",(0,s.jsx)(e.strong,{children:"ASC"}),")\uff0c\u53ef\u4ee5\u663e\u5f0f\u6307\u5b9a\u964d\u5e8f (",(0,s.jsx)(e.strong,{children:"DESC"}),")"]}),"\n",(0,s.jsxs)(e.li,{children:["\u67e5\u8be2\u5458\u5de5\u4fe1\u606f\uff0c\u6309GROUP\u964d\u5e8f\u6392\u5217\uff0c\u5982\u679c\u5de5\u8d44\u76f8\u540c\u5219\u6309ROLE\u5347\u5e8f\u6392\u5217","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"SELECT * FROM CLASS ORDER BY [GROUP], ROLE DESC"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u591a\u8868\u8054\u5408\u67e5\u8be2\uff08JOIN \u67e5\u8be2\uff09"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5e38\u89c1\u7684\u8054\u5408\u67e5\u8be2\u7c7b\u578b\u6709 INNER JOIN\u3001LEFT JOIN\u3001RIGHT JOIN \u548c FULL JOIN"}),"\n",(0,s.jsx)(e.li,{children:"INNER JOIN\uff1a\u53ea\u8fd4\u56de\u4e24\u4e2a\u8868\u4e2d\u90fd\u5339\u914d\u7684\u8bb0\u5f55"}),"\n",(0,s.jsx)(e.li,{children:"LEFT JOIN\uff1a\u8fd4\u56de\u5de6\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5373\u4f7f\u53f3\u8868\u4e2d\u6ca1\u6709\u5339\u914d\u9879"}),"\n",(0,s.jsx)(e.li,{children:"RIGHT JOIN\uff1a\u8fd4\u56de\u53f3\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u5373\u4f7f\u5de6\u8868\u4e2d\u6ca1\u6709\u5339\u914d\u9879"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"SELECT CLASS.USENAME, CLASS.[GROUP], [GROUP].GROUPNAME FROM CLASS INNER/LEFT/RIGHT JOIN [GROUP] ON CLASS.[GROUP] = [GROUP].GROUPID"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"insert-into\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e",children:"INSERT INTO\uff1a\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"INSERT INTO table_name (column1, column2) VALUES (value1, value2);"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"update\u66f4\u65b0\u8868\u4e2d\u7684\u6570\u636e",children:"UPDATE\uff1a\u66f4\u65b0\u8868\u4e2d\u7684\u6570\u636e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"UPDATE table_name SET column1 = value1 WHERE condition"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"delete\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e",children:"DELETE\uff1a\u4ece\u8868\u4e2d\u5220\u9664\u6570\u636e"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"DELETE FROM table_name WHERE condition"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"create-table\u521b\u5efa\u65b0\u8868",children:"CREATE TABLE\uff1a\u521b\u5efa\u65b0\u8868"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"CREATE TABLE table_name (\r\ncolumn1 datatype,\r\ncolumn2 datatype,\r\n...\r\n)"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"alter-table\u4fee\u6539\u8868\u7ed3\u6784",children:"ALTER TABLE\uff1a\u4fee\u6539\u8868\u7ed3\u6784"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ALTER TABLE table_name ADD column_name datatype;"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"drop-table\u5220\u9664\u8868",children:"DROP TABLE\uff1a\u5220\u9664\u8868"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"DROP TABLE table_name"}),"\n"]})]})}function E(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(x,{...n})}):x(n)}},1151:(n,e,l)=>{l.d(e,{Z:()=>c,a:()=>d});var s=l(7294);const r={},i=s.createContext(r);function d(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);