
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/discover-india","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"collections/articles"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer","image":{}},"id":"1-footer"}]},"tags":{"title":"Discover India","canonical":"http://localhost:3000/discover-india","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/discover-india/post.js")
            })
        }    