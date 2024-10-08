import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import icon from '../../assets/logo.svg';

interface Position {
    title: string;
    latlng: kakao.maps.LatLng;
}

interface ShelterMapProps {
    setSelectedShelter: (shelter: string) => void; // setSelectedShelter prop 타입 정의
}

function ShelterMap({ setSelectedShelter }: ShelterMapProps) {
    const positions: Position[] = [
        {
            title: '가평군유기동물보호소',
            latlng: new kakao.maps.LatLng(37.8459543, 127.4991358),
        },
        {
            title: '부천시수의사회',
            latlng: new kakao.maps.LatLng(37.4887382052, 126.7658249447),
        },
        {
            title: '고양시동물보호센터',
            latlng: new kakao.maps.LatLng(37.6496069, 126.870066),
        },
        {
            title: '광주TNR동물병원송정',
            latlng: new kakao.maps.LatLng(37.41746097, 127.2752964),
        },
        {
            title: '광주TNR동물병원초월',
            latlng: new kakao.maps.LatLng(37.4158943728, 127.2761647488),
        },
        {
            title: '수원시 동물보호센터',
            latlng: new kakao.maps.LatLng(37.2850336895, 127.0787149165),
        },
        {
            title: '남양주시동물보호센터',
            latlng: new kakao.maps.LatLng(37.6087844352, 127.1915200108),
        },
        {
            title: '가나동물병원',
            latlng: new kakao.maps.LatLng(37.48350736, 126.7631747),
        },
        {
            title: '정샘동물병원',
            latlng: new kakao.maps.LatLng(37.5015303684, 126.769059806),
        },
        {
            title: '24시아이동물메디컬',
            latlng: new kakao.maps.LatLng(37.5256574, 126.8045482),
        },
        {
            title: '펫앤쉘터동물병원',
            latlng: new kakao.maps.LatLng(37.3670017, 127.1276345),
        },
        {
            title: '시흥동물누리보호센터',
            latlng: new kakao.maps.LatLng(37.37405365, 126.7427931),
        },
        {
            title: '한국야생동물보호협회',
            latlng: new kakao.maps.LatLng(37.3401156, 126.8700487),
        },
        {
            title: '이성준동물병원',
            latlng: new kakao.maps.LatLng(37.0065829, 127.274787),
        },
        {
            title: '한국동물구조관리협회',
            latlng: new kakao.maps.LatLng(37.8700531, 831861),
        },
        {
            title: '양평군유기동물보호소',
            latlng: new kakao.maps.LatLng(37.51079775, 127.5142953),
        },
        {
            title: '위더스 동물보호센터',
            latlng: new kakao.maps.LatLng(37.297553, 127.5756334),
        },
        {
            title: '오산 유기동물보호소',
            latlng: new kakao.maps.LatLng(37.149051, 127.065149),
        },
        {
            title: '용인시 동물보호센터',
            latlng: new kakao.maps.LatLng(37.243299, 127.1591338),
        },
        {
            title: '평택시유기동물보호소',
            latlng: new kakao.maps.LatLng(37.1306281469, 127.0554235932),
        },
        {
            title: '하남동물보호센터',
            latlng: new kakao.maps.LatLng(37.5687513365, 127.2075951802),
        },
        {
            title: '남양동물보호센터',
            latlng: new kakao.maps.LatLng(37.22494992, 126.8434243),
        },
        {
            title: '구리반려동물문화센터',
            latlng: new kakao.maps.LatLng(37.6131390076, 127.1409110928),
        },
        {
            title: '광명반함센터',
            latlng: new kakao.maps.LatLng(37.4743689676, 126.8684627314),
        },
        {
            title: '안성시농업기술센터',
            latlng: new kakao.maps.LatLng(37.0234771716, 127.2868211181),
        },
        {
            title: '의왕시청',
            latlng: new kakao.maps.LatLng(37.3521649674, 126.9822974283),
        },
    ];

    return (
        <StyledMap
            center={{ lat: 37.566826, lng: 126.9786567 }}
            level={10} // 지도 확대 레벨
        >
            {positions.map((position) => (
                <MapMarker
                    key={`${position.title}-${position.latlng}`}
                    position={{
                        lat: position.latlng.getLat(),
                        lng: position.latlng.getLng(),
                    }} // 마커를 표시할 위치
                    image={{
                        src: icon, // 이미지 URL
                        size: {
                            width: 30,
                            height: 30,
                        }, // 마커 이미지의 크기
                    }}
                    title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    onClick={() => setSelectedShelter(position.title)}
                />
            ))}
        </StyledMap>
    );
}

const StyledMap = styled(KaKaoMap)`
    width: 100%;
    height: 400px;
`;

export default ShelterMap;
