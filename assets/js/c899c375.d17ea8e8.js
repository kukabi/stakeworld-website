"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>u});var r=e(7294);function n(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){n(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a){if(null==t)return{};var e,r,n=function(t,a){if(null==t)return{};var e,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||(n[e]=t[e]);return n}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}var A=r.createContext({}),i=function(t){var a=r.useContext(A),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},s=function(t){var a=i(t.components);return r.createElement(A.Provider,{value:a},t.children)},p={inlineCode:"code",wrapper:function(t){var a=t.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,A=t.parentName,s=d(t,["components","mdxType","originalType","parentName"]),k=i(e),u=n,c=k["".concat(A,".").concat(u)]||k[u]||p[u]||l;return e?r.createElement(c,o(o({ref:a},s),{},{components:e})):r.createElement(c,o({ref:a},s))}));function u(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,o=new Array(l);o[0]=k;var d={};for(var A in a)hasOwnProperty.call(a,A)&&(d[A]=a[A]);d.originalType=t,d.mdxType="string"==typeof t?t:n,o[1]=d;for(var i=2;i<l;i++)o[i]=e[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>A,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=e(3117),n=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,d={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},A={},i=[{value:"Download the database",id:"download-the-database",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],s={toc:i};function p(t){let{components:a,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Chain"),(0,n.kt)("th",{parentName:"tr",align:null},"Database"),(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,n.kt)("th",{parentName:"tr",align:null},"Size"),(0,n.kt)("th",{parentName:"tr",align:null},"Full"),(0,n.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"11471675"),(0,n.kt)("td",{parentName:"tr",align:null},"83G"),(0,n.kt)("td",{parentName:"tr",align:null},"99G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 05 Aug @ 12:00")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"11471811"),(0,n.kt)("td",{parentName:"tr",align:null},"84G"),(0,n.kt)("td",{parentName:"tr",align:null},"101G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 05 Aug @ 12:13")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"13872200"),(0,n.kt)("td",{parentName:"tr",align:null},"134G"),(0,n.kt)("td",{parentName:"tr",align:null},"150G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 05 Aug @ 12:19")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,n.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,n.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,n.kt)("td",{parentName:"tr",align:null},"pruned"),(0,n.kt)("td",{parentName:"tr",align:null},"13872355"),(0,n.kt)("td",{parentName:"tr",align:null},"139G"),(0,n.kt)("td",{parentName:"tr",align:null},"157G"),(0,n.kt)("td",{parentName:"tr",align:null},"Fri 05 Aug @ 12:35")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,n.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,n.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,n.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,n.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,n.kt)("h2",{id:"download-the-database"},"Download the database"),(0,n.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,n.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,n.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,n.kt)("p",null,"Install to ",(0,n.kt)("inlineCode",{parentName:"p"},"/home/polkadot/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,n.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")),(0,n.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/ksmcc3\n")),(0,n.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /home/polkadot/.local/share/polkadot/chains/polkadot\n")))}p.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>r});const r="data:image/png;base64,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"}}]);