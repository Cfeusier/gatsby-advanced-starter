webpackJsonp([0xa6cd3c51205b1000],{"./src/components/PostListing/PostListing.jsx":function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),i=r(l),u=o("./node_modules/gatsby-link/index.js"),c=r(u),d=function(e){function t(){return n(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return i.default.createElement("div",null,e.map(function(e){return i.default.createElement(c.default,{to:e.path,key:e.title},i.default.createElement("h1",null,e.title))}))},t}(i.default.Component);t.default=d,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/clark/Code/projects/live/www/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/clark/Code/projects/live/www/node_modules/babel-plugin-lodash/lib/index.js","/Users/clark/Code/projects/live/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/clark/Code/projects/live/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/clark/Code/projects/live/www/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/clark/Code/projects/live/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/clark/Code/projects/live/www/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tag.jsx':function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=o("./node_modules/react/react.js"),i=r(l),u=o("./node_modules/react-helmet/lib/Helmet.js"),c=r(u),d=o("./src/components/PostListing/PostListing.jsx"),p=r(d),f=o("./config/SiteConfig.js"),b=r(f),m=function(e){function t(){return n(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return i.default.createElement("div",{className:"tag-container"},i.default.createElement(c.default,{title:'Posts tagged as "'+e+'" | '+b.default.siteTitle}),i.default.createElement(p.default,{postEdges:t}))},t}(i.default.Component);t.default=m;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-51b94cc18fc70aadd42d.js.map