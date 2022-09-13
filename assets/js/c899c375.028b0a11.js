"use strict";(self.webpackChunkstakeworld=self.webpackChunkstakeworld||[]).push([[158],{3905:(t,a,e)=>{e.d(a,{Zo:()=>p,kt:()=>c});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},p=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},A={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=d(e),c=r,k=u["".concat(s,".").concat(c)]||u[c]||A[c]||l;return e?n.createElement(k,o(o({ref:a},p),{},{components:e})):n.createElement(k,o({ref:a},p))}));function c(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=e[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}u.displayName="MDXCreateElement"},6152:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=e(3117),r=(e(7294),e(3905));const l={id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},o=void 0,i={unversionedId:"validate/snapshot",id:"validate/snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",source:"@site/docs/validate/snapshot.mdx",sourceDirName:"validate",slug:"/snapshot",permalink:"/docs/snapshot",draft:!1,editUrl:"https://github.com/stakeworld/website/edit/master/docs/validate/snapshot.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"snapshot",title:"Snapshots",description:"Polkadot and Kusama snapshots in paritydb and rocksdb format",slug:"/snapshot",sidebar_position:2,keywords:["validator setup","validator","validate","snapshot","rocksdb","paritydb","pruning","polkadot","kusama"]},sidebar:"tutorialSidebar",previous:{title:"Setting up a validator node",permalink:"/docs/validate"},next:{title:"Monitoring a validator node",permalink:"/docs/monitor"}},s={},d=[{value:"Automatic install",id:"automatic-install",level:2},{value:"Manually download the database and install later",id:"manually-download-the-database-and-install-later",level:2},{value:"Paritydb kusama",id:"paritydb-kusama",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot",level:3},{value:"Install the database directly",id:"install-the-database-directly",level:2},{value:"Paritydb kusama",id:"paritydb-kusama-1",level:3},{value:"Paritydb polkadot",id:"paritydb-polkadot-1",level:3}],p={toc:d};function A(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Chain"),(0,r.kt)("th",{parentName:"tr",align:null},"Database"),(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null},"Blockheight"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Full"),(0,r.kt)("th",{parentName:"tr",align:null},"Creation date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-polkadot.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"polkadot"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"12030457"),(0,r.kt)("td",{parentName:"tr",align:null},"95G"),(0,r.kt)("td",{parentName:"tr",align:null},"114G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 13 Sep @ 12:20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4"},"direct link")),(0,r.kt)("td",{parentName:"tr",align:null},"ksmcc3"),(0,r.kt)("td",{parentName:"tr",align:null},"paritydb"),(0,r.kt)("td",{parentName:"tr",align:null},"pruned"),(0,r.kt)("td",{parentName:"tr",align:null},"14433138"),(0,r.kt)("td",{parentName:"tr",align:null},"147G"),(0,r.kt)("td",{parentName:"tr",align:null},"167G"),(0,r.kt)("td",{parentName:"tr",align:null},"Tue 13 Sep @ 12:34")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snapsize",src:e(2307).Z,width:"800",height:"300"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Snapshots are compressed backups of the database directory of a polkadot or kusama node. If you start a node for the first time it will start building from start (genesis), which will take a while. If you download an up to date database your node will be up and running quicker."),(0,r.kt)("p",{parentName:"admonition"},"The snapshots are available for kusama ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain ksmcc3")," and polkadot ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain polkadot")," in the paritydb ",(0,r.kt)("inlineCode",{parentName:"p"},"--database paritydb")," database format. They are pruned with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning 1000"),", which is sufficient for a validator node.")),(0,r.kt)("h2",{id:"automatic-install"},"Automatic install"),(0,r.kt)("p",null,"The following script can restore a snapshot for a quickstart. If you want you can first review it on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stakeworld/stakeworld-scripts/blob/master/node-install.sh"},"github"),'. You can choose "snapinstall" for a snapshot restore. The script will ask some questions and create an restore script which you can review before executing.'),(0,r.kt)("p",null,"The script is for ubuntu/debian flavoured servers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o- -L https://raw.githubusercontent.com/stakeworld/stakeworld-scripts/master/node-install.sh | bash\n")),(0,r.kt)("h2",{id:"manually-download-the-database-and-install-later"},"Manually download the database and install later"),(0,r.kt)("h3",{id:"paritydb-kusama"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4\n")),(0,r.kt)("h3",{id:"paritydb-polkadot"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget http://snapshot.stakeworld.nl/paritydb-polkadot.lz4\n")),(0,r.kt)("h2",{id:"install-the-database-directly"},"Install the database directly"),(0,r.kt)("p",null,"Install to ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/.local/share/polkadot/chains/<chain>")," or change to your target directory."),(0,r.kt)("h3",{id:"paritydb-kusama-1"},"Paritydb kusama"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-ksmcc3.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/ksmcc3\n")),(0,r.kt)("h3",{id:"paritydb-polkadot-1"},"Paritydb polkadot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o - -L http://snapshot.stakeworld.nl/paritydb-polkadot.lz4 | lz4 -c -d - | tar -x -C /root/.local/share/polkadot/chains/polkadot\n")))}A.isMDXComponent=!0},2307:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);