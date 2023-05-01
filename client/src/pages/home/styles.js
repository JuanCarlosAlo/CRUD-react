import styled from 'styled-components';

const StyledHome = styled.div`
	display: flex;
	gap: 2rem;
	gap: 2rem;
	margin-left: auto;
	margin-right: auto;
	width: 1000px;
	height: calc(100vh - 200px);
`;
const StyledList = styled.div`
	width: 100%;
	height: 450px;
	overflow-y: scroll;
`;
const StyledOptions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	width: 350px;
	height: 500px;
	border-radius: 1rem;
	border: 1px solid rgb(250, 50, 50);
`;
const StyledImg = styled.img`
	width: 20px;
	height: 20px;
	filter: invert(1);
`;
const StyledButton = styled.div`
	padding: 0.5rem;
	width: 40px;
	border: 2px solid white;
	border-radius: 0.5rem;
	&:hover {
		background-color: white;
		cursor: pointer;
	}
	&:hover ${StyledImg} {
		filter: invert(0);
	}
`;
const StyledListContainer = styled.div`
	height: 500px;
`;

const StyledFilterHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 1rem;
	border-top-right-radius: 1rem;
	border-top-left-radius: 1rem;
	background-color: rgb(250, 50, 50);
`;

export {
	StyledHome,
	StyledList,
	StyledOptions,
	StyledButton,
	StyledImg,
	StyledFilterHeader,
	StyledListContainer
};
