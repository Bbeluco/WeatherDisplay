import { createRequestParamsBasedOnCityName } from "../createRequestParamsBasedOnCityName";

describe('createRequestParamsBasedOnCityName', () => {
    it('should return expected object', () => {
        const object = createRequestParamsBasedOnCityName('Diadema')
        expect(object).toMatchObject({
            params: {
              key: process.env.REACT_APP_WEATHERAPI_KEY,
              q: 'Diadema',
              days: 6,
              aqi: 'no',
              alerts: 'no',
              lang: 'pt'
            }
          })
    })
})