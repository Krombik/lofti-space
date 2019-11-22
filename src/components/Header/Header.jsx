import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setLang } from '../../redux/app/actions';
import { setMenu } from '../../redux/app/actions'
import Select from 'react-select';
import logo from './img/logo.png'
import './style.scss';

class Header extends PureComponent {

  onBurgerClick = () => {
    const { setMenu, isMenuOpen } = this.props;
    setMenu(!isMenuOpen);
  }

  render() {
    const options = [
      { value: 0, label: 'ru' },
      { value: 1, label: 'ua' },
      { value: 2, label: 'en' },
    ];
    const selectStyle = {
      control: _ => ({}),
      singleValue: _ => ({ cursor: 'pointer' }),
      option: _ => ({
        cursor: 'pointer',
        display: 'inline-block',
        margin: '0 auto 4px',
      }),
      valueContainer: style => ({ ...style, padding: '0' }),
      indicatorsContainer: _ => ({ display: 'none' }),
      menu: _ => ({
        top: '100%',
        marginTop: 8,
        position: 'absolute',
        width: '100%',
        zIndex: 1,
        boxSizing: 'border-box'
      }),
    }
    return (
      <div className="container">
        <div className="header__wrapper">
          <header className={`header${this.props.isMenuOpen ? ' open' : ''}`}>
            <img src={logo} alt="" className="logo" />
            <div>
              <Select
                options={options}
                defaultValue={options[0]}
                isSearchable={false}
                styles={selectStyle}
                className="lang-select"
                classNamePrefix="lang-select"
                hideSelectedOptions={true}
                isClearable={false}
                onChange={this.onLangChange}
              />
              <button className='burger' onClick={this.onBurgerClick}></button>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.app.isMenuOpen
});

const mapDispatchToProps = {
  setLang,
  setMenu
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
