import React from 'react';
import { marked } from 'marked';
import PropTypes from 'prop-types';
import styles from './markdown.less';

const Markdown = (props) => {
  const a = marked.parse(props.md);
  return (
    <>
      <div className={styles.markdownContent} dangerouslySetInnerHTML={{ __html: a }} />
    </>
  );
};

Markdown.propTypes = {
  md: PropTypes.string,
};

export default Markdown;
