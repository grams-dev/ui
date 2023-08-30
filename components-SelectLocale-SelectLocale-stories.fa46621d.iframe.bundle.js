"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[261],{"./src/components/SelectLocale/SelectLocale.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Minified:()=>Minified,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Forms/SelectLocale",component:__webpack_require__("./src/components/SelectLocale/SelectLocale.tsx").Z,tags:["autodocs"]},Primary={},Basic={args:{basic:!0}},Minified={args:{basic:!0,icon:!0,simple:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    basic: true\n  }\n}",...Basic.parameters?.docs?.source}}},Minified.parameters={...Minified.parameters,docs:{...Minified.parameters?.docs,source:{originalSource:"{\n  args: {\n    basic: true,\n    icon: true,\n    simple: true\n  }\n}",...Minified.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Basic","Minified"]},"./src/components/SelectLocale/SelectLocale.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Flag/Flag.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_LOCALES=[{key:"en",value:"en",text:"English",flag:"us"},{key:"ar",value:"ar",text:"عربي",flag:"sa"}],SelectLocale=({basic=!1,icon=!1,locales=DEFAULT_LOCALES,simple=!1,size="large",onSelect,onConfirm})=>{const{t,i18n}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)(),[selected,setSelected]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{basic,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Z,{size,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Z.Dropdown,{button:!0,fluid:!0,onChange:(event,{value})=>{setSelected(value),console.log(value),onSelect?.(value)},options:locales,trigger:(()=>{const option=locales.find((option=>option.value===selected));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[option&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z,{name:option.flag}),!option&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{name:"world"}),!icon&&(option?.text||t("ui:selectLocale.placeholder"))]})})(),value:selected}),!simple&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Z.Button,{primary:!0,disabled:!selected,fluid:!0,onClick:()=>onConfirm?.(selected),size,children:t("ui:selectLocale.confirm")})]})})};SelectLocale.displayName="SelectLocale";const __WEBPACK_DEFAULT_EXPORT__=SelectLocale;try{SelectLocale.displayName="SelectLocale",SelectLocale.__docgenInfo={description:"Allows users to choose a locale from a list of options.",displayName:"SelectLocale",props:{basic:{defaultValue:{value:"false"},description:"If set to true, applies a basic style to the component.",name:"basic",required:!1,type:{name:"boolean"}},icon:{defaultValue:{value:"false"},description:"If set to true, the dropdown will only show the flag icon without text.",name:"icon",required:!1,type:{name:"boolean"}},locales:{defaultValue:{value:"[\n  { key: 'en', value: 'en', text: 'English', flag: 'us' },\n  { key: 'ar', value: 'ar', text: 'عربي', flag: 'sa' },\n]"},description:"An array of locale options to be displayed.",name:"locales",required:!1,type:{name:"LocaleOption[]"}},simple:{defaultValue:{value:"false"},description:"If set to true, there will be no confirm button.",name:"simple",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Defines the size of the component. It can take values from Semantic UI's sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},onSelect:{defaultValue:null,description:"A callback function that is triggered when a locale is selected.",name:"onSelect",required:!1,type:{name:"(locale: string) => void"}},onConfirm:{defaultValue:null,description:"A callback function that is triggered when a locale is confirmed.",name:"onConfirm",required:!1,type:{name:"(locale: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectLocale/SelectLocale.tsx#SelectLocale"]={docgenInfo:SelectLocale.__docgenInfo,name:"SelectLocale",path:"src/components/SelectLocale/SelectLocale.tsx#SelectLocale"})}catch(__react_docgen_typescript_loader_error){}}}]);