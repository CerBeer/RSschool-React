import './App.css';
import { PureComponent } from 'react';
import Main from './components/main/Main';
import Header from './components/header/Header';

class App extends PureComponent {
    state: {searchInput: string};

    constructor() {
        super({});

        this.state = {searchInput: ''};
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.setState({searchInput: localStorage.getItem('searchInput') ?? ''})
    }

    handleClick(search: string) {
        if (this.state?.searchInput !== search) {
            this.setState(() => ({searchInput: search}))
            localStorage.setItem('searchInput', search);
        }
    }

    render() {
    return (
      <>
        <Header defaultValue={this.state.searchInput} handleClick={this.handleClick}/>
        <Main />
      </>
    );
  }
}

export default App;
