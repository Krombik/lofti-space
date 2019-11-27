import React from 'react';

const Contact = props => {
  const { type, value, typeText } = props;
  let Container = 'a';
  let content = value;
  let prop = { href: null };
  switch (type) {
    case 'email':
      prop.href = `mailto:${value}`
      break;
    case 'tel':
      content = `+38${value[0]} (${value.slice(1, 3)}) ${value.slice(3, -4)} ${value.slice(-4)}`;
      prop.href = `tel:+38${value}`
      break;
    case 'adress':
      content = value.split(',').map((item, index) => (<li key={index}>{item.trim()}</li>));
      Container = 'ul';
      break;
    default:
      break;
  }
  return (
    <div className="contacts__contact">
      <span>{typeText}</span>
      <Container className="h4" {...prop}>{content}</Container>
    </div>
  );
}

export default Contact;
