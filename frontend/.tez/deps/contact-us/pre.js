
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import contactus from "/@/components/contact-us.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/contact-us","slots":{"default":[{"name":"contact-us","data":{"title":"Contact Us","componentName":"contact-us","slotName":"contact us","image":{}},"id":"0-contact-us"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer","image":{}},"id":"1-footer"}]},"tags":{"title":"Contact Us","canonical":"http://localhost:3000/contact-us","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"contact-us":contactus,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/contact-us/post.js")
            })
        }    