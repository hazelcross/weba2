
	export default (function(hosts, name) {
		return new Promise(resolve=>{
			let index = 0;

			function getPrices(){
				function err(){
					index++
					if (index === hosts.length) {
						resolve();
					} else {
						getPrices();
					}
				}

				try {
					fetch(`http://${hosts[index]}:9000/${name}`).then(response=>{
						if (response.status === 200) {
							response.json().then(data=>{
								resolve(data);
							})
						} else {
							err();
						}
					})
				} catch (ex) {
					err();
				}
			}
		})
	})();