"use client";

import { Thread } from "@/components/assistant-ui/thread";
import { PriceSnapshotTool } from "@/components/tools/price-snapshot/PriceSnapshotTool";
import { PurchaseStockTool } from "@/components/tools/purchase-stock/PurchaseStockTool";
import { ThreadList } from "@/components/assistant-ui/thread-list";
import { RepoPicker } from "@/components/assistant-ui/repo-picker";

export default function Home() {
  return (
    <div className="flex h-dvh">
      <div className="basis-1/6 shrink-0 grow-0 border-r border-gray-200">
        <ThreadList />
      </div>
      <div className="basis-5/6 flex flex-col">
        <RepoPicker />
        <div className="flex-1 overflow-hidden">
          <Thread />
        </div>
        <PriceSnapshotTool />
        <PurchaseStockTool />
      </div>
    </div>
  );
}
