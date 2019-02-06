import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { defineMessages, intlShape, injectIntl } from 'react-intl';
import Button from '/imports/ui/components/button/component';
import { styles } from './styles';

const intlMessages = defineMessages({
  startRecording: {
    id: 'app.actionsBar.actionsDropdown.startRecording',
    description: '',
  },
  stopRecording: {
    id: 'app.actionsBar.actionsDropdown.startRecording',
    description: '',
  },
});

const propTypes = {
  toggleRecording: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  recording: PropTypes.bool.isRequired,
  record: PropTypes.bool.isRequired,
};

const defaultProps = {
  disable: false,
  recording: false,
  record: false,
};

const RecordingControls = ({
  toggleRecording,
  disable,
  recording,
  record,
  intl,
}) => (

  record
  ?
  (<span className={styles.container}>
    <Button
      className={styles.button}
      onClick={toggleRecording}
      disabled={disable}
      hideLabel
      aria-label={recording ? intl.formatMessage(intlMessages.stopRecording) : intl.formatMessage(intlMessages.startRecording)}
      label={recording ? intl.formatMessage(intlMessages.stopRecording) : intl.formatMessage(intlMessages.startRecording)}
      color={recording ? 'danger' : 'primary'}
      icon="record"
      size="lg"
      circle
    />
  </span>)
  :
  null
);

RecordingControls.propTypes = propTypes;
RecordingControls.defaultProps = defaultProps;

export default injectIntl(RecordingControls);
