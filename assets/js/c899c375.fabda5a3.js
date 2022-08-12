"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>i,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var A=n.createContext({}),s=function(t){var a=n.useContext(A),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},i=function(t){var a=s(t.components);return n.createElement(A.Provider,{value:a},t.children)},p={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,A=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),k=s(e),u=r,c=k["".concat(A,".").concat(u)]||k[u]||p[u]||l;return e?n.createElement(c,o(o({ref:a},i),{},{components:e})):n.createElement(c,o({ref:a},i))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var d={};for(var A in a)hasOwnProperty.call(a,A)&&(d[A]=a[A]);d.originalType=t,d.mdxType="string"==typeof t?t:r,o[1]=d;for(var s=2;s<l;s++)o[s]=e[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>A,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},A={},s=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],i={toc:s};function p(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11571608"),(0,r.kt)("td",{parentName:"tr",align:null},"85G"),(0,r.kt)("td",{parentName:"tr",align:null},"102G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 12 Aug @ 12:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11571743"),(0,r.kt)("td",{parentName:"tr",align:null},"86G"),(0,r.kt)("td",{parentName:"tr",align:null},"103G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 12 Aug @ 12:13")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13972837"),(0,r.kt)("td",{parentName:"tr",align:null},"136G"),(0,r.kt)("td",{parentName:"tr",align:null},"153G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 12 Aug @ 12:19")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"13972991"),(0,r.kt)("td",{parentName:"tr",align:null},"142G"),(0,r.kt)("td",{parentName:"tr",align:null},"160G"),(0,r.kt)("td",{parentName:"tr",align:null},"Fri 12 Aug @ 12:34")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"download-the-database"},"Download the database"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}p.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);