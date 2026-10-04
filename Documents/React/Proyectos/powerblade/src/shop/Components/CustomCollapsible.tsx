import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"
import type { InfoPowerBlade } from '@/mocks/infoPowerBlade.mock'

export const CustomCollapsible = ({ info }: { info: InfoPowerBlade }) => {
    return (
    <div>
      <Collapsible className="flex w-[350px] flex-col gap-2">
        <div className="flex items-center justify-between gap-4 px-4">
          <h4 className="text-sm font-semibold">
            {info.titulo}
          </h4>
          <CollapsibleTrigger className="size-8 rounded-md">
            <ChevronsUpDown />
            <span className="sr-only">
            </span>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="flex flex-col gap-2">
          <div className="px-4 py-2 text-sm">
            <p className="">
              {info.descripcion}
            </p>
          </div>
        </CollapsibleContent>
              <hr />

      </Collapsible>
    </div>
    )
}
