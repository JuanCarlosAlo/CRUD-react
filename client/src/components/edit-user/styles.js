import styled from 'styled-components';

const StyledEditUser = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const StyledImgContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledButton = styled.div`
	padding: 0.5rem;
	width: 70px;
	border: 1px solid gray;
	border-radius: 0.5rem;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
`;
export {
	StyledEditUser,
	StyledImgContainer,
	StyledForm,
	StyledButtonsContainer,
	StyledButton
};
