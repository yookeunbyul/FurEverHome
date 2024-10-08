import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

interface MapProps {
    x?: string;
    y?: string;
}

function Map({ x = '', y = '' }: MapProps) {
    const FloatX = parseFloat(x);
    const FloatY = parseFloat(y);
    return (
        <StyledMap
            center={{ lat: FloatX, lng: FloatY }} // 지도의 중심 좌표
            level={3} // 지도 확대 레벨
        >
            <MapMarker // 마커를 생성합니다
                position={{
                    // 마커가 표시될 위치입니다
                    lat: FloatX,
                    lng: FloatY,
                }}
            />
        </StyledMap>
    );
}

const StyledMap = styled(KaKaoMap)`
    width: 100%;
    height: 400px;
`;

export default Map;
