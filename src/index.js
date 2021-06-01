"use strict";

import {submitButton} from "./app/utils/getElements";
import handleSubmit from "./app";

window.addEventListener('load', () => submitButton.addEventListener('click', handleSubmit));