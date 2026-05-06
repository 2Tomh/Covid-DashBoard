export interface ChartSettingsInterface {
    chartName: string
    title: string
    visibleSeries: string[]
    visibleDates: string[]
    dateRangeStart: string | null
    dateRangeEnd: string | null
}
