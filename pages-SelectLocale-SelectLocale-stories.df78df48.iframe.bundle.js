"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[659],{"./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/pages/SelectLocale/SelectLocale.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_builder_webpack5_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".selectlocale-page {\n  display: grid;\n  place-items: center;\n  height: 100%;\n  width: 100%;\n  background: var(--grams-background);\n  align-items: center;\n  text-align: center;\n}\n\n.selectlocale-content {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 320px;\n  max-width: 450px;\n}\n","",{version:3,sources:["webpack://./src/pages/SelectLocale/SelectLocale.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,mCAAmC;EACnC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,gBAAgB;EAChB,gBAAgB;AAClB",sourcesContent:[".selectlocale-page {\n  display: grid;\n  place-items: center;\n  height: 100%;\n  width: 100%;\n  background: var(--grams-background);\n  align-items: center;\n  text-align: center;\n}\n\n.selectlocale-content {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-width: 320px;\n  max-width: 450px;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/pages/SelectLocale/SelectLocale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectLocale_stories});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Flag=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js"),Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),Segment=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),List=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),Dropdown=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SelectLocale=__webpack_require__("./node_modules/@storybook/builder-webpack5/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/pages/SelectLocale/SelectLocale.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SelectLocale.Z,options);SelectLocale.Z&&SelectLocale.Z.locals&&SelectLocale.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_LOCALES=[{key:"en",value:"en",text:"English",flag:"us"},{key:"ar",value:"ar",text:"عربي",flag:"sa"}],SelectLocale_SelectLocale_SelectLocale=({basic,className,onSelect,onConfirm})=>{const{t,i18n}=(0,es.$G)(),[selected,setSelected]=(0,react.useState)(""),locales=DEFAULT_LOCALES;return(0,jsx_runtime.jsx)("div",{"data-testid":"SelectLocale",className:className||"selectlocale-page",children:(0,jsx_runtime.jsx)("div",{className:"selectlocale-content",children:(0,jsx_runtime.jsx)(Segment.Z,{basic,children:(0,jsx_runtime.jsxs)(List.Z,{children:[(0,jsx_runtime.jsx)(List.Z.Item,{className:"mb-small",children:(0,jsx_runtime.jsx)(Dropdown.Z,{button:!0,fluid:!0,onChange:(event,{value})=>{setSelected(value),console.log(value),onSelect?.(value)},options:locales,trigger:(()=>{const option=locales.find((option=>option.value===selected));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[option&&(0,jsx_runtime.jsx)(Flag.Z,{name:option.flag}),!option&&(0,jsx_runtime.jsx)(Icon.Z,{name:"world"}),option?.text||"Select language"]})})(),value:selected})}),(0,jsx_runtime.jsx)(List.Z.Item,{children:(0,jsx_runtime.jsx)(Button.Z,{primary:!0,disabled:!selected,fluid:!0,onClick:()=>onConfirm?.(selected),size:"large",children:"Select"})})]})})})})};SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale";const pages_SelectLocale_SelectLocale=SelectLocale_SelectLocale_SelectLocale;try{SelectLocale_SelectLocale_SelectLocale.displayName="SelectLocale",SelectLocale_SelectLocale_SelectLocale.__docgenInfo={description:"",displayName:"SelectLocale",props:{basic:{defaultValue:null,description:"",name:"basic",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(locale: string) => void"}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"(locale: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pages/SelectLocale/SelectLocale.tsx#SelectLocale"]={docgenInfo:SelectLocale_SelectLocale_SelectLocale.__docgenInfo,name:"SelectLocale",path:"src/pages/SelectLocale/SelectLocale.tsx#SelectLocale"})}catch(__react_docgen_typescript_loader_error){}const SelectLocale_stories={title:"Pages/SelectLocale",component:pages_SelectLocale_SelectLocale},Primary={},Basic={args:{basic:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    basic: true\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Basic"]}}]);