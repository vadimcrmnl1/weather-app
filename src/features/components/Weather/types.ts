export type WeatherStateType = {
	Headline: WeatherStateHeadline;
	DailyForecasts: WeatherStateDailyForecasts[];
}
export type WeatherStateHeadline = {
	EffectiveDate: string;
	EffectiveEpochDate: number;
	Severity: number;
	Text: string;
	Category: string;
	EndDate: string;
	EndEpochDate: number;
	MobileLink: string;
	Link: string;
}
export type WeatherStateDailyForecastsTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherStateDailyForecastsTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherStateDailyForecastsTemperature = {
	Minimum: WeatherStateDailyForecastsTemperatureMinimum;
	Maximum: WeatherStateDailyForecastsTemperatureMaximum;
}
export type WeatherStateDailyForecastsDay = {
	Icon: number;
	IconPhrase: string;
	HasPrecipitation: boolean;
	PrecipitationType: string;
	PrecipitationIntensity: string;
}
export type WeatherStateDailyForecastsNight = {
	Icon: number;
	IconPhrase: string;
	HasPrecipitation: boolean;
	PrecipitationType: string;
	PrecipitationIntensity: string;
}
export type WeatherStateDailyForecasts = {
	Date: string;
	EpochDate: number;
	Temperature: WeatherStateDailyForecastsTemperature;
	Day: WeatherStateDailyForecastsDay;
	Night: WeatherStateDailyForecastsNight;
	Sources: string[];
	MobileLink: string;
	Link: string;
}

export type CityStateType = CityStateChild[];
export type CityStateChildRegion = {
	ID: string;
	LocalizedName: string;
	EnglishName: string;
}
export type CityStateChildCountry = {
	ID: string;
	LocalizedName: string;
	EnglishName: string;
}
export type CityStateChildAdministrativeArea = {
	ID: string;
	LocalizedName: string;
	EnglishName: string;
	Level: number;
	LocalizedType: string;
	EnglishType: string;
	CountryID: string;
}
export type CityStateChildTimeZone = {
	Code: string;
	Name: string;
	GmtOffset: number;
	IsDaylightSaving: boolean;
	NextOffsetChange?: any;
}
export type CityStateChildGeoPositionElevationMetric = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type CityStateChildGeoPositionElevationImperial = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type CityStateChildGeoPositionElevation = {
	Metric: CityStateChildGeoPositionElevationMetric;
	Imperial: CityStateChildGeoPositionElevationImperial;
}
export type CityStateChildGeoPosition = {
	Latitude: number;
	Longitude: number;
	Elevation: CityStateChildGeoPositionElevation;
}
export type CityStateChild = {
	Version: number;
	Key: string;
	Type: string;
	Rank: number;
	LocalizedName: string;
	EnglishName: string;
	PrimaryPostalCode: string;
	Region: CityStateChildRegion;
	Country: CityStateChildCountry;
	AdministrativeArea: CityStateChildAdministrativeArea;
	TimeZone: CityStateChildTimeZone;
	GeoPosition: CityStateChildGeoPosition;
	IsAlias: boolean;
	SupplementalAdminAreas: any[];
	DataSets: string[];
}