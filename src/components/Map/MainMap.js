import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';
import MapInfo from './MapInfo';
import styled from 'styled-components';

const locations = [
	{ title: '다이소', latlng: { lat: 35.83612503877446, lng: 128.7527715858539 } },
	{ title: '아틀리에빈', latlng: { lat: 35.83642690671568, lng: 128.752617763627 } },
	{ title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
	{ title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
];

const S = {
	InfoWrapper: styled.div`
		display: flex;
		position : fixed;
		bottom: 25px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	`
}

const MainMap = () => {
	//1. 우리 서비스에서 제공하는 식당 {식당id, 위치{경도,위도}} 요 딕셔너리 리스트 GET API
    //2. 식당 id를 기반으로 해당 식당의 식당 이미지, 이름, 운영시간, 메뉴정보 GET API
	const [isOpen, setIsOpen] = useState(false); // InfoBox의 열림/닫힘 상태
	const [markerPosition, setMarkerPosition] = useState(null);
	const [restrauntInfo, setRestrauntInfo] = useState(null);

	const handleMarkerClick = (marker, mouseEvent) => {
		setIsOpen(true);
		const markerPosition = marker.latlng;
		const markerTitle = marker.title;
		
		setMarkerPosition(markerPosition);
		setRestrauntInfo(markerTitle);
	}

	return (
		<>
			<Map 
			center={{ lat: 35.8361601, lng: 128.7528893 }} 
			style={{ width: '390px', height: '844px' }}
			level={3} 
			onClick={() => {
				setIsOpen(false);
			}}
			>
				{locations.map((loc, idx) => (
					<MapMarker
						clickable={true}
						onClick={(mouseEvent) => handleMarkerClick(loc, mouseEvent)}
						position={loc.latlng}
						image={{
							src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
							size: { width: 24, height: 35 },
						}}
						title={loc.title}
					>
					</MapMarker>

				))}
				<S.InfoWrapper>
					{isOpen && <MapInfo latlng={markerPosition} title={restrauntInfo}/>}
				</S.InfoWrapper>
			</Map>
		</>
	);
}

export default MainMap;