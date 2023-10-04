import { requestApiToCheckWeather } from "../requestApiToCheckWeather";
import axios from 'axios'

jest.mock('axios')
const mockedAxios = jest.mocked(axios.get)
describe('requestApiToCheckWeather', () => {

    it('should return expected object after request axios', async () => {
        const users = [{name: 'Bob'}];
        const expectedResp = {data: users};
        mockedAxios.mockResolvedValue(expectedResp)

        const resp = await requestApiToCheckWeather('Diadema')

        expect(resp).toEqual(expectedResp.data)
    })
})

