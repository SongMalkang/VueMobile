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
                <tr class="blink">
                  <td class="px-2 py-1 text-black font-bold bg-slate-200 text-[3.8vw] text-left border-x-2 border-sky-800" colspan="9">
                    수신 시각 : 
                    {{ dock.CHK_TIME.substring(0,4) }}/{{ dock.CHK_TIME.substring(4,6) }}/{{ dock.CHK_TIME.substring(6,8) }}  
                    {{ dock.CHK_TIME.substring(8,10) }}:{{ dock.CHK_TIME.substring(10,12) }}:{{ dock.CHK_TIME.substring(12,14) }} 
                    <br /> 상세 위치 : {{ dock.INST_DPOS }}
                  </td>
                </tr>
                <tr 
                  class="border-b-2 border-r-2 border-l-2 border-slate-900 text-[2vw] text-black"
                  @click="selectedDevice = dock, setPopupOn=true, getThisData(`${dock.SENS_KIND}${dock.SENS_NO}`)"
                >
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.MNGR_AREA }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.SHIP_NO }}</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.O2 }}%</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.CO2 }}%</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.CO }}ppm</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.H2S }}ppm</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.CH4 }}%</td>
                  <td class="py-3 border-x-[1px] border-slate-200 text-[4vw]">{{ dock.SENS_KIND }}{{ dock.SENS_NO }}</td>
                </tr>
              </template>
            </transition-group>

          </tbody>
        </table>
      </div>
        
        <!-- 팝업창 -->
      <div v-if="setPopupOn" class="absolute w-[90vw] h-[85vh] bg-slate-100 bottom-0 rounded-2xl overflow-hidden text-white">

        <div class="flex flex-col w-[90vw] bg-sky-800 h-[6vh]">
            <div class="flex flex-row font-bold justify-between px-8 text-[6vw] items-center" @click="setPopupOn=false, selectedDevice=undefined">
                <span 
                  class="flex items-center mt-[1vh]"
                  >{{ selectedDevice.MNGR_AREA }} / {{ selectedDevice.SHIP_NO }} / {{ selectedDevice.SENS_KIND }}{{ selectedDevice.SENS_NO }}
                </span>
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
              <tr v-if="selectedDevice">
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">{{ thisDeviceData[0]?.O2 }}<sub>%</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">{{ thisDeviceData[0]?.CO2 }}<sub>%</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">{{ thisDeviceData[0]?.CO }}<sub>ppm</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">{{ thisDeviceData[0]?.H2S }}<sub>ppm</sub></td>
                <td class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-center py-2 text-[4.5vw]">{{ thisDeviceData[0]?.CH4 }}<sub>%</sub></td>
              </tr>

              <tr>
                <td 
                  colspan="5" 
                  class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-left px-2 text-[3.7vw]"
                  >위치: {{ thisDeviceData[0]?.MNGR_AREA }} {{ thisDeviceData[0]?.INST_DPOS }}</td>
              </tr>
              <tr>
                <td 
                  colspan="5" 
                  class="border-[1px] border-slate-600 bg-zinc-100 text-black font-bold text-left px-2 text-[3.7vw]"
                  >수신 시각: 
                    {{ thisDeviceData[0]?.CHK_TIME.substring(0,4) }}/{{ thisDeviceData[0]?.CHK_TIME.substring(4,6) }}/{{ thisDeviceData[0]?.CHK_TIME.substring(6,8) }}  
                    {{ thisDeviceData[0]?.CHK_TIME.substring(8,10) }}:{{ thisDeviceData[0]?.CHK_TIME.substring(10,12) }}:{{ thisDeviceData[0]?.CHK_TIME.substring(12,14) }} </td>
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

        <div v-if="this.selectedDevice" class="flex flex-col items-center align-middle font-bold color-black mt-[20vh] bg-slate-100">
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
import axios from 'axios';

  export default {
    components: { AppHeader, PrevButtons, HalfSelectBox, HalfSelectBox, ApexCharts },
    methods: {
      goToGasmonitoring() {
        this.$router.push('/gas/monitoring');
      },
      async getThisData(targetDevice) {

        if(!targetDevice) {
          console.log('noTargetDevice')
          return;
        }

        try {
          const res = await axios.get(`/api/gas/log/this?targetDevice=${targetDevice}`);
          const result = res.data;

          this.thisDeviceData = result;
          console.log(result);
        } 
        catch (error) {
          console.error(error);
        }
      },

      async getAllData() {
        try {
          const res = await axios.get(`/api/gas/log/recent`);
          const result = res.data;
          this.allDockList = result;
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      },

      // async updateSelectedDevice() {
      //   if(this.selectedDevice === undefined) {
      //     return;
      //   }

      //   try {
      //     const res = await axios.get(`/api/gas/log/recent`);
      //     const temp = res.data.find((x)=>x.SENS_KIND === this.selectedDevice.SENS_KIND && x.sens_no === this.SENS_NO )
          
      //     this.selectedDevice = temp
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },

      parseData(type) {
        console.log(type)
        console.log(this.thisDeviceData)
      }
    },
    mounted() {
      this.getAllData()

      this.interval = setInterval(() => {
        this.selectedDevice && this.getThisData(`${this.selectedDevice.SENS_KIND}${this.selectedDevice.SENS_NO}`)
        this.getAllData()
        // this.updateSelectedDevice();
      }, 5000);

      this.currentPath = this.$route.path;
      
    },

    computed: {
    },

    data () {
      return {
        allDockList: [],
        interval: null,
        thisDeviceData: [],
        setPopupOn: false, // 클릭했을때 최신 로그로 그래프 만들기
        selectedDevice: undefined,
        options : {
            series: [{
            name: 'O2',
            type: 'column',
            data: this.parseData('O2')
          }, {
            name: 'CO2',
            type: 'column',
            data: this.parseData('CO2')
          }, {
            name: 'CO',
            type: 'line',
            data: this.parseData('CO')
          }, {
            name: 'H2S',
            type: 'line',
            data: this.parseData('H2S')
          }, {
            name: 'CH4',
            type: 'line',
            data: this.parseData('CH4')
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
            categories: this.parseData('time'),
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
  animation: blink 0.3s infinite;
}

.blink-enter-active,
.blink-leave-active {
  animation: blink 0.3s;
}
.blink-enter,
.blink-leave-to {
  opacity: 1;
}

</style>