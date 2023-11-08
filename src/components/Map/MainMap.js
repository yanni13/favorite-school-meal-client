import { Map, MapMarker } from 'react-kakao-maps-sdk';



function MainMap(){
	return (
		<Map 
          center={{ lat: 35.8361601, lng: 128.7528893 }} 
          style={{ width: '100%', height: '100%' }}
          level={5} 
        >
			<MapMarker position={{ lat:  35.83658135778566, lng: 128.75299465624974 }}> </MapMarker> // 마커 좌표
		</Map>
	);
}

export default MainMap;