import styled from 'styled-components';
// import colors from '../../../styles/colors';

export const BusinessCardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    flex: 1;
    width 33%; 
`;

export const Thumbnail = styled.img`
    width: 200px;
    height: 100px;
`;

export const GoldStar = styled.span`
    &:before {
        color: gold;
        content: "★";
    }
`;

export const EmptyStar = styled.span`
    &:before {
        color: grey;
        content: "☆";
    }
`;
