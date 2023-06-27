"use client"
import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]
const data1 = [12, 11, 14, 52, 14, 32, 36]
const data2 = [22, 31, 17, 32, 24, 62, 66]

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: data2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

export const ChartBar = () => {
  return (
    <>
      <div style={{ width: "500px", height: "300px" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  )
}
