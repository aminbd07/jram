
export default defineNuxtPlugin(() => {
   

    // Google Analytics

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-RPCXTRZD6T";
    script.async = true;
    document.body.appendChild(script);


    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-RPCXTRZD6T');

 


});