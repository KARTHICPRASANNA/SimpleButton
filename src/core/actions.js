const decreaseCount = ({ state, data }) => ({
	count: state.count - data,
});

const actions = {
	decreaseCount,
};

export default actions;
