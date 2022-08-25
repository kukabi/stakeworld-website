"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>u});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),i=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=i(t.components);return n.createElement(d.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=i(e),u=r,c=k["".concat(d,".").concat(u)]||k[u]||A[u]||l;return e?n.createElement(c,o(o({ref:a},p),{},{components:e})):n.createElement(c,o({ref:a},p))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=k;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var i=2;i<l;i++)o[i]=e[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,s={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},d={},i=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manually download the database and install later",id:"manually-download-the-database-and-install-later",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-1",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3},{value:"Rocksdb kusama",id:"rocksdb-kusama",level:3},{value:"Rocksdb polkadot",id:"rocksdb-polkadot-2",level:3}],p={toc:i};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11759333"),(0,r.kt)("td",{parentName:"tr",align:null},"89G"),(0,r.kt)("td",{parentName:"tr",align:null},"107G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 25 Aug @ 15:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"11759334"),(0,r.kt)("td",{parentName:"tr",align:null},"89G"),(0,r.kt)("td",{parentName:"tr",align:null},"105G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 25 Aug @ 15:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14161585"),(0,r.kt)("td",{parentName:"tr",align:null},"141G"),(0,r.kt)("td",{parentName:"tr",align:null},"159G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 25 Aug @ 15:38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"rocksdb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14161586"),(0,r.kt)("td",{parentName:"tr",align:null},"144G"),(0,r.kt)("td",{parentName:"tr",align:null},"161G"),(0,r.kt)("td",{parentName:"tr",align:null},"Thu 25 Aug @ 15:38")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," and rocksdb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database rocksdb")," format (rocksdb being the default). They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manually-download-the-database-and-install-later"},"Manually download the database and install later"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-1"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")),(0,r.kt)("h3",{id:"rocksdb-kusama"},"Rocksdb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"rocksdb-polkadot-2"},"Rocksdb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/rocksdb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);