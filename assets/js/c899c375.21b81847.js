"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>u});var n=e(7294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),i=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},s=function(t){var a=i(t.components);return n.createElement(p.Provider,{value:a},t.children)},k={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),c=i(e),u=l,A=c["".concat(p,".").concat(u)]||c[u]||k[u]||r;return e?n.createElement(A,o(o({ref:a},s),{},{components:e})):n.createElement(A,o({ref:a},s))}));function u(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,o=new Array(r);o[0]=c;var d={};for(var p in a)hasOwnProperty.call(a,p)&&(d[p]=a[p]);d.originalType=t,d.mdxType="string"==typeof t?t:l,o[1]=d;for(var i=2;i<r;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=e(3117),l=(e(7294),e(3905));const r={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},p={},i=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],s={toc:i};function k(t){let{components:a,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Chain"),(0,l.kt)("th",{parentName:"tr",align:null},"Database"),(0,l.kt)("th",{parentName:"tr",align:null},"Format"),(0,l.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Full"),(0,l.kt)("th",{parentName:"tr",align:null},"Backup date"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"11200022"),(0,l.kt)("td",{parentName:"tr",align:null},"77G"),(0,l.kt)("td",{parentName:"tr",align:null},"92G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 17 Jul @ 10:20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,l.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"11200156"),(0,l.kt)("td",{parentName:"tr",align:null},"82G"),(0,l.kt)("td",{parentName:"tr",align:null},"98G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 17 Jul @ 10:34")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,l.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"13598143"),(0,l.kt)("td",{parentName:"tr",align:null},"130G"),(0,l.kt)("td",{parentName:"tr",align:null},"145G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 17 Jul @ 10:40")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,l.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,l.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,l.kt)("td",{parentName:"tr",align:null},"pruned"),(0,l.kt)("td",{parentName:"tr",align:null},"13598199"),(0,l.kt)("td",{parentName:"tr",align:null},"153G"),(0,l.kt)("td",{parentName:"tr",align:null},"172G"),(0,l.kt)("td",{parentName:"tr",align:null},"Sun 17 Jul @ 10:45")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,l.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,l.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,l.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,l.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,l.kt)("h2",{id:"download-the-database"},"Download the database"),(0,l.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,l.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,l.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,l.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,l.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,l.kt)("p",null,"Install to ",(0,l.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,l.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,l.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,l.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,l.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}k.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);