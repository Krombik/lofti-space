import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './style.scss';

class Menu extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    const pages = ['Главная', 'Локации', 'Тарифы', 'О нас', 'События', 'Новости', 'Контакты', 'Условия'];
    return (
      <nav>
        <ul>
          {pages.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  // bla: PropTypes.string,
};

Menu.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
