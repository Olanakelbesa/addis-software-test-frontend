import styled from "@emotion/styled";
import { color, space, layout, border, typography } from "styled-system";

export const Container = styled.div`
  ${space}
  ${layout}
  width: 50%;
  margin: auto;
`;

export const TitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SongListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  font-weight: bold;
  padding: 12px 16px;
  background-color: #f4f4f4;
  border-radius: ${({ theme }) => theme.radii.md || "8px"};
  margin-bottom: 12px;
  text-align: left;
`;

export const SongCard = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  border-radius: ${({ theme }) => theme.radii.md || "8px"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  align-items: center;
  padding: 12px 16px;
`;

export const SongColumn = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 90%;
    padding: 4px;
    font-size: 14px;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  ${space}
  ${color}
  ${typography}
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm || "4px"};
  cursor: pointer;
  padding: 6px 12px;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: ${({ theme }) => theme.radii.md || "8px"};
  width: 480px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;
