import "../global.css";
import { Slot, Stack } from "expo-router";
import Footer from '@/components/footer/Footer';

export default function Layout() {
  return <>
    <Slot />
    <Footer />
  </>;
}
