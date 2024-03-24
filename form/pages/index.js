import Image from "next/image";
import { Inter } from "next/font/google";
import FormComponent from '@/components/Form.js'
import LineChartComponent from '@/components/chart.js'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <FormComponent/>
      <LineChartComponent/>
    </main>
  );
}
