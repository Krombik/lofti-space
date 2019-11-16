import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { setLang } from '../../redux/app/actions'
import Select from 'react-select';
import Menu from './Menu'
import './style.scss';

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  onLangChange = selectedOption => {
    const { setLang } = this.props;
    setLang({ lang: selectedOption.value });
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
      <header className="header">
        <img src="" alt="" className="logo" />
        <div>
          <Select
            options={options}
            defaultValue={options[0]}
            isSearchable={false}
            styles={selectStyle}
            className="lang-select"
            hideSelectedOptions={true}
            isClearable={false}
            onChange={this.onLangChange}
          />
          <button id="burger"></button>
        </div>
        <Menu />
      </header>
    );
  }
}

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  setLang
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
