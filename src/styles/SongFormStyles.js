import styled from "@emotion/styled";
import { color, space, layout, border, typography } from "styled-system";

export const FormContainer = styled.div`
  ${color}
  ${space}
  ${layout}
  ${border}
  border-radius: ${({ theme }) => theme.radii.md || "8px"};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input`
  ${space}
  ${typography}
  width: 100%;
  border: 1px solid #ccc;
  border-radius: ${({ theme }) => theme.radii.sm || "4px"};
  padding: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Button = styled.button`
  ${space}
  ${color}
  ${typography}
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm || "4px"};
  cursor: pointer;
  padding: 10px 16px;
  font-size: 16px;
  &:hover {
    opacity: 0.9;
  }
`;
