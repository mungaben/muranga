
" use client "
import React, { useEffect, useState } from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,

);
// import data from "./Userdata"


const Linechart = () => {

  const [dataxx, setdata] = useState({
    datasets: [],
  })
  const [options, setoptions] = useState({})
  useEffect(() => {
    setdata({
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "student intake growth",
          data: [2000, 3000, 4000, 5000, 6000, 7000],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",

          ],
          borderColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],

          borderColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],
          borderWidth: 1,
          hoverOffset: 10,
        },
        {
          label: "graduate students",
          data: [2000, 2500, 4000, 5000, 6800, 7050],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",

          ],
          borderColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],

          borderColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
          ],
          borderWidth: 1,
          hoverOffset: 10,
        }

      ]
    })
    setoptions({
      Plugin: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "User Data"
        }

      },
      maintainaspectratio: false,
      responsive: true,
      Animation: {
        animateScale: true,
        animateRotate: true
      },
      // scales: {
      //   yAxes: [
      //     {
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }
      //   ]
      // }
    })
  }, [])
  return (
    <div className=' dark:text-white flex items-center justify-center my-4 '>
      <Line data={dataxx} options={options} />
    </div>

  )
}

export default Linechart