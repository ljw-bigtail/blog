/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d74fe1b2ef665eef70bd767ec8a09547"
  },
  {
    "url": "assets/css/0.styles.cb6f3acf.css",
    "revision": "402a11d824087644a59c8de8f6f1bae4"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.380118a4.js",
    "revision": "ccce44c19f9b6402bfb7b3a48b1a503f"
  },
  {
    "url": "assets/js/10.427b923c.js",
    "revision": "f5d0e01861013b9f23f6be2bcb4bc471"
  },
  {
    "url": "assets/js/11.8e186f15.js",
    "revision": "f52363a500bef65732428043e3445d94"
  },
  {
    "url": "assets/js/12.f8b43e79.js",
    "revision": "123f5bfbc3b86bee5cc53ddf005432ee"
  },
  {
    "url": "assets/js/13.deb30c98.js",
    "revision": "19ef92d8e954d1497f2e7eea00a3d22a"
  },
  {
    "url": "assets/js/14.18d26dcb.js",
    "revision": "fe03a4f8ec5755632417964cb18f4d9e"
  },
  {
    "url": "assets/js/15.0471d095.js",
    "revision": "c42fd68cbcd8f07778aa0952a9824e6a"
  },
  {
    "url": "assets/js/16.56bc4459.js",
    "revision": "c8365981ab1b4b7a6d4ed8ce2f043fdf"
  },
  {
    "url": "assets/js/17.d1316ea3.js",
    "revision": "5589f7b09a06960589b3a640d6dee96d"
  },
  {
    "url": "assets/js/18.76d088b4.js",
    "revision": "affe166ab573505e36ac1eba8bfd56a8"
  },
  {
    "url": "assets/js/19.0f2d63ed.js",
    "revision": "d6ab7b5e37b133144100a42dbe926bb4"
  },
  {
    "url": "assets/js/20.0028bafb.js",
    "revision": "58c38eb7991188ef5a5495cda61f6cbf"
  },
  {
    "url": "assets/js/21.a3c8b3f7.js",
    "revision": "c969bae3fd0f4f983124bfd5ec8a5e0c"
  },
  {
    "url": "assets/js/22.ee955158.js",
    "revision": "200ab7f6a4c70c1d5a1205277fdf80cc"
  },
  {
    "url": "assets/js/23.a4402301.js",
    "revision": "d7743420371e61cd84d0b8f84b556adc"
  },
  {
    "url": "assets/js/24.18d04a56.js",
    "revision": "4c2189b77682059c593da879cd466840"
  },
  {
    "url": "assets/js/25.b7096003.js",
    "revision": "631c8981634e0329038b43f5cf9d7903"
  },
  {
    "url": "assets/js/26.8386db92.js",
    "revision": "dfb5d6ad676c145b9bb1806a93f05db4"
  },
  {
    "url": "assets/js/27.322f8790.js",
    "revision": "ac96a4a7b6bc0082b2e774a41b51f56a"
  },
  {
    "url": "assets/js/28.7140a56b.js",
    "revision": "bea1e5d882c3be159ba87840575a8bfd"
  },
  {
    "url": "assets/js/29.e6b5df3b.js",
    "revision": "4699fb0a1cb9632c8b1e7c42b0b8d5d7"
  },
  {
    "url": "assets/js/3.1b6dfaeb.js",
    "revision": "da3ac53ed53eeba9046f8f25ef82c9e6"
  },
  {
    "url": "assets/js/30.7100556a.js",
    "revision": "90bfb879caff477e88e9fe5781e5a2ba"
  },
  {
    "url": "assets/js/31.4fce66d3.js",
    "revision": "32d7513eb1f9e3ff5632ed738ffd9a00"
  },
  {
    "url": "assets/js/32.877bb4a5.js",
    "revision": "2b289083868ad6d13e9fe2b5cd793596"
  },
  {
    "url": "assets/js/33.8330ab3f.js",
    "revision": "c89b62615e5fd39866e7809835367736"
  },
  {
    "url": "assets/js/34.ad71d593.js",
    "revision": "bca4a5f565dbfdfba3c0d4cad47cc39c"
  },
  {
    "url": "assets/js/35.59a97915.js",
    "revision": "4c3e659f5af74c1e067093886d650e83"
  },
  {
    "url": "assets/js/36.8b96f072.js",
    "revision": "ad3076c8753090b918ddb73ce30b98b9"
  },
  {
    "url": "assets/js/37.7129fdc5.js",
    "revision": "33eb0972e091776ebb11580c24a2f0de"
  },
  {
    "url": "assets/js/38.d972fce8.js",
    "revision": "a6ea808d7b6b77fdad37fa7676eb6a5d"
  },
  {
    "url": "assets/js/39.e0ad7552.js",
    "revision": "fd84e49da6c97a55954216419a8ef718"
  },
  {
    "url": "assets/js/4.b4c703ee.js",
    "revision": "e24e1c294db7faaf32e1a421cf96c506"
  },
  {
    "url": "assets/js/40.2e0a06cd.js",
    "revision": "08efadb6d63d54f23e16da44107b6431"
  },
  {
    "url": "assets/js/41.beb5164c.js",
    "revision": "6dfc12f34d66033eee47da15513e56a8"
  },
  {
    "url": "assets/js/42.38741c3f.js",
    "revision": "c480a481bd7bb65ad26c9c9e979bba3c"
  },
  {
    "url": "assets/js/43.88837a13.js",
    "revision": "b9f36267c7c14caf7bf60a0cb07839c3"
  },
  {
    "url": "assets/js/44.355ee386.js",
    "revision": "717addc2c272157f429d0fd4598c66d1"
  },
  {
    "url": "assets/js/45.0a9fd837.js",
    "revision": "5066e361f142782fa844a6d14a380f34"
  },
  {
    "url": "assets/js/46.a4e8bb1d.js",
    "revision": "5ead362f1c7bf2fd83a570d38112fecc"
  },
  {
    "url": "assets/js/47.6e253daa.js",
    "revision": "aa5cbac066349c6ede1db5c937b5c8da"
  },
  {
    "url": "assets/js/48.e91b323e.js",
    "revision": "f544908cce78bfc4bffd71321560fb39"
  },
  {
    "url": "assets/js/49.87bbb906.js",
    "revision": "cc00b20c4e0a393aaeea208bc591cd93"
  },
  {
    "url": "assets/js/5.ef161d24.js",
    "revision": "381907fb784dd71afa95ea92081ee1f4"
  },
  {
    "url": "assets/js/50.6f913019.js",
    "revision": "8296ad058abc55768ec9ccc1c5f7c5e8"
  },
  {
    "url": "assets/js/51.0caa6d4d.js",
    "revision": "6787496ba4944e2f0ef229fb621ef263"
  },
  {
    "url": "assets/js/52.4af917de.js",
    "revision": "4173207a2acd729e628a9d202785fc4f"
  },
  {
    "url": "assets/js/53.5baa9ffa.js",
    "revision": "ab39909dd8f3b9b19351ef6f1bbc4ecf"
  },
  {
    "url": "assets/js/54.61ea0a9b.js",
    "revision": "8d102bfc5a5bd4b6a5546ade29cb4494"
  },
  {
    "url": "assets/js/55.4a157faf.js",
    "revision": "3a49a9f29ed89f3e7b8c54abf5099503"
  },
  {
    "url": "assets/js/56.edeb6056.js",
    "revision": "d56a6bfa4ced0593276f8335999d541f"
  },
  {
    "url": "assets/js/57.c1660ae8.js",
    "revision": "1a6aba556bbda580f34636b2d7971135"
  },
  {
    "url": "assets/js/58.452819ac.js",
    "revision": "0868a0da5d0c5f853b937aab70721093"
  },
  {
    "url": "assets/js/59.88ad20b0.js",
    "revision": "b2a3216461f9dc68657fd58a94bc93b4"
  },
  {
    "url": "assets/js/6.956f68d1.js",
    "revision": "35fb00c15ebd72d438d49ff9685ade99"
  },
  {
    "url": "assets/js/60.223d0170.js",
    "revision": "99a705009eef371a328d943c65e742ae"
  },
  {
    "url": "assets/js/61.04c25c99.js",
    "revision": "cbeef84a41b6de1e1176921cb126e4cc"
  },
  {
    "url": "assets/js/62.faadf772.js",
    "revision": "a7dfc3392c535f656fcabe63f2a22d5a"
  },
  {
    "url": "assets/js/63.6a13f23e.js",
    "revision": "4925e1c7c3451b2dd4a7448a5fed81e1"
  },
  {
    "url": "assets/js/64.4e2c3cbf.js",
    "revision": "15c5119ae37524929f531a212857b94e"
  },
  {
    "url": "assets/js/65.200c5ebe.js",
    "revision": "610ffd4ac37e6bcbcb9dba80454e3688"
  },
  {
    "url": "assets/js/66.3eee6f35.js",
    "revision": "4518f0ffb9de599194f7361a121f764e"
  },
  {
    "url": "assets/js/67.36a73c37.js",
    "revision": "a64fcd26024be4c691564727eaf3c339"
  },
  {
    "url": "assets/js/7.c99998a1.js",
    "revision": "97d907c71d86a0785c5df9dea5168653"
  },
  {
    "url": "assets/js/8.92e0f711.js",
    "revision": "8d2f5e6e2493ba1707cd41fa0da02ce8"
  },
  {
    "url": "assets/js/9.0e92545f.js",
    "revision": "4d8cfcf7e401400364a8990eaffb82c3"
  },
  {
    "url": "assets/js/app.7508b5ed.js",
    "revision": "b4bc4940769fd0b74c9e69f58f54fc57"
  },
  {
    "url": "blogs/Essay/2016-09-16.html",
    "revision": "82ddb4c5302dffbfab5f0916d0024132"
  },
  {
    "url": "blogs/Essay/2016-11-02.html",
    "revision": "e4a5da791d9b5ae3fd28d04d1808f34f"
  },
  {
    "url": "blogs/Essay/2017-01-05.html",
    "revision": "431b9fa0dba12d441beb5e4bc37fc918"
  },
  {
    "url": "blogs/Essay/2017-03-10.html",
    "revision": "75c0508550866a3d73f9c238252f795b"
  },
  {
    "url": "blogs/Essay/2017-08-22.html",
    "revision": "e3698ae12d72ddc28b29268d5fc12dd1"
  },
  {
    "url": "blogs/Essay/2017-08-31.html",
    "revision": "ada7971428bab2fec63726dee818ca75"
  },
  {
    "url": "blogs/Essay/2017-12-20.html",
    "revision": "cd983e51ccad686318f7c944b5014d48"
  },
  {
    "url": "blogs/Essay/2021-11-21.html",
    "revision": "90485fa20a44eec98589d537542014de"
  },
  {
    "url": "blogs/Read/2016-10-18.html",
    "revision": "b27d04a25e8bc3e38632cfd029ae81af"
  },
  {
    "url": "blogs/Read/2016-12-19.html",
    "revision": "c4bac583a30db7414c9db5dd10079bef"
  },
  {
    "url": "blogs/Read/2017-02-16.html",
    "revision": "7dfbc1ded27e12018eafb42f693458f0"
  },
  {
    "url": "blogs/Read/2020-09-03.html",
    "revision": "eafaaeaaf32a94a512f49783d600325b"
  },
  {
    "url": "blogs/Read/2021-10-20.html",
    "revision": "87d7f6f3edc2ef72e5dd13d9124537ba"
  },
  {
    "url": "blogs/Read/2022-03-11.html",
    "revision": "ffcf522a92924b64c8133610f9c9e39e"
  },
  {
    "url": "blogs/Read/2022-03-15.html",
    "revision": "fd408cd33b8e9bb86da71a32b390aa0a"
  },
  {
    "url": "blogs/Read/2022-04-13.html",
    "revision": "34e46c00c52f47063dc31317515e53ba"
  },
  {
    "url": "blogs/Read/2022-04-25.html",
    "revision": "f253b12a23414a61ec2379b04250937e"
  },
  {
    "url": "blogs/Store/2016-09-18.html",
    "revision": "6f093fed12e0953661c5203106b6067d"
  },
  {
    "url": "blogs/Store/2016-09-21.html",
    "revision": "6919d24bbadc75afab2795a33b496048"
  },
  {
    "url": "blogs/Store/2016-10-18.html",
    "revision": "252cf89727220461972425bcc83422bb"
  },
  {
    "url": "blogs/Store/2016-10-23.html",
    "revision": "da786b13eadb7103d35f0526f400191f"
  },
  {
    "url": "blogs/Store/2016-11-17.html",
    "revision": "9c02deb0c67fbef2eae731c6cdc7b12c"
  },
  {
    "url": "blogs/Store/2016-11-21.html",
    "revision": "a07b13cb3ed3c360e141f14cf99a19b7"
  },
  {
    "url": "blogs/Store/2016-12-20.html",
    "revision": "16f939de5e97704e9a7154fc521b2763"
  },
  {
    "url": "blogs/Store/2016-12-21.html",
    "revision": "859f02ccdfb8d38ddc7fdb1cbfab2c73"
  },
  {
    "url": "blogs/Store/2017-01-10.html",
    "revision": "00bf3e3697ad07c3d21fa3735ae1b5a6"
  },
  {
    "url": "blogs/Store/2017-01-14.html",
    "revision": "d5cd638230eea44979c54f36ebc641bc"
  },
  {
    "url": "blogs/Store/2017-01-18.html",
    "revision": "838c65108b3a482a69eae2ecd0a80c3f"
  },
  {
    "url": "blogs/Store/2017-02-08.html",
    "revision": "12e3788c55bfd46849cc7baae9b58e04"
  },
  {
    "url": "blogs/Store/2017-02-15.html",
    "revision": "ca481c1f2e6d828faedd467db03e6c54"
  },
  {
    "url": "blogs/Store/2017-02-21.html",
    "revision": "eb55e738be7e8baa5f26e084e456c578"
  },
  {
    "url": "blogs/Store/2017-03-14.html",
    "revision": "c48d2a433bcc2637a29c9c7e7797e502"
  },
  {
    "url": "blogs/Store/2017-04-02.html",
    "revision": "1120edf3a2f633bf9c709d6c633746a4"
  },
  {
    "url": "blogs/Store/2017-08-13.html",
    "revision": "d0d5ffaeaeeee17c7ad225713cd1025a"
  },
  {
    "url": "blogs/Store/2017-08-20.html",
    "revision": "e9e76c56e822678023474ae0bbc063f9"
  },
  {
    "url": "blogs/Store/2017-09-19.html",
    "revision": "3a3169170d490b08b7c1c241c7b21299"
  },
  {
    "url": "blogs/Store/2020-01-19.html",
    "revision": "978afad56ee8451c70748099cf82c6a7"
  },
  {
    "url": "blogs/Store/2020-03-09.html",
    "revision": "e23c7fcfc63d320786269865aab62952"
  },
  {
    "url": "blogs/Store/2020-06-18.html",
    "revision": "12709cbd980cddbe86f7a8267ee03939"
  },
  {
    "url": "blogs/Store/2021-01-01.html",
    "revision": "578d1b256c3761cfda1091ae6e92e31d"
  },
  {
    "url": "blogs/Store/2021-02-12.html",
    "revision": "f03cf2d872b1f573eb426bc5d0702ac6"
  },
  {
    "url": "blogs/Store/2021-05-01.html",
    "revision": "b6fcc0ac416e72df7e0c28e30d324a25"
  },
  {
    "url": "blogs/Store/2021-08-25.html",
    "revision": "13ac2086cf097c708976d001d0a951da"
  },
  {
    "url": "blogs/Store/2022-01-08.html",
    "revision": "37f7189557d8d29ed83ee48c94e424e9"
  },
  {
    "url": "blogs/Store/2022-01-15.html",
    "revision": "ea599dbdfa7ab970c74baa33aadcc60c"
  },
  {
    "url": "blogs/Store/2022-01-22.html",
    "revision": "1da1e27adada438974eb3e0fe972922f"
  },
  {
    "url": "blogs/Store/2022-02-13.html",
    "revision": "ed74704623dcb60adaf4f52d7571a450"
  },
  {
    "url": "blogs/Store/2022-02-26.html",
    "revision": "ea99a9c7a78036468d89aa5237037c34"
  },
  {
    "url": "blogs/Store/2022-03-01.html",
    "revision": "d9d950a41cb5a05acad5b7e507237e03"
  },
  {
    "url": "blogs/Store/2022-03-16.html",
    "revision": "6c10fe7a3873dc6f98e55ec3d00f12e6"
  },
  {
    "url": "blogs/Store/2022-03-19.html",
    "revision": "0c47a7168959cff7faf021bc3ef25114"
  },
  {
    "url": "blogs/Store/2022-04-23.html",
    "revision": "8a05510574edf3db85d4c52d3bb3d87c"
  },
  {
    "url": "blogs/Store/2022-05-13.html",
    "revision": "a93cd246a997f326735afbb3b340ffdf"
  },
  {
    "url": "blogs/Store/前端知识点结构.html",
    "revision": "6827806b52b55ee5963c7c093ee39ca5"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "969b4810eeceb240d0ef0a12d89c64e2"
  },
  {
    "url": "categories/HTML、CSS/index.html",
    "revision": "ff8aa5d9d04167be2a97a587fe596464"
  },
  {
    "url": "categories/index.html",
    "revision": "dc0c9d042c212f61dfaecfb5f0a21fcf"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "87e93ef914855657b922dae865ddbe71"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "1d271921b60b2309c2a533637bb01606"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "a41344b94600c3a1d23b6630fc02308b"
  },
  {
    "url": "categories/React/index.html",
    "revision": "2d5fd20382a6287de6bc630e8be42017"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "76fc058abf5e1ebadc3ebb466e452807"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "71581223c7ec516deb41d2e86cef2fbc"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "bd853c2fe86557807c2dfbc5e9a14f4c"
  },
  {
    "url": "categories/碎片/index.html",
    "revision": "ba0935238e0216f39e3055ee62061dcb"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "4114034063a771980eafab20ea983c67"
  },
  {
    "url": "categories/读书笔记/index.html",
    "revision": "b9085ff9f011cdbd232d088b678d85f8"
  },
  {
    "url": "images/avatar.jpg",
    "revision": "a345d410b3c8b7c2b3975f9e260ffd0d"
  },
  {
    "url": "images/bg.jpeg",
    "revision": "d737ca96222d91c24a817209be384529"
  },
  {
    "url": "images/blog/CSS那些事儿.png",
    "revision": "8a197cefea2c3203c06ba56ea3ef2037"
  },
  {
    "url": "images/blog/Head First HTML与CSS、XHTML.png",
    "revision": "6df9a3be978e367ecc1ea26bc6290546"
  },
  {
    "url": "images/blog/JavaScript性能优化.png",
    "revision": "2c99436db229aefa46663bdf659fc3cb"
  },
  {
    "url": "images/blog/JavaScript百炼成仙.png",
    "revision": "308a65da556cb2713e9964f70437b0b8"
  },
  {
    "url": "images/blog/JavaScript秘密花园.png",
    "revision": "47850adfd13059aa84d8d51793fd0a3e"
  },
  {
    "url": "images/blog/JavaScript设计模式.png",
    "revision": "1abdb2c7fc3c2b523145dfb8b71ec915"
  },
  {
    "url": "images/blog/vue-lifecycle.svg",
    "revision": "d2f8a1b763c9d39f7511b5767b3dce79"
  },
  {
    "url": "images/blog/人件.jpg",
    "revision": "ed82da70fbdf5515ebc45d3652bde878"
  },
  {
    "url": "index.html",
    "revision": "fbad80bd38b35f90225169d5fac56330"
  },
  {
    "url": "tag/Ajax/index.html",
    "revision": "e6a75efff5e33a4d19d62cd53f0a75c8"
  },
  {
    "url": "tag/BFC/index.html",
    "revision": "be44b81912824a324573cd4bb027c449"
  },
  {
    "url": "tag/Canvas/index.html",
    "revision": "6317447f018fc9143d78b013e089f3f6"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "5ee8df781f0b413ab7ee1d03c0ec530f"
  },
  {
    "url": "tag/Egg.js/index.html",
    "revision": "f814a7d6fc2eee760f8d692b83e2553c"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "c598dae3f82e1fdf088d667536831c1a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6018f0e9313d13acc477763417b17726"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "01f82f6db4a8dd6f9322b822db5c2778"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "42c57bf525f3992a661ee49694d0478c"
  },
  {
    "url": "tag/index.html",
    "revision": "0ce990eaf7dd1f6eb4164fe59bd3d4a0"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "9612da5f95cd2e538f373ac59e3fea75"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "9f661fcf06989bce4baef1412d378577"
  },
  {
    "url": "tag/JavaScript/page/3/index.html",
    "revision": "a2a741f8bec7a42692c68eaa2726cb84"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "b518111d89379f5b5144922476f610bf"
  },
  {
    "url": "tag/JSP/index.html",
    "revision": "58faff3201379214aee3a0f1e2e32273"
  },
  {
    "url": "tag/MongoDB/index.html",
    "revision": "8ee935f34a225aad2470819db06521f4"
  },
  {
    "url": "tag/Node.js/index.html",
    "revision": "13ff04aa348f57523bdc637b256cd389"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "7d397dc991aaff338e52e4a006c66bf6"
  },
  {
    "url": "tag/Pinia/index.html",
    "revision": "0ace641bdd1e08d1177ccb16ac3510cd"
  },
  {
    "url": "tag/React/index.html",
    "revision": "40601d9af497d2d72ea3723c5d4a1a08"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "71530d75fa46d3d68a3b2a99f58ae151"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "50158d9abe1596eae6cf375824eae003"
  },
  {
    "url": "tag/安全/index.html",
    "revision": "cf580c38db26ae3eb0ef867e0c8147b9"
  },
  {
    "url": "tag/思想/index.html",
    "revision": "77930b21bf6b7b0426d00638c119a252"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "93d9723f97de7bcf1eabf842e7b37d32"
  },
  {
    "url": "tag/碎片/index.html",
    "revision": "215b3d2d0c0fb2214dd8cdf1a25a1854"
  },
  {
    "url": "tag/移动端/index.html",
    "revision": "03b240ef4f1b99df1af553e994e43c59"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "b8fe463bbf44d098853d3a6f1a78c5a9"
  },
  {
    "url": "tag/统计监测/index.html",
    "revision": "cacff3d685e367cfd2090c999a47a4fc"
  },
  {
    "url": "tag/设计/index.html",
    "revision": "c5569e94a781ee411b2fbbd0e6368faf"
  },
  {
    "url": "tag/读书笔记/index.html",
    "revision": "2b27675b62edfcb4889bbd9d12646d26"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "56831995c9a9485f6b65ef0115468845"
  },
  {
    "url": "timeline/index.html",
    "revision": "831e9aa7c558d4877142bdc8c9bbdb62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
