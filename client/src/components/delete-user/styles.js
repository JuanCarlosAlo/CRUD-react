import styled from 'styled-components';

const StyledDeleteUser = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const StyledText = styled.p`
	text-align: center;
`;

const StyledButton = styled.div`
	padding: 0.5rem;
	width: 70px;
	text-align: center;
	border: 1px solid gray;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
`;
export { StyledDeleteUser, StyledText, StyledButton };
