{
	function api(URI) {
		let pools = {};
		return new Promise(resolve => {
			fetch(URI).then(async response=>{
				if (response.status === 200) {
					let data = await response.json();
	
					for (let idx in data) {
						let pool = data[idx]; 
	                    pools[pool.name] = {
	                    	score: parseFloat(pool.estimate_current),
	                    	port: pool.port
	                    }
	                }
				}
				resolve(pools);
			}).catch(e=>{
				console.log(e)
			})
		})
	}

	module.exports = {
		zergpool(){ return api('https://zergpool.com/api/status') },
		zpool(){ return api('https://www.zpool.ca/api/status') }
	}
}