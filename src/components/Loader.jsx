import ReactLoading from 'react-loading';
import "./Loader.css"

const Loader = () => (
    <div className="loader">
        <ReactLoading type={'bubbles'} color={'rgb(8, 92, 22)'} height={160} width={160} />
    </div>
);
export default Loader;