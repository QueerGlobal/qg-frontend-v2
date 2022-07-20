import styled from 'styled-components';

export const ViewOneResourceContainer = styled.main`
    display: flex; 
    flex-direction: column; 
    margin: 10%;
    position: absolute;
    top: 200px;
`;

export const ResourcesFilter = styled.div`
	display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 60%;
`;

export const AllResources = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
`;

export const Thumbnail = styled.img`
    width: 35px;
    height: 35px;
`;

export const SocialIcons = styled.img`
    width: 15px;
    height: 15px;
`;

export const ChipSelected = styled.button`
    border: 1px solid black;
    border-radius: 15px;
    width: 150px;
    height: 25px;
    background-color: lightgray;
`;

export const Section = styled.section`display: flex`;

export const Div = styled.div`flex: 1`;