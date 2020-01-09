(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{Zwc7:function(t,e,a){"use strict";a.r(e);var o={head:{title:function(){return{inner:"Backups"}}},data:function(){return{destinations:[],ready:!1,saveBackup:!0}},methods:{refresh:function(){var t=this;this.ready=!1,axios.get("/api/backups").then((function(e){t.destinations=e.data.data,t.ready=!0,t.saveBackup=!0}))},upload:function(t){var e=this;if(void 0!==t){var a=new FormData;a.append("_method","POST"),a.append("file-upload",t),axios.post("/api/backups/upload",a).then((function(){toast("Backup successfully uploaded!","success"),e.$refs.upload.remove(),e.refresh()}))}},download:function(t){window.open("/backups/".concat(t),"_blank")},restore:function(t){var e=this;axios.post("/api/backups/restore/".concat(t),{saveBackup:this.saveBackup}).then((function(t){toast("Backup successfully restored!","success"),e.refresh()}))},backup:function(){var t=this;axios.post("/api/backups").then((function(e){toast("Backup successfully created!","success"),t.refresh()}))},destroy:function(t){var e=this;axios.delete("/api/backups/".concat(t)).then((function(t){toast("Backp successfully deleted!","success"),e.refresh()}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.refresh()}))}},r=a("KHd+"),n=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"save"}},[t._v("Backups")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("p-button",{directives:[{name:"modal",rawName:"v-modal:settings",arg:"settings"}],staticClass:"button mr-1"},[t._v("Settings")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:upload",arg:"upload"}],staticClass:"button mr-3"},[t._v("Upload")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}],staticClass:"button--primary",on:{click:function(t){t.preventDefault()}}},[t._v("Backup Now")])],1),t._v(" "),a("p-card",{attrs:{"no-body":""}},[t.ready?a("div",t._l(t.destinations,(function(e){return a("table",{key:e.name},[a("thead",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Created")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th")]),t._v(" "),a("tbody",t._l(e.backups,(function(e){return a("tr",{key:e.name},[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.happened))]),t._v(" "),a("td",[t._v(t._s(e.size))]),t._v(" "),a("td",{staticClass:"text-right"},[a("p-dropdown",{attrs:{right:""}},[a("fa-icon",{attrs:{icon:"bars"}}),t._v(" "),a("template",{slot:"options"},[a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:restore-form",value:e,expression:"backup",arg:"restore-form"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("p-dropdown-item",{on:{click:function(a){return t.download(e.name)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e.isNewest?t._e():a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-form",value:e,expression:"backup",arg:"delete-form"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t\t")])],1)],2)],1)])})),0)])})),0):a("div",{staticClass:"card__body text-center"},[a("fa-icon",{staticClass:"fa-spin mr-3",attrs:{icon:["fas","spinner-third"]}}),t._v(" Loading backups...\n\t\t\t")],1)]),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("settings-modal",{attrs:{section:"backups"}}),t._v(" "),a("p-modal",{key:"restore_form",attrs:{name:"restore-form",title:"Restore Backup"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:restore-form",arg:"restore-form"}],staticClass:"ml-3",attrs:{theme:"primary"},on:{click:function(a){return t.restore(e.data.name)}}},[t._v("Restore")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:restore-form",arg:"restore-form"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Restoring a backup will "),a("b",[t._v("replace all files and the database with the contents of the backup.")]),t._v(" Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind.")]),t._v(" "),a("p-checkbox",{attrs:{name:"saveBackup"},model:{value:t.saveBackup,callback:function(e){t.saveBackup=e},expression:"saveBackup"}},[t._v("\n        \t\t\tCreate a backup before restoring\n        \t\t")])],1),t._v(" "),a("p-modal",{key:"confirm_form",attrs:{name:"confirm-form",title:"Backup Now"}},[a("p",[t._v("This will perform a full backup of your website. Backups can take up to one minute per GB of data.")]),t._v(" "),a("template",{slot:"footer"},[a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}],staticClass:"ml-3",attrs:{theme:"primary"},on:{click:function(e){return t.backup()}}},[t._v("Backup")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}]},[t._v("Cancel")])],1)],2),t._v(" "),a("p-modal",{key:"delete_form",attrs:{name:"delete-form",title:"Delete Backup"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return t.destroy(e.data.name)}}},[t._v("Delete")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this backup?")])]),t._v(" "),a("p-modal",{key:"upload-backup",attrs:{name:"upload",title:"Upload Backup"}},[a("p-upload",{ref:"upload",attrs:{name:"file-upload",accept:"zip",multiple:!1},on:{input:t.upload}})],1)],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);