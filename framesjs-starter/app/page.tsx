import Image from "next/image";
import { Inter } from "next/font/google";
import FormComponent from './components/Form.js'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <FormComponent/>
    </main>
  );
}
