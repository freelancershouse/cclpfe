import styled from "styled-components";

import { Button } from "@components/button";

export const ThemedButton = styled(Button)`
    font-family: Mulish;
    font-weight: 600;
    font-size: 18px;
    height: 47px;
    border: transparent;
    min-width: 120px;
    color: #ffffff;
    border-radius: 28px;
    background: linear-gradient(90deg, #e06355 3.98%, #fea49a 93.98%);

    &:hover,
    &:active,
    &:focus {
        color: white;
        background: linear-gradient(90deg, #e06355 3.98%, #fea49a 93.98%);
        border: none;
    }
`;
