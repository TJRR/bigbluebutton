import Auth from '/imports/ui/services/auth';
import Meetings from '/imports/api/meetings';
import { makeCall } from '/imports/ui/services/api';

const recording = () => {
  const m = Meetings.findOne({ meetingId: Auth.meetingID });
  const { recording, record } = m.recordProp;

  return record && recording;
};

const disable = () => {
  const m = Meetings.findOne({ meetingId: Auth.meetingID });
  const { recording, record, allowStartStopRecording } = m.recordProp;

  const { showRecordingButton } = Meteor.settings.public.app;

  return !record || !allowStartStopRecording;
}

const record = () => {
  const m = Meetings.findOne({ meetingId: Auth.meetingID });
  const { record } = m.recordProp;

  return record && Meteor.settings.public.app.showRecordingButton;
}

const toggleRecording = () => {
  makeCall('toggleRecording');
}

export default {
  toggleRecording,
  disable,
  recording,
  record,
};
