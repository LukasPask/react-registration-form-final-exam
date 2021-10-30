import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid #bc7878;
`;

export const StyledLeftSide = styled.div`
  width: 50%;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  padding: 15px 30px;
`;

export const LogoWrapper = styled.div`
  width: 100%;
`;

export const StyledImageText = styled.p`
  margin-top: 20px;
  color: var(--white-color);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  width: 55%;
`;
export const StyledImg = styled.img`
  height: 450px;
`;

export const StyledRightSide = styled.div`
  width: 50%;
  background-color: var(--white-color);
  border-radius: 0 10px 10px 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledRightSideText = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const StyledHeadText = styled.h1`
  font-weight: 500;
  font-size: 34px;
`;

export const LoginText = styled.p`
  color: var(--primary-color);
`;

export const ButtonsBox = styled.div`
  display: flex;
`;

export const OrText = styled.h2`
  font-size: 24px;
  font-weight: 300;
  padding: 18px;
`;
