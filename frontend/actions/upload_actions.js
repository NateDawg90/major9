export const UPLOAD_TRACK = "UPLOAD_TRACK"
export const RECIEVE_UPLOAD = "RECEIVE_UPLOAD"
export const RECEIVE_UPLOAD_ERRORS = "RECEIVE_UPLOAD_ERRORS"

export const uploadTrack = (track) => ({
  type: UPLOAD_TRACK,
  track
})

export const receiveUpload = (upload) => ({
  type: RECEIVE_UPLOAD,
  upload
})

export const receiveUploadErrors = (errors) => ({
  type: RECEIVE_UPLOAD_ERRORS,
  errors
})
