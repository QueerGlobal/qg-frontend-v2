import styled from 'styled-components';

export const ViewAllResourcesContainer = styled.main`
    margin: 10%;
    position: absolute;
    top: 200px;
    width: 80%;
`;

export const AllResources = styled.div`
    display: grid;
    grid-template: 250px 250px 250px 250px 250px 250px 250px/30% 30% 30%;
    gap: 10px;
`;

export const ResourcesFilter = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
