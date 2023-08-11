"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[421],{"./src/components/ViewSeed/ViewSeed.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ViewSeed_stories});var react=__webpack_require__("./node_modules/react/index.js"),Grid=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js"),Segment=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),Form=__webpack_require__("./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const MnemomicPhrase=({mnemonic,rows,columns,size})=>{const words=mnemonic.split(" ");return(0,jsx_runtime.jsx)(Grid.Z,{className:"full",padded:!0,columns,children:[...Array(rows)].map(((x,i)=>(0,jsx_runtime.jsx)(Grid.Z.Row,{children:[...Array(columns)].map(((x,j)=>(0,jsx_runtime.jsx)(Grid.Z.Column,{children:(0,jsx_runtime.jsx)("p",{className:`${size} text`,children:words[j+columns*i]})},j)))},i)))})};MnemomicPhrase.displayName="MnemomicPhrase";const ViewSeed=({basic=!1,columns=4,rows=6,seed,size="large",onConfirm,onCopy})=>{const[ack,setAck]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(Segment.Z,{"data-testid":"ViewSeed",basic,children:[(0,jsx_runtime.jsx)(MnemomicPhrase,{mnemonic:seed,rows,columns,size}),(0,jsx_runtime.jsxs)(Form.Z,{size,children:[(0,jsx_runtime.jsx)(Form.Z.Checkbox,{required:!0,label:"I acknowledge that I have saved the above seed securely and will not be able to retrieve it in the future",onChange:(event,data)=>{setAck(data.checked)}}),(0,jsx_runtime.jsxs)(Button.Z.Group,{fluid:!0,children:[(0,jsx_runtime.jsx)(Button.Z,{disabled:!ack,onClick:onConfirm,primary:!0,children:"Confirm"}),(0,jsx_runtime.jsx)(Button.Z.Or,{}),(0,jsx_runtime.jsx)(Button.Z,{onClick:()=>onCopy(seed),color:"facebook",children:"Copy"})]})]})]})};ViewSeed.displayName="ViewSeed";const ViewSeed_ViewSeed=ViewSeed;try{ViewSeed.displayName="ViewSeed",ViewSeed.__docgenInfo={description:"",displayName:"ViewSeed",props:{basic:{defaultValue:{value:"false"},description:"",name:"basic",required:!1,type:{name:"boolean"}},columns:{defaultValue:{value:"4"},description:"",name:"columns",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"6"},description:"",name:"rows",required:!1,type:{name:"number"}},seed:{defaultValue:null,description:"",name:"seed",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"() => void"}},onCopy:{defaultValue:null,description:"",name:"onCopy",required:!1,type:{name:"(seed: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewSeed/ViewSeed.tsx#ViewSeed"]={docgenInfo:ViewSeed.__docgenInfo,name:"ViewSeed",path:"src/components/ViewSeed/ViewSeed.tsx#ViewSeed"})}catch(__react_docgen_typescript_loader_error){}const ViewSeed_stories={title:"Components/ViewSeed",component:ViewSeed_ViewSeed,tags:["autodocs"]},Primary={args:{seed:"pistol maple duty lunch canyon critic kitten exact slice harvest plastic frequent curtain turkey adapt bounce virtual symptom goat robot merit lunch canyon critic"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  args: {\n    seed: "pistol maple duty lunch canyon critic kitten exact slice harvest plastic frequent curtain turkey adapt bounce virtual symptom goat robot merit lunch canyon critic"\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./node_modules/semantic-ui-react/dist/es/collections/Grid/Grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Grid_Grid});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function GridColumn(props){var children=props.children,className=props.className,computer=props.computer,color=props.color,floated=props.floated,largeScreen=props.largeScreen,mobile=props.mobile,only=props.only,stretched=props.stretched,tablet=props.tablet,textAlign=props.textAlign,verticalAlign=props.verticalAlign,widescreen=props.widescreen,width=props.width,classes=(0,clsx_m.Z)(color,(0,classNameBuilders.lG)(stretched,"stretched"),(0,classNameBuilders.MR)(only,"only"),(0,classNameBuilders.X4)(textAlign),(0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.Ok)(verticalAlign),(0,classNameBuilders.H0)(computer,"wide computer"),(0,classNameBuilders.H0)(largeScreen,"wide large screen"),(0,classNameBuilders.H0)(mobile,"wide mobile"),(0,classNameBuilders.H0)(tablet,"wide tablet"),(0,classNameBuilders.H0)(widescreen,"wide widescreen"),(0,classNameBuilders.H0)(width,"wide"),"column",className),rest=(0,getUnhandledProps.Z)(GridColumn,props),ElementType=(0,getElementType.Z)(GridColumn,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}GridColumn.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],GridColumn.propTypes={},GridColumn.create=(0,factories.u5)(GridColumn,(function(children){return{children}}));const Grid_GridColumn=GridColumn;function GridRow(props){var centered=props.centered,children=props.children,className=props.className,color=props.color,columns=props.columns,divided=props.divided,only=props.only,reversed=props.reversed,stretched=props.stretched,textAlign=props.textAlign,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)(color,(0,classNameBuilders.lG)(centered,"centered"),(0,classNameBuilders.lG)(divided,"divided"),(0,classNameBuilders.lG)(stretched,"stretched"),(0,classNameBuilders.MR)(only,"only"),(0,classNameBuilders.MR)(reversed,"reversed"),(0,classNameBuilders.X4)(textAlign),(0,classNameBuilders.Ok)(verticalAlign),(0,classNameBuilders.H0)(columns,"column",!0),"row",className),rest=(0,getUnhandledProps.Z)(GridRow,props),ElementType=(0,getElementType.Z)(GridRow,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}GridRow.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],GridRow.propTypes={};const Grid_GridRow=GridRow;function Grid(props){var celled=props.celled,centered=props.centered,children=props.children,className=props.className,columns=props.columns,container=props.container,divided=props.divided,doubling=props.doubling,inverted=props.inverted,padded=props.padded,relaxed=props.relaxed,reversed=props.reversed,stackable=props.stackable,stretched=props.stretched,textAlign=props.textAlign,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)("ui",(0,classNameBuilders.lG)(centered,"centered"),(0,classNameBuilders.lG)(container,"container"),(0,classNameBuilders.lG)(doubling,"doubling"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(stackable,"stackable"),(0,classNameBuilders.lG)(stretched,"stretched"),(0,classNameBuilders.sU)(celled,"celled"),(0,classNameBuilders.sU)(divided,"divided"),(0,classNameBuilders.sU)(padded,"padded"),(0,classNameBuilders.sU)(relaxed,"relaxed"),(0,classNameBuilders.MR)(reversed,"reversed"),(0,classNameBuilders.X4)(textAlign),(0,classNameBuilders.Ok)(verticalAlign),(0,classNameBuilders.H0)(columns,"column",!0),"grid",className),rest=(0,getUnhandledProps.Z)(Grid,props),ElementType=(0,getElementType.Z)(Grid,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}Grid.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],Grid.Column=Grid_GridColumn,Grid.Row=Grid_GridRow,Grid.propTypes={};const Grid_Grid=Grid}}]);