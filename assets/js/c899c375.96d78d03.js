"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>A,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),p=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},A=function(t){var a=p(t.components);return n.createElement(d.Provider,{value:a},t.children)},s={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,A=i(t,["components","mdxType","originalType","parentName"]),k=p(e),u=r,c=k["".concat(d,".").concat(u)]||k[u]||s[u]||l;return e?n.createElement(c,o(o({ref:a},A),{},{components:e})):n.createElement(c,o({ref:a},A))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=e[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},d={},p=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],A={toc:p};function s(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},A,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11272005"),(0,r.kt)("td",{parentName:"tr",align:null},"79G"),(0,r.kt)("td",{parentName:"tr",align:null},"94G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 22 Jul @ 12:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11272140"),(0,r.kt)("td",{parentName:"tr",align:null},"81G"),(0,r.kt)("td",{parentName:"tr",align:null},"97G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 22 Jul @ 12:13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13671018"),(0,r.kt)("td",{parentName:"tr",align:null},"129G"),(0,r.kt)("td",{parentName:"tr",align:null},"145G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 22 Jul @ 12:19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13671169"),(0,r.kt)("td",{parentName:"tr",align:null},"135G"),(0,r.kt)("td",{parentName:"tr",align:null},"153G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 22 Jul @ 12:34")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"download-the-database"},"Download the database"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}s.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);