webpackJsonp([124],{"7Kqp":function(a,e,t){var s=t("UDu0");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);t("FIqI")("060e19f4",s,!0,{})},Cear:function(a,e,t){"use strict";function s(a){t("7Kqp")}Object.defineProperty(e,"__esModule",{value:!0});var r=t("2sCs"),i=t.n(r),n={data:function(){return{dateArr:"",params:{queryModel:"day",begin:"",end:""},time:"",date:{year:0,month:0,day:0},dataInfo:{regTotal:0,list:[]},chartLine:null,chartPie:null,sum:0,year:"",month:"",totoal:"",chartLineOptions:{tooltip:{trigger:"axis"},legend:{data:["注册数"]},grid:{left:"4%",right:"2%",bottom:"14%"},xAxis:{type:"category",splitLine:{show:!1},boundaryGap:!0,data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{splitLine:{show:!1},type:"value"},series:[{name:"注册数",type:"line",showSymbol:!1,smooth:!0,data:[120,132,101,134,90,230,210]}]}}},methods:{getDay:function(a,e){return new Date(a,e,0).getDate()},rangeTime:function(a){console.log(a),null!=a?(this.params.begin=a[0],this.params.end=a[1],a[0]===a[1]?this.time=a[0]:this.time=a[0]+"-"+a[1],this.params.flag="3",this.params.queryModel="section"):(this.params.begin="",this.params.end="",this.params.queryModel="day",this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),this.getDataInfo()},query:function(a){"day"===a&&(this.time=this.date.year+"-"+this.date.month+"-"+this.date.day),"yesterday"===a&&(this.time=this.date.year+"-"+this.date.month+"-"+(parseInt(this.date.day)-1)),"month"===a&&(this.time=this.date.year+"-"+this.date.month),"year"!==a&&"years"!==a||(this.time=this.date.year),this.getDataInfo()},getDataInfo:function(){var a=this;i.a.post(this.$api.statisticMemberList,this.params).then(function(e){var t=[],s=[],r=[],i=[];for(var n in e.body.data)t.push(e.body.data[n][0]),s.push(e.body.data[n][1]),r.push(a.timeFormat(a.params.queryModel,e.body.data[n][1])),i.push(e.body.data[n][0]);a.sum=0;for(var o in e.body.data)a.sum=a.sum+e.body.data[o][0];a.totoal=e.body.totalCount,0===a.totoal&&(a.totoal=1),a.dataInfo.regTotal=a.sum,a.dataInfo=e.body.data,a.setChartLineOptions(r,i)})},setChartLineOptions:function(a,e){var t={xAxis:{data:a},series:[{name:"浏览量(pv)",data:e}]};this.chartLine.setOption(t)},timeFormat:function(a,e){var t="0";if("day"==a||"yesterday"==a)switch(e){case 0:t="00:00-00:59";break;case 1:t="01:00-01:59";break;case 2:t="02:00-02:59";break;case 3:t="03:00-03:59";break;case 4:t="04:00-04:59";break;case 5:t="05:00-05:59";break;case 6:t="06:00-06:59";break;case 7:t="07:00-07:59";break;case 8:t="08:00-08:59";break;case 9:t="09:00-09:59";break;case 10:t="10:00-10:59";break;case 11:t="11:00-11:59";break;case 12:t="12:00-12:59";break;case 13:t="13:00-13:59";break;case 14:t="14:00-14:59";break;case 15:t="15:00-15:59";break;case 16:t="16:00-16:59";break;case 17:t="17:00-17:59";break;case 18:t="18:00-18:59";break;case 19:t="19:00-19:59";break;case 20:t="20:00-20:59";break;case 21:t="21:00-21:59";break;case 22:t="22:00-22:59";break;case 23:t="23:00-23:59";break;default:t="99:99:99~99:99:99:99"}if("year"==a){var s=new Date;switch(e){case 1:t=s.getFullYear()+"-01";break;case 2:t=s.getFullYear()+"-02";break;case 3:t=s.getFullYear()+"-03";break;case 4:t=s.getFullYear()+"-04";break;case 5:t=s.getFullYear()+"-05";break;case 6:t=s.getFullYear()+"-06";break;case 7:t=s.getFullYear()+"-07";break;case 8:t=s.getFullYear()+"-08";break;case 9:t=s.getFullYear()+"-09";break;case 10:t=s.getFullYear()+"-10";break;case 11:t=s.getFullYear()+"-11";break;case 12:t=s.getFullYear()+"-12";break;default:t="9999-99-99"}}return"month"!=a&&"years"!=a||(t=e),"section"===a&&(e=e.split("/")[1],t=e),t}},created:function(){var a=new Date,e=a.getFullYear(),t=a.getMonth()+1,s=a.getDate();this.date.year=e,this.date.month=t,this.date.day=s,this.year=e,this.month=t,this.time=e+"-"+t+"-"+s,this.getDataInfo()},mounted:function(){this.chartLine=echarts.init(document.getElementById("chartLine")),this.chartLine.setOption(this.chartLineOptions)}},o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"cms-body cms-chart-box"},[t("div",{staticClass:"cms-list-header",staticStyle:{"padding-left":"0"}},[t("h5",{staticClass:"data-header-title"},[a._v("会员注册数("+a._s(a.time)+")")]),a._v(" "),t("div",{staticClass:"flex-date"},[t("label",{staticClass:"cms-label",staticStyle:{"margin-left":"0"}},[a._v("日期：")]),a._v(" "),t("el-radio-group",{staticStyle:{"margin-right":"10px"},attrs:{size:"small"},on:{change:a.query},model:{value:a.params.queryModel,callback:function(e){a.$set(a.params,"queryModel",e)},expression:"params.queryModel"}},[t("el-radio-button",{attrs:{label:"day"}},[a._v("今日")]),a._v(" "),t("el-radio-button",{attrs:{label:"yesterday"}},[a._v("昨日")]),a._v(" "),t("el-radio-button",{attrs:{label:"month"}},[a._v("本月")]),a._v(" "),t("el-radio-button",{attrs:{label:"year"}},[a._v("今年")]),a._v(" "),t("el-radio-button",{attrs:{label:"years"}},[a._v("年份")])],1),a._v(" "),t("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",editable:!1,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:a.rangeTime},model:{value:a.dateArr,callback:function(e){a.dateArr=e},expression:"dateArr"}})],1)]),a._v(" "),t("ul",{staticClass:"clearfix"},[t("li",{staticClass:"data-item"},[a._m(0),a._v(" "),t("p",{staticClass:"data-num"},[a._v(a._s(a.dataInfo.regTotal))])])]),a._v(" "),t("div",{staticClass:"chart-style",attrs:{id:"chartLine"}}),a._v(" "),t("table",{staticClass:"data-table"},[a._m(1),a._v(" "),t("tr",[t("td",[a._v("合计")]),a._v(" "),t("td",[a._v(a._s(a.sum))]),a._v(" "),t("td")]),a._v(" "),a._l(a.dataInfo,function(e,s){return t("tr",{key:s},["day"===a.params.queryModel||"yesterday"===a.params.queryModel?t("td",[e[1]<10?t("span",[a._v("\n                                      0"+a._s(e[1])+":00-0"+a._s(e[1])+":59\n                                  ")]):t("span",[a._v("\n                                      "+a._s(e[1])+":00-"+a._s(e[1])+":59\n                                  ")])]):a._e(),a._v(" "),"month"===a.params.queryModel||"section"===a.params.queryModel?t("td",[a._v("                               \n                                  "+a._s(a.year)+"-"+a._s(a.month)+"-"+a._s(e[1])+" 00:00:00-23:59:59                                \n                              ")]):a._e(),a._v(" "),"year"===a.params.queryModel?t("td",[a._v("                               \n                                   "+a._s(a.year)+"-"+a._s(e[1])+"-01——"+a._s(a.year)+"-"+a._s(e[1])+"-"+a._s(a.getDay(a.year,e[1]))+"                                              \n                              ")]):a._e(),a._v(" "),"years"===a.params.queryModel?t("td",[a._v("                               \n                                   "+a._s(e[1])+"-01-01——"+a._s(e[1])+"-12-"+a._s(a.getDay(a.year,e[1]))+"                                              \n                              ")]):a._e(),a._v(" "),t("td",[a._v(a._s(e[0]))]),a._v(" "),t("td",[a._v(a._s((e[0]/a.totoal*100).toFixed(1))+"%")])])})],2)])},l=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"data-title"},[a._v("注册数"),t("i",{staticClass:"iconfont icon-kongzhitai-zhushi"})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("tr",[t("th",[a._v("时段")]),a._v(" "),t("th",[a._v("注册数")]),a._v(" "),t("th",[a._v("占比")])])}],d={render:o,staticRenderFns:l},c=d,h=t("C7Lr"),u=s,m=h(n,c,!1,u,"data-v-25fe7ee0",null);e.default=m.exports},UDu0:function(a,e,t){e=a.exports=t("UTlt")(!1),e.push([a.i,"\n.data-item[data-v-25fe7ee0] {\n  float: left;\n  min-width: 170px;\n  margin-top: 30px;\n}\n.data-item .data-title[data-v-25fe7ee0] {\n    font-size: 12px;\n    color: #878d99;\n    margin-bottom: 17px;\n}\n.data-item .data-num[data-v-25fe7ee0] {\n    color: #353535;\n    font-size: 24px;\n}\n.chart-style[data-v-25fe7ee0] {\n  width: 100%;\n  height: 380px;\n  border-bottom: 1px dashed #eee;\n  margin-bottom: 15px;\n}\n",""])}});