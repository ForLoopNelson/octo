if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-c9ca2731"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Account.a2cac47a.js",revision:"a465b4dacd549f29cec7abfa4c7ea9d1"},{url:"assets/apl.d7659ff7.js",revision:"96af3379d5ea83743e9f29a64ee7ed9e"},{url:"assets/asciiarmor.49f4bc73.js",revision:"ca46031f93abe372750062075a0d2f01"},{url:"assets/asn1.6fcfed51.js",revision:"6ab2aa915d6b375addce7292e0dd1148"},{url:"assets/asterisk.25876ff6.js",revision:"b0c1b0083c3453806430bac71ce65b2c"},{url:"assets/brainfuck.9d371054.js",revision:"a605b59e7b81e33b59aa5404186ae03d"},{url:"assets/clike.ad6e876c.js",revision:"33922cb326ea5e1610d2725ac8dffb76"},{url:"assets/clojure.b7a13654.js",revision:"0af77555fdc78800c361e22be80ec746"},{url:"assets/cmake.591e85c9.js",revision:"24bb40a74571a95851facd428f34096d"},{url:"assets/cobol.484ddada.js",revision:"f41c3408db5bcbd88ced39e20217921a"},{url:"assets/coffeescript.09c52232.js",revision:"c3bd01ef1371849a0fa4f5db72fd0896"},{url:"assets/commonlisp.9ff75268.js",revision:"0ada7b0b55b847d1a88aa3f3e2380ac8"},{url:"assets/Context.6d479e4b.js",revision:"49a9937c986f4b2e6adf74cd0295a2e3"},{url:"assets/Context.7af6c152.css",revision:"9df87fc3c7c89b9c9bb5c58b8f55dc9e"},{url:"assets/crystal.7e02d8bb.js",revision:"5620dd0c9fae9f94364d0f419390e56c"},{url:"assets/css.93ef6287.js",revision:"dc94154892947e94785190207da9de89"},{url:"assets/cypher.67612307.js",revision:"c61a7dcdcf03e1cdba9f8ef1dd18bce4"},{url:"assets/d.6301cf6e.js",revision:"2ee0a1f5240c6e399b93d78a2322d1d1"},{url:"assets/Daily.3a46e1ac.js",revision:"090100bffd65c6adac0e5481c15f5e79"},{url:"assets/Dashboard.2bea541e.js",revision:"08fa86573f22da37ab84b88d0dbf4ed0"},{url:"assets/Dashboard.fae7589b.css",revision:"e3515181477bf6350b156068d2443ba9"},{url:"assets/diff.3f784cb2.js",revision:"34caaf716f10e8cd6710b3c8a688a90b"},{url:"assets/dockerfile.5b5d8493.js",revision:"021408a8f954d20f4163b71d6e0d3e91"},{url:"assets/DocumentList.c66e15fb.js",revision:"04dc8e031ab894c620cfa78faa8818c1"},{url:"assets/Documents.3864992b.js",revision:"107ae19c0f5ae5b098d35fd0b17e723b"},{url:"assets/dtd.561146fd.js",revision:"fc2400964135103278ac7830b69ea5d2"},{url:"assets/dylan.cfcc50de.js",revision:"03ec231a17c426de01d2aed0dabc36fb"},{url:"assets/ebnf.a93a46e8.js",revision:"524ae18ba834c4d8d9c7dbbba1de9283"},{url:"assets/ecl.71333b06.js",revision:"c412668b1ece2eec0a742f48f26d2992"},{url:"assets/Editor.31689d71.js",revision:"a1dbbd568ef7740cf3246e8e46d9aa17"},{url:"assets/Editor.3463089a.css",revision:"5bbf4878ea4fb93a610fca11ba7a91d0"},{url:"assets/Editor.a468e0e6.js",revision:"90d09f63f8ee1cf05c6eb25c07c5af60"},{url:"assets/eiffel.205cf89e.js",revision:"8e960296a0e86ba0403d0b58351b4919"},{url:"assets/elm.e4575d9e.js",revision:"2e742354500d26a5b14fd5d4e25879ef"},{url:"assets/erlang.4eea4551.js",revision:"9302f26cb8859622c2423dcae5ad3b8d"},{url:"assets/Example.afcc5780.js",revision:"c1ce87f5b5916d2bc0c3bd1913744462"},{url:"assets/Exporter.7dd9505c.js",revision:"41075b8f9d0c4c2ddf0a4d7859d5de05"},{url:"assets/factor.f248f302.js",revision:"67080e50d66fd3464b96cb8228dc165d"},{url:"assets/fcl.efdc847c.js",revision:"c72cc42f1e1d8343840364c3680ebffa"},{url:"assets/forth.12d71339.js",revision:"3110f135665206fe907b2b7ef25db086"},{url:"assets/fortran.fd179420.js",revision:"840ef4732392e8b64ff070de87432d9b"},{url:"assets/gas.08e2594b.js",revision:"679278b0bd7df57e1a15db84af62e26e"},{url:"assets/gherkin.19005535.js",revision:"9a65258008d12f3e5adedecaf5daf3e3"},{url:"assets/go.968a54c1.js",revision:"a5f4f547b30cde23b3b220e44ebfafd7"},{url:"assets/Graph.370dc940.css",revision:"f9310fb9b028ca3b92d9b4078ece81e1"},{url:"assets/Graph.dabfd3aa.js",revision:"f7c31c8770b222f1641d2153ff525a4c"},{url:"assets/groovy.37da6a89.js",revision:"aa2c63cf7ff5460dfba0f03c00788b7b"},{url:"assets/haskell.91879e9a.js",revision:"feb1b217d7be8093452ca6d65824ffdf"},{url:"assets/haxe.2fa64f32.js",revision:"46baa975a051477fdecfa8613e146f85"},{url:"assets/http.57326e17.js",revision:"107db75b8121472edfe62ddffbca107b"},{url:"assets/idl.1f4cd5fb.js",revision:"a7bee65c6742354ffe5b3fba65313292"},{url:"assets/Importer.de7fe63d.js",revision:"cb38c0942586beed17728c718cc5a02a"},{url:"assets/index.66f6e97d.css",revision:"ce252cdc7ab3404dead8bef7c052279a"},{url:"assets/index.9ca76a06.js",revision:"dfc9ce33b14b880b48371f20639153bc"},{url:"assets/index2.3b4726d7.js",revision:"9ef160e41defb3f7424be2ba28ce4a70"},{url:"assets/index3.e822329a.js",revision:"70ed0797a4a9a9576eed8bc2d2f246d3"},{url:"assets/index4.162fe589.js",revision:"a567c49525647c5a06b7e31c748666ec"},{url:"assets/index5.3b861533.js",revision:"d08df3ca5223031a414c86bafa2a020a"},{url:"assets/index6.5db3ae96.js",revision:"7a0c9fd06c039a59cb7d45b9417703ab"},{url:"assets/index7.b8abd2c9.js",revision:"8e9e532d687fe40a270efdab33720749"},{url:"assets/index8.53fac5d8.js",revision:"694622a63ce5fcc6e67c5dfa795d55c8"},{url:"assets/index9.09deef9a.js",revision:"fc9ce1fc58d554aa33af8bbb870bb64d"},{url:"assets/javascript.ffdd9cb0.js",revision:"66e72fd276a22e8449c751772667ace8"},{url:"assets/jinja2.481814d6.js",revision:"e307f442269236f2913ffa9b5d37fd61"},{url:"assets/julia.f9d4434e.js",revision:"940fd94dc537f2e9d661e07806f35735"},{url:"assets/livescript.4f9be655.js",revision:"452bea739e34bd46de007e65319bab7e"},{url:"assets/lua.9fadbe9b.js",revision:"98781a37dd8939d84970d47aef23df78"},{url:"assets/MarkdownEditor.umd.9fc6c46c.js",revision:"7655ab6e323620070e5ca270ffac925d"},{url:"assets/mathematica.585695a8.js",revision:"62201e2b523046feb75f140b86a3d97c"},{url:"assets/mbox.67909b2a.js",revision:"d8869ae8f716538a09e2af15373d1757"},{url:"assets/mirc.00aac4fa.js",revision:"a6429ce8358b058babae489879ebe689"},{url:"assets/mllike.cc290c31.js",revision:"e5aac697009150bbfe2c238bd1ce159b"},{url:"assets/modelica.8035c96f.js",revision:"2a8a8c944de73bcd45de866e5094724a"},{url:"assets/moment.08a7f518.js",revision:"beda76fb0de9a07cc44258805a679029"},{url:"assets/mscgen.1378428c.js",revision:"6ba1e398f9224caeed4f88cabc82a43a"},{url:"assets/mumps.723645f0.js",revision:"e156897ae8b7d101dd0abd4739c58069"},{url:"assets/nginx.2a396141.js",revision:"e3700b1e4ae760ec0a0c6215289be60b"},{url:"assets/nsis.1864987b.js",revision:"e428360d40876aea7fe4d3a5d7f3212b"},{url:"assets/ntriples.5e85b498.js",revision:"82acafaa8e75fd388915ac8dd551a954"},{url:"assets/octave.e2869809.js",revision:"4e52f4c59a051a4f2b9d4123386a71f6"},{url:"assets/oz.9efdff00.js",revision:"50bf43d4479963ac188676d8e0d985a3"},{url:"assets/pascal.ccf456c5.js",revision:"381c60f8f746cd1eff17d7dcfc43346e"},{url:"assets/perl.8b0dabb7.js",revision:"c2b529e2620a25a8ced0a1753419eead"},{url:"assets/pig.aef0cd2b.js",revision:"a57c9039dbee7d2300d41265cea58336"},{url:"assets/powershell.8566efa4.js",revision:"0d5150d375cc36b24d53556d340c9b7e"},{url:"assets/Privacy.214ec2e7.js",revision:"4787f96d00acf80a1d81e14ebb98f540"},{url:"assets/properties.4a96021e.js",revision:"889f55ab17d61e42e540a0d33e6fbdce"},{url:"assets/protobuf.0043ca0a.js",revision:"83dff30af38af27880c2dd45916700b2"},{url:"assets/puppet.e4eb8b2c.js",revision:"4a1d113f6a0fd23f8036e7aa1fc8f717"},{url:"assets/python.4482af7f.js",revision:"02577afdcde5cd13aaa68785f29b1f04"},{url:"assets/q.3d70936b.js",revision:"5585434549d45d394e40b561b07b2bfc"},{url:"assets/QuickAction.1ae87acc.js",revision:"f2dd8f60c59840f853e4115a5775fbfb"},{url:"assets/r.0e1b3da6.js",revision:"1586c55bf83a320ddefc5ed386c1633b"},{url:"assets/rpm.32e1d1d1.js",revision:"810c612dd0f0b6eac13690a2b8b277bf"},{url:"assets/ruby.ca2f4e9d.js",revision:"e4ee4eacb037cdb769e950343b15b2b8"},{url:"assets/sas.d91e1ba6.js",revision:"c16288466c61f18767ce79f8af28f1c9"},{url:"assets/scheme.224e66ab.js",revision:"4c1a3965d429a4686fd4f78776e41a87"},{url:"assets/shell.fd1d320d.js",revision:"226409ed818d575c2329a0f93b5eb1c5"},{url:"assets/sieve.fb45d0a1.js",revision:"a166857092ce845abcf13e3546267edf"},{url:"assets/simple-mode.122641d7.js",revision:"be753520725dd863df6da8723cbd4b18"},{url:"assets/smalltalk.8d612634.js",revision:"f98fc2640ad4e17f34b5592947f13ae7"},{url:"assets/solr.9a62d51e.js",revision:"637d47ed7442c79cc0d28167b1c7eae3"},{url:"assets/sparql.443b07ed.js",revision:"bee36162091f7b48d18eb2bdc30729da"},{url:"assets/spreadsheet.e4ea7f05.js",revision:"9a6fe144c7ef04fd3379b07e3f941ed5"},{url:"assets/sql.fa30623d.js",revision:"e1bf4692273c1e1faaeb0d8e8a949658"},{url:"assets/stex.2d074a6d.js",revision:"676b9565958977011188a58d330ed833"},{url:"assets/stylus.b2043a42.js",revision:"5291cfdf6f218c4aada04ce77c44ff40"},{url:"assets/swift.c8735c5a.js",revision:"d0c647f5a799d4e097210ae45b8c5a2b"},{url:"assets/TagList.424cb7f2.css",revision:"2638b2e318445e7b01308bc8db487a30"},{url:"assets/TagList.ee053ea3.js",revision:"37d5ebe28fd153d79f0baffe2b89ea51"},{url:"assets/tcl.489dde56.js",revision:"bea48a84659d199205de6553da1c2a7a"},{url:"assets/Terms.404210a0.js",revision:"95096fbd1148869f3b1b02fefe5decea"},{url:"assets/textile.0af9a120.js",revision:"7e6341b2560036f987c058bfe4035686"},{url:"assets/TheLeftSidebar.2cbbcc43.js",revision:"1ce442e1e11f14e53dd763023f9aa1dd"},{url:"assets/TheLeftSidebar.94c0ad68.css",revision:"55046fb14e09236a95b963991dc62fea"},{url:"assets/TheRightSidebar.d6f461b1.js",revision:"22f799bb3e4c6995220477c078ff78fc"},{url:"assets/TheSettings.57e187ae.js",revision:"08fdc0706bb09c41748d6917d146a74f"},{url:"assets/tiddlywiki.1496f620.js",revision:"8ebf66bad77967f8043cdf42d251fb0e"},{url:"assets/tiki.0555efd5.js",revision:"67f416790cda2dbffeb860a38cb899b7"},{url:"assets/toml.a03d956c.js",revision:"fed652bb9c65f403c43baf967431b6bb"},{url:"assets/troff.16f2e5f7.js",revision:"c92ccb4a19607b0589dc22c2533f1d40"},{url:"assets/ttcn-cfg.9df8aadf.js",revision:"272bc9dbb676ecf3a9bc9d5f8505e73c"},{url:"assets/ttcn.aa5b33a1.js",revision:"468c3cd0d66c94ef05c05e601b1ff27f"},{url:"assets/turtle.8aaea1ac.js",revision:"2059e2e7d1ef50d0b0ab627a466fdb85"},{url:"assets/vb.05d4b252.js",revision:"06936aec49a81320c6e8a9af1285904d"},{url:"assets/vbscript.2e5a738e.js",revision:"ac11e10e4bfd4a4a3df1736003c58897"},{url:"assets/velocity.a2f3ae96.js",revision:"b8144f5754c6995efece4475a65acfca"},{url:"assets/vendor.71bc5b01.js",revision:"cca3cf4ff68538cfbc20aac64c45b5e3"},{url:"assets/verilog.e926a7ed.js",revision:"3935c22c96fbe9704f204cc3d80a462a"},{url:"assets/vhdl.87e30b3f.js",revision:"ee90e41670c64f50fffaa7f66429981c"},{url:"assets/wast.01c8c9ac.js",revision:"54736e0f64651bedd4b51cb3a749da20"},{url:"assets/webidl.ab2c6d52.js",revision:"1a0080aaf381dedfa158a25a98544f7e"},{url:"assets/xquery.f763bdfe.js",revision:"b85b59c34ddf8e9a621dc7d3f9fc0cb6"},{url:"assets/yacas.01561624.js",revision:"257f7b09fd6079c82b9cb703707f6bb1"},{url:"assets/yaml.6829a47d.js",revision:"a5e27533279f26e637e8ad558d5f7cdc"},{url:"assets/z80.2e7fc435.js",revision:"97024fba24a8a289f5523898758ce644"},{url:"index.html",revision:"218f359e4fa3cd7684a9026cc6d4ea19"},{url:"https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap",revision:"v1"},{url:"./img/icons/icon-16x16.png",revision:"d8460716b5cd885eb1a0e82faec8be84"},{url:"./img/icons/icon-32x32.png",revision:"0648dbafd680db0aa1d66728522bbcdf"},{url:"./img/icons/icon-60x60.png",revision:"eb5d06e9c65f79ccf70959bf089a70ba"},{url:"./img/icons/icon-76x76.png",revision:"6e56bcf7842155f522e850c011c25a4d"},{url:"./img/icons/icon-120x120.png",revision:"13c742b273a468755b10c780c44bc47b"},{url:"./img/icons/icon-144x144.png",revision:"d06b829ddae5f108de71d8d8282fb473"},{url:"./img/icons/icon-150x150.png",revision:"a3d10d2b42958143ef773703569ba2a4"},{url:"./img/icons/icon-152x152.png",revision:"a2399edd0eafdddb9b1b21390fa31bea"},{url:"./img/icons/icon-180x180.png",revision:"d26b0d2085385666ad94e42487c79a75"},{url:"./img/icons/icon-192x192.png",revision:"337a577540c62153dc9266a1be964015"},{url:"./img/icons/icon-512x512.png",revision:"cfc0b70376f8694deca7cd75934e40b2"},{url:"./img/icons/icon-maskable-192x192.png",revision:"bb52d20523deedf0374b75c663493e7d"},{url:"./img/icons/icon-maskable-512x512.png",revision:"6e86981218b2cd18c24840e1853813e7"},{url:"manifest.webmanifest",revision:"bae4e26b5077bdc67b0b7c0f998348cd"},{url:"./img/icons/icon-16x16.png",revision:"d8460716b5cd885eb1a0e82faec8be84"},{url:"./img/icons/icon-32x32.png",revision:"0648dbafd680db0aa1d66728522bbcdf"},{url:"./img/icons/icon-60x60.png",revision:"eb5d06e9c65f79ccf70959bf089a70ba"},{url:"./img/icons/icon-76x76.png",revision:"6e56bcf7842155f522e850c011c25a4d"},{url:"./img/icons/icon-120x120.png",revision:"13c742b273a468755b10c780c44bc47b"},{url:"./img/icons/icon-144x144.png",revision:"d06b829ddae5f108de71d8d8282fb473"},{url:"./img/icons/icon-150x150.png",revision:"a3d10d2b42958143ef773703569ba2a4"},{url:"./img/icons/icon-152x152.png",revision:"a2399edd0eafdddb9b1b21390fa31bea"},{url:"./img/icons/icon-180x180.png",revision:"d26b0d2085385666ad94e42487c79a75"},{url:"./img/icons/icon-192x192.png",revision:"337a577540c62153dc9266a1be964015"},{url:"./img/icons/icon-512x512.png",revision:"cfc0b70376f8694deca7cd75934e40b2"},{url:"./img/icons/icon-maskable-192x192.png",revision:"bb52d20523deedf0374b75c663493e7d"},{url:"./img/icons/icon-maskable-512x512.png",revision:"6e86981218b2cd18c24840e1853813e7"},{url:"manifest.webmanifest",revision:"bae4e26b5077bdc67b0b7c0f998348cd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/\/manifest.json$/]})),e.registerRoute(/^https:\/\/cdnjs.cloudflare.com\/.*/,new e.StaleWhileRevalidate({cacheName:"cloudflare-cache",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts.gstatic.com\/s\/.*/,new e.StaleWhileRevalidate({cacheName:"font-cache",plugins:[]}),"GET")}));
