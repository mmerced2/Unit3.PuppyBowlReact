import Nav from './Nav'
import { PropTypes } from 'prop-types'
import SearchBar from './SearchBar'

const Layout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <Nav/>
       
            <div className='container mx-auto'>
                {children}
            </div>
        </div>
    )
}
Layout.propTypes = {
    children: PropTypes.node
}
export default Layout