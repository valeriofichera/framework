import Image from "next/image";
import { Inter } from "next/font/google";
import FormComponent from '@/components/Form.js'
import LineChartComponent from '@/components/chart.js'
import Header from '@/components/Header.js'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header/>
      <FormComponent/>
      
    </main>
  );
}
