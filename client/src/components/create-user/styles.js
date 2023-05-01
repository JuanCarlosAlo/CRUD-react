import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledFormContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;
const StyledImgGeneratorContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 2rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 60%;
`;
const StyledButton = styled.div`
	padding: 0.5rem;
	width: auto;
	border: 1px solid gray;
	border-radius: 0.5rem;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
`;
export {
	StyledForm,
	StyledFormContainer,
	StyledImgGeneratorContainer,
	StyledButtonsContainer,
	StyledButton
};
