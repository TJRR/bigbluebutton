import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import RecordingControls from './component';
import Service from './service';

const RecordingControlsContainer = props => <RecordingControls {...props} />;

export default withTracker(({ }) =>
  ({
    toggleRecording: Service.toggleRecording,
    recording: Service.recording(),
    disable: Service.disable(),
    record: Service.record(),
  }))(RecordingControlsContainer);
