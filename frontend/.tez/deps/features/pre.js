
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import titlecontmedia from "/@/components/titlecont-media.vue";import titlecontlist from "/@/components/titlecontlist.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/features","slots":{"default":[{"name":"titlecont-media","data":{"title":"Lorem ipsum dolor sit amet","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper arcu sit amet nulla sodales sodales. In tincidunt viverra lectus sit amet interdum. Aliquam vitae tellus a ante vestibulum aliquam sit amet sed lorem. Donec tristique vitae urna efficitur fermentum. Curabitur varius nisl nisi, et cursus odio luctus ut. Aliquam condimentum magna sapien. Vivamus metus mi, lacinia at suscipit sed, ultrices at mauris. Sed sodales leo ex, quis porttitor justo egestas bibendum.\n\nAliquam tempor fermentum nisi, ac euismod dolor scelerisque vehicula. Duis tortor diam, mattis eget aliquam sed, pellentesque vel leo. Nunc quis lorem non ante consequat posuere sed ac tortor. Vivamus ac aliquet metus, vel tincidunt dui. Pellentesque semper neque sed condimentum maximus. Pellentesque condimentum cursus consequat. Donec sollicitudin auctor felis, a sodales metus lacinia eu. Nullam eleifend dui vel fringilla dictum. ","componentName":"titlecont-media","image":{"name":"features-mobile.webp","alternativeText":"Features Mobile","caption":"features-mobile.webp","width":665,"height":730,"formats":{"thumbnail":{"name":"thumbnail_features-mobile.webp","hash":"thumbnail_features_mobile_5b45819026","ext":".webp","mime":"image/webp","width":142,"height":156,"size":7.26,"url":"/uploads/thumbnail_features_mobile_5b45819026.webp"},"small":{"name":"small_features-mobile.webp","hash":"small_features_mobile_5b45819026","ext":".webp","mime":"image/webp","width":455,"height":500,"size":34.38,"url":"/uploads/small_features_mobile_5b45819026.webp"}},"hash":"features_mobile_5b45819026","ext":".webp","mime":"image/webp","size":64.26,"url":"/uploads/features_mobile_5b45819026.webp","updatedAt":"2022-11-15T12:59:26.235Z"},"titleContentMediaList1":[]},"id":"0-titlecont-media"},{"name":"titlecontlist","data":{"componentName":"titlecontlist","title":"Lorem ipsum dolor sit amet","titleContent3Col":[{"title":"Aliquam eleifend massa ut enim ornare rhoncus","description":"Aliquam eleifend massa ut enim ornare rhoncus. Integer porttitor nisl lectus, in dapibus dui commodo sit amet. Cras venenatis gravida dolor eget sagittis. Praesent nibh lectus, porttitor ut dui nec, lacinia lacinia mauris. Fusce elementum non magna quis molestie. Nam et mauris eu augue cursus feugiat. Vivamus tempus ultrices ante et rhoncus. Vivamus ultrices malesuada viverra. Morbi ex purus, iaculis id tellus nec, pulvinar gravida purus. Suspendisse ullamcorper dolor metus, in tristique metus luctus gravida.","componentName":"titlecontBorderCard"},{"title":"Etiam vulputate lacus eu sem fringilla","description":"Etiam vulputate lacus eu sem fringilla, vitae faucibus velit ornare. In non scelerisque diam. Vestibulum velit felis, tincidunt at lacinia id, tempor ac lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur laoreet, enim non volutpat aliquam, sapien tortor fringilla metus, vitae scelerisque diam turpis sed odio. Mauris sit amet odio ut justo iaculis aliquet ut vitae erat. Donec risus nulla, tempus sit amet est ac, gravida venenatis sem.","componentName":"titlecontBorderCard"},{"title":"Morbi tincidunt diam id","description":"Morbi tincidunt diam id erat ornare, tempus feugiat orci porttitor. Nunc eleifend, turpis eu auctor convallis, orci nulla mattis sem, sit amet sodales leo est quis velit. Phasellus posuere nisl laoreet sem viverra imperdiet. Cras ultrices gravida accumsan. Morbi id mi mollis, convallis mauris id, ultricies neque. Aenean tempus orci non ultricies convallis. ","componentName":"titlecontBorderCard"},{"title":"Nunc et diam neque","description":"Duis commodo gravida purus eu auctor. Ut consequat nisi in interdum venenatis. Praesent pharetra erat ante, eu pretium nisi efficitur in. Nullam vel dignissim nulla. Duis interdum bibendum ultricies. Nunc fringilla nisi faucibus, tincidunt augue sit amet, varius ante. Suspendisse blandit nec erat nec tempus. Phasellus eget quam vel libero consequat scelerisque vel at sem.","componentName":"titlecontBorderCard"},{"title":"Fusce egestas lorem vel nibh","description":"Fusce egestas lorem vel nibh dapibus, nec blandit metus bibendum. Quisque molestie mauris lectus, vitae cursus velit maximus eu. Pellentesque ac tincidunt lectus. Pellentesque ut leo erat. Nullam iaculis lacus eu nisi tristique aliquam. Nam mauris ante, iaculis ac hendrerit in, placerat auctor metus. Maecenas mollis nibh elit, et hendrerit lorem interdum vel. Suspendisse dignissim gravida urna, ut rhoncus libero elementum non. Cras dui mi, tempor eget efficitur et.","componentName":"titlecontBorderCard"}]},"id":"1-titlecontlist"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer","image":{}},"id":"1-footer"}]},"tags":{"title":"Blogs Site","canonical":"http://localhost:3000/features","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"titlecont-media":titlecontmedia,"titlecontlist":titlecontlist,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/features/post.js")
            })
        }    