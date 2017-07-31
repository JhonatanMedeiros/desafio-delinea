import { Injectable } from '@angular/core';

import 'bootstrap'
import 'jquery'


@Injectable()
export class AppUtilService {

  constructor() {
  }



  public loader(type: string) {

    if (type === 'show') {
      $('#modalLoader').modal('show')
    }else {
      $('#modalLoader').modal('hide')
    }

  }

}
