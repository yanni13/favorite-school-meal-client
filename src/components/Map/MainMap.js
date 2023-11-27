import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MapInfo from './MapInfo';
import styled from 'styled-components';

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
			console.log(res.data.data);
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