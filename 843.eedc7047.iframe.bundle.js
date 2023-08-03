"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[843],{"./node_modules/lodash-es/map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>lodash_es_map});var _arrayMap=__webpack_require__("./node_modules/lodash-es/_arrayMap.js"),_baseIteratee=__webpack_require__("./node_modules/lodash-es/_baseIteratee.js"),_baseEach=__webpack_require__("./node_modules/lodash-es/_baseEach.js"),isArrayLike=__webpack_require__("./node_modules/lodash-es/isArrayLike.js");const _baseMap=function baseMap(collection,iteratee){var index=-1,result=(0,isArrayLike.Z)(collection)?Array(collection.length):[];return(0,_baseEach.Z)(collection,(function(value,key,collection){result[++index]=iteratee(value,key,collection)})),result};var isArray=__webpack_require__("./node_modules/lodash-es/isArray.js");const lodash_es_map=function map(collection,iteratee){return((0,isArray.Z)(collection)?_arrayMap.Z:_baseMap)(collection,(0,_baseIteratee.Z)(iteratee,3))}},"./node_modules/semantic-ui-react/dist/es/collections/Form/Form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Form_Form});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),Button=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),isNil=__webpack_require__("./node_modules/lodash-es/isNil.js"),get=__webpack_require__("./node_modules/lodash-es/get.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js"),Label=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),_baseSet=__webpack_require__("./node_modules/lodash-es/_baseSet.js");const lodash_es_set=function set(object,path,value){return null==object?object:(0,_baseSet.Z)(object,path,value)};var Ref=__webpack_require__("./node_modules/@fluentui/react-component-ref/dist/es/Ref.js"),htmlPropsUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/htmlPropsUtils.js"),Checkbox=function(_Component){function Checkbox(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).inputRef=(0,react.createRef)(),_this.labelRef=(0,react.createRef)(),_this.canToggle=function(){var _this$props=_this.props,disabled=_this$props.disabled,radio=_this$props.radio,readOnly=_this$props.readOnly,checked=_this.state.checked;return!(disabled||readOnly||radio&&checked)},_this.computeTabIndex=function(){var _this$props2=_this.props,disabled=_this$props2.disabled,tabIndex=_this$props2.tabIndex;return(0,isNil.Z)(tabIndex)?disabled?-1:0:tabIndex},_this.handleClick=function(e){var id=_this.props.id,_this$state=_this.state,checked=_this$state.checked,indeterminate=_this$state.indeterminate,isInputClick=(0,invoke.Z)(_this.inputRef.current,"contains",e.target),isLabelClick=(0,invoke.Z)(_this.labelRef.current,"contains",e.target),isRootClick=!isLabelClick&&!isInputClick,hasId=!(0,isNil.Z)(id);isLabelClick&&hasId||(0,invoke.Z)(_this.props,"onClick",e,(0,esm_extends.Z)({},_this.props,{checked:!checked,indeterminate:!!indeterminate})),_this.isClickFromMouse&&(_this.isClickFromMouse=!1,isLabelClick&&!hasId&&_this.handleChange(e),isRootClick&&_this.handleChange(e),isLabelClick&&hasId&&e.stopPropagation())},_this.handleChange=function(e){var checked=_this.state.checked;_this.canToggle()&&((0,invoke.Z)(_this.props,"onChange",e,(0,esm_extends.Z)({},_this.props,{checked:!checked,indeterminate:!1})),_this.setState({checked:!checked,indeterminate:!1}))},_this.handleMouseDown=function(e){var _this$state2=_this.state,checked=_this$state2.checked,indeterminate=_this$state2.indeterminate;(0,invoke.Z)(_this.props,"onMouseDown",e,(0,esm_extends.Z)({},_this.props,{checked:!!checked,indeterminate:!!indeterminate})),e.defaultPrevented||(0,invoke.Z)(_this.inputRef.current,"focus"),e.preventDefault()},_this.handleMouseUp=function(e){var _this$state3=_this.state,checked=_this$state3.checked,indeterminate=_this$state3.indeterminate;_this.isClickFromMouse=!0,(0,invoke.Z)(_this.props,"onMouseUp",e,(0,esm_extends.Z)({},_this.props,{checked:!!checked,indeterminate:!!indeterminate}))},_this.setIndeterminate=function(){var indeterminate=_this.state.indeterminate;lodash_es_set(_this.inputRef,"current.indeterminate",!!indeterminate)},_this}(0,inheritsLoose.Z)(Checkbox,_Component);var _proto=Checkbox.prototype;return _proto.componentDidMount=function componentDidMount(){this.setIndeterminate()},_proto.componentDidUpdate=function componentDidUpdate(){this.setIndeterminate()},_proto.render=function render(){var _this$props3=this.props,className=_this$props3.className,disabled=_this$props3.disabled,label=_this$props3.label,id=_this$props3.id,name=_this$props3.name,radio=_this$props3.radio,readOnly=_this$props3.readOnly,slider=_this$props3.slider,toggle=_this$props3.toggle,type=_this$props3.type,value=_this$props3.value,_this$state4=this.state,checked=_this$state4.checked,indeterminate=_this$state4.indeterminate,classes=(0,clsx_m.Z)("ui",(0,classNameBuilders.lG)(checked,"checked"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(indeterminate,"indeterminate"),(0,classNameBuilders.lG)((0,isNil.Z)(label),"fitted"),(0,classNameBuilders.lG)(radio,"radio"),(0,classNameBuilders.lG)(readOnly,"read-only"),(0,classNameBuilders.lG)(slider,"slider"),(0,classNameBuilders.lG)(toggle,"toggle"),"checkbox",className),unhandled=(0,getUnhandledProps.Z)(Checkbox,this.props),ElementType=(0,getElementType.Z)(Checkbox,this.props),_partitionHTMLProps=(0,htmlPropsUtils.vR)(unhandled,{htmlProps:htmlPropsUtils._l}),htmlInputProps=_partitionHTMLProps[0],rest=_partitionHTMLProps[1],labelElement=(0,factories.i9)(label,{defaultProps:{htmlFor:id},autoGenerateKey:!1})||react.createElement("label",{htmlFor:id});return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes,onClick:this.handleClick,onChange:this.handleChange,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp}),react.createElement(Ref.R,{innerRef:this.inputRef},react.createElement("input",(0,esm_extends.Z)({},htmlInputProps,{checked,className:"hidden",disabled,id,name,readOnly:!0,tabIndex:this.computeTabIndex(),type,value}))),react.createElement(Ref.R,{innerRef:this.labelRef},labelElement))},Checkbox}(__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js").Z);function Radio(props){var slider=props.slider,toggle=props.toggle,type=props.type,rest=(0,getUnhandledProps.Z)(Radio,props),radio=!(slider||toggle)||void 0;return react.createElement(Checkbox,(0,esm_extends.Z)({},rest,{type,radio,slider,toggle}))}Checkbox.handledProps=["as","checked","className","defaultChecked","defaultIndeterminate","disabled","fitted","id","indeterminate","label","name","onChange","onClick","onMouseDown","onMouseUp","radio","readOnly","slider","tabIndex","toggle","type","value"],Checkbox.propTypes={},Checkbox.defaultProps={type:"checkbox"},Checkbox.autoControlledProps=["checked","indeterminate"],Radio.handledProps=["slider","toggle","type"],Radio.propTypes={},Radio.defaultProps={type:"radio"};const Radio_Radio=Radio;function FormField(props){var children=props.children,className=props.className,content=props.content,control=props.control,disabled=props.disabled,error=props.error,inline=props.inline,label=props.label,required=props.required,type=props.type,width=props.width,id=props.id,classes=(0,clsx_m.Z)((0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(error,"error"),(0,classNameBuilders.lG)(inline,"inline"),(0,classNameBuilders.lG)(required,"required"),(0,classNameBuilders.H0)(width,"wide"),"field",className),rest=(0,getUnhandledProps.Z)(FormField,props),ElementType=(0,getElementType.Z)(FormField,props),errorPointing=(0,get.Z)(error,"pointing","above"),errorLabel=Label.Z.create(error,{autoGenerateKey:!1,defaultProps:{prompt:!0,pointing:errorPointing,id:id?id+"-error-message":void 0,role:"alert","aria-atomic":!0}}),errorLabelBefore=("below"===errorPointing||"right"===errorPointing)&&errorLabel,errorLabelAfter=("above"===errorPointing||"left"===errorPointing)&&errorLabel;if((0,isNil.Z)(control))return(0,isNil.Z)(label)?react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes,id}),childrenUtils.kK(children)?content:children):react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes,id}),errorLabelBefore,(0,factories.i9)(label,{autoGenerateKey:!1}),errorLabelAfter);var ariaAttrs={"aria-describedby":id&&error?id+"-error-message":null,"aria-invalid":!!error||void 0},controlProps=(0,esm_extends.Z)({},rest,{content,children,disabled,required,type,id});return"input"!==control||"checkbox"!==type&&"radio"!==type?control===Checkbox||control===Radio_Radio?react.createElement(ElementType,{className:classes},errorLabelBefore,(0,react.createElement)(control,(0,esm_extends.Z)({},ariaAttrs,controlProps,{label})),errorLabelAfter):react.createElement(ElementType,{className:classes},(0,factories.i9)(label,{defaultProps:{htmlFor:id},autoGenerateKey:!1}),errorLabelBefore,(0,react.createElement)(control,(0,esm_extends.Z)({},ariaAttrs,controlProps)),errorLabelAfter):react.createElement(ElementType,{className:classes},react.createElement("label",null,errorLabelBefore,(0,react.createElement)(control,(0,esm_extends.Z)({},ariaAttrs,controlProps))," ",label,errorLabelAfter))}FormField.handledProps=["as","children","className","content","control","disabled","error","id","inline","label","required","type","width"],FormField.propTypes={};const Form_FormField=FormField;function FormButton(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormButton,props),ElementType=(0,getElementType.Z)(FormButton,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormButton.handledProps=["as","control"],FormButton.propTypes={},FormButton.defaultProps={as:Form_FormField,control:Button.Z};const Form_FormButton=FormButton;function FormCheckbox(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormCheckbox,props),ElementType=(0,getElementType.Z)(FormCheckbox,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormCheckbox.handledProps=["as","control"],FormCheckbox.propTypes={},FormCheckbox.defaultProps={as:Form_FormField,control:Checkbox};const Form_FormCheckbox=FormCheckbox;var Dropdown=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js");function FormDropdown(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormDropdown,props),ElementType=(0,getElementType.Z)(FormDropdown,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormDropdown.handledProps=["as","control"],FormDropdown.propTypes={},FormDropdown.defaultProps={as:Form_FormField,control:Dropdown.Z};const Form_FormDropdown=FormDropdown;function FormGroup(props){var children=props.children,className=props.className,grouped=props.grouped,inline=props.inline,unstackable=props.unstackable,widths=props.widths,classes=(0,clsx_m.Z)((0,classNameBuilders.lG)(grouped,"grouped"),(0,classNameBuilders.lG)(inline,"inline"),(0,classNameBuilders.lG)(unstackable,"unstackable"),(0,classNameBuilders.H0)(widths,null,!0),"fields",className),rest=(0,getUnhandledProps.Z)(FormGroup,props),ElementType=(0,getElementType.Z)(FormGroup,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}FormGroup.handledProps=["as","children","className","grouped","inline","unstackable","widths"],FormGroup.propTypes={};const Form_FormGroup=FormGroup;var includes=__webpack_require__("./node_modules/lodash-es/includes.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),utils=__webpack_require__("./node_modules/@fluentui/react-component-ref/dist/es/utils.js"),Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),Input=function(_Component){function Input(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).inputRef=(0,react.createRef)(),_this.computeIcon=function(){var _this$props=_this.props,loading=_this$props.loading,icon=_this$props.icon;return(0,isNil.Z)(icon)?loading?"spinner":void 0:icon},_this.computeTabIndex=function(){var _this$props2=_this.props,disabled=_this$props2.disabled,tabIndex=_this$props2.tabIndex;return(0,isNil.Z)(tabIndex)?disabled?-1:void 0:tabIndex},_this.focus=function(options){return _this.inputRef.current.focus(options)},_this.select=function(){return _this.inputRef.current.select()},_this.handleChange=function(e){var value=(0,get.Z)(e,"target.value");(0,invoke.Z)(_this.props,"onChange",e,(0,esm_extends.Z)({},_this.props,{value}))},_this.handleChildOverrides=function(child,defaultProps){return(0,esm_extends.Z)({},defaultProps,child.props,{ref:function ref(c){(0,utils.n)(child.ref,c),_this.inputRef.current=c}})},_this.partitionProps=function(){var _this$props3=_this.props,disabled=_this$props3.disabled,type=_this$props3.type,tabIndex=_this.computeTabIndex(),unhandled=(0,getUnhandledProps.Z)(Input,_this.props),_partitionHTMLProps=(0,htmlPropsUtils.vR)(unhandled),htmlInputProps=_partitionHTMLProps[0],rest=_partitionHTMLProps[1];return[(0,esm_extends.Z)({},htmlInputProps,{disabled,type,tabIndex,onChange:_this.handleChange,ref:_this.inputRef}),rest]},_this}return(0,inheritsLoose.Z)(Input,_Component),Input.prototype.render=function render(){var _this2=this,_this$props4=this.props,action=_this$props4.action,actionPosition=_this$props4.actionPosition,children=_this$props4.children,className=_this$props4.className,disabled=_this$props4.disabled,error=_this$props4.error,fluid=_this$props4.fluid,focus=_this$props4.focus,icon=_this$props4.icon,iconPosition=_this$props4.iconPosition,input=_this$props4.input,inverted=_this$props4.inverted,label=_this$props4.label,labelPosition=_this$props4.labelPosition,loading=_this$props4.loading,size=_this$props4.size,transparent=_this$props4.transparent,type=_this$props4.type,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(error,"error"),(0,classNameBuilders.lG)(fluid,"fluid"),(0,classNameBuilders.lG)(focus,"focus"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(loading,"loading"),(0,classNameBuilders.lG)(transparent,"transparent"),(0,classNameBuilders.cD)(actionPosition,"action")||(0,classNameBuilders.lG)(action,"action"),(0,classNameBuilders.cD)(iconPosition,"icon")||(0,classNameBuilders.lG)(icon||loading,"icon"),(0,classNameBuilders.cD)(labelPosition,"labeled")||(0,classNameBuilders.lG)(label,"labeled"),"input",className),ElementType=(0,getElementType.Z)(Input,this.props),_this$partitionProps=this.partitionProps(),htmlInputProps=_this$partitionProps[0],rest=_this$partitionProps[1];if(!childrenUtils.kK(children)){var childElements=(0,map.Z)(react.Children.toArray(children),(function(child){return"input"!==child.type?child:(0,react.cloneElement)(child,_this2.handleChildOverrides(child,htmlInputProps))}));return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childElements)}var actionElement=Button.Z.create(action,{autoGenerateKey:!1}),labelElement=Label.Z.create(label,{defaultProps:{className:(0,clsx_m.Z)("label",(0,includes.Z)(labelPosition,"corner")&&labelPosition)},autoGenerateKey:!1});return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),"left"===actionPosition&&actionElement,"right"!==labelPosition&&labelElement,(0,factories.MO)(input||type,{defaultProps:htmlInputProps,autoGenerateKey:!1}),Icon.Z.create(this.computeIcon(),{autoGenerateKey:!1}),"left"!==actionPosition&&actionElement,"right"===labelPosition&&labelElement)},Input}(react.Component);Input.handledProps=["action","actionPosition","as","children","className","disabled","error","fluid","focus","icon","iconPosition","input","inverted","label","labelPosition","loading","onChange","size","tabIndex","transparent","type"],Input.propTypes={},Input.defaultProps={type:"text"},Input.create=(0,factories.u5)(Input,(function(type){return{type}}));const Input_Input=Input;function FormInput(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormInput,props),ElementType=(0,getElementType.Z)(FormInput,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormInput.handledProps=["as","control"],FormInput.propTypes={},FormInput.defaultProps={as:Form_FormField,control:Input_Input};const Form_FormInput=FormInput;function FormRadio(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormRadio,props),ElementType=(0,getElementType.Z)(FormRadio,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormRadio.handledProps=["as","control"],FormRadio.propTypes={},FormRadio.defaultProps={as:Form_FormField,control:Radio_Radio};const Form_FormRadio=FormRadio;function Select(props){return react.createElement(Dropdown.Z,(0,esm_extends.Z)({},props,{selection:!0}))}Select.handledProps=["options"],Select.propTypes={},Select.Divider=Dropdown.Z.Divider,Select.Header=Dropdown.Z.Header,Select.Item=Dropdown.Z.Item,Select.Menu=Dropdown.Z.Menu;const Select_Select=Select;function FormSelect(props){var control=props.control,options=props.options,rest=(0,getUnhandledProps.Z)(FormSelect,props),ElementType=(0,getElementType.Z)(FormSelect,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control,options}))}FormSelect.handledProps=["as","control","options"],FormSelect.propTypes={},FormSelect.defaultProps={as:Form_FormField,control:Select_Select};const Form_FormSelect=FormSelect;var TextArea=function(_Component){function TextArea(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).ref=(0,react.createRef)(),_this.focus=function(){return _this.ref.current.focus()},_this.handleChange=function(e){var value=(0,get.Z)(e,"target.value");(0,invoke.Z)(_this.props,"onChange",e,(0,esm_extends.Z)({},_this.props,{value}))},_this.handleInput=function(e){var value=(0,get.Z)(e,"target.value");(0,invoke.Z)(_this.props,"onInput",e,(0,esm_extends.Z)({},_this.props,{value}))},_this}return(0,inheritsLoose.Z)(TextArea,_Component),TextArea.prototype.render=function render(){var _this$props=this.props,rows=_this$props.rows,value=_this$props.value,rest=(0,getUnhandledProps.Z)(TextArea,this.props),ElementType=(0,getElementType.Z)(TextArea,this.props);return react.createElement(Ref.R,{innerRef:this.ref},react.createElement(ElementType,(0,esm_extends.Z)({},rest,{onChange:this.handleChange,onInput:this.handleInput,rows,value})))},TextArea}(react.Component);TextArea.handledProps=["as","onChange","onInput","rows","value"],TextArea.propTypes={},TextArea.defaultProps={as:"textarea",rows:3};const TextArea_TextArea=TextArea;function FormTextArea(props){var control=props.control,rest=(0,getUnhandledProps.Z)(FormTextArea,props),ElementType=(0,getElementType.Z)(FormTextArea,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{control}))}FormTextArea.handledProps=["as","control"],FormTextArea.propTypes={},FormTextArea.defaultProps={as:Form_FormField,control:TextArea_TextArea};const Form_FormTextArea=FormTextArea;var Form=function(_Component){function Form(){for(var _this,_len=arguments.length,_args=new Array(_len),_key=0;_key<_len;_key++)_args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(_args))||this).handleSubmit=function(e){"string"!=typeof _this.props.action&&(0,invoke.Z)(e,"preventDefault");for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)args[_key2-1]=arguments[_key2];invoke.Z.apply(void 0,[_this.props,"onSubmit",e,_this.props].concat(args))},_this}return(0,inheritsLoose.Z)(Form,_Component),Form.prototype.render=function render(){var _this$props=this.props,action=_this$props.action,children=_this$props.children,className=_this$props.className,error=_this$props.error,inverted=_this$props.inverted,loading=_this$props.loading,reply=_this$props.reply,size=_this$props.size,success=_this$props.success,unstackable=_this$props.unstackable,warning=_this$props.warning,widths=_this$props.widths,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(error,"error"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(loading,"loading"),(0,classNameBuilders.lG)(reply,"reply"),(0,classNameBuilders.lG)(success,"success"),(0,classNameBuilders.lG)(unstackable,"unstackable"),(0,classNameBuilders.lG)(warning,"warning"),(0,classNameBuilders.H0)(widths,null,!0),"form",className),rest=(0,getUnhandledProps.Z)(Form,this.props),ElementType=(0,getElementType.Z)(Form,this.props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{action,className:classes,onSubmit:this.handleSubmit}),children)},Form}(react.Component);Form.handledProps=["action","as","children","className","error","inverted","loading","onSubmit","reply","size","success","unstackable","warning","widths"],Form.propTypes={},Form.defaultProps={as:"form"},Form.Field=Form_FormField,Form.Button=Form_FormButton,Form.Checkbox=Form_FormCheckbox,Form.Dropdown=Form_FormDropdown,Form.Group=Form_FormGroup,Form.Input=Form_FormInput,Form.Radio=Form_FormRadio,Form.Select=Form_FormSelect,Form.TextArea=Form_FormTextArea;const Form_Form=Form},"./node_modules/semantic-ui-react/dist/es/elements/Header/Header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Header_Header});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function HeaderSubheader(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("sub header",className),rest=(0,getUnhandledProps.Z)(HeaderSubheader,props),ElementType=(0,getElementType.Z)(HeaderSubheader,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}HeaderSubheader.handledProps=["as","children","className","content"],HeaderSubheader.propTypes={},HeaderSubheader.create=(0,factories.u5)(HeaderSubheader,(function(content){return{content}}));const Header_HeaderSubheader=HeaderSubheader;function HeaderContent(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("content",className),rest=(0,getUnhandledProps.Z)(HeaderContent,props),ElementType=(0,getElementType.Z)(HeaderContent,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}HeaderContent.handledProps=["as","children","className","content"],HeaderContent.propTypes={};const Header_HeaderContent=HeaderContent;function Header(props){var attached=props.attached,block=props.block,children=props.children,className=props.className,color=props.color,content=props.content,disabled=props.disabled,dividing=props.dividing,floated=props.floated,icon=props.icon,image=props.image,inverted=props.inverted,size=props.size,sub=props.sub,subheader=props.subheader,textAlign=props.textAlign,classes=(0,clsx_m.Z)("ui",color,size,(0,classNameBuilders.lG)(block,"block"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(dividing,"dividing"),(0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.lG)(!0===icon,"icon"),(0,classNameBuilders.lG)(!0===image,"image"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(sub,"sub"),(0,classNameBuilders.sU)(attached,"attached"),(0,classNameBuilders.X4)(textAlign),"header",className),rest=(0,getUnhandledProps.Z)(Header,props),ElementType=(0,getElementType.Z)(Header,props);if(!childrenUtils.kK(children))return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children);var iconElement=Icon.Z.create(icon,{autoGenerateKey:!1}),imageElement=Image.Z.create(image,{autoGenerateKey:!1}),subheaderElement=Header_HeaderSubheader.create(subheader,{autoGenerateKey:!1});return iconElement||imageElement?react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),iconElement||imageElement,(content||subheaderElement)&&react.createElement(Header_HeaderContent,null,content,subheaderElement)):react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),content,subheaderElement)}Header.handledProps=["as","attached","block","children","className","color","content","disabled","dividing","floated","icon","image","inverted","size","sub","subheader","textAlign"],Header.propTypes={},Header.Content=Header_HeaderContent,Header.Subheader=Header_HeaderSubheader;const Header_Header=Header}}]);