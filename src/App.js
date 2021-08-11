import './App.css';
import ModalComponent from './components/modal-component';
import ContainerComponent from './containers/container-component';

function App() {
  return (
    <div className="dark dark:bg-gray-800 p-3">
        <h2 className="p-3">Query Builder</h2>
        <ContainerComponent />
       {/* // <ModalComponent /> */}
    </div>
  );
}

export default App;
