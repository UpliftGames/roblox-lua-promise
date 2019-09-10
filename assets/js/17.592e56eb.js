(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{303:function(t,a,e){"use strict";e.r(a);var s=e(1),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{align:"center"}},[t._v("Lemur")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("a",{attrs:{href:"https://travis-ci.org/LPGhatguy/lemur"}},[e("img",{attrs:{src:"https://api.travis-ci.org/LPGhatguy/lemur.svg?branch=master"}})]),t._v(" "),e("a",{attrs:{href:"https://coveralls.io/github/LPGhatguy/lemur?branch=master"}},[e("img",{attrs:{src:"https://coveralls.io/repos/github/LPGhatguy/lemur/badge.svg?branch=master"}})])]),t._v(" "),e("div",{attrs:{align:"center"}},[e("strong",[t._v("L")]),t._v("ua "),e("strong",[t._v("Emu")]),t._v("lation of "),e("strong",[t._v("R")]),t._v("oblox APIs\n")]),t._v(" "),e("div",[t._v(" ")]),t._v(" "),e("h2",{attrs:{id:"problem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#problem","aria-hidden":"true"}},[t._v("#")]),t._v(" Problem")]),t._v(" "),e("p",[t._v("Currently, there's no way to test Roblox code on an open-source CI system like Travis-CI or Jenkins. Lemur tries to help solve the problem by "),e("em",[t._v("emulating")]),t._v(" some of Roblox's tree and function semantics.")]),t._v(" "),e("p",[t._v("Current feature coverage is detailed in "),e("router-link",{attrs:{to:"/modules/lemur/FEATURES.html"}},[t._v("FEATURES.md")])],1),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Lemur requires:")]),t._v(" "),e("ul",[e("li",[t._v("Lua 5.1")]),t._v(" "),e("li",[t._v("LuaFileSystem ("),e("code",[t._v("luarocks install luafilesystem")]),t._v(")")])]),t._v(" "),e("p",[t._v("Clone the Git repository wherever, then call "),e("code",[t._v("require")]),t._v(" on it.")]),t._v(" "),e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("To use Lemur, create a "),e("em",[t._v("Habitat")]),t._v(" and load pieces of the filesystem into the tree:")]),t._v(" "),e("div",{staticClass:"language-lua extra-class"},[e("pre",{pre:!0,attrs:{class:"language-lua"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" lemur "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lemur"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Create a Habitat")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" habitat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lemur"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Habitat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" ReplicatedStorage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" habitat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("game"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ReplicatedStorage"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Load `src/roblox` into ReplicatedStorage as a set of `ModuleScript` objects")]),t._v("\nhabitat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadFromFs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/roblox"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ReplicatedStorage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Locate src/roblox/CoolModule.lua from inside the habitat")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" module "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ReplicatedStorage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CoolModule\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Load it!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("local")]),t._v(" CoolModule "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" habitat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- Invoke a method on our Roblox module!")]),t._v("\nCoolModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"contributing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contributing","aria-hidden":"true"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),e("p",[t._v("Lemur is, by nature, always going to be an incomplete implementation of the Roblox API.")]),t._v(" "),e("p",[t._v("If there are any APIs you'd like that are missing, feel free to open an "),e("a",{attrs:{href:"https://github.com/LPGhatguy/lemur/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue on GitHub"),e("OutboundLink")],1),t._v("!")]),t._v(" "),e("h2",{attrs:{id:"license"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#license","aria-hidden":"true"}},[t._v("#")]),t._v(" License")]),t._v(" "),e("p",[t._v("Lemur is available under the MIT license. See "),e("router-link",{attrs:{to:"/modules/lemur/LICENSE.html"}},[t._v("LICENSE.md")]),t._v(" for details.")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);