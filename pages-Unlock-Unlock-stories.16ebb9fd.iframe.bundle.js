"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[894],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/pages/Unlock/Unlock.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".unlock-page {\n  display: grid;\n  place-items: center;\n  height: 100%;\n  width: 100%;\n  background: var(--grams-background);\n  align-items: center;\n  text-align: center;\n}\n\n.unlock-form {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 340px;\n  max-width: 450px;\n}","",{version:3,sources:["webpack://./src/pages/Unlock/Unlock.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,gBAAgB;EAChB,gBAAgB;AAClB",sourcesContent:[".unlock-page {\n  display: grid;\n  place-items: center;\n  height: 100%;\n  width: 100%;\n  background: var(--grams-background);\n  align-items: center;\n  text-align: center;\n}\n\n.unlock-form {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 340px;\n  max-width: 450px;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/pages/Unlock/Unlock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mobile:()=>Mobile,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Unlock_stories});var react=__webpack_require__("./node_modules/react/index.js"),Form=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),Segment=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),Header=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Unlock=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/pages/Unlock/Unlock.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Unlock.Z,options);Unlock.Z&&Unlock.Z.locals&&Unlock.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Unlock_Unlock_Unlock=({name,image,method,rule,onUnlock})=>{const[pname,setPname]=(0,react.useState)(name||"Unlock Profile"),[credential,setCredential]=(0,react.useState)(""),cmethod=method||"pin",crule=/^[0-9]{1,6}$/;return(0,jsx_runtime.jsx)("div",{"data-testid":"Unlock",className:"unlock-page",children:(0,jsx_runtime.jsx)("div",{className:"unlock-form",children:(0,jsx_runtime.jsx)(Form.Z,{size:"large",children:(0,jsx_runtime.jsxs)(Segment.Z,{basic:!0,children:[(0,jsx_runtime.jsx)(Image.Z,{size:"tiny",avatar:!0,src:image||"https://assets.grams.dev/logo/social.logo.png"}),(0,jsx_runtime.jsx)(Header.Z,{as:"h3",className:"mt-0",children:pname}),(0,jsx_runtime.jsx)(Form.Z.Input,{fluid:!0,icon:"lock open",iconPosition:"left",placeholder:cmethod,type:"password",onChange:(event,data)=>{setCredential(data.value)}}),(0,jsx_runtime.jsx)(Button.Z,{primary:!0,disabled:!(credential&&crule.test(credential)),onClick:()=>{onUnlock?.(credential)},fluid:!0,size:"large",children:"Unlock"})]})})})})};Unlock_Unlock_Unlock.displayName="Unlock";const pages_Unlock_Unlock=Unlock_Unlock_Unlock;try{Unlock_Unlock_Unlock.displayName="Unlock",Unlock_Unlock_Unlock.__docgenInfo={description:"",displayName:"Unlock",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},method:{defaultValue:null,description:"",name:"method",required:!1,type:{name:"enum",value:[{value:'"pin"'},{value:'"password"'}]}},rule:{defaultValue:null,description:"",name:"rule",required:!1,type:{name:"RegExp"}},onUnlock:{defaultValue:null,description:"",name:"onUnlock",required:!1,type:{name:"(credential: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/Unlock/Unlock.tsx#Unlock"]={docgenInfo:Unlock_Unlock_Unlock.__docgenInfo,name:"Unlock",path:"src/pages/Unlock/Unlock.tsx#Unlock"})}catch(__react_docgen_typescript_loader_error){}const Unlock_stories={title:"Pages/Unlock",component:pages_Unlock_Unlock},Primary={},Mobile={};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Mobile"]}}]);