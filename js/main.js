import '../vendor/pristine/pristine.min.js';
import { renderPhotoList } from './rendering-miniatures.js';
import {openFormModal} from './open-upload-photos-form.js';
import {checkValidateForm} from './validation.js';
// import {changeScalePhoto} from './change-foto-scale.js';
renderPhotoList();
openFormModal();
checkValidateForm();
// changeScalePhoto();