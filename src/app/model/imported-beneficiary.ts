import { GlobalText } from '../../texts/global';

export class ImportedBeneficiary {
    static __classname__ = 'ImportedBeneficiary';

    /**
     * Beneficiary givenName
     * @type {string}
     */
    givenName: string;

    /**
     * Beneficiary familyName
     * @type {string}
     */
    familyName: string;

    constructor(instance?) {
        if (instance !== undefined) {
            this.givenName = instance.givenName;
            this.familyName = instance.familyName;
        }
    }


    public static getDisplayedName() {
        return GlobalText.TEXTS.model_criteria_beneficiary;
    }


    /**
    * return Households properties name displayed
    */
   static translator(): Object {
    return {
        givenName : GlobalText.TEXTS.model_beneficiaries_firstName,
        familyName : GlobalText.TEXTS.model_beneficiaries_familyName,
    };
}

public static formatArray(instance: any): ImportedBeneficiary[] {
    const beneficiaries: ImportedBeneficiary[] = [];
    // cconsole.log('before format : ', instance);
    instance.forEach(element => {
        beneficiaries.push(this.formatElement(element));
    });
    // console.log('after format : ', beneficiaries);
    return(beneficiaries);
}

public static formatElement(instance: any): ImportedBeneficiary {
    const beneficiary = new ImportedBeneficiary();

    beneficiary.givenName = instance.given_name;
    beneficiary.familyName = instance.family_name;

    return(beneficiary);
}

public static formatForApi(instance: any) {

    const beneficiary = {
        givenName : instance.givenName,
        familyName : instance.familyName
    };

    return(beneficiary);
}

    mapAllProperties(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            givenName : selfinstance.givenName,
            familyName : selfinstance.familyName,
        };
    }

    /**
    * return a Beneficiary after formatting its properties
    */
    getMapper(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            givenName : selfinstance.givenName,
            familyName : selfinstance.familyName,
        };
    }

    /**
    * return a Beneficiary after formatting its properties for the modal details
    */
    getMapperDetails(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            givenName : selfinstance.givenName,
            familyName : selfinstance.familyName,
        };
    }

    /**
    * return a DistributionData after formatting its properties for the modal update
    */
    getMapperUpdate(selfinstance): Object {
        if (!selfinstance) {
            return selfinstance;
        }

        return {
            givenName : selfinstance.givenName,
            familyName : selfinstance.familyName,
        };
    }

    /**
    * return the type of Beneficiary properties
    */
    getTypeProperties(selfinstance): Object {
        return {
            givenName : 'text',
            familyName : 'text',
        };
    }

    /**
    * return the type of Beneficiary properties
    */
    getModalTypeProperties(selfinstance): Object {
        return {
            givenName : 'text',
            familyName : 'text',
        };
    }



}