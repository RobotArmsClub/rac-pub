import React, {
  PropTypes,
} from 'react';

const Head = props => (
  <head>
    <meta charSet="utf-8" />
    <title dangerouslySetInnerHTML={{ __html: props.meta.title }} />
    <style dangerouslySetInnerHTML={{ __html: props.styles }} />
  </head>
);

Head.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  styles: PropTypes.object.isRequired,
};

export default Head;
