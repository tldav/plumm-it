export const formatVotes = (a, b) => {
	const num = a - b;
	return Math.abs(num) > 999
		? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
		: Math.sign(num) * Math.abs(num);
};

const formatNum = (num) => {
	return Math.abs(num) > 999
		? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
		: Math.sign(num) * Math.abs(num);
};

export default formatNum;