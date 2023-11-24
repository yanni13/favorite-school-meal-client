import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MapInfo from './MapInfo';
import styled from 'styled-components';

const locations = [
   { id: 1, title: '다이소', latlng: { lat: 35.83612503877446, lng: 128.7527715858539 } },
   { id: 2, title: '아틀리에빈', latlng: { lat: 35.83642690671568, lng: 128.752617763627 } },
   { id: 3, title: '텃밭', latlng: { lat: 33.450879, lng: 126.56994 } },
   { id: 4, title: '근린공원', latlng: { lat: 33.451393, lng: 126.570738 } },
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
   const [restrauntId, setRestrauntId] = useState(null);

   
	// 클릭한 마커의 ID를 넘겨주는 클릭 핸들러
   const handleMarkerClick = (loc, mouseEvent, marker) => {
      setIsOpen(true);
      const markerId = loc.id;
      
      setRestrauntId(markerId);
   }

   const GetData = () => {
      const [data, setData] = useState({});
      useEffect(() => {
         axios.get('/restaurants').then((res) => {
			const formattedData = res.data.data.map(restaurant => ({
				id: restaurant.id,
				location: {
					lng: restaurant.location.longitude,
					lat: restaurant.location.latitude
				},
			}));
			console.log(formattedData);
			setData(formattedData);
         })
      },[]);

      const item = Object.values(data).map((item) => (
         <MapMarker
            key= {item.id}
            clickable={true}
            onClick={(mouseEvent) => handleMarkerClick(item, mouseEvent)}
            position={item.location}
            image={{
               src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
               size: { width: 24, height: 35 },
            }}
            title={item.title}
         />
      ));

      return item;
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
            {/* {locations.map((loc, idx) => (
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

            ))} */}

            {GetData()}
            <S.InfoWrapper>
               {isOpen && <MapInfo id={restrauntId} pageType={"Map"}/>}
            </S.InfoWrapper>
         </Map>
      </>
   );
}

export default MainMap;