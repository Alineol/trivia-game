import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveLocalStorage } from '../services/localStorage';
import logo from '../trivia.png';
import { login } from '../redux/actions';

class Login extends React.Component {
    state = {
      email: '',
      UserName: '',
    };

  validadeEmailAndUserName = () => {
    const { email, UserName } = this.state;
    if (email.length > 0 && UserName.length > 0) {
      return false;
    } return true;
  }

  handlePlayClick = async () => {
    const { dispatch } = this.props;
    try {
      const url = 'https://opentdb.com/api_token.php?command=request';
      const response = await fetch(url);
      const token = await response.json();
      console.log(token.token);
      saveLocalStorage('token', token.token);
      return dispatch(login(token.token));
    } catch (error) {
      return error;
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { history } = this.props;
    const { UserName, email } = this.state;
    return (
      <div className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1>Login</h1>
        <form>
          <div className="">
            <input
              className="email-input"
              type="email"
              placeholder="Digite seu email"
              data-testid="input-gravatar-email"
              required
              onChange={ this.handleChange }
              value={ email }
              name="email"
            />
          </div>
          <div className="">
            <input
              id="UserName"
              className="name-input"
              type="text"
              placeholder="Digite seu nome"
              data-testid="input-player-name"
              required
              onChange={ this.handleChange }
              value={ UserName }
              name="UserName"
            />
          </div>
          <div className="btnLogin">
            <button
              data-testid="btn-play"
              className="btn-play"
              type="button"
              onClick={ () => {
                this.handlePlayClick();
                history.push('/gamePage');
              } }
              disabled={ this.validadeEmailAndUserName() }
            >
              Play
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);