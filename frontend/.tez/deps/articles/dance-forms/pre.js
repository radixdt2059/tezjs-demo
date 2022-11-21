
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import article from "/@/components/article.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/articles/dance-forms","slots":{"default":[{"name":"article","data":{"title":"Dance; an eloquent form of expression","content":"<p>Dance is an eloquent form of expression. From classical and traditional to folk and tribal, there are various dance forms in India. The most popularly recognised classical dance forms are eight, which find themselves steeped in a rich mythological and religious history and have been mentioned in the ancient Hindu text of Natya Shastra. These are Bharat Natyam (Tamil Nadu), Sattriya (Assam), Manipuri (Manipur), Kathak (northern and western India), Odissi (Odisha), Kuchipudi (Andhra Pradesh and Telangana), Kathakali (Kerala), Mohiniyattam (Kerala).</p><p>Read More</p><h2>Bharat Natyam</h2><p>Considered to be the oldest dance and an inspiration to all other styles, Bharat Natyam, a temple dance of Tamil Nadu, is an enchanting performance that relates scenes from religious texts and myths. In a series of quick and complicated neat motions, dancers dressed in vibrant attires and ornamented heavily from head to toe, execute moves that are a sight to behold. The continuously varying tempo and the stunning synchronisation of the dancers is a breathtaking sight.</p><p><img src=\"https://www.incredibleindia.org/content/dam/incredible-india-v2/images/experiences/art/bharatnatyam-dance/bharatnatyam-dance.jpg/jcr:content/renditions/cq5dam.web.1800.737.jpeg\" alt=\"undefined\" title=\"Bharat Natyam\" loading=\"lazy\"></p><h2>Sattriya</h2><p>A dance-drama performance, native to Assam, Sattriya dance was created in the 15th century and has been a living tradition since. A regale of religious sagas, it is generally performed in monasteries, where the dancers dressed in stunning pat silks and adorned with traditional Assamese jewellery weave magic to the beats of cymbals, drums, flutes and even harmonium and violin.</p><h2>Manipuri</h2><p>Manipuri dance, originating from the state of Manipur, is a spiritual experience that transcends art and seems more like a divine dance. Mostly revolving around Goddess Radha and Lord Krishna, this soft, mild and modest dance form sees dancers execute graceful and delicate movements to lyrical undertones. While the women are clad in a wrap-around skirt called sarong, the men wear a dhoti and a turban.</p><h2>Kathak</h2><p>Said to have introduced by the bards travelling around the regions of north India, Kathak involves the recounting of religious tales and legends in a rhythmic fashion. From tapping of feet and hand gestures to eye movements and facial expressions, Kathak leaves one reeling with wonder at the finesse and skill of the dancers clad in a long embroidered skirt, complemented with a choli (blouse) and chunni (a long scarf).</p><h2>Odissi</h2><p>Dancers dressed in brightly coloured silk sarees, decked in silver jewellery and musical anklets (ghungroo), perform Odissi, which originated in Odisha. A dance illustrating mythical stories and legends, Odissi involves the use of impressive body movements and excellent expressions.</p><h2>Kuchipudi</h2><p>Largely featuring scenes and stories from the life of Lord Krishna, Kuchipudi, from Andhra Pradesh and Telangana, is essentially a temple dance. While a female dancer wears a pleated sari that opens like a hand fan, a male dancer is clad in a dhoti. The dancers are adorned with traditional jewellery and dance to the rhythmic beats of cymbals, flute, veena, tambura etc.</p><h2>Kathakali</h2><p>A classical dance-drama native to the state of Kerala, Kathakali is believed to be almost 300 years old. It recounts the tales of the past, from epics, legends and myths, and while the dance and music resound with devotion, what really awes is the striking make-up of the dancers. The participants are clad in elaborate attires and don vibrant hues of make-up. Every flicker of the eye, twirling of the fingers or the quivering of lips has a special significance.</p><h2>Mohiniyattam</h2><p>Mohiniyattam is a gentle, graceful and feminine form of dance that originated in the state of Kerala. The dance derives its name from the word 'Mohini', which means the female avatar of Lord Vishnu. Usually performed by a solo female dancer, the performance emotes a play through music and elegant movements. The song is generally a mix of Sanskrit and Malayalam languages.</p><h2>Dance Festivals</h2><p>There are hundreds of other folk dance forms which proliferate through the many cultures in the country and which are the life and soul of festivities across regions. The most exquisite way of experiencing these graceful evocations is through the many prestigious dance festivals</p>","slug":"/articles/dance-forms","componentName":"article","updatedAt":"2022-11-08T05:38:26.549Z","image":{"name":"dance_an_eloquent_form_of_expression","alternativeText":"dance_an_eloquent_form_of_expression","caption":"dance_an_eloquent_form_of_expression","width":388,"height":300,"formats":{"thumbnail":{"name":"thumbnail_dance_an_eloquent_form_of_expression","hash":"thumbnail_dance_an_eloquent_form_of_expression_762e2e595c","ext":".jpg","mime":"image/jpeg","width":202,"height":156,"size":8.31,"url":"/uploads/thumbnail_dance_an_eloquent_form_of_expression_762e2e595c.jpg"}},"hash":"dance_an_eloquent_form_of_expression_762e2e595c","ext":".jpg","mime":"image/jpeg","size":25.69,"url":"/uploads/dance_an_eloquent_form_of_expression_762e2e595c.jpg","updatedAt":"2022-11-08T05:38:26.289Z"},"categories":[{"name":"Art","slug":"/categories/art","updatedAt":"2022-11-08T05:38:25.748Z"}],"author":{"name":"Priya Sharma","info":"Traveller","slug":"/authors/priya-Sharma","updatedAt":"2022-11-08T05:38:25.898Z","picture":{"name":"priyasharma","alternativeText":"priyasharma","caption":"priyasharma","width":50,"height":50,"hash":"priyasharma_472628d2f3","ext":".jpg","mime":"image/jpeg","size":1,"url":"/uploads/priyasharma_472628d2f3.jpg","updatedAt":"2022-11-08T05:38:25.863Z"}}},"id":"0-article"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","pagination":true,"dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer","image":{}},"id":"1-footer"}]},"tags":{"title":"Dance; an eloquent form of expression","canonical":"http://localhost:3000/articles/dance-forms","metaTag":{"property":{"og:title":"Dance; an eloquent form of expression","og:description":"Dance; an eloquent form of expression","og:locale":"en_US","og:type":"website"},"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Dance; an eloquent form of expression"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"article":article,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/articles/dance-forms/post.js")
            })
        }    