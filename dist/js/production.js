"use strict";angular.module("ayush",["ngRoute","ngSanitize"]).config(["$routeProvider",function(t){t.when("/",{templateUrl:"templates/about.html"}).when("/explore",{templateUrl:"templates/explore.html"}).when("/skills",{templateUrl:"templates/skills.html"}).when("/projects",{templateUrl:"templates/projects.html"}).when("/blog",{controller:"BloggerCtrl",templateUrl:"templates/blog.html"}).when("/projects/spiffout",{controller:"SpiffoutCtrl",templateUrl:"templates/projects/spiffout.html"}).when("/projects/inloop",{controller:"InloopCtrl",templateUrl:"templates/projects/inloop.html"}).when("/projects/dailyrounds",{controller:"DailyroundsCtrl",templateUrl:"templates/projects/dailyrounds.html"}).when("/projects/pediatric",{controller:"PediatricCtrl",templateUrl:"templates/projects/pediatriconco.html"}).when("/projects/openeyecad",{controller:"OpeneyecadCtrl",templateUrl:"templates/projects/openeyecad.html"}).when("/projects/canceranalysis",{controller:"CancerAnalysisCtrl",templateUrl:"templates/projects/canceranalysis.html"}).when("/projects/openhealth",{controller:"OpenhealthCtrl",templateUrl:"templates/projects/openhealth.html"}).when("/projects/wordmatch",{controller:"WordmatchCtrl",templateUrl:"templates/projects/wordmatch.html"}).when("/projects/bloodcollective",{controller:"BloodcollectiveCtrl",templateUrl:"templates/projects/bloodcollective.html"}).when("/projects/birthday",{controller:"BirthdayCtrl",templateUrl:"templates/projects/birthday.html"}).when("/projects/kiwi",{controller:"KiwiCtrl",templateUrl:"templates/projects/kiwi.html"}).when("/projects/ayusharma",{controller:"AyusharmaCtrl",templateUrl:"templates/projects/ayusharma.html"}).when("/projects/firstapi",{controller:"FirstapiCtrl",templateUrl:"templates/projects/firstapi.html"}).when("/projects/india",{controller:"IndiaCtrl",templateUrl:"templates/projects/india.html"}).when("/projects/medicalassist",{controller:"MedicalassistCtrl",templateUrl:"templates/projects/medicalassit.html"}).when("/projects/pixelcount",{controller:"PixelcountCtrl",templateUrl:"templates/projects/pixelcount.html"}).when("/projects/rajlive",{controller:"RajliveCtrl",templateUrl:"templates/projects/rajlive.html"}).when("/projects/firefoxos",{controller:"FirefoxOSCtrl",templateUrl:"templates/projects/firefoxos.html"}).when("/projects/igniters",{controller:"IgnitersCtrl",templateUrl:"templates/projects/igniters.html"}).when("/projects/dreambox",{controller:"DreamBoxCtrl",templateUrl:"templates/projects/dreambox.html"}).when("/projects/keyboard",{controller:"KeyBoardCtrl",templateUrl:"templates/projects/keyboard.html"}).when("/projects/diseasetargetviz",{controller:"DiseaseTargetvizCtrl",templateUrl:"templates/projects/diseasetargetviz.html"}).when("/projects/rsscrawler",{controller:"RssCrawlerCtrl",templateUrl:"templates/projects/rsscrawler.html"}).when("/resume",{templateUrl:"templates/resume.html"}).when("/milestone",{templateUrl:"templates/milestones.html"}).when("/contact",{templateUrl:"templates/contact.html"}).when("/contribution",{controller:"ContributionCtrl",templateUrl:"templates/osc.html"})}]).controller("SpiffoutCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("InloopCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("DailyroundsCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("PediatricCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("OpeneyecadCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("CancerAnalysisCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("OpenhealthCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("WordmatchCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("BirthdayCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("KiwiCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("AyusharmaCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("FirstapiCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("IndiaCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("MedicalassistCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("PixelcountCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("RajliveCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("FirefoxOSCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("IgnitersCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("DreamBoxCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("KeyBoardCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("BloodcollectiveCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("DiseaseTargetvizCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("RssCrawlerCtrl",function(){$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})}).controller("CollapsibleCtrl",["$scope",function(t){$(document).ready(function(){$(".collapsible").collapsible({accordion:!1}),$(".materialboxed").materialbox(),$(".tooltipped").tooltip({delay:50})})}]).controller("InstaCtrl",["$scope","$http",function(t,e){t.method={},$(".materialboxed").materialbox(),e.jsonp("https://api.instagram.com/v1/users/1393385187/media/recent/?access_token=1393385187.1677ed0.6d9d9f6f1d6b4b59ab11526943cf1b9f",{params:{callback:"JSON_CALLBACK",s:"MSFT GE",f:"nab"}}).success(function(e,o,l,r){t.method.instagram=e.data}).error(function(t){console.log(t)})}]).controller("BloggerCtrl",["$scope","$http",function(t,e){t.method={};var o={method:"GET",url:"https://www.googleapis.com/blogger/v3/blogs/410443138095270845/posts?key=AIzaSyAatG2VWY3lg9NFOaOK7fYqjYhNamWg6JQ"};e(o).success(function(e){t.method.blogposts=e.items}).error(function(t){console.log(t)})}]).controller("ContributionCtrl",["$rootScope",function(t){}]).directive("header",[function(){var t={restrict:"EA",templateUrl:"templates/directive/header.html",controller:["$scope",function(t){t.slideIt=function(){$(".links-mobile").slideToggle("slow")}}]};return t}]).directive("footer",[function(){var t={restrict:"EA",templateUrl:"templates/directive/footer.html"};return t}]).directive("links",[function(){var t={restrict:"EA",templateUrl:"templates/directive/links.html"};return t}]).directive("loading",["$http",function(t){var e={restrict:"EA",templateUrl:"templates/directive/loading.html",link:function(e,o,l){e.isLoading=function(){return t.pendingRequests.length},e.$watch(e.isLoading,function(t){t?o.show():o.hide()})}};return e}]).run(["$rootScope","$http",function(t,e){t.rootmethod={},e.defaults.headers.common.Authorization="Basic YXl1c2hhcm1hOjJjZmIwMzFkNDljMmM0MjY1MjEwZGI4Y2YyNjkwOWY4MjUwOWRhY2I=";var o={method:"GET",url:"https://api.github.com/user/repos?per_page=200&type=owner"};e(o).success(function(o){t.rootmethod.reposcount=o.length,t.rootmethod.commitscount=0,t.rootmethod.langset=[],t.rootmethod.follow=0,_.forEach(o,function(o){e.get("https://api.github.com/repos/"+o.full_name+"/commits?per_page=999&author=ayusharma").then(function(e){t.rootmethod.commitscount=t.rootmethod.commitscount+e.data.length})}),_.forEach(o,function(e){null!=e.language&&(t.rootmethod.langset.push(e.language),t.rootmethod.langset=_.uniq(t.rootmethod.langset,function(t){return t}))}),e.get("https://api.github.com/user/followers?per_page=200").then(function(e){t.rootmethod.follow=e.data.length})}).error(function(t){console.log(t)}),e.get("https://api.github.com/repos/kinto/kinto/commits?author=ayusharma").then(function(e){t.rootmethod.kintocommits=e.data.length}),e.get("https://api.github.com/repos/kinto/kinto-admin/commits?author=ayusharma").then(function(e){t.rootmethod.kinto_admin_kintocommits=e.data.length}),e.get("https://api.github.com/repos/biojs-edu/biojs-vis-snipspector/commits?author=ayusharma").then(function(e){t.rootmethod.biojs_edu_biojs_vis_snipspector=e.data.length}),e.get("https://api.github.com/repos/biojs/edu/commits?author=ayusharma").then(function(e){t.rootmethod.biojs_edu=e.data.length}),e.get("https://api.github.com/repos/biojs/biojs.net2/commits?author=ayusharma").then(function(e){t.rootmethod.biojs_net2=e.data.length}),e.get("https://api.github.com/repos/biojs/registry-ui/commits?author=ayusharma").then(function(e){t.rootmethod.biojs_registry_ui=e.data.length}),e.get("https://api.github.com/repos/biojs/slush-biojs/commits?author=ayusharma").then(function(e){t.rootmethod.biojs_slush_biojs=e.data.length}),e.get("https://api.github.com/repos/biojs/biojs.net2/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.biojs_net2_issues=e.data}),e.get("https://api.github.com/repos/kinto/kinto/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.kintoissues=e.data}),e.get("https://api.github.com/repos/kinto/kinto-admin/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.kinto_admin_kintoissues=e.data}),e.get("https://api.github.com/repos/biojs-edu/biojs-vis-snipspector/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.biojs_vis_snipspector_issues=e.data}),e.get("https://api.github.com/repos/biojs/edu/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.biojs_edu_issues=e.data}),e.get("https://api.github.com/repos/biojs/registry-ui/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.biojs_registry_ui_issues=e.data}),e.get("https://api.github.com/repos/biojs/slush-biojs/issues?creator=ayusharma&state=all").then(function(e){t.rootmethod.biojs_slush_biojs_issues=e.data,console.log(e.data)})}]),$(window).resize(function(){console.log("resized"),$(".links-mobile").slideUp()});