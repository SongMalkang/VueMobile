<template>
  <div class="">
    <AppHeader />
    <div class="Container h-[95vh] w-screen justify-center">
      <div class="InteractTable flex flex-row justify-center">
        <HalfSelectBox v-model="selectedOption" @change="updateValue">
          <option value="A" selected>전체 도크</option>
          <option value="1">1도크</option>
          <option value="2">2도크</option>
          <option value="3">3도크</option>
          <option value="4">4도크</option>
          <option value="5">5도크</option>
          <option value="8">8도크</option>
          <option value="9">9도크</option>
          <option value="H">H도크</option>
        </HalfSelectBox>
        <div class="text-white"> / </div>
        <button class="w-[44vw] h-[5vh] mx-[1vw] rounded-xl bg-sky-600 text-white font-bold" @click="goToDetail">
          상세보기
        </button>
      </div>

      <div class="StatusContainer">
        <GasStatusCard title="정상" :total="normalSenseF + normalSenseE" :calAir="normalSenseF" :cal-pump="normalSenseE" themeColor="text-green-600"/>
        <GasStatusCard title="경고" :total="warnSenseF + warnSenseE" :calAir="warnSenseF" :cal-pump="warnSenseE" themeColor="text-yellow-600"/>
        <GasStatusCard title="위험" :total="dangerSenseF + dangerSenseE" :calAir="dangerSenseF" :cal-pump="dangerSenseE" themeColor="text-red-600"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';
import GasStatusCard from '../components/GasStatusCard.vue';
import HalfSelectBox from '../components/HalfSelectBox.vue';
import axios from 'axios'

  export default {
    components: {
      AppHeader,
      HalfSelectBox,
      GasStatusCard,
    },
    data () {
      return {
        selectedOption: '', // 드롭다운 메뉴에 바인딩
        setPopupOn: false, // 클릭했을때 최신 로그로 그래프 만들기

        normalSenseF: 0,
        normalSenseE: 0,
        warnSenseF: 0,
        warnSenseE: 0,
        dangerSenseF: 0,
        dangerSenseE: 0,

        dockFilter: 'A',
        interval: null,
      }
    },
    methods: {
      goToDetail() {
        this.$router.push('/gas/detail');
      },
      async recentGasLog() {
        // if(this.$router.path !== '/gas/monitoring'){
        //   return;
        // }

        const res = await axios.get("/api/gas/log/recent")
        const result = res.data

        console.log(result)

        let filterCondition;

        if (this.dockFilter === 'A') {
          filterCondition = (x) => true;
        } else {
          filterCondition = (x) => x.dq_loc === this.dockFilter;
        }

        this.normalSenseF = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'F' && x.ALARM_CD === '0').length
        this.warnSenseF = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'F' && x.ALARM_CD === '1').length
        this.dangerSenseF = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'F' && x.ALARM_CD === '2').length

        this.normalSenseE = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'E' && x.ALARM_CD === '0').length
        this.warnSenseE = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'E' && x.ALARM_CD === '1').length
        this.dangerSenseE = result.filter((x) => filterCondition(x) && x.SENS_KIND === 'E' && x.ALARM_CD === '2').length
      },
      updateValue(event) {
        this.$emit('input', event.target.value);
        this.$emit('change', event.target.value);
      }
    },

    mounted() {
      this.recentGasLog();
      this.interval = setInterval(() => {
        this.recentGasLog();
      }, 5000);
    },

    beforeDestroy() {
      clearInterval(this.interval);
    }
  }
</script>

<style lang="scss" scoped>

.Container {
  position: relative;

  display: flex;
  flex-direction: column;
}

.InteractTable {
  margin-top: 2vh;
  flex-direction: row;
}

.StatusContainer {
  display: flex;
  flex-direction: column;

  align-items: center;
  vertical-align: center;

  margin-top: 2vh;

  height: 85vh;

  margin-bottom: 1vh;
}

.Card {
  display: flex;
  flex-direction: row;
}

</style>