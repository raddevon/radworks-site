import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import styles from './form.sass';

class LeadForm extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <section className="lead-form-container">
        <ReactTypeformEmbed
          popup={true}
          autoOpen={false}
          url={'https://devoncampbell.typeform.com/to/UvqwnO'}
          hideHeaders={true}
          hideFooter={true}
          style={{ top: 100 }}
          ref={tf => (this.typeformEmbed = tf)}
        />

        <div className="lead-form-button-container">
          <h2>Ready?</h2>
          <button onClick={this.openForm}>Start building with us</button>
        </div>
      </section>
    );
  }
}

export default LeadForm;
