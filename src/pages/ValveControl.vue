<template>
  <div class="w-[100vw] h-[100vh] flex flex-col">
    <AppHeader>
      <span>밸브 원격 제어</span>
    </AppHeader>

    <div class="flex flex-row justify-between mx-[5vw] py-[2vh]">
      <PrevButtons @click="goBack" />
      <HalfSelectBox v-model="selectedOption" @change="updateValue">
        <option value="A" selected>전체 도크</option>
        <option value="1D">1도크</option>
        <option value="2D">2도크</option>
        <option value="3D">3도크</option>
        <option value="4D">4도크</option>
        <option value="5D">5도크</option>
        <option value="8D">8도크</option>
        <option value="9D">9도크</option>
        <option value="HD">H도크</option>
      </HalfSelectBox>
      <div class="bg-sky-600 text-white font-bold text-[4vw] rounded-xl grid place-items-center">
        <span class="px-[4vw]">조회</span>
      </div>
    </div>

    <div v-if="vvControlWindow" class="absolute w-[100vw] h-[60vh] top-[20vh] border-y-4 border-sky-800 bg-sky-600 text-white font-bold">
      <div class="flex flex-row px-[5vw] py-[1vh] justify-between w-[100vw]">
        <span class="text-[5vw]">{{ actionDevice }} / 밸브 제어 창</span>
        <span @click="vvControlWindow=false">X</span>
      </div>
      <div class="flex flex-col bg-zinc-50 justify-between py-4 w-[100vw] h-[50vh] text-[6vw] font-bold text-black">
        <div class="flex flex-row w-full my-[1vh] h-[15vh]">
          <div class="w-1/2 flex flex-col justify-center align-middle border-2" :class="{ 'bg-sky-400' : o2valveStatus, 'bg-orange-400' : !o2valveStatus }">
            산소 밸브<br />{{ o2valveStatus ? '(열림)' : '(닫힘)' }}
          </div>
          <div class="w-1/2 flex flex-col items-center justify-center align-middle border-2">
            <div 
              :class="{ 'text-zinc-300' : o2valveStatus }" 
              class="w-full h-full items-center align-middle flex justify-center border-2"
              @click="o2valveStatus === 0 ? showConfirm(0, 1) : null"
              >열기</div>
            <div 
              :class="{ 'text-zinc-300' : !o2valveStatus }" 
              class="w-full h-full items-center align-middle flex justify-center border-2"
              @click="o2valveStatus === 1 ? showConfirm(0, 0) : null"
              >닫기</div>
          </div>
        </div>

        <div class="flex flex-row w-full  my-[1vh] h-[15vh]">
          <div class="w-1/2 flex flex-col justify-center align-middle border-2" :class="{ 'bg-sky-400' : ethyvalveStatus, 'bg-orange-400' : !ethyvalveStatus }">
            에틸렌 밸브<br />{{ ethyvalveStatus ? '(열림)' : '(닫힘)' }}
          </div>
          <div class="w-1/2 flex flex-col items-center justify-center align-middle border-2">
            <div 
              :class="{ 'text-zinc-300' : ethyvalveStatus }" 
              class="w-full h-full items-center align-middle flex justify-center border-2"
              @click="ethyvalveStatus === 0 ? showConfirm(1, 1) : null"
              >열기
            </div>
            <div 
              :class="{ 'text-zinc-300' : !ethyvalveStatus }" 
              class="w-full h-full items-center align-middle flex justify-center border-2"
              @click="ethyvalveStatus === 1 ? showConfirm(1, 0) : null"
              >닫기
            </div>
          </div>
        </div>

        <div class="flex flex-row w-full  my-[1vh] h-[15vh]">
          <div class="w-1/2 flex flex-col justify-center align-middle border-2">
            전체 밸브
          </div>
          <div class="w-1/2 flex flex-col items-center justify-center align-middle border-2">
            <div class="w-full h-full items-center align-middle flex justify-center border-2">열기</div>
            <div class="w-full h-full items-center align-middle flex justify-center border-2">닫기</div>
          </div>
        </div>
        
      </div>
    </div>

    <div class="overflow-y-scroll h-[85vh] overflow-x-hidden">
      <table class="table table-auto mx-[4vw] w-[92vw] bg-zinc-50">
        <thead>
          <tr class="w-full text-white font-bold">
            <td class="w-3/24 bg-sky-600 border-[1px] border-sky-700 py-2">장치</td>
            <td class="w-9/24 bg-sky-600 border-[1px] border-sky-700 py-2">위치정보<br />(수신 시각)</td>
            <td class="w-4/24 bg-sky-600 border-[1px] border-sky-700 py-2">산소<br />상태</td>
            <td class="w-4/24 bg-sky-600 border-[1px] border-sky-700 py-2">에틸렌<br />상태</td>
            <td class="w-4/24 bg-red-600 border-[1px] border-red-700 py-2">밸브<br />제어</td>
          </tr>
        </thead>
        <tbody class="text-black">
          <tr v-for="(item, index) in responseData" :key="index" class="border-[1px]">
            <td class="py-[1vh] border-[1px] bg-zinc-50">{{ item.SENSORID }}</td>
            <td class="py-[1vh] border-[1px] bg-zinc-50">{{ item.DQ_NO.substring(0,1) }}도크 - {{ item.DQ_ZONE }}{{ item.DQ_LOTADR }}<br />{{ item.formattedDate }}</td>
            <td
              class="py-[1vh] border-[1px] bg-zinc-50 font-bold"
              :class="{ 'text-sky-600': item.VALVE_0 === 1, 'text-orange-600': item.VALVE_0 === 0 }"
            >
              {{ item.VALVE_0 === 1 ? '열림' : '닫힘' }}
            </td>

            <td
              class="py-[1vh] border-[1px] font-bold"
              :class="{ 'text-sky-600': item.VALVE_1 === 1, 'text-orange-600': item.VALVE_1 === 0 }"
            >
              {{ item.VALVE_1 === 1 ? '열림' : '닫힘' }}
            </td>
            <td @click="openControlWindow(item)" class="py-[1vh] border-[1px] border-red-800 bg-red-500 text-white font-bold">제어<br />버튼</td>
          </tr>
        </tbody>
      </table>
    </div>

    
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue'
import PrevButtons from '../components/PrevButtons.vue';
import ValveStatusCard from '../components/ValveStatusCard.vue';
import axios from 'axios'

  export default {
    components: { AppHeader, HalfSelectBox, ValveStatusCard, PrevButtons },
    data() {
      return {
        responseData: [],
        vvControlWindow: false,

        o2valveStatus: 0,
        ethyvalveStatus: 0,

        actionDevice: 0,
        actionAddress: 0,

        selectedOption: '',
      }
    },

    methods: {
      goBack() {
        this.$router.go(-1)
      },
      async recentValveLog() {
        try {
          const res = await axios.get("/api/valve/log/recent");
          this.responseData = res.data.map((item) => {
            const formattedDateString = formatDateString(item.INSERT_DATE);

            return {
              ...item,
              formattedDate: formattedDateString,
            };
          });

          function formatDateString(dateString) {
            const date = new Date(dateString);
            const options = {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              timeZone: 'Asia/Seoul', 
            };

            return date.toLocaleString('kr', options);
          }
          console.log(res.data)

        } catch (error) {
          console.error(error);
        }
      },
      openControlWindow(item) {
        this.updateO2ValveStatus(item.VALVE_0, item.VALVE_1)
        this.actionDevice = item.SENSORID
        this.actionAddress = item.EDID
        this.vvControlWindow = true
      },
      async updateO2ValveStatus(o2, ethy) {
        this.o2valveStatus = o2;
        this.ethyvalveStatus = ethy;
      },
      showConfirm(targetValve, targetAction) {
        const result = window.confirm(`${this.actionDevice}의 ${targetValve ? '에틸렌' : '산소'} 밸브를 제어하시겠습니까? 제어신호는 30초에 한번만 전송 가능합니다.`);
        
        if (result) {
          alert('제어 신호가 정상적으로 전달되었습니다');
          this.vvControlWindow=false
          console.log(this.actionAddress, this.actionDevice, targetValve, targetAction) // EDID, SENSORID, VALVE_0/1 , OPEN/CLOSE
          // 무스마 API 추가
        } 
      },
      updateValue(event) {
        this.$emit('input', event.target.value);
        this.$emit('change', event.target.value);
      },
    },

    mounted() {
      this.recentValveLog();
      this.interval = setInterval(() => {
        this.recentValveLog();
      }, 5000);
    },
  }

  

</script>

<style lang="scss" scoped>
.Container {
  overflow : hidden;
}

.Control {
  display: flex;
}

.ValveCard {
  display: flex;
  justify-content: center;
}
</style>