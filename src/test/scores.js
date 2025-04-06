{
	const fetchpool = require("../fetchpool");
	const algos = ["yescryptR16", "yescryptR8", "yescrypt", "yespowerR16", "yespower", "ghostrider", "power2b", "minotaurx" ]
	
	async function bypool(named) {
		let scored = await fetchpool[named]();

		let data = [];
		for (let a of algos) {
			data.push ({
				pool: named,
				algo: a,
				score: scored[a].score
			})
		}
		data.sort((a,b)=>{
			return a.score < b.score ? 1 : -1
		})
		console.log(`Pool\tScore\tAlgo`)
		for (let p of data) {
			console.log(`${p.pool}\t${p.score}\t${p.algo}`)
		}
 	}

 	bypool("zpool");
 	bypool("zergpool")
}