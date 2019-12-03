/*global kakao */
import React from 'react'
import SubwayMap from '../components/SubwayMap'
import { busid } from '../busid';
import axios from 'axios';
import * as xml from 'xml2js'
import {line1} from '../subway/line1'
import Banner from '../components/Banner';
import SVG from './menu-24px.svg'
import './Main.css'
import SUBWAY from './subway-24px.svg'
import BUS from './directions_bus-24px.svg'
import BusMap from '../components/BusMap';
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            id: undefined,
            datas: undefined,
            map: undefined,
            clusterer: undefined,
            value:7019,
            clicked:1,
            subway:undefined,
            markers:[]
            
        })

    }


    componentDidMount() {
        var places = new kakao.maps.services.Places();
        var datas=[]
        line1.map(value=>{
            
            var callback = function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    datas.push([result[0].y,result[0].x])
                    
                }
            };
            
            places.keywordSearch(value.역명, callback);
        })
        console.log(datas)


        
        
        var container = document.getElementById('map')
        var options = {
            center: new kakao.maps.LatLng(37.542351, 126.9645004),
            level: 7
        }
        var map = new kakao.maps.Map(container, options)

        var clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 7,
            
        })

        this.setState({
            id: busid[this.state.value],
            map: map,
            clusterer: clusterer,
            subway:datas
        })
        const id = busid[this.state.value]
        console.log(id)
        this.getData(id)
        //  const play=setInterval(()=>this.getData(id),3000)
        //위의 코드 실행시 실시간으로 버스정보를 받아올수 있지만 쿼리수를 넘어 서기 떄문에 주석 처리
    }

    getData=(id)=>{
        var parser = new xml.Parser()
        console.log(id)
        axios.get('http://ws.bus.go.kr/api/rest/buspos/getLowBusPosByRtid?ServiceKey=0roO4f41n5M14%2BGxpA%2B2d2RG4eH4kpApBrwyKd6mkxon9CRFimdFL%2F7rjCUMZ3t8KvaTUZVQ3qg9ZEdh7DfdUw%3D%3D&busRouteId=' + id)
            .then(value => {
                

                return new Promise((res, rej) => {
                    parser.parseString(value.data, function (err, result) {
                        if (err) rej(err);
                        res(result);
                    })
                })
            })
            .then(data => {
                const XY = Object.values(data.ServiceResult.msgBody[0].itemList)
                this.setState({
                    datas: XY
                })

            })
            .catch(value => {
                console.log(value)
                console.log('실패')
            })
        }
    
    sujung = (bus) => {
        this.state.clusterer.clear()
        
     
        var imageSrc = BUS, // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(30, 30) // 마커이미지의 크기입니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
        if(bus){
        const markers=bus.map(value=>{
            
            return new kakao.maps.Marker({
          
                position: new kakao.maps.LatLng(value[0], value[1]),
                image:markerImage
            })
             
        })
        
        this.state.clusterer.addMarkers(markers)
    }   

        // const marker=subway.map(value=>{
        //     console.log(value)
        //     return new kakao.maps.Marker({
                
        //         position: new kakao.maps.LatLng(value[0], value[1]),
        //         image:markerImage
        //     })
             
        // })
        
        // this.state.clusterer.addMarkers(marker)
        

        
    }
    onChange = e => {
        this.setState({ value: e.target.value });
      };
    clicked=()=>{
        this.setState({
            clicked:!this.state.clicked
        })
    }
    thisProm=()=>{
        var data=prompt()
        this.setState({
            value:data*1
        })
        
        const id = busid[this.state.value]
        console.log(id)
        this.getData(busid[this.state.value])
    }
    render() {
        // this.setState({clicked:this.state.clicked})

        return (
            <div>
                <Banner></Banner>
                <BusMap id='map' ohno={this.state.subway} datas={this.state.datas} map={this.state.map} on={this.sujung} />
            </div>
        )
    }
}
export default Main