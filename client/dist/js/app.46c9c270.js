(function(t){function e(e){for(var a,r,n=e[0],d=e[1],l=e[2],m=0,u=[];m<n.length;m++)r=n[m],i[r]&&u.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var d=s[n];0!==i[d]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"02b8":function(t,e,s){},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},1523:function(t,e,s){},"2ac0":function(t,e,s){},3041:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("router-view"),s("div",{staticClass:"row"},[s("div",[s("button",{staticClass:"btn btn-outline-danger d-flex logout-button",on:{click:function(e){t.logOut()}}},[t._v("Log Out")])])])],1)},o=[],r={name:"App",mounted(){this.$store.dispatch("authenticate")},methods:{logOut(){this.$store.dispatch("logOut")}}},n=r,d=(s("034f"),s("2877")),l=Object(d["a"])(n,i,o,!1,null,null,null),c=l.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards row"},[s("div",{staticClass:"col-12 text-light"},[s("i",{staticClass:"far fa-caret-square-left d-flex justify-content-start mt-2",on:{click:t.goBack}}),s("h1",{staticClass:"text-center"},[t._v("All of your Boards, all in one place")])]),s("div",{staticClass:"col-12 text-center"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"ml-1",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),s("br"),s("button",{staticClass:"btn btn-outline-light mt-3",attrs:{type:"submit"}},[t._v("Create Board")])]),s("hr")]),t._l(t.boards,function(e){return s("div",{key:e._id,staticClass:"col-sm-12 col-md-4"},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"d-flex justify-content-between mt-2 mx-2"},[s("i",{staticClass:"far fa-trash-alt ml-2",on:{click:function(s){t.deleteBoard(e._id)}}})]),s("hr"),s("div",{staticClass:"card-body text-center mt-2"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("h6",{staticClass:"card-subtitle text-muted sub-desc"},[t._v(t._s(e.description))])])])])],1)})],2)},p=[],h={name:"boards",created(){this.$store.state.user._id?this.$router.push({name:"boards"}):this.$router.push({name:"login"})},mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)},goBack(){this.$store.dispatch("goBack")}}},v=h,b=(s("da16"),Object(d["a"])(v,u,p,!1,null,"85441e12",null)),f=b.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("div",{staticClass:"row text-center boards-view"},[s("div",{staticClass:"col-sm-12 mt-1"},[s("i",{staticClass:"far fa-caret-square-left d-flex justify-content-start mt-2 back",on:{click:t.goBack}}),s("h1",{staticClass:"text-light mt-1"},[t._v(t._s(t.board.title))]),s("div",{staticClass:"row board-details"},[s("div",{staticClass:"col-12 text-center mb-1"},[s("h4",{staticClass:"sub-desc"},[t._v('"'+t._s(t.board.description)+'"')])])]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],attrs:{type:"text",placeholder:"Create a List",required:""},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),s("br"),s("button",{staticClass:"btn btn-outline-light mt-3",attrs:{type:"submit"}},[t._v("Create List")])])])]),s("div",{staticClass:"row"},t._l(t.lists,function(t){return s("list",{staticClass:"col-sm-12 col-md-4",attrs:{listData:t}})})),s("div",[s("oneList",{attrs:{"data-toggle":"modal"}})],1)])},g=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("drop",{staticClass:"card mt-3",on:{drop:t.changeList}},[s("div",{staticClass:"card-header"}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.listData.title))]),s("hr"),t._l(t.tasks,function(t){return s("task",{key:t._id,attrs:{taskData:t}})})],2),s("div",{staticClass:"card-footer text-muted text-center"},[s("div",{staticClass:"btn-group btn-group-sm d-flex justify-content-between",attrs:{role:"group","aria-label":"Basic example"}},[s("i",{staticClass:"far fa-plus-square mx-1 point",on:{click:function(e){t.showTaskForm=!t.showTaskForm}}}),s("i",{staticClass:"fas fa-external-link-alt mx-1 point",attrs:{"data-toggle":"modal","data-target":"#exampleModal"},on:{click:function(e){t.openOne(t.listData)}}}),s("i",{staticClass:"far fa-trash-alt mx-1 point",on:{click:function(e){t.deleteList(t.listData)}}})]),t.showTaskForm?s("form",{staticClass:"mt-2",on:{submit:function(e){e.preventDefault(),t.createTask(t.newTask),t.showTaskForm=!1}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.description,expression:"newTask.description"}],attrs:{type:"text",required:""},domProps:{value:t.newTask.description},on:{input:function(e){e.target.composing||t.$set(t.newTask,"description",e.target.value)}}}),s("button",{staticClass:"btn-sm btn-info",attrs:{type:"submit"}},[t._v("Create Task")])]):t._e()])])],1)},w=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("drag",{staticClass:"task row",attrs:{"transfer-data":t.taskData}},[s("div",{staticClass:"col"},[s("ul",[s("li",{staticClass:"task inline"},[t.editedTask.completed?t._e():s("i",{staticClass:"far fa-square mr-2",on:{click:function(e){t.editedTask.completed=!t.editedTask.completed,t.markComplete(t.editedTask)}}}),t.editedTask.completed?s("i",{staticClass:"far fa-check-square mr-2",on:{click:function(e){t.editedTask.completed=!t.editedTask.completed,t.markComplete(t.editedTask)}}}):t._e(),s("div",{staticClass:"inline"},[t.editTaskDetails?t._e():s("div",{staticClass:"inline",class:{completed:t.editedTask.completed},on:{dblclick:function(e){t.editTaskDetails=!t.editTaskDetails,t.showTaskDetails},mouseover:function(e){t.showTaskDetails=!0},mouseleave:function(e){t.showTaskDetails=!1}}},[s("h5",[t._v(t._s(t.taskData.description))])]),t.editTaskDetails?s("div",{staticClass:"inline"},[s("form",{staticClass:"mt-2",on:{submit:function(e){e.preventDefault(),t.editTask(t.editedTask)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editedTask.description,expression:"editedTask.description"}],attrs:{type:"text",required:""},domProps:{value:t.editedTask.description},on:{input:function(e){e.target.composing||t.$set(t.editedTask,"description",e.target.value)}}}),s("div",{staticClass:"inline"},[s("button",{staticClass:"btn-sm btn-outline-dark mx-1",attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-check-square submitButton"})]),s("button",{staticClass:"btn-sm btn-outline-dark",on:{click:function(e){t.editTaskDetails=!t.editTaskDetails}}},[s("i",{staticClass:"fas fa-times"})])])])]):t._e()]),t.showTaskDetails?s("div",{staticClass:"inline",on:{mouseover:function(e){t.showTaskDetails=!0},mouseleave:function(e){t.showTaskDetails=!1}}},[s("i",{staticClass:"fas fa-caret-down ml-1",on:{click:function(e){t.showComments=!t.showComments,t.setActiveList(t.editedTask),t.setActiveTask(t.editedTask)}}}),s("i",{staticClass:"fas fa-comment-medical ml-4",on:{click:function(e){t.addSubCommentForm=!t.addSubCommentForm}}}),s("i",{staticClass:"far fa-trash-alt ml-2",on:{click:function(e){t.removeTask(t.editedTask)}}})]):t._e()]),t.showComments?s("div",t._l(t.taskData.subComments,function(e){return s("div",{key:e._id},[s("comments",{attrs:{commentData:e,taskId:t.taskData._id}})],1)})):t._e(),t.addSubCommentForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.description,expression:"newComment.description"}],attrs:{required:"",type:"text"},domProps:{value:t.newComment.description},on:{input:function(e){e.target.composing||t.$set(t.newComment,"description",e.target.value)}}}),s("button",{staticClass:"btn-sm btn-outline-dark mx-1",attrs:{type:"submit"},on:{click:function(e){t.addSubCommentForm=!1}}},[s("i",{staticClass:"fas fa-check-square"})])]):t._e()])])])},T=[],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comments ml-5"},[s("p",{staticClass:"inline mr-2",on:{mouseover:function(e){t.showCommentDelete=!0},mouseleave:function(e){t.showCommentDelete=!1}}},[t._v(t._s(t.commentData.description)+"\n    "),t.showCommentDelete?s("i",{staticClass:"fas fa-times inline small-x ml-1",on:{click:function(e){t.deleteComment()}}}):t._e()])])},I=[],x={name:"comments",props:["commentData","taskId"],data(){return{showCommentDelete:!1}},computed:{activeList(){return this.$store.state.activeList},activeTask(){return this.$store.state.activeTask}},methods:{deleteComment(){let t={listId:this.activeList._id,boardId:this.activeList.boardId,taskId:this.taskId,commentId:this.commentData._id};this.$store.dispatch("deleteComment",t)}},components:{}},L=x,D=Object(d["a"])(L,$,I,!1,null,null,null),y=D.exports,B={mounted(){},name:"task",props:["taskData"],data(){return{editedTask:{completed:this.taskData.completed,description:this.taskData.description,listId:this.taskData.listId,_id:this.taskData._id,boardId:this.$route.params.boardId,subComments:this.taskData.subComments},newComment:{description:"",authorId:this.taskData.authorId},showTaskDetails:!1,editTaskDetails:!1,addSubCommentForm:!1,showComments:!1,showCommentDelete:!1}},computed:{tasks(){return this.$store.state.tasks[this.editedTask._id]}},methods:{markComplete(t){this.$store.dispatch("editTask",t)},editTask(t){this.$store.dispatch("editTask",t),this.editTaskDetails=!1,this.newComment={}},addComment(){this.editedTask.subComments.push(this.newComment),this.editTask(this.editedTask),event.target.reset()},removeTask(t){this.$store.dispatch("deleteTask",t),this.showTaskDetails=!1},deleteComment(t){this.$store.dispatch("deleteComment",t)},setActiveList(t){this.$store.dispatch("setActiveList2",t)},setActiveTask(t){this.$store.dispatch("setActiveTask",t)}},components:{comments:y}},A=B,O=(s("e02f"),Object(d["a"])(A,_,T,!1,null,null,null)),U=O.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"oneList"},[s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h3",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.activeList.title))]),t._m(0)]),s("div",{staticClass:"modal-body"},[s("h4",{staticClass:"ml-1"},[t._v("Tasks:")]),t._l(t.activeTasks,function(t){return s("div",{staticClass:"ml-5"},[s("task",{attrs:{taskData:t}}),s("br")],1)})],2),t._m(1)])])])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save changes")])])}],F={name:"oneList",props:["taskData"],mounted(){},data(){return{}},computed:{activeList(){return this.$store.state.activeList},activeTasks(){return this.$store.state.activeTasks}},methods:{},components:{task:U}},q=F,N=Object(d["a"])(q,j,P,!1,null,null,null),S=N.exports,E={mounted(){this.$store.dispatch("getTasks",this.listData)},name:"list",props:["listData","taskData"],data(){return{newTask:{description:"",authorId:this.$store.state.user._id,listId:this.listData._id,boardId:this.$route.params.boardId},showTaskForm:!1}},components:{task:U,oneList:S},computed:{lists(){return this.$store.state.lists},tasks(){return this.$store.state.tasks[this.listData._id]}},methods:{deleteList(t){this.$store.dispatch("deleteList",t)},createTask(t){this.$store.dispatch("makeTask",t),event.target.reset()},openOne(t){this.$store.dispatch("setActiveTasks",t)},changeList(t){let e=t.listId;t.listId=this.listData._id,this.$store.dispatch("changeList",{task:t,boardId:this.listData.boardId,listId:this.listData._id,oldListId:e})}}},M=E,R=(s("c369"),Object(d["a"])(M,C,w,!1,null,null,null)),J=R.exports,K={name:"board",created(){this.$store.state.user._id?this.$router.push({name:"board",params:{boardId:this.boardId}}):this.$router.push({name:"login"})},data(){return{newList:{title:"",boardId:this.$route.params.boardId,authorId:this.$store.state.user._id},showOpenView:!1}},mounted(){this.$store.dispatch("getLists",this.$route.params.boardId),this.$store.dispatch("setActiveBoard",this.newList.boardId)},computed:{board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{title:"Loading..."}},lists(){return this.$store.state.lists},user(){return this.$store.state.user},activeList(){return this.$store.state.activeList}},props:["boardId"],components:{list:J,oneList:S},methods:{addList(){this.$store.dispatch("addList",this.newList)},goBack(){this.$store.dispatch("goBack")}}},V=K,W=(s("907a"),Object(d["a"])(V,k,g,!1,null,"22f29915",null)),z=W.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login login-forms"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"form-container col-12 d-flex align-items-end justify-content-center"},[t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"mr-4 login-form",attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"login-form",attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("br"),s("button",{staticClass:"btn btn-outline-light mt-3 text-center",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{staticClass:"mt-2 text-center",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"login-form mr-4",attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"login-form",attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"login-form ml-4",attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("br"),s("button",{staticClass:"btn btn-outline-light mt-3 text-center",attrs:{type:"submit"}},[t._v("Create Account")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 form-container col-12 d-flex align-items-start justify-content-center"},[s("div",{staticClass:"\n      action mt-3",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])])])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Welcome to KanBan")])])])}],Q={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},X=Q,Y=(s("c53b"),Object(d["a"])(X,G,H,!1,null,"7d854bf7",null)),Z=Y.exports;a["a"].use(m["a"]);var tt=new m["a"]({routes:[{path:"/",name:"boards",component:f},{path:"/board/:boardId",name:"board",props:!0,component:z},{path:"/login",name:"login",component:Z},{path:"*",redirect:"/"}]}),et=s("2f62"),st=s("bc3a"),at=s.n(st);a["a"].use(et["a"]);let it=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",ot=at.a.create({baseURL:it+"auth/",timeout:3e3,withCredentials:!0}),rt=at.a.create({baseURL:it+"api/",timeout:3e3,withCredentials:!0});var nt=new et["a"].Store({state:{user:{},boards:[],lists:[],tasks:{},activeBoard:{},activeList:{},activeTasks:{},activeTask:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setActiveBoard(t,e){t.activeBoard=e},setActiveList(t,e){t.activeList=e},setActiveTasks(t,e){t.activeTasks=e},setActiveTask(t,e){t.activeTask=e},setLists(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)},goBack(){tt.go(-1)}},actions:{register({commit:t,dispatch:e},s){ot.post("register",s).then(e=>{t("setUser",e.data),tt.push({name:"boards"})})},authenticate({commit:t,dispatch:e}){ot.get("authenticate").then(e=>{t("setUser",e.data),tt.push({name:"boards"})}).catch(t=>{tt.push({name:"login"})})},login({commit:t,dispatch:e},s){ot.post("login",s).then(e=>{t("setUser",e.data),tt.push({name:"boards"})})},logOut({commit:t,dispatch:e}){ot.delete("logout").then(t=>{tt.push({name:"login"})})},getBoards({commit:t,dispatch:e}){rt.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){rt.post("boards",s).then(t=>{e("getBoards")})},deleteBoard({commit:t,dispatch:e},s){rt.delete("boards/"+s).then(t=>{e("getBoards")})},setActiveBoard({commit:t,dispatch:e},s){rt.get("boards/"+s).then(e=>{t("setActiveBoard",s)})},setActiveList({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+s._id).then(e=>{t("setActiveList",e.data)})},setActiveList2({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+s.listId).then(e=>{t("setActiveList",e.data)})},setActiveTasks({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+(s._id||s.listId)+"/tasks").then(e=>{t("setActiveTasks",e.data)})},setActiveTask({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+s.listId+"/tasks/"+s._id).then(e=>{t("setActiveTask",e.data)})},getLists({commit:t,dispatch:e},s){rt.get("boards/"+s+"/lists").then(e=>{t("setLists",e.data)})},addList({commit:t,dispatch:e},s){rt.post("boards/"+s.boardId+"/lists",s).then(t=>{e("getLists",s.boardId)})},getTasks({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+(s._id||s.listId)+"/tasks").then(e=>{t("setTasks",{tasks:e.data,listId:s._id||s.listId})})},getTaskUpdate({commit:t,dispatch:e},s){rt.get("boards/"+s.boardId+"/lists/"+s.listId+"/tasks").then(e=>{t("setTasks",{tasks:e.data,listId:s.listId})})},makeTask({commit:t,dispatch:e},s){rt.post("boards/"+s.boardId+"/lists/"+s.listId+"/tasks",s).then(t=>{e("getTasks",s)})},deleteList({commit:t,dispatch:e},s){rt.delete("boards/"+s.boardId+"/lists/"+s._id).then(t=>{e("getLists",s.boardId)})},editTask({commit:t,dispatch:e},s){rt.put("boards/"+s.boardId+"/lists/"+s.listId+"/tasks/"+s._id,s).then(t=>{e("getTaskUpdate",s)})},deleteTask({commit:t,dispatch:e},s){rt.delete("boards/"+s.boardId+"/lists/"+s.listId+"/tasks/"+s._id,s).then(t=>{e("getTaskUpdate",s)})},deleteComment({commit:t,dispatch:e},s){rt.delete("boards/"+s.boardId+"/lists/"+s.listId+"/tasks/"+s.taskId+"/subComments/"+s.commentId).then(t=>{e("getTasks",s)})},changeList({commit:t,dispatch:e},s){rt.put("boards/"+s.boardId+"/lists/"+s.task.listId+"/tasks/"+s.task._id,s.task).then(t=>{e("getTasks",s),e("getTasks",{boardId:s.boardId,listId:s.oldListId})})},goBack({commit:t,dispatch:e}){t("goBack")}}}),dt=s("07fd"),lt=s.n(dt);a["a"].config.productionTip=!1,a["a"].use(lt.a),new a["a"]({router:tt,store:nt,created(){this.$store.dispatch("authenticate")},render:t=>t(c)}).$mount("#app")},"64a9":function(t,e,s){},"907a":function(t,e,s){"use strict";var a=s("b783"),i=s.n(a);i.a},b783:function(t,e,s){},c369:function(t,e,s){"use strict";var a=s("2ac0"),i=s.n(a);i.a},c53b:function(t,e,s){"use strict";var a=s("02b8"),i=s.n(a);i.a},da16:function(t,e,s){"use strict";var a=s("1523"),i=s.n(a);i.a},e02f:function(t,e,s){"use strict";var a=s("3041"),i=s.n(a);i.a}});
//# sourceMappingURL=app.46c9c270.js.map