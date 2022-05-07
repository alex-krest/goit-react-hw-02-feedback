import { Component } from 'react';
import PropsTypes from 'prop-types';
import s from './SectionTitle.module.css';

export default function SectionTitle({ title }) {
  return (
    <section className="Counter">
      <h2 className="Counter_name">{title}</h2>
    </section>
  );
}

SectionTitle.propsTypes = {
  title: PropsTypes.string.is.Requid,
};
