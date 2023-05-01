import styled from 'styled-components';

const StyledDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	width: 700px;
	padding: 2rem;
	border-radius: 1rem;
	border: 1px solid rgb(250, 50, 50);
`;
const StyledInfoContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
	margin-bottom: 2rem;
`;

const StyledImg = styled.img`
	border-radius: 1rem;
`;
const StyledButton = styled.div`
	padding: 0.5rem;
	width: 100px;
	border: 2px solid white;
	border-radius: 0.5rem;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
	&:hover ${StyledImg} {
		filter: invert(0);
	}
`;

export { StyledDetails, StyledImg, StyledInfoContainer, StyledButton };
