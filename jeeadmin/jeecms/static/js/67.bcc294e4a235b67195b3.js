webpackJsonp([67],{LbaR:function(e,t,a){"use strict";function n(e){a("x5zy")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("2sCs"),i=a.n(s),l=a("x1ym"),o=a("lcoF"),c={mixins:[o.a],data:function(){l.a.required(),l.a.number();return{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},dateRange:[],channels:[],selectChannels:[],dataInfo:{max:1e3}}},methods:{reset:function(){this.selectChannels=[],this.dateRange=[],this.dataInfo={},this.dataInfo.max=1e3},createIndex:function(e){var t=this;this.selectChannels.length>0&&(this.dataInfo.channelId=this.selectChannels[this.selectChannels.length-1]),this.dateRange.length>0&&(this.dataInfo.startDate=this.dateRange[0],this.dataInfo.endDate=this.dateRange[1]),this.loading=!0,i.a.post(this.$api.fullTextSearchCreate,this.dataInfo).then(function(e){t.loading=!1,"200"==e.code&&t.successMessage("生成成功！")}).catch(function(e){t.loading=!1})}},created:function(){var e=this;i.a.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!0}).then(function(t){e.loading=!1,e.channels=t.body,e.dataInfo.all=!1}).catch(function(t){e.loading=!1})}},r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("el-form",{ref:"form",staticClass:"cms-form",attrs:{model:e.dataInfo,"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目",prop:"channelId"}},[a("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:e.channels,"change-on-select":"",filterable:""},model:{value:e.selectChannels,callback:function(t){e.selectChannels=t},expression:"selectChannels"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50"}),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"时间范围"}},[a("el-date-picker",{staticClass:"cms-width",attrs:{type:"daterange",editable:!1,align:"right","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间","picker-options":e.pickerOptions2},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50"}),e._v(" "),a("el-form-item",{staticClass:"flex-50",attrs:{label:"每次生成数量",prop:"max"}},[a("el-input",{staticClass:"cms-width",attrs:{type:"number"},model:{value:e.dataInfo.max,callback:function(t){e.$set(e.dataInfo,"max",t)},expression:"dataInfo.max"}})],1),e._v(" "),a("el-form-item",{staticClass:"flex-50"}),e._v(" "),a("div",{staticClass:"form-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.createIndex(!0)}}},[e._v("生成索引")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.reset}},[e._v("取消")])],1)],1)],1)},d=[],f={render:r,staticRenderFns:d},h=f,m=a("C7Lr"),p=n,u=m(c,h,!1,p,"data-v-6ac39768",null);t.default=u.exports},Msdm:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"\n.el-date-editor .el-range-separator[data-v-6ac39768]{\r\n margin-top: -1px\n}\n.el-date-editor .el-range-separator[data-v-6ac39768]{\r\n  width: 6%;\n}\r\n",""])},x5zy:function(e,t,a){var n=a("Msdm");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("0012e064",n,!0,{})}});