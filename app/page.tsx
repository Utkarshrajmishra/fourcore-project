import { DailySales } from "@/components/daily-sales";
import Revenue from "@/components/revenue";
import { Satification } from "@/components/satisifaction";
import { Target } from "@/components/target";
import { Visitors } from "@/components/visitor";
import { Prediction } from "@/components/prediction-table";
import ServiceLevel from "@/components/service-level";
export default function Home() {
  return (
    <section className="w-full p-4 overflow-x-scroll h-[calc(100vh-50px)] bg-[#f9fafc]">
      <div className="flex gap-3">
        <DailySales />
        <Visitors />
      </div>
      <div className="mt-2 flex gap-3">
        <Revenue />
        <Satification />
        <Target/>
      </div>
      <div className="mt-2 flex gap-3">
        <Prediction/>
        <ServiceLevel />
        <ServiceLevel />
      </div>
    </section>
  );
}
