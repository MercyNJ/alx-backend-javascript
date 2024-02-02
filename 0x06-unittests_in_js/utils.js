/* const Utils = {
	calculateNumber(type, a, b) {
	const roundedA = Math.round(a);
	const roundedB = Math.round(b);

	if (type === 'SUM') {
		return roundedA + roundedB;
	}
	if (type === 'SUBTRACT') {
		return roundedA - roundedB;
	}
	if (type === 'DIVIDE') {
		if (roundedB === 0) {
			return 'Error';
		}
		return roundedA / roundedB;
	}
	}
}

module.exports = Utils; */

const Utils = {
    calculateNumber: function (type, a, b) {
      switch (type) {
        case 'SUM':
          return Math.round(a) + Math.round(b);
        case 'SUBTRACT':
          return Math.round(a) - Math.round(b);
        case 'DIVIDE':
          if (Math.round(b) === 0) {
            return 'ERROR';
          }
          return Math.round(a) / Math.round(b);
      }
    }
}

module.exports = Utils;
