// import * as React from "react";
import { Chart } from "react-google-charts";
// import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

const BarChart = () => {
  let data1;
  let foh1 = 0;
  let boh1 = 0;

  let foh2 = 0;
  let boh2 = 0;

  let foh3 = 0;
  let boh3 = 0;

  let foh4 = 0;
  let boh4 = 0;

  let foh5 = 0;
  let boh5 = 0;

  let foh6 = 0;
  let boh6 = 0;

  let foh7 = 0;
  let boh7 = 0;

  let foh8 = 0;
  let boh8 = 0;

  let foh9 = 0;
  let boh9 = 0;

  let foh10 = 0;
  let boh10 = 0;

  let foh11 = 0;
  let boh11 = 0;

  let foh12 = 0;
  let boh12 = 0;

  const [data, setData] = useState({
    set: [
      ["Month", "FOH", "BOH"],
      ["Jan.", foh1, boh1],
      ["Feb.", foh2, boh2],
      ["Mar.", foh3, boh3],
      ["Apr.", foh4, boh4],
      ["May.", foh5, boh5],
      ["Jun.", foh6, boh6],
      ["Jul.", foh7, boh7],
      ["Aug.", foh8, boh8],
      ["Sept.", foh9, boh9],
      ["Oct.", foh10, boh10],
      ["Nov.", foh11, boh11],
      ["Dec.", foh12, boh12],
    ],
  });

  useEffect(async () => {
    const result = await axios.get(
      "https://ensemble-tiffany-demo.herokuapp.com/readSalesData"
    );
    data1 = result.data;
    var d = new Date();
    var n = d.getFullYear();
    // var n = 2020;
    console.log(n);

    for (let i = 0; i < data1["category"].length; i++) {
      if (data1["division"][i] != null) {
        if (data1["division"][i].localeCompare("FOH") == 0) {
          if (data1["month"][i] == 1 && data1["year"][i] == n) {
            foh1 = foh1 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 2 && data1["year"][i] == n) {
            foh2 = foh2 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 3 && data1["year"][i] == n) {
            foh3 = foh3 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 4 && data1["year"][i] == n) {
            foh4 = foh4 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 5 && data1["year"][i] == n) {
            foh5 = foh5 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 6 && data1["year"][i] == n) {
            foh6 = foh6 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 7 && data1["year"][i] == n) {
            foh7 = foh7 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 8 && data1["year"][i] == n) {
            foh8 = foh8 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 9 && data1["year"][i] == n) {
            foh9 = foh9 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 10 && data1["year"][i] == n) {
            foh10 = foh10 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 11 && data1["year"][i] == n) {
            foh11 = foh11 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 12 && data1["year"][i] == n) {
            foh12 = foh12 + parseInt(data1["net"][i]);
          }
        } else if (data1["division"][i].localeCompare("BOH") == 0) {
          if (data1["month"][i] == 1 && data1["year"][i] == n) {
            boh1 = boh1 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 2 && data1["year"][i] == n) {
            boh2 = boh2 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 3 && data1["year"][i] == n) {
            boh3 = boh3 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 4 && data1["year"][i] == n) {
            boh4 = boh4 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 5 && data1["year"][i] == n) {
            boh5 = boh5 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 6 && data1["year"][i] == n) {
            boh6 = boh6 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 7 && data1["year"][i] == n) {
            boh7 = boh7 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 8 && data1["year"][i] == n) {
            boh8 = boh8 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 9 && data1["year"][i] == n) {
            boh9 = boh9 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 10 && data1["year"][i] == n) {
            boh10 = boh10 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 11 && data1["year"][i] == n) {
            boh11 = boh11 + parseInt(data1["net"][i]);
          } else if (data1["month"][i] == 12 && data1["year"][i] == n) {
            boh12 = boh12 + parseInt(data1["net"][i]);
          }
        }
      }
    }
    let dataSet = [
      ["Month", "FOH", "BOH"],
      ["Jan.", foh1, boh1],
      ["Feb.", foh2, boh2],
      ["Mar.", foh3, boh3],
      ["Apr.", foh4, boh4],
      ["May.", foh5, boh5],
      ["Jun.", foh6, boh6],
      ["Jul.", foh7, boh7],
      ["Aug.", foh8, boh8],
      ["Sept.", foh9, boh9],
      ["Oct.", foh10, boh10],
      ["Nov.", foh11, boh11],
      ["Dec.", foh12, boh12],
    ];

    // console.log(data1);
    // console.log("it gets here");

    // console.log(`foh ${foh}, boh ${boh}`);

    dataSet[1][1] = boh1;
    dataSet[1][2] = foh1;
    dataSet[2][1] = boh2;
    dataSet[2][2] = foh2;
    dataSet[3][1] = boh3;
    dataSet[3][2] = foh3;
    dataSet[4][1] = boh4;
    dataSet[4][2] = foh4;
    dataSet[5][1] = boh5;
    dataSet[5][2] = foh5;
    dataSet[6][1] = boh6;
    dataSet[6][2] = foh6;
    dataSet[7][1] = boh7;
    dataSet[7][2] = foh7;
    dataSet[8][1] = boh8;
    dataSet[8][2] = foh8;
    dataSet[9][1] = boh9;
    dataSet[9][2] = foh9;
    dataSet[10][1] = boh10;
    dataSet[10][2] = foh10;
    dataSet[11][1] = boh11;
    dataSet[11][2] = foh11;
    dataSet[12][1] = boh12;
    dataSet[12][2] = foh12;
    console.log("trigger 1", dataSet);

    setData({ set: dataSet });
  }, []);

  return (
    <div>
      <Chart
        width={"1000px"}
        height={"500px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={data.set}
        options={{
          title: "Sales by Categories",
          chartArea: { width: "50%" },
          hAxis: {
            title: "Total Sales in Canadian Dollars",
            minValue: 0,
            textStyle: {
              bold: true,
              fontSize: 12,
              color: "#4d4d4d",
            },
            titleTextStyle: {
              bold: true,
              fontSize: 18,
              color: "#4d4d4d",
            },
          },
          vAxis: {
            title: "Category",
            textStyle: {
              fontSize: 14,
              bold: true,
              color: "#848484",
            },
            titleTextStyle: {
              fontSize: 14,
              bold: true,
              color: "#848484",
            },
          },
          chart: {
            title: "Net Sales Summary Annual",
          },
        }}
        // For tests
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};
export default BarChart;