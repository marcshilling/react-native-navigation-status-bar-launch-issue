/*! For license information please see 4478ba0f.1094fcb6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{117:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(6),i=(n(0),n(176)),c=n(182),r=n(181),s={id:"stack",title:"Stack",sidebar_label:"Stack"},l={id:"stack",title:"Stack",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/docs-stack.mdx",permalink:"/react-native-navigation/docs/stack",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/docs-stack.mdx",sidebar_label:"Stack",sidebar:"docs",previous:{title:"Passing data to components",permalink:"/react-native-navigation/docs/passing-data-to-components"},next:{title:"Bottom tabs",permalink:"/react-native-navigation/docs/bottomTabs"}},b=[{value:"TopBar Buttons",id:"topbar-buttons",children:[{value:"Overflow menu",id:"overflow-menu",children:[]},{value:"Left button",id:"left-button",children:[]},{value:"Using a react component in a button",id:"using-a-react-component-in-a-button",children:[]},{value:"Updating props of custom buttons",id:"updating-props-of-custom-buttons",children:[]},{value:"Changing buttons dynamically",id:"changing-buttons-dynamically",children:[]}]},{value:"Back Button",id:"back-button",children:[{value:"Styling the back button",id:"styling-the-back-button",children:[]},{value:"Controlling visibility",id:"controlling-visibility",children:[]},{value:"Changing visibility programmatically",id:"changing-visibility-programmatically",children:[]},{value:"Handling the back button",id:"handling-the-back-button",children:[]}]},{value:"Interacting programmatically",id:"interacting-programmatically",children:[{value:"Interact with the Stack by componentId",id:"interact-with-the-stack-by-componentid",children:[]},{value:"Interact with the Stack by a predefined id",id:"interact-with-the-stack-by-a-predefined-id",children:[]}]},{value:"Disabling back navigation",id:"disabling-back-navigation",children:[]},{value:"Handling back navigation",id:"handling-back-navigation",children:[]}],p={rightToc:b};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A stack is a container layout promoting a hierarchical navigation. It is used for navigating between screens at consecutive levels of hierarchy, steps in a flow or across an app."),Object(i.b)("p",null,"The first child in the stack (represented by the ",Object(i.b)("inlineCode",{parentName:"p"},"children")," array) is the root and is displayed at the bottom of the stack. The last child in the children array is the child currently being displayed."),Object(i.b)("p",null,"In this layout, only a single child screen is visible at any given time and consecutive screen can be added to the top of the stack using the ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.push")," command. Tapping the back button will pop the stack and remove the top most screen."),Object(i.b)("p",null,"The stack manages the TopBar at the top of the stack. The TopBar displays the current screens' title and buttons. It can be hidden with the ",Object(i.b)("inlineCode",{parentName:"p"},"topBar: { visible: false }")," option. By default, screens are rendered below the TopBar. This behavior can be changed by setting ",Object(i.b)("inlineCode",{parentName:"p"},"topBar: { drawBehind: true }")," in the current screens' options."),Object(i.b)("h1",{id:"layout-examples"},"Layout Examples"),Object(i.b)(c.a,{defaultValue:"single",values:[{label:"Single child",value:"single"},{label:"Multiple Children",value:"multiple"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"single",mdxType:"TabItem"},Object(i.b)("p",null,"A stack declared with a single child."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const stack = {\n  children: [\n    {\n      component: {\n        name: 'MyComponent'\n      }\n    }\n  ]\n}\n"))),Object(i.b)(r.a,{value:"multiple",mdxType:"TabItem"},Object(i.b)("p",null,"A stack can be initialized with more than one child, in which case the last child will be the currently displayed child and the first child will be hidden. In this case the back button will be visible automatically, clicking it will go back in the stack revealing the first (previous) child.\nOnce the root child becomes visible, the back button is hidden."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const stack = {\n  children: [\n    {\n      component: {\n        name: 'RootComponent'\n      }\n    },\n    {\n      component: {\n        name: 'SecondComponent'\n      }\n    }\n  ]\n}\n")))),Object(i.b)("h2",{id:"topbar-buttons"},"TopBar Buttons"),Object(i.b)("p",null,"Buttons can be added to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#rightButtons"}),"right")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#leftButtons"}),"left")," areas of the TopBar. Buttons can have either an icon or a text. They are declared in the the options object and, as with any other option, can be updated dynamically with the ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.mergeOptions")," command."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Always assign titles to buttons!")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When using an icon button on ",Object(i.b)("strong",{parentName:"p"},"Android"),", you should always pass a title as well. The title is used when the button is collapsed to the overflow menu and as a tooltip when the button is long pressed."))),Object(i.b)("h3",{id:"overflow-menu"},"Overflow menu"),Object(i.b)("p",null,"It's common practice to group less important actions in a menu or an action sheet."),Object(i.b)("p",null,"To do so on iOS, include a button with a menu icon and open an ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/actionsheetios"}),"ActionSheet")," with the relevant actions when the button is clicked."),Object(i.b)("p",null,"On Android, use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#showasaction"}),"showAsAction")," options to control when the button should appear in the menu."),Object(i.b)("h3",{id:"left-button"},"Left button"),Object(i.b)("p",null,"Left buttons behave like right buttons with two caveats on Android:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only a single left button is allowed"),Object(i.b)("li",{parentName:"ul"},"Textual left button isn't supported")),Object(i.b)("h3",{id:"using-a-react-component-in-a-button"},"Using a react component in a button"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"At the moment, custom buttons in ",Object(i.b)("inlineCode",{parentName:"p"},"rightButtons")," are supported only on iOS."))),Object(i.b)("p",null,"Sometimes we require more from our buttons. In order to support every product need React Components can be used as custom views of buttons.\nTo do so, you'll first need to register the view with Navigation, just like you register your components used as screens:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.registerComponent('ButtonComponent', () => require('./ButtonComponent'));\n")),Object(i.b)("p",null,"Now you can create buttons which use the component registered with ",Object(i.b)("inlineCode",{parentName:"p"},"'ButtonComponent'")," as their custom view:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"topBar: {\n  rightButtons: [\n    {\n      component: 'ButtonComponent',\n      passProps: {\n        // Pass initial props to the button here\n      }\n    }\n  ]\n}\n")),Object(i.b)("h3",{id:"updating-props-of-custom-buttons"},"Updating props of custom buttons"),Object(i.b)("p",null,"To update props of a mounted component used as a button, you'll first need to assign it a unique id, then call the ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.updateProps()")," command with the id."),Object(i.b)("p",null,"Calling the updateProps command will trigger Reacts component lifecycle methods related to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/react-component.html#updating"}),"props update")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Declare the button and assign it a unique id\ntopBar: {\n  rightButtons: [\n    {\n      id: 'SomeUniqueId',\n      component: 'ButtonComponent',\n      passProps: {\n        count: 0\n      }\n    }\n  ]\n}\n\n// Update props\nNavigation.updateProps('SomeUniqueId', {\n  count: 1\n});\n")),Object(i.b)("h3",{id:"changing-buttons-dynamically"},"Changing buttons dynamically"),Object(i.b)("p",null,"As buttons are part of a screen's options, they can be modified like any other styling option using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"mergeOptions")," command."),Object(i.b)("h4",{id:"setting-buttons"},"Setting buttons"),Object(i.b)("p",null,"The following command will set the screen's right buttons. If the screen already has Right Buttons declared - they will be overridden."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  topBar: {\n    rightButtons: [\n      {\n        id: 'myDynamicButton',\n        text: 'My Button'\n      }\n    ]\n  }\n});\n")),Object(i.b)("h4",{id:"removing-buttons"},"Removing buttons"),Object(i.b)("p",null,"Buttons can be removed by setting zero buttons, as shown in the snippet below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  topBar: {\n    rightButtons: []\n  }\n});\n")),Object(i.b)("h2",{id:"back-button"},"Back Button"),Object(i.b)("p",null,"The back button is added automatically when two or more screens are pushed into the stack."),Object(i.b)("h3",{id:"styling-the-back-button"},"Styling the back button"),Object(i.b)("p",null,"The back button's style can be customized by declaring a backButton options object. This configuration can be part of a screen's static options, or default options."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  color: 'red',\n  icon: require('../../img/customChevron.png')\n}\n")),Object(i.b)("h3",{id:"controlling-visibility"},"Controlling visibility"),Object(i.b)("p",null,"The back buttons visibility can be controlled with the visible property."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"backButton: {\n  visible: false\n}\n")),Object(i.b)("h3",{id:"changing-visibility-programmatically"},"Changing visibility programmatically"),Object(i.b)("p",null,"Back button visibility can be changed dynamically using the mergeOptions command. When using a screen's componentId, the change will affect only that specific screen. But when using the stack's id, the change will affect all screens pushed into the stack."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  backButton: {\n    visible: false\n  }\n});\n")),Object(i.b)("h3",{id:"handling-the-back-button"},"Handling the back button"),Object(i.b)("p",null,"Handling the back button is not possible. However, you can set a left button with a chevron and handle it like you'd handle any other button and calling ",Object(i.b)("inlineCode",{parentName:"p"},"Navigation.pop")," when desired."),Object(i.b)("h2",{id:"interacting-programmatically"},"Interacting programmatically"),Object(i.b)("p",null,"The Navigation object provides ways to programmatically manipulate the stack."),Object(i.b)("h3",{id:"interact-with-the-stack-by-componentid"},"Interact with the Stack by componentId"),Object(i.b)("p",null,"Each layout pushed into the stack has an id. When in the context of a component, The component's ",Object(i.b)("inlineCode",{parentName:"p"},"componentId")," can be used to interact with a parent stack.\nWhen using a component's componentId, the native implementation knows to perform the command on the parent Stack of this component."),Object(i.b)("p",null,"In this example, we push a screen onto the component's parent stack."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const React = require('react');\nconst Navigation = require('react-native-navigation');\n\nclass MyComponent extends React.Component {\n  onButtonClick = () => {\n    Navigation.push(this.props.componentId, {\n      component: {\n        name: 'PUSHED_SCREEN'\n      }\n    });\n  }\n}\n")),Object(i.b)("h3",{id:"interact-with-the-stack-by-a-predefined-id"},"Interact with the Stack by a predefined id"),Object(i.b)("p",null,"Sometimes we're required to interact with a specific stack not from the context of a component pushed into it. To do so, assign the stack a predefined ",Object(i.b)("inlineCode",{parentName:"p"},"id")," and use it when invoking any stack command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      id: 'MyStack', // This is the id we're going to use when interacting with the stack\n      children: [\n        {\n          component: {\n            name: 'SomeComponent'\n          }\n        }\n      ]\n    }\n  }\n});\n\nfunction push() {\n  Navigation.push('MyStack', {\n    component: {\n      name: 'PushedScreen'\n    }\n  });\n}\n")),Object(i.b)("h2",{id:"disabling-back-navigation"},"Disabling back navigation"),Object(i.b)("h2",{id:"handling-back-navigation"},"Handling back navigation"))}u.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?o.a.createElement(h,r({ref:t},l,{components:n})):o.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},177:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=o.apply(null,a);c&&e.push(c)}else if("object"===i)for(var r in a)n.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},179:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=o},181:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},182:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(179);var c=function(){return Object(a.useContext)(i.a)},r=n(177),s=n.n(r),l=n(93),b=n.n(l);const p=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:r,groupId:l}=e,{tabGroupChoices:d,setTabGroupChoices:h}=c(),[m,g]=Object(a.useState)(i);if(null!=l){const e=d[l];null!=e&&e!==m&&g(e)}const O=e=>{g(e),null!=l&&h(l,e)},j=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},r.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:s()("tab-item",b.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case p:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}}}]);