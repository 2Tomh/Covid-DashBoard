import { ChartSeries } from "./chart-series"

export interface ChartConfig {
    name: string
    label: string
    series: ChartSeries[]
    uploadType?: string;
    isHeader?: boolean;
}
