<template>
  <div>
    <AppHeader>
      <span>가스 현황 상세보기</span>
    </AppHeader>
    <div class="Container">
      <PrevButtons class="relative -left-[34vw] top-[1.5vh]" @Click="goToGasmonitoring" />
      <div class="flex flex-row relative mt-[3vh]">
        <HalfSelectBox class="px-4 mr-[1.5vw]">
          <option>전체 도크</option>
          <option>1도크</option>
          <option>2도크</option>
          <option>3도크</option>
          <option>4도크</option>
          <option>5도크</option>
          <option>8도크</option>
          <option>9도크</option>
          <option>H도크</option>
        </HalfSelectBox>

        <HalfSelectBox class="px-4 ml-[1.5vw]">
          <option>상태: 전체</option>
          <option>상태: 정상</option>
          <option>상태: 경고</option>
          <option>상태: 위험</option>
        </HalfSelectBox>
      </div>

      <div class="overflow-y-scroll h-[80vh]"> 
        <table class="table-auto w-[94vw] mt-5 text-[3.5vw] text-white text-ellipsis">
          <thead>
            <th class="px-1 border-y-2 border-l-2 border-sky-900 bg-sky-700 py-2 w-1/12">도크</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-1/12">호선</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-2/12">O2<br />(%)</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-2/12">CO2<br />(%)</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-2/12">CO<br />(ppm)</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-2/12">H2S<br />(ppm)</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-2/12">CH4<br />(%)</th>
            <th class="px-1 border-y-2 border-sky-900 bg-sky-700 py-2 w-1/12">장치번호</th>
          </thead>
          <tbody>
            <transition-group name="blink">
              <template v-for="(dock, index) in allDockList" :key="'row-' + dock.device_no" >
                <tr>
                  <td class="px-2 py-1 text-black font-bold bg-slate-200 text-[3.5vw] text-left border-x-2 border-sky-800" colspan="9">
                    수신 시각 : {{ dock.time }} <br /> 상세 위치 : {{ dock.location }}
                  </td>
                </tr>
                <tr 
                  class="border-b-2 border-r-2 border-l-2 border-slate-900 text-[2vw]" 
                  :class="dock.device_no === 'E0001' ? 'text-yellow-500 font-bold' : 'text-black'"
                  @click="selectedDevice = dock, setPopupOn=true"
                >
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.dq_no }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.ship_no }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.o2value }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.co2value }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.covalue }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.h2svalue }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.ch4value }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.device_no }}</td>
                </tr>
              </template>
            </transition-group>

          </tbody>
        </table>
      </div>
        
        <!-- 팝업창 -->
      <div v-if="setPopupOn" class="absolute w-[90vw] h-[85vh] bg-slate-100 bottom-0 rounded-2xl overflow-hidden text-white">

        <div class="flex flex-col w-[90vw] bg-sky-800 h-[6vh]">
            <div class="flex flex-row font-bold justify-between px-8 text-[6vw] items-center" @click="setPopupOn=false">
                <!-- Use 'items-center' in the parent flex container to align children vertically -->
                <span class="flex items-center mt-[1vh]">{{ selectedDevice.dq_no }} / {{ selectedDevice.ship_no }} / {{ selectedDevice.device_no }}</span>
                <span class="flex items-center mt-[1vh]">X</span>
            </div>
        </div>

        <div class="flex flex-col w-full h-[14vh] bg-slate-100 text-black font-bold text-[3.5vw] text-left px-4 py-2">
          <table class="table table-auto mt-[1vh]">

            <thead>
                <tr>
                    <td class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center text-[5vw]">O2</td>
                    <td class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center text-[5vw]">CO2</td>
                    <td class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center text-[5vw]">CO</td>
                    <td class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center text-[5vw]">H2S</td>
                    <td class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center text-[5vw]">CH4</td>
                </tr>
            </thead>

            <tbody>
              <tr>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">20.9<sub>%</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">0<sub>%</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">0<sub>ppm</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">0<sub>ppm</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">0<sub>%</sub></td>
              </tr>

              <tr>
                <td colspan="5" class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-left px-2 text-[3.7vw]">위치: E/R M/E L.O.WUMP TK No.2 LFO SVT</td>
              </tr>
              <tr>
                <td colspan="5" class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-left px-2 text-[3.7vw]">시각: 2023-08-23 09:16:38</td>
              </tr>
              <tr>
                <td colspan="5" class="border-[1px] border-slate-600 bg-sky-800 text-white font-bold text-center px-2 text-[4.5vw]">알람 기준 값</td>
              </tr>

              <tr>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-yellow-600 font-bold text-center text-[3.8vw]">19<sub>%</sub> <br />이하</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-yellow-600 font-bold text-center text-[3.8vw]">5<sub>%</sub>  <br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-yellow-600 font-bold text-center text-[3.8vw]">8<sub>ppm</sub><br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-yellow-600 font-bold text-center text-[3.8vw]">8<sub>ppm</sub><br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-yellow-600 font-bold text-center text-[3.8vw]">0.5<sub>%</sub><br /> 초과</td>
              </tr>

              <tr>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-red-600 font-bold text-center text-[3.8vw]">18<sub>%</sub> <br />이하</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-red-600 font-bold text-center text-[3.8vw]">10<sub>%</sub><br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-red-600 font-bold text-center text-[3.8vw]">10<sub>ppm</sub><br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-red-600 font-bold text-center text-[3.8vw]">10<sub>ppm</sub><br /> 초과</td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-red-600 font-bold text-center text-[3.8vw]">1<sub>%</sub><br /> 초과</td>
              </tr>
            </tbody>

          </table>

        </div>

        <div class="flex flex-col items-center align-middle font-bold color-black mt-[20vh] bg-slate-100">
          <ApexCharts class="w-full items-center align-middle ml-[10vw]" height=280 type="line" :options="options" :series="options.series" />
        </div>  

      </div>


      
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import PrevButtons from '../components/PrevButtons.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue';
import ApexCharts from "vue3-apexcharts";

  export default {
    components: { AppHeader, PrevButtons, HalfSelectBox, HalfSelectBox, ApexCharts },
    methods: {
      goToGasmonitoring() {
        this.$router.push('/gas/monitoring');
      },
    },
    data () {
      return {
        allDockList: [
          { time: '23.06.20 13:51', device_no: 'E0001', dq_no: '8D', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.2 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
          { time: '23.06.20 13:51', device_no: 'E0002', dq_no: '8D', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
          { time: '23.06.20 13:53', device_no: 'E0003', dq_no: '8D', ship_no: 3293, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
          { time: '23.06.20 13:51', device_no: 'E0004', dq_no: '8D', ship_no: 3294, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
          { time: '23.06.20 13:51', device_no: 'E0005', dq_no: '8D', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
          { time: '23.06.20 13:51', device_no: 'E0006', dq_no: '8D', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', o2value: 20.9, co2value: 0, covalue: 0, h2svalue: 1, ch4value: 0 },
        ],
        setPopupOn: false, // 클릭했을때 최신 로그로 그래프 만들기
        selectedDevice: {},
        options : {
            series: [{
            name: 'O2',
            type: 'line',
            data: [20.9, 20.9, 20.9, 20.9, 20.9, 20.9, 20.9, 20.9]
          }, {
            name: 'CO2',
            type: 'line',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
          }, {
            name: 'CO',
            type: 'column',
            data: [0, 0, 0, 0, 0, 0, 0, 0]
          }, {
            name: 'H2S',
            type: 'column',
            data: [0, 0, 2, 3, 4, 3, 1, 0]
          }, {
            name: 'CH4',
            type: 'column',
            data: [3, 2.5, 2, 1.2, 2, 1, 0, 0]
          }],
            chart: {
            height: 350,
            type: 'line',
            stacked: false,
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            // text: '실시간 가스 그래프',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: ['09:09', '09:10', '09:11', '09:12', '09:13', '09:14', '09:15', '09:16'],
          },
          yaxis: [
            {
              // axisTicks: {
              //   show: true,
              // },
              seriesName: 'O2',
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                show: false,
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "산소 (%)",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true,
              },
              min: 18,
              max: 23,
              tickAmount: 4,
            },
            {
              seriesName: 'CO2',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00D285'
              },
              labels: {
                show: false,
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                // text: "가스 농도(%)",
                style: {
                  color: '#00E396',
                }
              },
              min: 0,
              max: 10,
              tickAmount: 4,
            },
            {
              seriesName: 'CO',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                show: false,
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                // text: "가스 농도(PPM)",
                style: {
                  color: '#FEB019',
                }
              },
              min: 0,
              max: 10,
              tickAmount: 4,
            },
            
            {
              seriesName: 'H2S',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                show: false,
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                // text: "가스 농도(PPM)",
                style: {
                  color: '#FEB019',
                }
              },
              min: 0,
              max: 10,
              tickAmount: 4,
            },
            
            {
              seriesName: 'CH4',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                show: false,
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                // text: "가스 농도(PPM)",
                style: {
                  color: '#FEB019',
                }
              },
              min: 0,
              max: 10,
              tickAmount: 4,
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
            theme: 'dark',
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;

  align-items: center;
  vertical-align: center;

  background-color: white;

  height: 95vh;
  width: 100vw;
}

@keyframes blink {
  0% { background-color: transparent; }
  50% { background-color: lightgreen }
  100% { background-color: transparent; }
}

.blink {
  animation: blink 0.5s linear infinite;
}

.blink-enter-active, .blink-leave-active {
  animation: blink 0.5s;
}
.blink-enter, .blink-leave-to {
  opacity: 1;
}

</style>