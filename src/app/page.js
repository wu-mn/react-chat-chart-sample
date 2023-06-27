import Chat from "../components/chatbox"
import ApexChart from "../components/newTreeMap"

export default function Home() {
  return (
    <div style={{ background: "white" }}>
      <h1 style={{ color: "black" }}>ダッシュボード</h1>
      <ApexChart />
      <h1 style={{ color: "black" }}>インサイト</h1>
      <Chat />
    </div>
  )
}
