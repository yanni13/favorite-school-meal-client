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
		left: 33px;
		z-index: 1;

	`
}
function MainMap(){
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Map 
			center={{ lat: 35.8361601, lng: 128.7528893 }} 
			style={{ width: '390px', height: '844px' }}
			level={3} 
			>
				{locations.map((loc, idx) => (
					<MapMarker
						clickable={true}
						onClick={() => setIsOpen(true)}
						position={loc.latlng}
						image={{
							src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
							size: { width: 24, height: 35 },
						}}
						title={loc.title}
					/>
				))}
				<S.InfoWrapper>
					<MapInfo/>
				</S.InfoWrapper>
			</Map>
		</>
	);
}

export default MainMap;