"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=n.createContext({}),k=function(t){var a=n.useContext(i),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=k(t.components);return n.createElement(i.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},A=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),A=k(e),u=r,c=A["".concat(i,".").concat(u)]||A[u]||s[u]||l;return e?n.createElement(c,o(o({ref:a},p),{},{components:e})):n.createElement(c,o({ref:a},p))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=A;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var k=2;k<l;k++)o[k]=e[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}A.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>k});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},i={},k=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],p={toc:k};function s(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Backup date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11220980"),(0,r.kt)("td",{parentName:"tr",align:null},"78G"),(0,r.kt)("td",{parentName:"tr",align:null},"92G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 21:44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"78G"),(0,r.kt)("td",{parentName:"tr",align:null},"94G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 21:44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13619145"),(0,r.kt)("td",{parentName:"tr",align:null},"130G"),(0,r.kt)("td",{parentName:"tr",align:null},"143G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 21:44")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13619146"),(0,r.kt)("td",{parentName:"tr",align:null},"137G"),(0,r.kt)("td",{parentName:"tr",align:null},"146G"),(0,r.kt)("td",{parentName:"tr",align:null},"Mon 18 Jul @ 21:44")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"download-the-database"},"Download the database"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}s.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);