import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AppHeader from './components/AppHeader.vue'
import './style.css'
import App from './App.vue'

import GasMonitoring from './pages/GasMonitoring.vue'
import EventLog from './pages/EventLog.vue'
import DeviceManager from './pages/DeviceManager.vue'
import DeviceStatus from './pages/DeviceStatus.vue'
import GasMonitoringDetail from './pages/GasMonitoringDetail.vue'

import ValveMonitoring from './pages/ValveMonitoring.vue'
import ValveHistory from './pages/ValveHistory.vue'
import ValveControl from './pages/ValveControl.vue'
import ValveDetail from './pages/ValveDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gas/monitoring', component: GasMonitoring},
  { path: '/gas/detail', component: GasMonitoringDetail},
  { path: '/gas/eventlog', component: EventLog},
  { path: '/gas/device', component: DeviceManager},
  { path: '/gas/status', component: DeviceStatus},
  { path: '/valve/monitoring', component: ValveMonitoring},
  { path: '/valve/history', component: ValveHistory},
  { path: '/valve/control', component: ValveControl},
  { path: '/valve/detail', component: ValveDetail},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')
