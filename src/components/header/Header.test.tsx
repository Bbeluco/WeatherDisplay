import Header from "./Header"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer';


describe('< Header/>', () => {
    it('should render with correct text', () => {
        render(<Header />)
        expect(screen.getByText('Previsao do tempo')).toBeInTheDocument()
    })

    it('should test if render properly', () => {
        const component = TestRenderer.create(<Header />).toJSON()

        expect(component).toMatchSnapshot()
    })
})


export default {}