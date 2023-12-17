import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKurs2ВидДокLForm from './forms/i-i-s-kurs2-вид-док-l';
import IISKurs2ВыгрФайлаLForm from './forms/i-i-s-kurs2-выгр-файла-l';
import IISKurs2ЕдиИзмLForm from './forms/i-i-s-kurs2-еди-изм-l';
import IISKurs2ЗагрФайлаLForm from './forms/i-i-s-kurs2-загр-файла-l';
import IISKurs2КонверФайлыLForm from './forms/i-i-s-kurs2-конвер-файлы-l';
import IISKurs2КонвертLForm from './forms/i-i-s-kurs2-конверт-l';
import IISKurs2РасширениеLForm from './forms/i-i-s-kurs2-расширение-l';
import IISKurs2ЭксФайлыLForm from './forms/i-i-s-kurs2-экс-файлы-l';
import IISKurs2ВидДокEForm from './forms/i-i-s-kurs2-вид-док-e';
import IISKurs2ВыгрФайлаEForm from './forms/i-i-s-kurs2-выгр-файла-e';
import IISKurs2ЕдиИзмEForm from './forms/i-i-s-kurs2-еди-изм-e';
import IISKurs2ЗагрФайлаEForm from './forms/i-i-s-kurs2-загр-файла-e';
import IISKurs2КонверФайлыEForm from './forms/i-i-s-kurs2-конвер-файлы-e';
import IISKurs2КонвертEForm from './forms/i-i-s-kurs2-конверт-e';
import IISKurs2РасширениеEForm from './forms/i-i-s-kurs2-расширение-e';
import IISKurs2ЭксФайлыEForm from './forms/i-i-s-kurs2-экс-файлы-e';
import IISKurs2ВидДокModel from './models/i-i-s-kurs2-вид-док';
import IISKurs2ВыгрФайлаModel from './models/i-i-s-kurs2-выгр-файла';
import IISKurs2ЕдиИзмModel from './models/i-i-s-kurs2-еди-изм';
import IISKurs2ЗагрФайлаModel from './models/i-i-s-kurs2-загр-файла';
import IISKurs2КонверФайлыModel from './models/i-i-s-kurs2-конвер-файлы';
import IISKurs2КонвертModel from './models/i-i-s-kurs2-конверт';
import IISKurs2РасширениеModel from './models/i-i-s-kurs2-расширение';
import IISKurs2ЭксФайлыModel from './models/i-i-s-kurs2-экс-файлы';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kurs2-вид-док': IISKurs2ВидДокModel,
    'i-i-s-kurs2-выгр-файла': IISKurs2ВыгрФайлаModel,
    'i-i-s-kurs2-еди-изм': IISKurs2ЕдиИзмModel,
    'i-i-s-kurs2-загр-файла': IISKurs2ЗагрФайлаModel,
    'i-i-s-kurs2-конвер-файлы': IISKurs2КонверФайлыModel,
    'i-i-s-kurs2-конверт': IISKurs2КонвертModel,
    'i-i-s-kurs2-расширение': IISKurs2РасширениеModel,
    'i-i-s-kurs2-экс-файлы': IISKurs2ЭксФайлыModel
  },

  'application-name': 'Конвертирование файла',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Конвертирование файла',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Конвертирование файла',
          title: 'Конвертирование файла'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'конвертация-файла': {
          caption: 'Конвертация файла',
          title: 'Конвертация файла',
          'i-i-s-kurs2-загр-файла-l': {
            caption: 'Загрузка файла',
            title: ''
          },
          'i-i-s-kurs2-выгр-файла-l': {
            caption: 'Выгрузка файла',
            title: ''
          },
          'i-i-s-kurs2-экс-файлы-l': {
            caption: 'Эксель файлы',
            title: ''
          },
          'i-i-s-kurs2-конвер-файлы-l': {
            caption: 'Конвертированные файлы',
            title: ''
          },
          'i-i-s-kurs2-конверт-l': {
            caption: 'Конвертация',
            title: ''
          },
          'i-i-s-kurs2-еди-изм-l': {
            caption: 'Единицы измерения',
            title: ''
          },
          'i-i-s-kurs2-расширение-l': {
            caption: 'Расширение',
            title: ''
          },
          'i-i-s-kurs2-вид-док-l': {
            caption: 'Вид документа',
            title: ''
          }
        },
        справочники: {
          caption: 'Справочники',
          title: 'Справочники',
          'i-i-s-kurs2-расширение-l': {
            caption: 'РасширениеL',
            title: 'Расширение'
          },
          'i-i-s-kurs2-еди-изм-l': {
            caption: 'ЕдиИзмL',
            title: 'Еди изм'
          },
          'i-i-s-kurs2-вид-док-l': {
            caption: 'ВидДокL',
            title: 'Вид док'
          }
        },
        kurs2: {
          caption: 'Kurs2',
          title: 'Kurs2',
          'i-i-s-kurs2-загр-файла-l': {
            caption: 'Загр файла',
            title: ''
          },
          'i-i-s-kurs2-еди-изм-l': {
            caption: 'Еди изм',
            title: ''
          },
          'i-i-s-kurs2-выгр-файла-l': {
            caption: 'Выгр файла',
            title: ''
          },
          'i-i-s-kurs2-экс-файлы-l': {
            caption: 'Экс файлы',
            title: ''
          },
          'i-i-s-kurs2-конвер-файлы-l': {
            caption: 'Конвер файлы',
            title: ''
          },
          'i-i-s-kurs2-конверт-l': {
            caption: 'Конверт',
            title: ''
          },
          'i-i-s-kurs2-расширение-l': {
            caption: 'Расширение',
            title: ''
          },
          'i-i-s-kurs2-вид-док-l': {
            caption: 'Вид док',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kurs2-вид-док-l': IISKurs2ВидДокLForm,
    'i-i-s-kurs2-выгр-файла-l': IISKurs2ВыгрФайлаLForm,
    'i-i-s-kurs2-еди-изм-l': IISKurs2ЕдиИзмLForm,
    'i-i-s-kurs2-загр-файла-l': IISKurs2ЗагрФайлаLForm,
    'i-i-s-kurs2-конвер-файлы-l': IISKurs2КонверФайлыLForm,
    'i-i-s-kurs2-конверт-l': IISKurs2КонвертLForm,
    'i-i-s-kurs2-расширение-l': IISKurs2РасширениеLForm,
    'i-i-s-kurs2-экс-файлы-l': IISKurs2ЭксФайлыLForm,
    'i-i-s-kurs2-вид-док-e': IISKurs2ВидДокEForm,
    'i-i-s-kurs2-выгр-файла-e': IISKurs2ВыгрФайлаEForm,
    'i-i-s-kurs2-еди-изм-e': IISKurs2ЕдиИзмEForm,
    'i-i-s-kurs2-загр-файла-e': IISKurs2ЗагрФайлаEForm,
    'i-i-s-kurs2-конвер-файлы-e': IISKurs2КонверФайлыEForm,
    'i-i-s-kurs2-конверт-e': IISKurs2КонвертEForm,
    'i-i-s-kurs2-расширение-e': IISKurs2РасширениеEForm,
    'i-i-s-kurs2-экс-файлы-e': IISKurs2ЭксФайлыEForm
  },

});

export default translations;
