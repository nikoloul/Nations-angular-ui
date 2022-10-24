import { LanguageType } from './LanguageType';

export interface CountryType {
    countryId: number;

    name: string;

    area: number;

    nationalDay: Date;

    countryCode2: string;

    countryCode3: string;

    regionId: number;

    languages : LanguageType[];

}