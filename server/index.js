const express = require('express');
const cors = require("cors");
const router = require("router")
const moment = require("moment")
var http = require('http');
const oracledb = require('oracledb');


require("dotenv").config();

const app = express();
const port = 3001;
const path = require('path');

const dbConfig = {
  user: 'SYSTEM',
  password: 'ubimicro',
  connectString: '10.8.0.34:1521/xe'
};

app.use(express.static('static')); // Server 프로젝트이므로 정적 페이지로 구성함.
app.set('json spaces', 2)

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html')); // 최초 로드할 메인 HTML페이지.
});

app.use(cors({
  origin: "*", // 외부에서 들어온 요청을 차단하지 않도록 수정함.
  credentials: true,
  optionsSuccessStatus: 200,
}));

const formatResult = (result) => {
  const formattedData = result.rows.map(row => {
    let obj = {};
    result.metaData.forEach((column, index) => {
      obj[column.name] = row[index];
    });
    return obj;
  });
  return formattedData;
}

app.get('/gas/log/recent', async (req, res) => {
  let connection;

  try {
    res.header("Access-Control-Allow-Origin", "*");

    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `
      SELECT
        t.CMPNY_DIV,
        t.SENS_KIND,
        t.SENS_NO,
        t.CHK_TIME,
        t.SHIP_NO,
        t.MNGR_AREA,
        t.INST_LPOS,
        t.INST_MPOS,
        t.INST_DPOS,
        t.O2,
        t.H2S,
        t.CH4,
        t.CO,
        t.CO2,
        t.O2_ALARM_CD,
        t.H2S_ALARM_CD,
        t.CH4_ALARM_CD,
        t.CO_ALARM_CD,
        t.CO2_ALARM_CD,
        t.ALARM_CD,
        xx.dq_loc
      FROM 
        TMD2000C01 t, 
        (SELECT SENS_NO, MAX(CHK_TIME) AS max_CHK_TIME FROM TMD2000C01  GROUP BY SENS_NO ) sub, 
        tma1040c01 xx
      WHERE t.SENS_NO = sub.SENS_NO AND t.CHK_TIME = sub.max_CHK_TIME
      AND   t.ship_no = xx.ship(+)
        `
    ); // 개발 완료시점에, 미수신 관련 로직을 추가 할 것 (검색 범위도 줄이기)

    const formattedData = formatResult(result);
    res.status(200).json(formattedData);

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.get('/gas/log/recent', async (req, res) => {
  let connection;

  try {
    res.header("Access-Control-Allow-Origin", "*");

    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `
      SELECT
        t.CMPNY_DIV,
        t.SENS_KIND,
        t.SENS_NO,
        t.CHK_TIME,
        t.SHIP_NO,
        t.MNGR_AREA,
        t.INST_LPOS,
        t.INST_MPOS,
        t.INST_DPOS,
        t.O2,
        t.H2S,
        t.CH4,
        t.CO,
        t.CO2,
        t.O2_ALARM_CD,
        t.H2S_ALARM_CD,
        t.CH4_ALARM_CD,
        t.CO_ALARM_CD,
        t.CO2_ALARM_CD,
        t.ALARM_CD,
        xx.dq_loc
      FROM 
        TMD2000C01 t, 
        (SELECT SENS_NO, MAX(CHK_TIME) AS max_CHK_TIME FROM TMD2000C01  GROUP BY SENS_NO ) sub, 
        tma1040c01 xx
      WHERE t.SENS_NO = sub.SENS_NO AND t.CHK_TIME = sub.max_CHK_TIME
      AND   t.ship_no = xx.ship(+)
        `
    ); // 개발 완료시점에, 미수신 관련 로직을 추가 할 것 (검색 범위도 줄이기)

    const formattedData = formatResult(result);
    res.status(200).json(formattedData);

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.get('/valve/log/recent', async (req, res) => {
  let connection;

  try {
    res.header("Access-Control-Allow-Origin", "*");

    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `
      SELECT
        t.LOG_IDX,
        t.SENSORID,
        t.EDID,
        t.VALVE_0,
        t.VALVE_1,
        t.LAST_CTRLTYPE0,
        t.LAST_CTRLTYPE1,
        t.VALVE_MODE,
        t.PWR_ON,
        t.CTRL_TIME,
        t.DEVICE_STATUS,
        t.RSSI,
        t.INSERT_DATE,
        dq.DQ_NO,
        dq.DQ_ZONE,
        dq.DQ_LOTADR
      FROM TMF1000C01 t,
          (SELECT SENSORID, MAX(INSERT_DATE) AS max_INSERT_DATE FROM TMF1000C01 GROUP BY SENSORID) sub,
          (SELECT DEV_NO, DQ_NO, DQ_ZONE, DQ_LOTADR, OXYGEN_VVCHK, ETHYLEN_VVCHK, ERR_TXT, DEV_STATUS, UPDATE_DATE FROM TMF1060C01) dq
      WHERE t.SENSORID = sub.SENSORID AND sub.max_INSERT_DATE = t.INSERT_DATE AND t.SENSORID = dq.DEV_NO
        `
      // `
      // SELECT
      //     t.LOG_IDX,
      //     t.SENSORID,
      //     t.EDID,
      //     t.VALVE_0,
      //     t.VALVE_1,
      //     t.LAST_CTRLTYPE0,
      //     t.LAST_CTRLTYPE1,
      //     t.VALVE_MODE,
      //     t.PWR_ON,
      //     t.CTRL_TIME,
      //     t.DEVICE_STATUS,
      //     t.RSSI,
      //     t.INSERT_DATE,
      //     dq.DQ_NO,
      //     dq.DQ_ZONE,
      //     dq.DQ_LOTADR
      // FROM 
      //     TMF1000C01 t
      // JOIN 
      //     (
      //         SELECT SENSORID, MAX(INSERT_DATE) AS max_INSERT_DATE 
      //         FROM TMF1000C01 
      //         GROUP BY SENSORID
      //     ) sub
      //     ON t.SENSORID = sub.SENSORID AND t.INSERT_DATE = sub.max_INSERT_DATE
      // JOIN 
      //     TMF1060C01 dq
      //     ON t.SENSORID = dq.DEV_NO
      // `
    ); // 개발 완료시점에, 미수신 관련 로직을 추가 할 것 (검색 범위도 줄이기)

    const formattedData = formatResult(result);
    res.status(200).json(formattedData);

  } catch (error) {
    console.log(error);
    res.status(500).send('Internal server error');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});