export interface ChartFilter {
  timeRange: 'month' | '3months' | '6months' | 'year' | 'all';
  ageGroup: 'all' | 'under60' | 'above60' | 'כל האוכלוסייה' | 'מתחת גיל 60' | 'מעל גיל 60';
  viewBy?: 'status' | 'dose' | string;
  valueType?: 'number' | 'percent' | string;
  displayType?: 'absolute' | 'per100k' | 'status' | 'dose';
  displayMode?: 'absolute' | 'per100k';
  calculationType?: 'count' | 'percentageOfTotal' | string;
  unit?: 'percent' | 'number';
  selectedHospitals?: string[];
  selectedCountries?: string[];
  selectedCities?: string[];
}