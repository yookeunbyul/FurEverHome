import { Map as KaKaoMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function Map() {
    return (
        <StyledMap
            center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
            level={3} // 지도 확대 레벨
        ></StyledMap>
    );
}

const StyledMap = styled(KaKaoMap)`
    width: 100%;
    height: 600px;
    @media (max-width: 650px) {
        height: 400px;
    }
`;

export default Map;
