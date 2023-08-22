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

      <table class="table-auto w-[94vw] overflow-y-scroll mt-5 text-[3.5vw] text-white text-ellipsis">
        <thead>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-3/12">수신 시각</th>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-1/12">장비</th>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-1/12">호선</th>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-5/12">위치</th>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-1/12">가스</th>
          <th class="px-1 border-y-2 border-sky-900 bg-sky-600 py-2 w-1/12">장치</th>
        </thead>
        <tbody>
          <transition-group name="blink">
            <tr v-for="(dock, index) in allDockList"
                :key="dock.device_no" 
                class="border-y-2 text-[2vw]" 
                :class="dock.device_no === 'E0001' ? 'text-yellow-500 font-bold' : 'text-black'"
                @click="selectedDevice = dock, setPopupOn=true"
            >
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.time }}</td>
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.device_no }}</td>
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.ship_no }}</td>
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.location }}</td>
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.gasStatus }}</td>
              <td class="py-2 border-x-[1px] text-[2.5vw]">{{ dock.deviceStatus }}</td>
            </tr>
          </transition-group>
        </tbody>
      </table>
      
      <!-- 팝업창 -->
      <!-- <transition name="slide-fade"> -->
        <div v-if="setPopupOn" class="absolute w-[90vw] h-[60vh] bg-slate-100 bottom-0 rounded-2xl overflow-hidden text-white">

          <div class="flex flex-col w-[90vw] bg-sky-600 h-[6vh]" >
            <div class="flex flex-col font-bold" @click="setPopupOn=false">
              <span class="mt-[1.5vh] text-[2.2vh]">{{ selectedDevice.location }}</span>
            </div>

            <div class="flex flex-col text-sky-800 mt-6 text-left px-4 font-bold text-[3.3vw]">장치이름 : {{ selectedDevice.device_no }}</div>
            <div class="flex flex-col text-sky-800 mt-0 text-left px-4 font-bold text-[3.3vw]">도크번호 : {{ selectedDevice.dock_no }} Dock</div>
            <div class="flex flex-col text-sky-800 mt-0 text-left px-4 font-bold text-[3.3vw]">호선번호 : {{ selectedDevice.ship_no }}</div>
            <div class="flex flex-col text-sky-800 mt-0 text-left px-4 font-bold text-[3.3vw]">최종수신시각 : 2023-07-27 17:07:01</div>
          </div>
            
          <div class="flex flex-col mt-[10vh] font-bold color-black">
            <ApexCharts width="320" height="320" type="line" :options="options" :series="series"></ApexCharts>
          </div>
        </div>
      <!-- </transition> -->
      
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
          { time: '2023.06.20 13:51', device_no: 'E0001', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.2 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '8' },
          { time: '2023.06.20 13:51', device_no: 'E0002', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '8' },
          { time: '2023.06.20 13:53', device_no: 'E0003', ship_no: 3293, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '8' },
          { time: '2023.06.20 13:51', device_no: 'E0004', ship_no: 3294, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '4' },
          { time: '2023.06.20 13:51', device_no: 'E0005', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '4' },
          { time: '2023.06.20 13:51', device_no: 'E0006', ship_no: 3291, location: 'E/R M/E L.O.WUMP TK No.1 LFO SVT', gasStatus: 'OK', deviceStatus: 'OK', dock_no: '4' },
        ],
        setPopupOn: false, // 클릭했을때 최신 로그로 그래프 만들기
        selectedDevice: {},
        options: {
          chart: {
            id: 'vuechart-example'
          },
          tooltip: {
            theme: 'dark'
          },
          xaxis: {
            categories: ["17:03", "17:04", "17:05", "17:06", "17:07", "17:08", "17:09", "17:10"]
          },
          yaxis: [
            {
              title: {
                text: "%"
              },
            },
            {
              opposite: true,
              title: {
                text: "PPM"
              },
              labels: {
                formatter: function (value) {
                  return value.toFixed(0);
                }
              }
            }
          ],
        },
        series: [
          {
            name: "O2",
            data: [20.9, 20.9, 20.9, 20.9, 20.9, 20.9, 20.9, 20.9],
            yaxis: 'yaxis1'
          },
          {
            name: "CO2",
            data: [400, 500, 800, 1500, 8300, 9000, 14000, 13000],
            yaxis: 'yaxis2'
          },
          {
            name: "H2S",
            data: [0, 0, 0, 0, 0.1, 0, 1, 0],
            yaxis: 'yaxis1'
          },
          {
            name: "CO",
            data: [0, 0, 0, 0, 0, 0, 1, 0],
            yaxis: 'yaxis1'
          },  
          {
            name: "LEL",
            data: [0, 0, 0, 0, 0, 0, 1, 0],
            yaxis: 'yaxis1'
          }
        ],
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