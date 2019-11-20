import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SideTitle from '../../SideTitle'

class Menu extends PureComponent {
  render() {
    const pages = ['Главная', 'Локации', 'Тарифы', 'О нас', 'События', 'Новости', 'Контакты', 'Условия'];
    const { isMenuOpen } = this.props;
    return (
      <nav className={`header__menu${isMenuOpen ? ' open' : ''}`}>
        <SideTitle title='menu' />
        <div className="container">
          <div className="row flex-row-reverse">
            <ul className="col-md-4">
              {pages.map((item, index) => (<li key={index}><a href="/">{item}</a></li>))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  isMenuOpen: state.app.isMenuOpen
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
