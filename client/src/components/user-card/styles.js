import styled from 'styled-components';

const StyledUserCard = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	width: 600px;
	padding: 1rem;
	border-bottom: 1px solid gray;
`;

const StyledUserImg = styled.img`
	height: 60px;
	width: 60px;
	border-radius: 50%;
`;

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledButtonsContainer = styled.div`
	display: flex;
	width: 300px;
	align-items: center;
	justify-content: space-between;
`;

const StyledImg = styled.img`
	width: 20px;
	height: 20px;
	filter: invert(1);
`;

const StyledButton = styled.div`
	padding: 0.5rem;
	width: 40px;
	border: 1px solid gray;
	border-radius: 0.5rem;
	&:hover {
		background-color: white;
		cursor: pointer;
	}
	&:hover ${StyledImg} {
		filter: invert(0);
	}
`;
const StyledButtonEdit = styled(StyledButton)`
	background-color: lightgreen;
`;
const StyledButtonInfo = styled(StyledButton)`
	background-color: lightblue;
`;

const StyledButtonDelete = styled(StyledButton)`
	background-color: lightcoral;
`;

const StyledButtons = styled.div`
	display: flex;
	width: 150px;
	gap: 0.5rem;
`;

export {
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo,
	StyledButtonsContainer,
	StyledButton,
	StyledButtons,
	StyledImg,
	StyledButtonEdit,
	StyledButtonInfo,
	StyledButtonDelete
};
