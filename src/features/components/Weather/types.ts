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

export type WeatherFullState = {
	Headline: WeatherFullStateHeadline;
	DailyForecasts: WeatherFullStateDailyForecasts[];
}
export type WeatherFullStateHeadline = {
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
export type WeatherFullStateDailyForecastsSun = {
	Rise: string;
	EpochRise: number;
	Set: string;
	EpochSet: number;
}
export type WeatherFullStateDailyForecastsMoon = {
	Rise: string;
	EpochRise: number;
	Set: string;
	EpochSet: number;
	Phase: string;
	Age: number;
}
export type WeatherFullStateDailyForecastsTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsTemperature = {
	Minimum: WeatherFullStateDailyForecastsTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsTemperatureMaximum;
}
export type WeatherFullStateDailyForecastsRealFeelTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
	Phrase: string;
}
export type WeatherFullStateDailyForecastsRealFeelTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
	Phrase: string;
}
export type WeatherFullStateDailyForecastsRealFeelTemperature = {
	Minimum: WeatherFullStateDailyForecastsRealFeelTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsRealFeelTemperatureMaximum;
}
export type WeatherFullStateDailyForecastsRealFeelTemperatureShadeMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
	Phrase: string;
}
export type WeatherFullStateDailyForecastsRealFeelTemperatureShadeMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
	Phrase: string;
}
export type WeatherFullStateDailyForecastsRealFeelTemperatureShade = {
	Minimum: WeatherFullStateDailyForecastsRealFeelTemperatureShadeMinimum;
	Maximum: WeatherFullStateDailyForecastsRealFeelTemperatureShadeMaximum;
}
export type WeatherFullStateDailyForecastsDegreeDaySummaryHeating = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDegreeDaySummaryCooling = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDegreeDaySummary = {
	Heating: WeatherFullStateDailyForecastsDegreeDaySummaryHeating;
	Cooling: WeatherFullStateDailyForecastsDegreeDaySummaryCooling;
}
export type WeatherFullStateDailyForecastsAirAndPollen = {
	Name: string;
	Value: number;
	Category: string;
	CategoryValue: number;
	Type: string;
}
export type WeatherFullStateDailyForecastsDayWindSpeed = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWindDirection = {
	Degrees: number;
	Localized: string;
	English: string;
}
export type WeatherFullStateDailyForecastsDayWind = {
	Speed: WeatherFullStateDailyForecastsDayWindSpeed;
	Direction: WeatherFullStateDailyForecastsDayWindDirection;
}
export type WeatherFullStateDailyForecastsDayWindGustSpeed = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWindGustDirection = {
	Degrees: number;
	Localized: string;
	English: string;
}
export type WeatherFullStateDailyForecastsDayWindGust = {
	Speed: WeatherFullStateDailyForecastsDayWindGustSpeed;
	Direction: WeatherFullStateDailyForecastsDayWindGustDirection;
}
export type WeatherFullStateDailyForecastsDayTotalLiquid = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayRain = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDaySnow = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayIce = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayEvapotranspiration = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDaySolarIrradiance = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayRelativeHumidity = {
	Minimum: number;
	Maximum: number;
	Average: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbTemperatureAverage = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbTemperature = {
	Minimum: WeatherFullStateDailyForecastsDayWetBulbTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsDayWetBulbTemperatureMaximum;
	Average: WeatherFullStateDailyForecastsDayWetBulbTemperatureAverage;
}
export type WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureAverage = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsDayWetBulbGlobeTemperature = {
	Minimum: WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureMaximum;
	Average: WeatherFullStateDailyForecastsDayWetBulbGlobeTemperatureAverage;
}
export type WeatherFullStateDailyForecastsDay = {
	Icon: number;
	IconPhrase: string;
	HasPrecipitation: boolean;
	ShortPhrase: string;
	LongPhrase: string;
	PrecipitationProbability: number;
	ThunderstormProbability: number;
	RainProbability: number;
	SnowProbability: number;
	IceProbability: number;
	Wind: WeatherFullStateDailyForecastsDayWind;
	WindGust: WeatherFullStateDailyForecastsDayWindGust;
	TotalLiquid: WeatherFullStateDailyForecastsDayTotalLiquid;
	Rain: WeatherFullStateDailyForecastsDayRain;
	Snow: WeatherFullStateDailyForecastsDaySnow;
	Ice: WeatherFullStateDailyForecastsDayIce;
	HoursOfPrecipitation: number;
	HoursOfRain: number;
	HoursOfSnow: number;
	HoursOfIce: number;
	CloudCover: number;
	Evapotranspiration: WeatherFullStateDailyForecastsDayEvapotranspiration;
	SolarIrradiance: WeatherFullStateDailyForecastsDaySolarIrradiance;
	RelativeHumidity: WeatherFullStateDailyForecastsDayRelativeHumidity;
	WetBulbTemperature: WeatherFullStateDailyForecastsDayWetBulbTemperature;
	WetBulbGlobeTemperature: WeatherFullStateDailyForecastsDayWetBulbGlobeTemperature;
}
export type WeatherFullStateDailyForecastsNightWindSpeed = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWindDirection = {
	Degrees: number;
	Localized: string;
	English: string;
}
export type WeatherFullStateDailyForecastsNightWind = {
	Speed: WeatherFullStateDailyForecastsNightWindSpeed;
	Direction: WeatherFullStateDailyForecastsNightWindDirection;
}
export type WeatherFullStateDailyForecastsNightWindGustSpeed = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWindGustDirection = {
	Degrees: number;
	Localized: string;
	English: string;
}
export type WeatherFullStateDailyForecastsNightWindGust = {
	Speed: WeatherFullStateDailyForecastsNightWindGustSpeed;
	Direction: WeatherFullStateDailyForecastsNightWindGustDirection;
}
export type WeatherFullStateDailyForecastsNightTotalLiquid = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightRain = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightSnow = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightIce = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightEvapotranspiration = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightSolarIrradiance = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightRelativeHumidity = {
	Minimum: number;
	Maximum: number;
	Average: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbTemperatureAverage = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbTemperature = {
	Minimum: WeatherFullStateDailyForecastsNightWetBulbTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsNightWetBulbTemperatureMaximum;
	Average: WeatherFullStateDailyForecastsNightWetBulbTemperatureAverage;
}
export type WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureMinimum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureMaximum = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureAverage = {
	Value: number;
	Unit: string;
	UnitType: number;
}
export type WeatherFullStateDailyForecastsNightWetBulbGlobeTemperature = {
	Minimum: WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureMinimum;
	Maximum: WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureMaximum;
	Average: WeatherFullStateDailyForecastsNightWetBulbGlobeTemperatureAverage;
}
export type WeatherFullStateDailyForecastsNight = {
	Icon: number;
	IconPhrase: string;
	HasPrecipitation: boolean;
	ShortPhrase: string;
	LongPhrase: string;
	PrecipitationProbability: number;
	ThunderstormProbability: number;
	RainProbability: number;
	SnowProbability: number;
	IceProbability: number;
	Wind: WeatherFullStateDailyForecastsNightWind;
	WindGust: WeatherFullStateDailyForecastsNightWindGust;
	TotalLiquid: WeatherFullStateDailyForecastsNightTotalLiquid;
	Rain: WeatherFullStateDailyForecastsNightRain;
	Snow: WeatherFullStateDailyForecastsNightSnow;
	Ice: WeatherFullStateDailyForecastsNightIce;
	HoursOfPrecipitation: number;
	HoursOfRain: number;
	HoursOfSnow: number;
	HoursOfIce: number;
	CloudCover: number;
	Evapotranspiration: WeatherFullStateDailyForecastsNightEvapotranspiration;
	SolarIrradiance: WeatherFullStateDailyForecastsNightSolarIrradiance;
	RelativeHumidity: WeatherFullStateDailyForecastsNightRelativeHumidity;
	WetBulbTemperature: WeatherFullStateDailyForecastsNightWetBulbTemperature;
	WetBulbGlobeTemperature: WeatherFullStateDailyForecastsNightWetBulbGlobeTemperature;
}
export type WeatherFullStateDailyForecasts = {
	Date: string;
	EpochDate: number;
	Sun: WeatherFullStateDailyForecastsSun;
	Moon: WeatherFullStateDailyForecastsMoon;
	Temperature: WeatherFullStateDailyForecastsTemperature;
	RealFeelTemperature: WeatherFullStateDailyForecastsRealFeelTemperature;
	RealFeelTemperatureShade: WeatherFullStateDailyForecastsRealFeelTemperatureShade;
	HoursOfSun: number;
	DegreeDaySummary: WeatherFullStateDailyForecastsDegreeDaySummary;
	AirAndPollen: WeatherFullStateDailyForecastsAirAndPollen[];
	Day: WeatherFullStateDailyForecastsDay;
	Night: WeatherFullStateDailyForecastsNight;
	Sources: string[];
	MobileLink: string;
	Link: string;
}