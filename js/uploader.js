$('#upload-button').fileinput({
    uploadUrl: 'https://localhost:3000/upload_files/',
    uploadAsync: true,
    showRemove: false,
    showCancel: false,
    showUploadedThumbs: false,
    browseOnZoneClick: true,
    previewZoomSettings: {
        image: {
            width: "auto",
            height: "100%"
        }
    },
    allowedFileTypes: ['image'],
    allowedFileExtensions: ['jpg'],
    uploadExtraData: {
        //TODO: do something smart here
        id: 100,
        value: '100 Details'
    },
    resizeImage: true,
    maxImageWidth: 1980,
    maxImageHeight: 1980,
    resizePreference: 'width',
    maxFileCount: 20,
    dropZoneEnabled: true,
});


$('.fileinput-upload-button').fileinput('upload').fileinput('disable');;
