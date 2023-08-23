<template>
  <div>
    <AppHeader>
      <span>매니폴드 밸브 실시간 조회</span>
    </AppHeader>
    <div class="bg-white w-[100vw] mt-[2vh] rounded-lg h-[93vh] flex flex-col justify-between align-middle text-center overflow-hidden">

      <div class="overflow-scrollw-[100vw] h-[75vh] px-[2vw] flex flex-col justify-between align-middle text-center">
        <div class="w-[96vw] h-[5vh] rounded-xl flex flex-row justify-between">
          
          <select class="px-4 w-[40vw] rounded-xl" v-model="selectedDock">
            <option value="all">도크 구분(전체)</option>
            <option value="1D">1도크</option>
            <option value="2D">2도크</option>
            <option value="3D">3도크</option>
            <option value="4D">4도크</option>
            <option value="5D">5도크</option>
            <option value="8D">8도크</option>
            <option value="9D">9도크</option>
            <option value="HD">H도크</option>
          </select>

          <button class="w-[44vw] h-[5vh] mx-[1vw] text-[7vw] rounded-xl bg-red-600 text-white font-bold" @click="controlPopup=true">
            밸브 제어
          </button>
        </div>

        <div class="w-[96vw] h-[40vh] rounded-xl bg-slate-100 overflow-hidden">

          <div class="h-[5vh] text-[6vw] font-bold bg-sky-600 justify-center align-middle text-center flex flex-row">
            <span class="flex items-center text-white">매니폴드 밸브 현황</span>
          </div>

          <div class="w-[96vw] h-[30vh] mt-[1.5vh] flex flex-col justify-between">

            <div class="flex flex-row w-[96vw] h-[15vh] px-[2vw] justify-between align-middle">
              <div class="flex flex-col w-[25vw] mt-[0.5vh] h-[13vh] bg-green-500 justify-center align-middle text-black overflow-hidden rounded-2xl">
                <!-- 아이콘영역 -->
                <img src="../assets/Icons/icon_o2.png" class="text-white w-[18vw] ml-[3.6vw] flex flex-row" />
                <span class="font-bold text-xl">산소</span>
              </div>
              <div class="w-[65vw] mt-[0.5vh] h-[13vh] py-[1vh]">
                <!-- 테이블영역 -->
                <table class="table table-auto text-black">
                  <thead class="flex flex-row h-[5h] justify-between">
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">전체</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">열림</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">닫힘</td>
                  </thead>
                  <tbody class="flex flex-row h-[3vh] justify-between">
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.oxygenOpened + filteredCounts.oxygenClosed }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.oxygenOpened }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.oxygenClosed }}
                    </td>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="flex flex-row w-[96vw] h-[15vh] mt-[2vh] px-[2vw] justify-between align-middle">
              <div class="flex flex-col w-[25vw] h-[13vh] bg-orange-600 justify-center align-middle text-black overflow-hidden rounded-2xl">
                <!-- 아이콘영역 -->
                <img src="../assets/Icons/icon_ethy.png" class="text-white w-[18vw] ml-[3.6vw] flex flex-row" />
                <span class="font-bold text-xl">에틸렌</span>
              </div>
              <div class="w-[65vw] mt-[0.5vh] h-[13vh] py-[1vh]">
                <!-- 테이블영역 -->
                <table class="table table-auto text-black">
                  <thead class="flex flex-row h-[5vh] justify-between">
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">전체</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">열림</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">닫힘</td>
                  </thead>
                  <tbody class="flex flex-row h-[3vh] justify-between">
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.ethyleneOpened + filteredCounts.ethyleneClosed }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.ethyleneOpened }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.ethyleneClosed }}
                    </td>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
          

        </div>

        <div class="w-[96vw] h-[22vh] rounded-xl bg-slate-100 overflow-hidden">
          <!-- 제어 장치 합계 -->
          <div class="h-[5vh] text-[6vw] font-bold bg-sky-600 justify-center align-middle text-center flex flex-row">
            <span class="flex items-center text-white" @click="recentValveLog">제어 장치 현황</span>
          </div>

          <div class="flex flex-row w-[96vw] h-[15vh] mt-[2vh] px-[2vw] justify-between align-middle">
              <div class="flex flex-col w-[25vw] h-[13vh] bg-sky-600 justify-center align-middle text-black overflow-hidden rounded-2xl">
                <!-- 아이콘영역 -->
                <img src="../assets/Icons/icon_device.png" class="w-[18vw] ml-[3.6vw] flex flex-row" />
                <span class="font-bold text-xl">장치 상태</span>
              </div>
              <div class="w-[65vw] mt-[0.5vh] h-[13vh] py-[1vh]">
                <!-- 테이블영역 -->
                <table class="table table-auto text-black">
                  <thead class="flex flex-row h-[5vh] justify-between">
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">전체</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">정상</td>
                    <td class="w-[22vw] h-[5vh] font-bold border-x-2 text-[6vw]">점검</td>
                  </thead>
                  <td class="flex flex-row w-[22vw] h-[10vw]"> 외업관리시스템</td>
                  <tbody class="flex flex-row h-[3vh] justify-between">
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.ethyleneOpened + filteredCounts.ethyleneClosed }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.ethyleneOpened + filteredCounts.ethyleneClosed - filteredCounts.valveStatusZero }}
                    </td>
                    <td class="w-[22vw] h-[3.5vh] font-bold border-x-2 text-[7vw]">
                      {{ filteredCounts.valveStatusZero }}
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
        </div>

      </div>
      
      <div v-if="controlPopup" class="absolute bg-sky-600 text-white w-[100vw] h-[30vh] top-[12vh]">
        <div class="flex flex-col text-left px-[5vw] py-[2vh]">
          <span class="text-[5vw] text-white font-bold">사용자 사번 : BP20862</span>
          <span class="text-[5vw] text-white font-bold">사용자 이름 : 허재석</span>
          <br />

          <!-- 제어 권한 확인하여 v-if 수정 -->
          <div v-if="true" class="text-white font-bold text-[5vw]">
            밸브 제어가 가능한 작업자입니다. <br /> 제어 페이지로 이동하시겠습니까?
          </div>
          <div class="flex flex-row w-full justify-between text-white font-bold py-[3vh]">
            <button @click="goToDetail" class="py-[1vh] w-[30vw] font-bold text-[5vw] bg-green-600 border-2">확인</button>
            <button @click="this.controlPopup=false" class="py-[1vh] w-[30vw] font-bold text-[5vw] bg-orange-600 border-2">취소</button>
          </div>

          <!-- 제어 권한 확인하여 v-if 수정 -->
          <div v-if="false">
            <span class="text-[5vw] font-bold text-white">제어 권한이 없습니다. <br /><br /> 관리자에게 문의 바랍니다.</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue';
import axios from 'axios'

export default {
  components: { AppHeader, HalfSelectBox },
  data() {
    return {
      dockCounts: new Map(),
      totalCounts: {
        oxygenOpened: 0,
        oxygenClosed: 0,
        ethyleneOpened: 0,
        ethyleneClosed: 0,
        valveStatusZero: 0
      },
      interval: null,
      currentPath: '/valve/monitoring',
      controlPopup: false,
      selectedDock: 'all'
    };
  },
  methods: {
    goToDetail() {
      this.controlPopup = false;
      this.$router.push('/valve/control');
    },
    async recentValveLog() {
      // if(this.currentPath !== '/valve/monitoring'){
      //   return ;
      // }

      try {
        const res = await axios.get("/api/valve/log/recent");
        const result = res.data;

        console.log(result)

        const docks = ['1D', '2D', '3D', '4D', '5D', '8D', '9D', 'HD'];

        docks.forEach(dock => {
          this.dockCounts.set(dock, {
            oxygenOpened: 0,
            oxygenClosed: 0,
            ethyleneOpened: 0,
            ethyleneClosed: 0,
            valveStatusZero: 0
          });
        });

        this.totalCounts = {
          oxygenOpened: 0,
          oxygenClosed: 0,
          ethyleneOpened: 0,
          ethyleneClosed: 0,
          valveStatusZero: 0
        }

        result.forEach(item => {
          const dock = item.DQ_NO;
          const oxygenValve = item.VALVE_0;
          const ethyleneValve = item.VALVE_1;
          const valveStatus = item.DEVICE_STATUS;

          if (this.dockCounts.has(dock)) {
            if (oxygenValve === 1 && valveStatus !== 0) {
              this.dockCounts.get(dock).oxygenOpened++;
              this.totalCounts.oxygenOpened++;
            } else {
              this.dockCounts.get(dock).oxygenClosed++;
              this.totalCounts.oxygenClosed++;
            }

            if (ethyleneValve === 1 && valveStatus !== 0) {
              this.dockCounts.get(dock).ethyleneOpened++;
              this.totalCounts.ethyleneOpened++;
            } else {
              this.dockCounts.get(dock).ethyleneClosed++;
              this.totalCounts.ethyleneClosed++;
            }

            if (valveStatus === 0) {
              this.dockCounts.get(dock).valveStatusZero++;
              this.totalCounts.valveStatusZero++;
            }
          }
        });

        console.log('Vavle Status Refreshed!')

      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.recentValveLog()
    this.interval = setInterval(() => {
      this.recentValveLog();
    }, 5000);
    this.currentPath = this.$route.path;
  },
  computed: {
    filteredCounts() {
      if (this.selectedDock === 'all') {
        return this.totalCounts;
      } else {
        return this.dockCounts.get(this.selectedDock) || {
          oxygenOpened: 0,
          oxygenClosed: 0,
          ethyleneOpened: 0,
          ethyleneClosed: 0,
          valveStatusZero: 0
        };
      }
    }
  }

  // beforeDestroy() {
  //   console.log('Valve Page Destroyed Success')
  //   clearInterval(this.interval);
  // }
}

</script>

<style lang="scss" scoped>

</style>