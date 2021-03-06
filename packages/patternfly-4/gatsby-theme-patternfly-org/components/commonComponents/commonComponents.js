import React from 'react';
import { NoPrefixLink } from '../noPrefixLink/noPrefixLink';
import { AutoLinkHeader } from '../autoLinkHeader/autoLinkHeader';
import { Example } from '../example/example';
import './commonComponents.css';

// These components replace how all elements in MDX are rendered
export const commonComponents = {
  inlineCode: Example,
  pre: React.Fragment,
  p: (props) => <p className="ws-p" {...props} />,
  ul: (props) => <ul className="ws-ul" {...props} />,
  ul: (props) => <ul className="ws-ul" {...props} />,
  a: NoPrefixLink,
  // Matching up with commonComponents.css pf-c-content
  ul: (props) => <ul className="ws-ul" {...props} />,
  ol: (props) => <ol className="ws-ol" {...props} />,
  li: (props) => <li className="ws-li" {...props} />,
  dl: (props) => <dl className="ws-dl" {...props} />,
  blockquote: (props) => <blockquote className="ws-blockquote" {...props} />,
  small: (props) => <small className="ws-small" {...props} />,
  hr: (props) => <hr className="ws-hr" {...props} />,
  dt: (props) => <dt className="ws-dt" {...props} />,
  code: (props) => <code className="ws-code" {...props} />,
  table: (props) => <table className="ws-table" {...props} />,
  // th: (props) => <th className="ws-th" {...props} />,
  // tr: (props) => <tr className="ws-tr" {...props} />,
  // tbody: (props) => <tbody className="ws-tbody" {...props} />,
  // thead: (props) => <thead className="ws-thead" {...props} />,
  // td: (props) => <td className="ws-td" {...props} />,
};
for (let i = 1; i <= 6; i++) {
  commonComponents[`h${i}`] = props => <AutoLinkHeader size={`h${i}`} className={`ws-title ws-h${i}`} {...props} />;
}
