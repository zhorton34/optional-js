
const optional = (anything, fallbackCallback) => {
	if (anything == null) anything = {}
	if (typeof anything == undefined || anything == (void 0)) anything = {}

	if (typeof anything !== 'object') return anything

	return new Proxy(anything, {
		get (target, key) {
			if (target[key] == null || target[key] == undefined) {
				return callback ?? null
			}

			return target[key]
		}
	})
}


module.exports = { optional }