import styled from 'styled-components';

const StyledUserCard = styled.div`
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	width: 700px;
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
	justify-content: space-between;
`;

export {
	StyledUserCard,
	StyledUserImg,
	StyledUserInfo,
	StyledButtonsContainer
};
