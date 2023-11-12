import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const MapComponent = () => {
  const [selectedMarkerPosition, setSelectedMarkerPosition] = useState(null);

  const handleMarkerClick = (marker, mouseEvent) => {
    // 마커를 클릭했을 때 실행되는 함수
    console.log(marker.getPosition());
    const markerPosition = marker.getPosition();
    
    setSelectedMarkerPosition(markerPosition);
  };

  return (
    <div>
      <Map
        center={{ lat: 37.5665, lng: 126.9780 }} // 지도의 초기 중심 좌표
        level={3} // 지도의 초기 확대 레벨
        style={{ width: '100%', height: '500px' }}
      >
        {/* 마커를 표시할 위치에 MapMarker 컴포넌트를 사용 */}
        <MapMarker
            clickable={true}
            position={{ lat: 37.5665, lng: 126.9780 }} // 마커의 초기 위치
            onClick={handleMarkerClick} // 마커 클릭 이벤트 핸들러
        />
      </Map>

      {/* 선택된 마커의 위치를 표시하는 컴포넌트 */}
      {selectedMarkerPosition && (
        <div>
          <h2>선택된 마커의 위치</h2>
          <p>위도: {selectedMarkerPosition.Ma}</p>
          <p>경도: {selectedMarkerPosition.La}</p>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
